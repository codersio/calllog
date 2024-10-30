<?php

namespace App\Http\Controllers;

use App\Models\Amc;
use App\Models\Sale;
use Inertia\Inertia;
use App\Models\Employee;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AmcController extends Controller
{
    public function index()
    {
        $amcs = Amc::join('tbl_user', 'tbl_user.user_id', '=', 'amcs.customer_id')->join('users', 'users.id', '=', 'amcs.assigned_to')->select('amcs.amc_no', 'amcs.status', 'amcs.date', 'amcs.interval', 'amcs.no_of_service', 'amcs.id', 'tbl_user.first_name', 'tbl_user.middle_name', 'tbl_user.last_name', 'users.name as assigned_to')->get();
        return Inertia::render('amc/index', [
            'amcs' => $amcs
        ]);
    }

    public function create()
    {
        $customers = DB::table('tbl_user')->get();
        $products = DB::table('product')->join('products_category', 'products_category.id', '=', 'product.category_id')->get();
        $employees = Employee::join('users', 'users.id', '=', 'employees.user_id')->get();
        return Inertia::render('amc/create', [
            'customers' => $customers,
            'products' => $products,
            'employees' => $employees
        ]);
    }

    public function store(Request $request)
    {
        // \dd($request->all());
        // Validate the request data
        $validatedData = $request->validate([
            'amc_no' => 'required',
            'contact_person' => 'required',
            'date' => 'required',
            'customer_id' => 'required',
            'mobile_no' => 'required',
            'assigned_to' => 'required',
            'details' => 'required',
            'email' => 'required',
            'interval' => 'required',
            'attachments' => 'required',
            'no_of_service' => 'required',
            'billing_address' => 'required',
            'amc_details' => 'required',
        ]);

        // Handle file upload if an attachment is provided
        if ($request->hasFile('attachments')) {
            $file = $request->file('attachments');
            $fileName = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $destinationPath = public_path('attachments');

            // Move the file to the public/attachments directory
            $file->move($destinationPath, $fileName);

            // Store the file path in the validated data
            $validatedData['attachments'] = 'attachments/' . $fileName;
        }

        // Create the new AMC record
        $amc = Amc::create($validatedData);

        // Save the AMC details as a related record if needed
        // foreach ($request->amc_details as $detail) {
        //     $amc->amcDetails()->create($detail);
        // }

        // Redirect to the AMC listing page with a success message
        return \redirect()->to(\route('amc.index'));
    }

    public function edit($id)
    {
        $amc = Amc::findOrFail($id);
        $customers = DB::table('tbl_user')->get();
        $products = DB::table('product')->join('products_category', 'products_category.id', '=', 'product.category_id')->get();
        $employees = Employee::join('users', 'users.id', '=', 'employees.user_id')->get();
        return Inertia::render('amc/edit', [
            'customers' => $customers,
            'products' => $products,
            'employees' => $employees,
            'amc' => $amc
        ]);
    }

    public function update($id, Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'amc_no' => 'required',
            'contact_person' => 'required',
            'date' => 'required',
            'customer_id' => 'required',
            'mobile_no' => 'required',
            'assigned_to' => 'required',
            'details' => 'required',
            'email' => 'required|email',
            'interval' => 'required',
            'attachments' => 'nullable|file', // Attachments are optional during update
            'no_of_service' => 'required',
            'billing_address' => 'required',
            'amc_details' => 'required|array',
        ]);

        // Find the existing AMC record
        $amc = Amc::findOrFail($id);

        // Handle file upload if a new attachment is provided
        if ($request->hasFile('attachments')) {
            // Delete the old attachment if it exists (optional)
            if ($amc->attachments) {
                $oldFilePath = public_path($amc->attachments);
                if (file_exists($oldFilePath)) {
                    unlink($oldFilePath); // Remove the old file
                }
            }

            $file = $request->file('attachments');
            $fileName = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $destinationPath = public_path('attachments');

            // Move the file to the public/attachments directory
            $file->move($destinationPath, $fileName);

            // Store the new file path in the validated data
            $validatedData['attachments'] = 'attachments/' . $fileName;
        } else {
            // If no new attachment, keep the existing file path
            $validatedData['attachments'] = $amc->attachments;
        }

        // Update the AMC record with the validated data
        $amc->update($validatedData);

        // Optionally update the AMC details if needed
        // Note: Depending on your logic, you may want to handle amc_details updates here

        // Redirect to the AMC listing page with a success message
        return redirect()->route('amc.index');
    }

    public function destroy($id) {
        Amc::findOrFail($id)->delete();
        return redirect()->route('amc.index');
    }
}