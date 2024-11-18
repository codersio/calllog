<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ServiceCenter;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;

class ServiceCenterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = User::join('service_centers', 'service_centers.user_id', '=', 'users.id')
            ->select('users.name', 'users.email', 'service_centers.con1', 'service_centers.address', 'users.id')
            ->get();
        return Inertia::render('ServiceCenter/index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user()->name;
        $userss = Auth::user();
        if ($userss) {
            // Ensure permissions are assigned and fetched correctly
            $user_type = $userss->getAllPermissions()->pluck('name')->toArray();
            // dd($permissions);
        }
        $roles = Role::all();
        $notif = Auth::user()->notifications;
        return Inertia::render('ServiceCenter/create', compact('user', 'user_type', 'roles', 'notif'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // Define validation rules
        $validatedData = $request->validate([
            'name'=>'required',
            'pin'=>'required',
            'pan'=>'required',
            'con1'=>'required',
            'gstn'=>'required',
            'username'=>'required',
            'password'=>'required',
            'email' => 'required|email|unique:users,email', // Ensure the email is valid and unique in the 'users' table

            'phone' => 'nullable|string|max:10', // Optional field; adjust validation as needed


        ],[
            'con1.required'=>'Please enter contact number'
        ]);

        // Create and save the new user
        $user = new User();
        $user->name = $request['name'];
        $user->email = $validatedData['email'];
        $user->type = 2;
        $user->password = bcrypt($request['password']);
        $user->save();

        // Assign the role to the user
        $user->assignRole($request['roledsitributer']);


        $employee = new ServiceCenter();
        $employee->user_id = $user->id;
        $employee->name = $user->name;
        $employee->address = $request->address;
        $employee->pin = $request->pin;
        $employee->con1 = $request->con1;
        $employee->gstn = $request->gstn;
        $employee->pan = $request->pan;
        $employee->email = $request->email;
        $employee->con2 = $request->con2;
        // $employee->password = $request->password;
        $employee->save();

        // Redirect with a success message
        return redirect()->route('service-centers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(ServiceCenter $service_center)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($service_center)
    {
        $serv = User::join('service_centers', 'service_centers.user_id', '=', 'users.id')
            ->select(
                'users.name',
                'users.email',
                'service_centers.user_id',
                'service_centers.con1',
                'service_centers.address',
                'service_centers.con1',
                'service_centers.pan',
                'service_centers.gstn',
                'service_centers.con2',
                'service_centers.pin',
                'service_centers.name as username',
            )->where('users.id', $service_center)
            ->first();

        return Inertia::render('ServiceCenter/edit', compact('serv'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$service_center)
    {
        $validatedData = $request->validate([
            'name'=>'required',
            'pin'=>'required',
            'pan'=>'required',
            'con1'=>'required',
            'gstn'=>'required',
            'username'=>'required',
            'password'=>'nullable',
            'email' => 'required|email', // Ensure the email is valid and unique in the 'users' table
            'phone' => 'nullable|string|max:10', // Optional field; adjust validation as needed
        ],[
            'con1.required'=>'Please enter contact number'
        ]);

        // Create and save the new user
        $user = User::findOrFail($service_center);
        $user->name = $request['name'];
        $user->email = $validatedData['email'];
        $user->save();


        $employee = ServiceCenter::where('user_id',$service_center)->first();
        $employee->name = $request->username;
        $employee->address = $request->address;
        $employee->pin = $request->pin;
        $employee->con1 = $request->con1;
        $employee->gstn = $request->gstn;
        $employee->pan = $request->pan;
        $employee->email = $request->email;
        $employee->con2 = $request->con2;
        $employee->save();

        // Redirect with a success message
        return redirect()->route('service-centers.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($service_center)
    {
        ServiceCenter::where('user_id',$service_center)->delete();
        User::findOrFail($service_center)->delete();
        return redirect()->route('service-centers.index');
    }
}
