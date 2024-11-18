<?php



namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MasterController extends Controller
{

    // Fetch list of clients
    public function index()
    {

        $data = DB::table('tbl_product')
            ->where('is_archive', 0)
            ->get();

        return Inertia::render('master/index', compact('data'));
    }

    // Fetch archived clients
    public function archiveproduct()
    {
        $data = DB::table('tbl_product')
            ->where('is_archive', 1)
            ->get();
        return Inertia::render('master/archiveproduct', compact('data'));
    }

    public function edit($id)
    {
        $prd = DB::table('tbl_product')->where('product_id', $id)->first();
        return Inertia::render('master/edit', \compact('prd'));
    }

    public function update(Request $request, $id)
    {
        // dd($request->all());
        // Validate the incoming request data
        $validatedData = $request->validate([
            'product_id' => 'required',
            'item_name' => 'required',
            'model_no' => 'required',
            'brand' => 'required',
            'product_category' => 'required',
            'price' => 'required|numeric|min:0',
            'unit' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'product_desc' => 'nullable',
        ]);

        // Retrieve the existing product record to get the current image path
        $product = DB::table('tbl_product')->where('product_id', $id)->first();
        $currentImagePath = $product->image ?? null;

        // Handle image upload if a new file is provided
        $imagePath = $currentImagePath;
        if ($request->hasFile('image')) {
            // Delete the old image if it exists
            if ($currentImagePath && file_exists(public_path($currentImagePath))) {
                unlink(public_path($currentImagePath));
            }

            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('product_img'), $filename);
            $imagePath = 'product_img/' . $filename;
        }

        // Prepare data for updating tbl_product
        $productData = [
            'item_name' => $validatedData['item_name'],
            'is_archive' => 0,
            'brand_id' => $validatedData['brand'],
            'model_no' => $validatedData['model_no'],
            'product_code' => $validatedData['product_id'],
            'category_id' => $validatedData['product_category'],
            'short_name' => '', // Update if necessary
            'price' => $validatedData['price'],
            'unit_id' => $validatedData['unit'],
            'open_stock' => 0,
            'min_stock' => 0,
            'max_stock' => 0,
            'image' => $imagePath,
            'specification' => $validatedData['product_desc'],
            'product_qty' => 0,
            'warehouse_id' => 0,
        ];

        // Update tbl_product record
        DB::table('tbl_product')->where('product_id', $id)->update($productData);

        // Redirect with a success message
        return redirect()->route('Product-List.index')->with('success', 'Product updated successfully');
    }


    // Delete client
    public function destroy($id)
    {
        DB::table('tbl_product')->where('product_id', $id)->delete();
        session()->flash('success', 'Product Record Deleted Successfully');
        return redirect()->route('Product-List.index');
    }
    public function addarchive($id)
    {
        DB::table('tbl_product')->where('product_id', $id)->update(['is_archive' => 1]); // 1 for active status
        session()->flash('success', 'Product is now archive Successfully');
        return redirect()->route('Product-List.index');
    }

    // Check email for updates
    public function check_update_email($user_data, $userinput)
    {
        $get_email_data = $user_data->email;

        if ($get_email_data == $userinput) {
            return true;
        } else {
            $chk_email = DB::table('tbl_user')->where('email', $userinput)->count();
            return $chk_email == 0;
        }
    }

    // Update client
    public function updateclient(Request $request, $id)
    {
        $row_update = DB::table('tbl_user')->where('user_id', $id)->first();
        $client_data = DB::table('tbl_company_detail')->where('client_id', $id)->get();
        $history_record = DB::table('tbl_client_history')->where('client_id', $id)->get();

        if ($request->isMethod('post')) {
            $valid_email = $this->check_update_email($row_update, $request->email);

            if ($valid_email) {
                $image = $request->file('client_image');
                if ($image) {
                    $imagename = $request->first_name . '_' . $request->last_name . '_' . time() . '.' . $image->getClientOriginalExtension();
                    Storage::disk('public')->put('img/user/' . $imagename, file_get_contents($image));
                } else {
                    $imagename = $request->old_image;
                }

                $update_data = [
                    'photo' => $imagename,
                    'address' => json_encode($request->address),
                    'password' => !empty($request->user_password) ? Hash::make($request->user_password) : $row_update->password,
                ];

                DB::table('tbl_user')->where('user_id', $id)->update($update_data);

                // Update company details
                $company_data = $request->only('company_name', 'address');
                DB::table('tbl_company_detail')->where('client_id', $id)->update($company_data);

                // Update contact persons
                foreach ($request->contact_person['name'] as $key => $name) {
                    $client_history_data = [
                        'client_id' => $id,
                        'contact_name' => $name,
                        'mobile' => $request->contact_person['mobile'][$key],
                        'designation' => $request->contact_person['designation'][$key],
                    ];

                    $contact_id = $request->contact_person['id'][$key];
                    if (!empty($contact_id)) {
                        DB::table('tbl_client_history')->where('id', $contact_id)->update($client_history_data);
                    } else {
                        DB::table('tbl_client_history')->insert($client_history_data);
                    }
                }

                session()->flash('success', 'Client Record Updated Successfully');
                return redirect()->route('client.clientlist');
            } else {
                session()->flash('error', 'Email Already Exists!');
                return redirect()->route('client.updateclient', $id);
            }
        }

        return view('client.updateclient', compact('row_update', 'client_data', 'history_record'));
    }

    // Add a new client
    public function create(Request $request)
    {
        $last_record = DB::table('tbl_product')->orderBy('product_id', 'desc')->first();
        $client_idf = 'PR' . $last_record->product_id . rand(11, 99) . date('mY');
        $client_idf2 = (object)[
            'value' => $client_idf,

        ];


        return Inertia::render('master/create', compact('client_idf2'));
    }
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'product_id' => 'required',
            'item_name' => 'required|string|max:255',
            'model_no' => 'required|string|max:255',
            'brand' => 'required|string|max:255',
            'product_category' => 'required|string',
            'price' => 'required|numeric|min:0',
            'unit' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'product_desc' => 'required|string',
        ]);
        // Handle the image upload if provided
        $imagePath = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('product_img'), $filename);
            $imagePath = 'product_img/' . $filename;
        }

        $userId = DB::table('tbl_product')->insertGetId([
            'item_name' => $validatedData['item_name'],
            'is_archive' => 0,
            'brand_id' => $validatedData['brand'],
            'model_no' => $validatedData['model_no'],
            'product_code' => $validatedData['product_id'],
            'category_id' => $validatedData['product_category'],
            'short_name' => '',
            'price' => $validatedData['price'], // Store addresses as JSON
            'unit_id' => $validatedData['unit'], // Assuming you want to set it later or leave it empty
            'open_stock' => 0, // Make sure these fields are properly set
            'min_stock' => 0,
            'max_stock' => 0,
            'image' => $imagePath,
            'specification' => $validatedData['product_desc'],
            'product_qty' => 0, // Assuming you have no marital status data yet
            'warehouse_id' => 0,
        ]);
        // Redirect with a success message
        return redirect()->route('Product-List.index');
    }
    // View client details
    public function viewclient($id)
    {
        $view_data = DB::table('tbl_user')->where('user_id', $id)->first();
        $sale_detail = DB::table('tbl_sales')->where('customer_id', $id)->get();
        $quotation_detail = DB::table('tbl_quotation')->where('customer_id', $id)->get();
        $complaint_detail = DB::table('tbl_complaint')->where('customer_id', $id)->get();

        return view('client.viewclient', compact('view_data', 'sale_detail', 'quotation_detail', 'complaint_detail'));
    }

    // Check email via Ajax
    public function checkemail(Request $request)
    {
        if ($request->ajax()) {
            $email_count = DB::table('tbl_user')->where('email', $request->email_text)->count();
            return response()->json($email_count);
        }
    }
}
