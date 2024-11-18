<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use App\Models\Employee;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ComplaintController extends Controller
{
    public function index()
    {
        $complaints = Complaint::join('tbl_user', 'tbl_user.user_id', '=', 'complaints.customer_id')
            // ->join('product', 'product.id', '=', 'complaints.product_id')
            ->join('tbl_product', 'tbl_product.product_id', '=', 'complaints.product_id')
            ->join('tbl_user as a_user', 'a_user.user_id', '=', 'complaints.assigned_id')
            ->select('a_user.first_name as af_name','a_user.middle_name as am_name','a_user.last_name as al_name','complaints.id','tbl_user.first_name','tbl_user.middle_name','tbl_user.last_name','complaints.date','complaints.complaint_no','complaints.complaint_type','complaints.status')
            ->get();
        return Inertia::render('complaint/index',[
            'complaints'=>$complaints
        ]);
    }

    public function create()
    {
        $customers = DB::table('tbl_user')->where('role','client')->get();
        $products = DB::table('tbl_product')->get();
        $employees = DB::table('tbl_user')->where('role','Employee')->get();
        
        return Inertia::render('complaint/create', ['customers' => $customers, 'products' => $products, 'employees' => $employees]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'complaint_no' => 'required',
            'date' => 'required', // Ensure date is valid
            'customer_id' => 'required', // Validate if the customer exists
            'complaint_type' => 'required',
            'description' => 'required',
            'product_id' => 'required', // Validate if the product exists
            'assigned_id' => 'required', // Validate if the assigned user exists
            'assigned_date' => 'required', // Ensure assigned date is valid
            'status' => 'required',
            'mobile_no' => 'required', // Validate mobile number format
            'email' => 'required', // Ensure valid email format
            'address' => 'required',
        ]);

        Complaint::create($request->all());
        return \redirect()->to(\route('complaint.index'));
    }

    public function edit($id)
    {
        $complaint = Complaint::findOrFail($id);
        $customers = DB::table('tbl_user')->where('role','client')->get();
        $products = DB::table('tbl_product')->get();
        $employees = DB::table('tbl_user')->where('role','Employee')->get();
        return Inertia::render('complaint/edit',['complaint'=>$complaint,'customers' => $customers, 'products' => $products, 'employees' => $employees]);
    }

    public function update($id,Request $request) {
        $request->validate([
            'complaint_no' => 'required',
            'date' => 'required', // Ensure date is valid
            'customer_id' => 'required', // Validate if the customer exists
            'complaint_type' => 'required',
            'description' => 'required',
            'product_id' => 'required', // Validate if the product exists
            'assigned_id' => 'required', // Validate if the assigned user exists
            'assigned_date' => 'required', // Ensure assigned date is valid
            'status' => 'required',
            'mobile_no' => 'required', // Validate mobile number format
            'email' => 'required', // Ensure valid email format
            'address' => 'required',
        ]);

        Complaint::findOrFail($id)->update($request->all());
        return \redirect()->to(\route('complaint.index'));
    }

    public function destroy($id) {
        Complaint::findOrFail($id)->delete();
        return \redirect()->to(\route('complaint.index'));
    }

    public function Print($id){
        $cmpl = Complaint::join('tbl_product','tbl_product.product_id','=','complaints.product_id')
                         ->join('tbl_user as cst','cst.user_id','=','complaints.customer_id')
                         ->select('complaints.*','cst.first_name as cf','cst.middle_name as cm','cst.last_name as cl','tbl_product.item_name','tbl_product.product_code','tbl_product.model_no')
                         ->where('complaints.id',$id)->first();
        return Inertia::render('complaint/print',[
            'cmpl'=>$cmpl
        ]);
    }
}
