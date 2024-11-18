<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CallAllocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
        $data = DB::table('call_allocation')
    ->join('d_istributers', 'call_allocation.distributer', '=', 'd_istributers.id')
    ->join('service_centers', 'call_allocation.service_partner', '=', 'service_centers.id')
    ->select('call_allocation.*', 'd_istributers.name as distributer_name','service_centers.name as service_partner') // Select all product columns and the category name
    ->get();
        return Inertia::render('callallocation/index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */


    public function create()
    {
        $categories = DB::table('products_category')->get();
        $service_centers = DB::table('service_centers')->get();
        $distribter =DB::table('d_istributers')->get();
        // $data="rsm÷";
        // $lastId = DB::table('call_log')->orderBy('id', 'desc')->value('id');
        $lastInsert = DB::table('call_allocation')
                    ->latest('id') // Order by ID, assuming the ID is auto-incrementing
                    ->first();
        $lst=0;
        if ($lastInsert) {
            $lst= $lastInsert->id;
        } else {
            $lst= 0;
        }
        $currentDate = Carbon::now()->format('dmY');
        $nextcallno=$currentDate.'/'.$lst+1; 
        $nextcallno2 = (object)[
            'value' => $nextcallno,
            
        ];
        return Inertia::render('callallocation/create',compact('nextcallno2','service_centers','distribter'));
    }

    public function getDetails($id)
{
    // Fetch the service partner directly from the database
    $servicePartner = DB::table('service_centers')->where('id', $id)->first();

    // Check if the service partner exists
    if (!$servicePartner) {
        return response()->json(['message' => 'Service Partner not found'], 404);
    }

    // Return the service partner details as JSON
    return response()->json($servicePartner);
}
public function getDetails2($id)
{
    // Fetch the service partner directly from the database
    $distributer = DB::table('d_istributers')->where('id', $id)->first();

    // Check if the service partner exists
    if (!$distributer) {
        return response()->json(['message' => 'Service Partner not found'], 404);
    }

    // Return the service partner details as JSON
    return response()->json($distributer);
}
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
       
       // Validate the incoming request data
    $validatedData = $request->validate([
        'call_no' => 'required|string|max:255',
        'customer_name' => 'required|string|max:255',
        'address' => 'required|string|max:500',
        'phone' => 'required|numeric|digits:10', // Assumes phone numbers should be between 10 to 15 digits
        'service_partner' => 'required|string|max:255',
        'pin' => 'required', // Assuming PIN is 6 digits
        'distributer_name1' => 'required|string|max:255',
        'source_material' => 'required|string|max:255',
        'model' => 'required|string|max:255',
        'purchase' => 'required|date', // Assuming purchase is a date
        'reason' => 'required|string|max:500',
    ]);

    // Insert the validated data into the database
    DB::table('call_allocation')->insert([
        'call_no' => $validatedData['call_no'],
        'customer_name' => $validatedData['customer_name'],
        'address' => $validatedData['address'],
        'phone' => $validatedData['phone'],
        'service_partner' => $validatedData['service_partner'],
        'pin' => $validatedData['pin'],
        'distributer' => $validatedData['distributer_name1'],
        'source_material' => $validatedData['source_material'],
        'model' => $validatedData['model'],
        'purchase' => $validatedData['purchase'],
        'reason' => $validatedData['reason'],
        'created_at' => now(),
        'updated_at' => now(),
    ]);

     

        // Redirect with a success message
        return redirect()->route('Call-Allocation.index');
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {

        $categories = DB::table('products_category')->get();
        $service_centers = DB::table('service_centers')->get();
        $distribter = DB::table('d_istributers')->get();
        $callAlloc = DB::table('call_allocation')->where('id',$id)->first();

        return Inertia::render('callallocation/edit', compact('service_centers','distribter','callAlloc'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        
    
        DB::table('spare_part')
        ->where('id',$id)
        ->update([
            'call_allocation' => $request->call_allocation,
            'customer_name' => $request->customer_name,
            'address' => $request->address,
            'phone'=>$request->phone_number,
            'service_partner_id' => $request->service_partner,
            'spare_part_type' => $request->spare_part_type,
            'category_id' => $request->product_name,
            'qty'=>$request->qty,
            'model'=>$request->model,
            'spare_part_ser_no'=>$request->spare_part_Serial,
            'invoice_no'=>$request->invoice,
            'dispatch_module'=>$request->dispatch_model,
            'dispatch_type'=>$request->dispatch_type,
            'date'=>$request->date,
            'updated_at' => now(),
        ]);
        
     


        // Redirect with a success message
        return redirect()->route('spare-part.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        DB::table('call_allocation')->where('id', $id)->delete();
        return redirect()->route('Call-Allocation.index');
    }

    
}
