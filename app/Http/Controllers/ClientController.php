<?php



namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ClientController extends Controller
{
    protected $user_image;
    
  
    // Fetch list of clients
    public function index()
    {
        
            $data = DB::table('tbl_user')
                ->where('role', 'client')
                ->where('is_archive', 0)
                ->get();

        return Inertia::render('client/index', compact('data'));
    }

    // Fetch archived clients
    public function archiveclient()
    {
        $data = DB::table('tbl_user')
            ->where('role', 'client')
            ->where('is_archive', 1)
            ->get();
        return Inertia::render('client/archiveclient', compact('data'));
    }

    // Delete client
    public function destroy($id)
    {
        DB::table('tbl_user')->where('user_id', $id)->delete();
        session()->flash('success', 'Client Record Deleted Successfully');
        return redirect()->route('Client.index');
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
        $last_record = DB::table('tbl_user')->orderBy('user_id', 'desc')->first();
        $client_idf = 'C' . $last_record->user_id . rand(11, 99) . date('mY');
        $client_idf2 = (object)[
            'value' => $client_idf,
            
        ];
        if ($request->isMethod('post')) {
            $image = $request->file('image');
            if ($image) {
                $imagename = $request->first_name . '_' . $request->last_name . '_' . time() . '.' . $image->getClientOriginalExtension();
                Storage::disk('public')->put('client_img/' . $imagename, file_get_contents($image));
            } else {
                $imagename = 'default.png';
            }

            $user_data = $request->only('first_name', 'last_name', 'email');
            $user_data['photo'] = $imagename;
            $user_data['password'] = Hash::make($request->user_password);
            $user_data['address'] = json_encode($request->address);

            $client_id = DB::table('tbl_user')->insertGetId($user_data);

            // Insert company details
            $company_data = $request->only('company_name', 'address');
            $company_data['client_id'] = $client_id;
            DB::table('tbl_company_detail')->insert($company_data);

            // Insert contact persons
            foreach ($request->contact_person['name'] as $key => $name) {
                DB::table('tbl_client_history')->insert([
                    'client_id' => $client_id,
                    'contact_name' => $name,
                    'mobile' => $request->contact_person['mobile'][$key],
                    'designation' => $request->contact_person['designation'][$key],
                ]);
            }

            session()->flash('success', 'Client Record Inserted Successfully');
            return redirect()->route('client.clientlist');
        }

        return Inertia::render('client/create', compact('client_idf2'));
    }
    public function store(Request $request)
    {

        $validatedData =$request->validate([
            'client_id' => 'required|string|max:255',
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'gender' => 'required|in:male,female,other',
            'dob' => 'nullable|date',
            'company_name' => 'nullable|string|max:255',
            'position' => 'nullable|string|max:255',
            'account_number' => 'nullable|string|max:255',
            'ifsc_code' => 'nullable|string|max:255',
            'branch_name' => 'nullable|string|max:255',
            'tin_no' => 'nullable|string|max:255',
            'cst_no' => 'nullable|string|max:255',
            'pan_no' => 'nullable|string|max:10',
            'contact_person.*.name' => 'nullable|string|max:255',
            'contact_person.*.mobile' => 'nullable|string|max:15', // Adjust as per your requirements
            'contact_person.*.designation' => 'nullable|string|max:255',
            'mobile_no' => 'nullable|string|max:15', // Adjust as per your requirements
            'addresses.*.address' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'pin' => 'nullable|string|max:10', // Adjust as per your requirements
            'alt_mobile' => 'nullable|string|max:15', // Adjust as per your requirements
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust as per your requirements
            'email' => 'required|email|max:255',
            'password' => 'required', // Ensure a confirmation field is present in your form
        ]);
         // Handle the image upload if provided
         $imagePath = null;
         if ($request->hasFile('image')) {
             $image = $request->file('image');
             $filename = time() . '.' . $image->getClientOriginalExtension();
             $imagePath = $image->storeAs('client_img', $filename, 'public');
             // Uncomment this line if you want to move it to a specific directory within public
            $image->move(public_path('public/client_img1'), $filename);

         }
 
         $userId = DB::table('tbl_user')->insertGetId([
            'client_id' => $validatedData['client_id'],
            'first_name' => $validatedData['first_name'],
            'middle_name' => $validatedData['middle_name'],
            'last_name' => $validatedData['last_name'],
            'company_name' => $validatedData['company_name'],
            'dob' => $validatedData['dob'],
            'gender' => $validatedData['gender'],
            'address' => json_encode($validatedData['addresses']), // Store addresses as JSON
            'username' => '', // Assuming you want to set it later or leave it empty
            'city' => $validatedData['city'], // Make sure these fields are properly set
            'state' => $validatedData['state'],
            'photo' => $imagePath,
            'role' => 'client',
            'marital_status' => '', // Assuming you have no marital status data yet
            'email' => $validatedData['email'],
            'password' => $validatedData['password'], // Ensure this is hashed if required
            'mobile_no' => $validatedData['mobile_no'],
            'alt_mobile' => $validatedData['alt_mobile'],
            'pincode' => $validatedData['pin'], // Ensure these fields are properly set
            'phone' => '',
            'last_send_mail_Date' => now(),
            'create_date' => now(),
        ]);
        if (!empty($validatedData['contact_person'])) {
        foreach ($validatedData['contact_person'] as $contact) {
            DB::table('tbl_client_history')->insert([
                'client_id' => $userId, // Assuming you have a user ID to link it to the user
                'contact_name' => $contact['name'],
                'mobile' => $contact['mobile'],
                'designation' => $contact['designation'],
            ]);
        }}
        DB::table('tbl_company_detail')->insert([
            'client_id' => $userId,    // Example placeholder for client ID
            'main_person' => $validatedData['position'], // Example placeholder for main person
            'account_number' => $validatedData['account_number'],
            'ifs_code' => $validatedData['ifsc_code'],
            'branch_name' => $validatedData['branch_name'],
            'tin_no' => $validatedData['tin_no'],
            'cst_no' => $validatedData['cst_no'],
            'pan_no' => $validatedData['pan_no'],
            // Optional: adds a timestamp for updated date
        ]);

        // Redirect with a success message
        return redirect()->route('Client.index');
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
