<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = \DB::table('tbl_user')->join('services', 'services.customer_id', 'tbl_user.user_id')
            ->join('users', 'services.assigned_to', '=', 'users.id')
            ->select('services.service_code', 'services.service_date', 'users.name', 'services.id', 'services.status')->get();
        // dd($data);
        return Inertia::render('services/index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $employees = Employee::join('users', 'users.id', '=', 'employees.user_id')->get();
        $customers = DB::table('tbl_user')->get();
        $products = DB::table('product')->join('products_category', 'products_category.id', '=', 'product.category_id')->get();
        // dd($customers);

        $dateCode = Carbon::now()->format('ymd');

        // Get the last service record
        $lastService = Service::latest()->first();

        // Determine the next ID (increment by 1 from the last record, or start at 1 if none exist)
        $nextId = $lastService ? $lastService->id + 1 : 1;

        // Format the service code with prefix "SV", date code, and next ID
        $serviceCode = 'SV' . $dateCode . str_pad($nextId, 3, '0', STR_PAD_LEFT);
        return Inertia::render('services/create', compact('employees', 'customers', 'products', 'serviceCode'));
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        // dd($request->all());


        // Create the service record
        $service = Service::create($request->all());
        // dd($service);

        // Add each AMC detail related to the service
        foreach ($request['amc_details'] as $amcDetail) {
            $service->amcDetails()->create($amcDetail);
        }

        return redirect('services');
    }


    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        // Eager load amcDetails
        $service->load('amcDetails');

        $employees = Employee::join('users', 'users.id', '=', 'employees.user_id')->get();
        $customers = \DB::table('tbl_user')->get();
        $products = \DB::table('product')->join('products_category', 'products_category.id', '=', 'product.category_id')->get();

        // Get the last service record to generate the new service code
        $lastService = Service::latest()->first();
        $nextId = $lastService ? $lastService->id + 1 : 1;
        $dateCode = Carbon::now()->format('ymd');
        $serviceCode = 'SV' . $dateCode . str_pad($nextId, 3, '0', STR_PAD_LEFT);

        $amcDetails = $service->amcDetails->toArray(); // Convert to array if needed

        return Inertia::render('services/create', compact('employees', 'customers', 'products', 'serviceCode', 'amcDetails', 'service'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'service_code' => 'required|string|max:255',
            'service_date' => 'required|date_format:Y-m-d',
            'customer_id' => 'required|integer',
            'assigned_to' => 'required|integer',
            'status' => 'required|string|in:open,closed',
            'service_charge' => 'required|string|in:no-charge,charge',
            'service_details' => 'required|string',
            'amc_details.*.product' => 'required|string',
            'amc_details.*.note' => 'nullable|string',
        ]);

        // Update the service record
        $service->update($validatedData);

        // Update each AMC detail related to the service
        foreach ($request['amc_details'] as $amcDetail) {
            if (isset($amcDetail['id'])) {
                // Prepare data for update, ensuring created_at is not included
                $updateData = $amcDetail;
                unset($updateData['created_at']); // Ensure created_at is not updated
                $updateData['updated_at'] = now(); // Update updated_at to current time

                // Perform the update
                $updatedRows = $service->amcDetails()->where('id', $amcDetail['id'])->update($updateData);

                // Log the update status
                if ($updatedRows === 0) {
                    \Log::info('No rows were updated for AMC detail ID: ' . $amcDetail['id']);
                } else {
                    \Log::info('AMC detail ID: ' . $amcDetail['id'] . ' updated successfully.');
                }
            } else {
                // For creating new AMC details
                $service->amcDetails()->create($amcDetail);
            }
        }

        return redirect('services');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        // Retrieve associated amcDetails and convert to array (if needed)
        $amcDetails = $service->amcDetails->toArray();

        // Delete the associated amcDetails
        foreach ($amcDetails as $amcDetail) {
            $service->amcDetails()->where('id', $amcDetail['id'])->delete();
        }

        // Delete the service record
        $service->delete();

        // Return a response indicating success
        return back();
    }
}
