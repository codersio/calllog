<?php

namespace App\Http\Controllers;

use App\Models\DIstributer;
use App\Models\Tax;
use Inertia\Inertia;
use App\Models\Purchase;
use Illuminate\Http\Request;
use App\Services\WhatsAppService;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    public function index()
    {
        $purchases = Purchase::join('d_istributers','d_istributers.id','=','purchases.supplier_id')->select('purchases.*','d_istributers.name')->get();
        // $sales = Purchase::join('tbl_user', 'tbl_user.user_id', '=', 'purchases.customer_id')->select('tbl_user.*', 'purchases.*')->get();
        return Inertia::render('purchase/index', [
            'purchases' => $purchases
        ]);
    }

    public function create()
    {
        $suppliers = DIstributer::all();
        $products = DB::table('tbl_product')->get();
        $taxs = Tax::all();
        return Inertia::render('purchase/create', ['suppliers' => $suppliers, 'products' => $products, 'taxes' => $taxs]);
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
            'purchase_no' => 'required',
            'supplier_id' => 'required',
            'date' => 'required',
            'billing_address' => 'required',
            'status' => 'required',
            'email' => 'required',
        ]);
        // dd($request->all());
        $sale = Purchase::create($request->all());

        // Prepare product names from sales_details
        // $productNames = '';
        // foreach ($request->sales_details as $product) {
        //     $productNames .= $product['product'] . ', ';
        // }
        // $productNames = rtrim($productNames, ', ');
        // $recipient = '+91' . ltrim($request->mobile_no, '+');

        // // Send WhatsApp message using the service
        // $whatsAppService = new WhatsAppService();
        // $message = "Hello! Your sale for the following products has been recorded: {$productNames}. Thank you!";
        // $response = $whatsAppService->sendMessage($recipient, $message);

        return redirect()->route('purchase.index');
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
        $purchase = Purchase::findOrFail($id);
        $suppliers = DIstributer::all();
        $products = DB::table('tbl_product')->get();
        $taxs = Tax::all();
        return Inertia::render('purchase/edit', ['suppliers' => $suppliers, 'products' => $products, 'taxes' => $taxs, 'pur' => $purchase]);
    }
    

    public function update($id, Request $request)
    {
        // dd($request->all());
        $request->validate([
            'purchase_no' => 'required',
            'supplier_id' => 'required',
            'date' => 'required',
            'billing_address' => 'required',
            'status' => 'required',
            'email' => 'required',
        ]);

        Purchase::findOrFail($id)->update($request->all());
        return \redirect()->to(\route('purchase.index'));
    }

    public function destroy($id)
    {
        Purchase::findOrFail($id)->delete();
        return \redirect()->to(\route('purchase.index'));
    }
}
