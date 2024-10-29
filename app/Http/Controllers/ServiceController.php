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
        $data = DB::table('tbl_user')->join('services', 'services.id', 'tbl_user.user_id')->get();
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

        return response()->json(['message' => 'Service created successfully', 'service' => $service], 201);
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        //
    }
}
