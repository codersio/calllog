<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class SparePartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
        $data = DB::table('spare_part')
    ->join('tbl_product', 'spare_part.category_id', '=', 'tbl_product.product_id')
    ->join('service_centers', 'spare_part.service_partner_id', '=', 'service_centers.id')
    ->select('spare_part.*', 'tbl_product.item_name as category_name','service_centers.name as service_partner') // Select all product columns and the category name
    ->get();
        return Inertia::render('sparepart/index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = DB::table('tbl_product')->get();
        $service_centers = DB::table('service_centers')->get();
   
        return Inertia::render('sparepart/create',compact('categories','service_centers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $validatedData = $request->validate([
            'call_allocation' => 'required',
            'customer_name' => 'required',
            'address' => 'required',
           'phone_number' => 'required',  // You can customize phone validation as per your need
            'service_partner' => 'required',
            'spare_part_type' => 'required',
            'product_name' => 'required',  // Assuming product name refers to a category
            'qty' => 'required',
            'model' => 'required',
            'spare_part_Serial' => 'required',
            'invoice' => 'required',
            'dispatch_model' => 'required',
            'dispatch_type' => 'required',
            'date' => 'required',
        ]);
    
        // Insert the validated data into the database
        DB::table('spare_part')->insert([
            'call_allocation' => $validatedData['call_allocation'],
            'customer_name' => $validatedData['customer_name'],
            'address' => $validatedData['address'],
            'phone' => $validatedData['phone_number'],
            'service_partner_id' => $validatedData['service_partner'],
            'spare_part_type' => $validatedData['spare_part_type'],
            'category_id' => $validatedData['product_name'],
            'qty' => $validatedData['qty'],
            'model' => $validatedData['model'],
            'spare_part_ser_no' => $validatedData['spare_part_Serial'],
            'invoice_no' => $validatedData['invoice'],
            'dispatch_module' => $validatedData['dispatch_model'],
            'dispatch_type' => $validatedData['dispatch_type'],
            'date' => $validatedData['date'],
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        // Redirect with a success message
        return redirect()->route('spare-part.index');
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {

        $category = DB::table('spare_part')
            ->join('tbl_product', 'spare_part.category_id', '=', 'tbl_product.product_id')
            ->join('service_centers', 'spare_part.service_partner_id', '=', 'service_centers.id')
            ->select('spare_part.*', 'tbl_product.item_name as category_name', 'service_centers.name as service_partner')
            ->where('spare_part.id', $id) // Add where clause for id
            ->first();
            $categories = DB::table('tbl_product')->get();
        $service_centers = DB::table('service_centers')->get();

        return Inertia::render('sparepart/edit', compact('category','categories','service_centers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        
    
         // Validate the request data
    $validatedData = $request->validate([
        'call_allocation' => 'required|string|max:255',
        'customer_name' => 'required|string|max:255',
        'address' => 'required|string|max:255',
        'phone_number' => 'required|digits:10',  // Adjust phone validation as needed
        'service_partner' => 'required|integer',  // Ensure the service partner exists
        'spare_part_type' => 'required|string|max:255',
        'product_name' => 'required|integer',  // Ensure the product name refers to a category
        'qty' => 'required|integer|min:1',
        'model' => 'required|string|max:255',
        'spare_part_Serial' => 'required',
        'invoice' => 'required|string|max:255',
        'dispatch_model' => 'required|string|max:255',
        'dispatch_type' => 'required|string|max:255',
        'date' => 'required|date',
    ]);

    // Update the existing record in the database
    DB::table('spare_part')
        ->where('id', $id)
        ->update([
            'call_allocation' => $validatedData['call_allocation'],
            'customer_name' => $validatedData['customer_name'],
            'address' => $validatedData['address'],
            'phone' => $validatedData['phone_number'],
            'service_partner_id' => $validatedData['service_partner'],
            'spare_part_type' => $validatedData['spare_part_type'],
            'category_id' => $validatedData['product_name'],
            'qty' => $validatedData['qty'],
            'model' => $validatedData['model'],
            'spare_part_ser_no' => $validatedData['spare_part_Serial'],
            'invoice_no' => $validatedData['invoice'],
            'dispatch_module' => $validatedData['dispatch_model'],
            'dispatch_type' => $validatedData['dispatch_type'],
            'date' => $validatedData['date'],
            'updated_at' => now(),
        ]);

        // Redirect with a success message
        return redirect()->route('spare-part.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        DB::table('spare_part')->where('id', $id)->delete();
        return redirect()->route('spare-part.index');
    }

    
}
