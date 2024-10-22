<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
        $data = DB::table('product')
    ->join('products_category', 'product.category_id', '=', 'products_category.id')
    ->select('product.*', 'products_category.name as category_name') // Select all product columns and the category name
    ->get();
        return Inertia::render('Product/product', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = DB::table('products_category')->get();
        // $data="rsm÷";
        return Inertia::render('Product/product_create',compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        // $request->validate([
        //     'cateogry_id' => 'required', // 'unique product category name
        // ]);

        // Insert the validated data into the database
        DB::table('product')->insert([
            'category_id' => $request->category_id,
            'model' => $request->model,
            'source' => $request->source,
            'qty' => $request->qty,
            'purchase_date' => $request->purchase,
            'invoice_no' => $request->invoice,
            'bardcodeno'=>1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);


        // Redirect with a success message
        return redirect()->route('products.index');
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {

        $product = DB::table('product')
        ->join('products_category', 'product.category_id', '=', 'products_category.id')
        ->select('product.*', 'products_category.name as category_name') // Select all product columns and the category name
        ->where('product.id', $id) // Replace $productId with the actual product ID variable
        ->first(); // Use first() to get a single result
    
            $categories = DB::table('products_category')->get();

        return Inertia::render('Product/product_edit', compact('product','categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        
        DB::table('product')
        ->where('id', $id) // Replace $productId with the actual product ID you want to update
        ->update([
            'category_id' => $request->category_id,
            'model' => $request->model,
            'source' => $request->source,
            'qty' => $request->qty,
            'purchase_date' => $request->purchase,
            'invoice_no' => $request->invoice,
            'bardcodeno' => 1, // This field will be updated as well
            'updated_at' => now(), // Automatically set the updated timestamp
        ]);
    
        
     


        // Redirect with a success message
        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        DB::table('product')->where('id', $id)->delete();
        return redirect()->route('products.index');
    }

    
}
