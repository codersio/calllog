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

            $post = DB::table('products_category')->where('id', $id)->first();


        return Inertia::render('Product/edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:products_category,name', // 'unique product category name
            
        ]);
        DB::table('products_category')->where('id', $id)->update([
            'name' => $request->name,
            'updated_at' => now(),
        ]);
     


        // Redirect with a success message
        return redirect()->route('products-category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        DB::table('products_category')->where('id', $id)->delete();
        return redirect()->route('products-category.index');
    }

    
}
