<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Expense;
use App\Models\Tax;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $expense = Expense::all();
        return Inertia::render('expense/index', compact('expense'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $employees = Employee::join('users', 'users.id', '=', 'employees.user_id')->get();
        $products = \DB::table('product')->join('products_category', 'products_category.id', '=', 'product.category_id')->get();
        // dd($products);
        $taxes = Tax::all();
        $customers = \DB::table('tbl_user')->get();

        return Inertia::render('expense/expensepage', compact('employees', 'products', 'taxes', 'customers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $expense = Expense::create([
            'payee_id' => $request->payee_id,
            'payment_date' => $request->payment_date,
            'category_id' => $request->category_id,
            'payee_type' => $request->payee_type,
            'account' => 'Cash',
        ]);

        foreach ($request->items as $item) {
            $expense->items()->create([
                'service_id' => $item['service_id'],
                'quantity' => $item['qty'],
                'price' => $item['price'],
                'discount' => $item['discount'],
                'tax' => $item['tax'],
            ]);
        }

        return response()->json(['message' => 'Expense created successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Expense $expense)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($expense)
    {
        $expense = Expense::with('items')->findOrFail($expense);
        // dd($expense);
        $taxes = Tax::all();
        $products = \DB::table('product')->join('products_category', 'products_category.id', '=', 'product.category_id')->get();
        $employees = Employee::join('users', 'users.id', '=', 'employees.user_id')->get();
        $customers = \DB::table('tbl_user')->get();

        return inertia('expense/expenseedit', [
            'expense' => $expense,
            'taxes' => $taxes,
            'products' => $products,
            'employees' => $employees,
            'customers' => $customers,
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $expense = Expense::findOrFail($id);
        $expense->update([
            'payee_id' => $request->payee_id,
            'payment_date' => $request->payment_date,
            'category_id' => $request->category_id,
            'payee_type' => $request->payee_type,
            'account' => 'Cash',
        ]);

        // Update existing items and delete old ones
        $expense->items()->delete();
        foreach ($request->items as $item) {
            $expense->items()->create([
                'service_id' => $item['service_id'],
                'quantity' => $item['qty'],
                'price' => $item['price'],
                'discount' => $item['discount'],
                'tax' => $item['tax'],
            ]);
        }

        return response()->json(['message' => 'Expense updated successfully']);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Expense $expense)
    {
        //
    }
}
