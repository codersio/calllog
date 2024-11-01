<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StockController extends Controller
{
    public function create()
    {
        $cats = DB::table('products_category')->get();
        return Inertia::render('stock/create',['cats'=>$cats]);
    }

    // Store a new stock in the database
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'sku' => 'required',
            'price' => 'required',
            'category_id' => 'required',
            'quantity' => 'required',
            'unit' => 'required',
        ]);

        Stock::create($request->only(['name', 'sku', 'price', 'category_id', 'quantity', 'unit']));

        return redirect()->route('stocks.index')->with('success', 'Stock created successfully!');
    }

    // List all stocks
    public function index()
    {
        $stocks = Stock::all();
        return Inertia::render('stock/index', ['stocks' => $stocks]);
    }

    // Display the form to edit a stock
    public function edit(Stock $stock)
    {
        $cats = DB::table('products_category')->get();
        return Inertia::render('stock/edit', ['stock' => $stock,'cats'=>$cats]);
    }

    // Update a stock in the database
    public function update(Request $request, Stock $stock)
    {
        $request->validate([
            'name' => 'required',
            'sku' => 'required',
            'price' => 'required',
            'category_id' => 'required',
            'quantity' => 'required',
            'unit' => 'required',
        ]);

        $stock->update($request->only(['name', 'sku', 'price', 'category_id', 'quantity', 'unit']));

        return redirect()->route('stocks.index')->with('success', 'Stock updated successfully!');
    }

    // Delete a stock from the database
    public function destroy(Stock $stock)
    {
        $stock->delete();

        return redirect()->route('stocks.index')->with('success', 'Stock deleted successfully!');
    }
}
