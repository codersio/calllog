<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class CallAllocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
        $data = DB::table('spare_part')
    ->join('products_category', 'spare_part.category_id', '=', 'products_category.id')
    ->join('service_centers', 'spare_part.service_partner_id', '=', 'service_centers.id')
    ->select('spare_part.*', 'products_category.name as category_name','service_centers.name as service_partner') // Select all product columns and the category name
    ->get();
        return Inertia::render('callallocation/index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = DB::table('products_category')->get();
        $service_centers = DB::table('service_centers')->get();
        // $data="rsm÷";
        return Inertia::render('sparepart/create',compact('categories','service_centers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
       
        // Insert the validated data into the database
        DB::table('spare_part')->insert([
            'call_allocation' => $request->call_allocation,
            'customer_name' => $request->customer_name,
            'address' => $request->address,
            'phone'=>$request->phone_number,
            'service_partner_id' => $request->service_partner,
            'spare_part_type' => $request->spare_part_type,
            'category_id' => $request->product_name,
            'qty'=>$request->qty,
            'model'=>$request->model,
            'spare_part_ser_no'=>$request->spare_part_Serial,
            'invoice_no'=>$request->invoice,
            'dispatch_module'=>$request->dispatch_model,
            'dispatch_type'=>$request->dispatch_type,
            'date'=>$request->date,
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
            ->join('products_category', 'spare_part.category_id', '=', 'products_category.id')
            ->join('service_centers', 'spare_part.service_partner_id', '=', 'service_centers.id')
            ->select('spare_part.*', 'products_category.name as category_name', 'service_centers.name as service_partner')
            ->where('spare_part.id', $id) // Add where clause for id
            ->first();
            $categories = DB::table('products_category')->get();
        $service_centers = DB::table('service_centers')->get();

        return Inertia::render('sparepart/edit', compact('category','categories','service_centers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        
    
        DB::table('spare_part')
        ->where('id',$id)
        ->update([
            'call_allocation' => $request->call_allocation,
            'customer_name' => $request->customer_name,
            'address' => $request->address,
            'phone'=>$request->phone_number,
            'service_partner_id' => $request->service_partner,
            'spare_part_type' => $request->spare_part_type,
            'category_id' => $request->product_name,
            'qty'=>$request->qty,
            'model'=>$request->model,
            'spare_part_ser_no'=>$request->spare_part_Serial,
            'invoice_no'=>$request->invoice,
            'dispatch_module'=>$request->dispatch_model,
            'dispatch_type'=>$request->dispatch_type,
            'date'=>$request->date,
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
