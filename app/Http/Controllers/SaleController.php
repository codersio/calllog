<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::join('tbl_user','tbl_user.user_id','=','sales.customer_id')->select('tbl_user.*','sales.*')->get();
        return Inertia::render('sales/index',[
            'sales'=>$sales
        ]);
    }

    public function create()
    {
        $customers = DB::table('tbl_user')->get();
        $products = DB::table('product')->join('products_category','products_category.id','=','product.category_id')->select('products_category.name','product.id')->get();
        return Inertia::render('sales/create',\compact('customers','products'));
    }

    public function store(Request $request) {
        \dd($request->all());
        $request->validate([
            'bill_no'=>'required',
            'customer_id'=>'required',
            'date'=>'required',
            'billing_address'=>'required',
            'status'=>'required',
            'amc_type'=>'required',
            'mobile_no'=>'required',
            'email'=>'required',
        ]);

        Sale::create($request->all());
        return \redirect()->to(\route('sales.index'));
    }

    public function edit($id)
    {
        $sale = Sale::join('tbl_user','tbl_user.user_id','=','sales.customer_id')->where('sales.id',$id)->first();
        $customers = DB::table('tbl_user')->get();
        $products = DB::table('product')->join('products_category','products_category.id','=','product.category_id')->select('products_category.name','product.id')->get();
        return Inertia::render('sales/edit',\compact('customers','products','sale'));
    }

    public function update($id, Request $request) {

    }

    public function destroy($id) {

    }
}