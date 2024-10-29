<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    /**
     * List all brands.
     */
    public function index()
    {
        $brands = DB::table('category_master')->where('type','category')->get();
        return response()->json($brands, Response::HTTP_OK);
    }

    /**
     * Add a new brand.
     */
    
     public function store(Request $request)
     {
         try {
             $id = DB::table('category_master')->insertGetId([
                 'title' => $request->name,
                 'type' => 'category',
                 'status' => 1,
                 'created_date' => now(),
                 'create_by'=>'0',
             ]);
     
             $newBrand = DB::table('category_master')->where('cat_id', $id)->first();
             return response()->json($newBrand, Response::HTTP_CREATED);
         } catch (\Exception $e) {
             return response()->json([
                 'error' => 'Failed to store category',
                 'message' => $e->getMessage(),
             ], 500);
         }
     }
     
    /**
     * Delete a brand by ID.
     */
    public function destroy($id)
    {
        $deleted = DB::table('category_master')->where('cat_id', $id)->delete();

        if ($deleted) {
            return response()->json(['message' => 'Category deleted successfully'], Response::HTTP_OK);
        }

        return response()->json(['error' => 'Category not found'], Response::HTTP_NOT_FOUND);
    }
}
