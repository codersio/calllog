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
         // Validate the request data
    $validatedData = $request->validate([
        'category_id' => 'required|integer', // Ensure category exists
        'model' => 'required|string|max:255',
        'source' => 'required|string|max:255',
        'qty' => 'required|integer|min:1',
        'purchase' => 'required|date', // Validate purchase date format
        'invoice' => 'required|string|max:255',
    ]);

    // Insert the validated data into the database
    DB::table('product')->insert([
        'category_id' => $validatedData['category_id'],
        'model' => $validatedData['model'],
        'source' => $validatedData['source'],
        'qty' => $validatedData['qty'],
        'purchase_date' => $validatedData['purchase'],
        'invoice_no' => $validatedData['invoice'],
        'bardcodeno' => 1, // Assuming this is auto-generated or default
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
        
         // Validate the request data
    $validatedData = $request->validate([
        'category_id' => 'required|integer', // Ensure category exists
        'model' => 'required|string|max:255',
        'source' => 'required|string|max:255',
        'qty' => 'required|integer|min:1',
        'purchase' => 'required|date', // Validate purchase date
        'invoice' => 'required|string|max:255',
    ]);

    // Update the existing record in the database
    DB::table('product')
        ->where('id', $id)
        ->update([
            'category_id' => $validatedData['category_id'],
            'model' => $validatedData['model'],
            'source' => $validatedData['source'],
            'qty' => $validatedData['qty'],
            'purchase_date' => $validatedData['purchase'],
            'invoice_no' => $validatedData['invoice'],
            'bardcodeno' => 1, // Assuming barcode number is auto-generated or default
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
