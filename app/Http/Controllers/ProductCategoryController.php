<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DB::table('products_category')->get();
        return Inertia::render('Product/index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $request->validate([
            'name' => 'required|string|max:255|unique:products_category,name', // 'unique product category name
            
        ]);

        // Insert the validated data into the database
        DB::table('products_category')->insert([
            'name' => $request->name,
            'created_at' => now(),
            'updated_at' => now(),
        ]);


        // Redirect with a success message
        return redirect()->route('products-category.index');
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
