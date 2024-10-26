<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class WarrantyExtendController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      
        $data = DB::table('warranty_extend')
    ->join('d_istributers', 'warranty_extend.distributer_name1', '=', 'd_istributers.id')
    ->join('service_centers', 'warranty_extend.service_partner', '=', 'service_centers.id')
    ->select('warranty_extend.*', 'd_istributers.name as distributer_name','service_centers.name as service_partner') // Select all product columns and the category name
    ->get();
        return Inertia::render('extendwarrenty/index', compact('data'));
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
        $lastInsert = DB::table('warranty_extend')
                    ->latest('id') // Order by ID, assuming the ID is auto-incrementing
                    ->first();
        $lst=0;
        if ($lastInsert) {
            $lst= $lastInsert->id;
        } else {
            $lst= 0;
        }
        $currentDate = Carbon::now()->format('dmY');
        $nextcallno='W'.$currentDate.'/'.$lst+1; 
        $warranty_no = (object)[
            'value' => $nextcallno,
            
        ];
        return Inertia::render('extendwarrenty/create',compact('warranty_no','service_centers','distribter'));
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
        'warranty_no' => 'required|string|max:255',
        'customer_name' => 'required|string|max:255',
        'address' => 'required|string|max:500',
        'phone' => 'required|numeric|digits:10', // Assumes phone numbers should be between 10 to 15 digits
        'service_partner' => 'required|string|max:255',
        'pin' => 'required', // Assuming PIN is 6 digits
        'distributer_name1' => 'required|string|max:255',
        'source_material' => 'required|string|max:255',
        'model' => 'required|string|max:255',
        'purchase' => 'required|date', // Assuming purchase is a date
        'sl_no' => 'required|string|max:500',
        'invoice_no'=>'required|string|max:500',
        'invoice_date'=>'required|date',
    ]);

    // Insert the validated data into the database
    DB::table('warranty_extend')->insert([
        'warranty_no' => $validatedData['warranty_no'],
        'customer_name' => $validatedData['customer_name'],
        'address' => $validatedData['address'],
        'phone' => $validatedData['phone'],
        'service_partner' => $validatedData['service_partner'],
        'pin' => $validatedData['pin'],
        'distributer_name1' => $validatedData['distributer_name1'],
        'source_material' => $validatedData['source_material'],
        'model' => $validatedData['model'],
        'purchase' => $validatedData['purchase'],
        'sl_no' => $validatedData['sl_no'],
        'invoice_no' => $validatedData['invoice_no'],
        'invoice_date' => $validatedData['invoice_date'],
        'created_at' => now(),
        'updated_at' => now(),
    ]);

     

        // Redirect with a success message
        return redirect()->route('Warranty-Extend.index');
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {

        $category = DB::table('spare_part')
            ->join('products_category', 'spare_part.category_id', '=', 'products_category.id')
            ->join('service_centers', 'spare_part.service_partner_id', '=', 'service_centers.id')
            ->select('spare_part.*', 'products_category.name as category_name', 'service_centers.name as service_partner')
            ->where('spare_part.id', $id) // Add where clause for id
            ->first();
            $categories = DB::table('products_category')->get();
        $service_centers = DB::table('service_centers')->get();

        return Inertia::render('sparepart/edit', compact('category','categories','service_centers'));
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
        DB::table('warranty_extend')->where('id', $id)->delete();
        return redirect()->route('Warranty-Extend.index');
    }

    
}
