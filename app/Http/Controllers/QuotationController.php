<?php



namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class QuotationController extends Controller
{
    protected $user_image;
    
  
    // Fetch list of clients
    public function index()
    {
        
        $data = DB::table('tbl_quotation')
        ->join('tbl_user', 'tbl_quotation.customer_id', '=', 'tbl_user.user_id')
        ->select('tbl_quotation.*', 'tbl_user.first_name as f_name','tbl_user.last_name as l_name')
        ->get();

        return Inertia::render('quotation/index', compact('data'));
    }

    // Fetch archived clients
    public function archiveclient()
    {
        $data = DB::table('tbl_user')
            ->where('role', 'client')
            ->where('is_archive', 1)
            ->get();
        return Inertia::render('quotation/archiveclient', compact('data'));
    }

    // Delete client
    public function destroy($id)
    {
        DB::table('tbl_user')->where('user_id', $id)->delete();
        session()->flash('success', 'Client Record Deleted Successfully');
        return redirect()->route('Quotation.index');
    }
    public function addarchive($id)
    {
        DB::table('tbl_user')->where('user_id', $id)->update(['is_archive' => 1]); // 1 for active status
        session()->flash('success', 'Client is now archive Successfully');
        return redirect()->route('Quotation.index');
    }

   
    public function getproduct()
    {
        $product = DB::table('tbl_product')->get();
        return response()->json($product, Response::HTTP_OK);
    }
    // Add a new Quotation
    public function create(Request $request)
    {
        $last_record = DB::table('tbl_quotation')->orderBy('quotation_id', 'desc')->first();
        $client_idf = 'Q' . $last_record->quotation_id . rand(11, 99) . date('mY');
        $client_idf2 = (object)[
            'value' => $client_idf,
            
        ];
        $taxOptions=DB::table('tbl_account_tax_rates')->first();
        $customer_dets=DB::table('tbl_user')->where('role','client')->get();
        

        return Inertia::render('quotation/create', compact('client_idf2','customer_dets','taxOptions'));
    }
    public function gettaxoptions()
    {
        $product = DB::table('tbl_account_tax_rates')->get();
        return response()->json($product, Response::HTTP_OK);
    }
    public function getCustomer($id)
    {
        $customer_details = DB::table('tbl_user')->where('user_id', $id)->first();

        // Check if the service partner exists
        if (!$customer_details) {
            return response()->json(['message' => 'Custoemr not found'], 404);
        }
    
        // Return the service partner details as JSON
        return response()->json($customer_details);
    }
    public function store(Request $request)
    {

        $request->validate([
            'quotation_no' => 'required|string|max:255',
            'quotation_date' => 'required|date',
            'customer_name' => 'required|string|max:255',
            'customer_details' => 'required',
            'mobile_no' => 'required|string|max:15',
            'email' => 'required|email',
            'status' => 'required|in:0,1,2', // Adjust as needed for your status options
            'Billing_address' => 'required|string',
            'message' => 'nullable|string',
            'product_details' => 'required|array',
            'product_details.*.product_id' => 'required|integer',
            'product_details.*.p_qty' => 'required|integer',
            'product_details.*.price' => 'required|numeric',
            'product_details.*.amount' => 'required|numeric',
            'tax_details' => 'nullable|array',
            'tax_details.*.tax_id' => 'required|integer',
            'tax_details.*.tax_value' => 'required|numeric',
            'tax_details.*.tax_name' => 'required',
        ]);
        $quotationId = DB::table('tbl_quotation')->insertGetId([
            'quotation_no' => $request->quotation_no,
            'quotation_date' => $request->quotation_date,
            'customer_id' => $request->customer_details,
            'mobile' => $request->mobile_no,
            'email' => $request->email,
            'status' => $request->status,
            'subject'=>'',
            'address' => $request->Billing_address,
            'message' => $request->message,
        ]);
        
        foreach ($request->product_details as $product) {
            DB::table('tbl_quotation_history')->insert([
                'quotation_id' => $quotationId,
                'item_name' => $product['product_id'],
                'qty' => $product['p_qty'],
                'price' => $product['price'],
                'net_amount' => $product['amount'],
                'create_date' => now(),
            ]);
        }
        if (!empty($request->tax_details)) {
            foreach ($request->tax_details as $tax) {
                DB::table('quatation_account_tax')->insert([
                    'quation_id' => $quotationId,
                    'tax_name' => $tax['tax_name'],
                    'tax' => $tax['tax_value'],
                ]);
            }
        }

        // Redirect with a success message
        return redirect()->route('Quotation.index');
    }
   
}
