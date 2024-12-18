<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\Tax;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Services\WhatsAppService;
use Carbon\Carbon;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::join('tbl_user', 'tbl_user.user_id', '=', 'sales.customer_id')->select('tbl_user.*', 'sales.*')->get();
        return Inertia::render('sales/index', [
            'sales' => $sales
        ]);
    }

    public function create()
    {
        $customers = DB::table('tbl_user')->get();
        $products = DB::table('tbl_product')->get();
        $taxs = Tax::all();
        $blno = 'B'.Carbon::now()->format('dmy').str_pad(Sale::count(),3,"0",STR_PAD_LEFT);
        return Inertia::render('sales/create', ['customers' => $customers, 'products' => $products, 'taxes' => $taxs,'blno'=>$blno]);
    }

    // public function store(Request $request)
    // {
    //     // dd($request->all());
    //     // $request->validate([
    //     //     'bill_no' => 'required',
    //     //     'customer_id' => 'required',
    //     //     'date' => 'required',
    //     //     'billing_address' => 'required',
    //     //     'status' => 'required',
    //     //     'amc_type' => 'required',
    //     //     'mobile_no' => 'required',
    //     //     'email' => 'required',
    //     //     'sales_details' => 'required|array' // Ensure sales_details is an array
    //     // ]);

    //     // $sale = Sale::create($request->all());
    //     $sale = Sale::create($request->all());
    //     if (!$sale) {
    //         return response()->json(['error' => 'Failed to create sale'], 500);
    //     }
    //     // dd($request->sales_details);
    //     // Prepare product names from sales_details
    //     $productNames = '';
    //     foreach ($request->sales_details as $product) {
    //         // Assuming 'product_name' is a key in each product detail
    //         $productNames .= $product['product'] . ', ';
    //     }
    //     // Remove trailing comma and space
    //     $productNames = rtrim($productNames, ', ');
    //     // dd($productNames);
    //     $recipient = '+91' . ltrim($request->mobile_no, '+');
    //     // Send WhatsApp message after sale is stored
    //     $chat = [
    //         "secret" => "3c1d2c5c4ce14c120dc4f668460ea68fb3bcdd1c", // API secret
    //         "account" => "1730203027060ad92489947d410d897474079c14776720cd93ce9f4",
    //         "recipient" => $recipient,
    //         "type" => "text",
    //         "message" => "Hello! Your sale for the following products has been recorded: {$productNames}. Thank you!"
    //     ];

    //     $cURL = curl_init("https://app.bulkwise.in/api/send/whatsapp");
    //     curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
    //     curl_setopt($cURL, CURLOPT_POSTFIELDS, $chat);
    //     $response = curl_exec($cURL);
    //     curl_close($cURL);

    //     return redirect()->route('sales.index');
    // }
    public function store(Request $request)
    {
        $request->validate([
            'bill_no' => 'required',
            'customer_id' => 'required',
            'date' => 'required',
            'billing_address' => 'required',
            'status' => 'required',
            'amc_type' => 'required',
            'mobile_no' => 'required',
            'email' => 'required',
            'sales_details' => 'required|array'
        ]);

        // dd($request->all());
        $sale = Sale::create($request->all());

        // Prepare product names from sales_details
        $productNames = '';
        foreach ($request->sales_details as $product) {
            $productNames .= $product['product'] . ', ';
        }
        $productNames = rtrim($productNames, ', ');
        $recipient = '+91' . ltrim($request->mobile_no, '+');

        // Send WhatsApp message using the service
        $whatsAppService = new WhatsAppService();
        $message = "Hello! Your sale for the following products has been recorded: {$productNames}. Thank you!";
        $response = $whatsAppService->sendMessage($recipient, $message);

        return redirect()->route('sales.index');
        // $products = DB::table('product')->join('products_category', 'products_category.id', '=', 'product.category_id')->select('products_category.name', 'product.id')->get();
        // $taxs = Tax::all();
        // return Inertia::render('sales/create', ['customers' => $customers, 'products' => $products, 'taxes' => $taxs]);
    }

    // public function store(Request $request) {
    //     // \dd($request->all());
    //     $request->validate([
    //         'bill_no'=>'required',
    //         'customer_id'=>'required',
    //         'date'=>'required',
    //         'billing_address'=>'required',
    //         'status'=>'required',
    //         'amc_type'=>'required',
    //         'mobile_no'=>'required',
    //         'email'=>'required',
    //     ]);

    //     Sale::create($request->all());
    //     // foreach($request->sales_details as $product){
    //     //     //code here
    //     // }
    //     return \redirect()->to(\route('sales.index'));
    // }


    public function edit($id)
    {
        $sale = Sale::join('tbl_user', 'tbl_user.user_id', '=', 'sales.customer_id')->where('sales.id', $id)->select('sales.*','tbl_user.first_name','tbl_user.middle_name','tbl_user.last_name')->first();
        $customers = DB::table('tbl_user')->get();
        $taxs = Tax::all();
        $products = DB::table('tbl_product')->get();
        return Inertia::render('sales/edit', ['customers' => $customers, 'products' => $products, 'taxes' => $taxs, 'sale' => $sale]);
    }
    

    public function update($id, Request $request)
    {
        // dd($request->all());
        $request->validate([
            'bill_no' => 'required',
            'customer_id' => 'required',
            'date' => 'required',
            'billing_address' => 'required',
            'status' => 'required',
            'amc_type' => 'required',
            'mobile_no' => 'required',
            'email' => 'required',
        ]);

        Sale::findOrFail($id)->update($request->all());
        return \redirect()->to(\route('sales.index'));
    }

    public function destroy($id)
    {
        Sale::findOrFail($id)->delete();
        return \redirect()->to(\route('sales.index'));
    }
}
