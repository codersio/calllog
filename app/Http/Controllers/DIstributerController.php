<?php

namespace App\Http\Controllers;

use App\Models\DIstributer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class DIstributerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = User::join('d_istributers', 'd_istributers.user_id', '=', 'users.id')
            ->select('users.name', 'users.email', 'd_istributers.con1', 'd_istributers.address', 'users.id')
            ->get();
        return Inertia::render('Distributer/index', compact('data'));
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
        return Inertia::render('Distributer/create', compact('user', 'user_type', 'roles', 'notif'));
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


        $employee = new DIstributer();
        $employee->user_id = $user->id;
        $employee->name = $user->name;
        $employee->address = $request->address;
        $employee->pin = $request->pin;
        $employee->con1 = $request->con1;
        $employee->gstn = $request->gstn;
        $employee->pan = $request->pan;
        $employee->email = $request->email;
        $employee->con2 = $request->con2;
        // $employee->password = $request->con2;

        $employee->save();

        // Redirect with a success message
        return redirect()->route('distributers')->with('success', 'Employee created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(DIstributer $dIstributer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DIstributer $dIstributer)
    {
        $distributor = User::join('d_istributers', 'd_istributers.user_id', '=', 'users.id')
            ->select(
                'users.name',
                'users.email',
                'd_istributers.con1',
                'd_istributers.address',
                'd_istributers.con1',
                'd_istributers.pan',
                'd_istributers.gstn',
                'd_istributers.con2'
            )->where('users.id', $dIstributer)
            ->first();

        return Inertia::render('Distributer/edit', compact('distributor'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DIstributer $dIstributer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DIstributer $dIstributer)
    {
        //
    }
}
