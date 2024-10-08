<?php

namespace App\Http\Controllers;

use App\Models\Delar;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class DelarController extends Controller
{
    public function index()
    {
        $data = User::join('delars', 'delars.user_id', '=', 'users.id')
            ->select('users.name', 'users.email', 'delars.con1', 'delars.address', 'users.id')
            ->get();
        // dd($data);
        return Inertia::render('Delars/index', compact('data'));
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
        return Inertia::render('Delars/create', compact('user', 'user_type', 'roles', 'notif'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // Define validation rules
        $validatedData = $request->validate([

            'email' => 'required|email|unique:users,email', // Ensure the email is valid and unique in the 'users' table


            'phone' => 'nullable|string|max:10', // Optional field; adjust validation as needed


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


        $employee = new Delar();
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
        return back()->with('success', 'Employee created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Delar $Delar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($Delar)
    {

        $distributor = User::join('delars', 'delars.user_id', '=', 'users.id')
            ->select(
                'users.name',
                'users.email',
                'delars.user_id',
                'delars.con1',
                'delars.address',
                'delars.con1',
                'delars.pan',
                'delars.gstn',
                'delars.con2',
                'delars.pin',
                'delars.name as username',
                'users.id',
            )->where('users.id', $Delar)
            ->first();
        // dd($distributor);
        return Inertia::render('Delars/edit', compact('distributor'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $Delar)
    {
        // dd($Delar);
        $validatedData = $request->validate([
            'email' => 'required|email', // Ensure the email is valid and unique in the 'users' table
            'phone' => 'nullable|string|max:10', // Optional field; adjust validation as needed
        ]);

        // Create and save the new user
        $user = User::findOrFail($Delar);
        $user->name = $request['name'];
        $user->email = $validatedData['email'];
        $user->save();


        $employee = Delar::where('user_id', $Delar)->first();
        // dd($employee);
        $employee->name = $user->name;
        $employee->address = $request->address;
        $employee->pin = $request->pin;
        $employee->con1 = $request->con1;
        $employee->gstn = $request->gstn;
        $employee->pan = $request->pan;
        $employee->email = $user->email;
        $employee->con2 = $request->con2;
        $employee->save();

        // Redirect with a success message
        return redirect('delars')->with('success', 'Employee updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Delar $Delar)
    {
        //
    }
}
