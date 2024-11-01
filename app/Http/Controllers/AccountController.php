<?php

namespace App\Http\Controllers;

use App\Models\Interval;
use App\Models\TaskType;
use App\Models\Tax;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function tax()
    {

        $tax = Tax::all();
        return Inertia::render('generalSetup/tax', compact('tax'));
    }



    // Show the form for creating a new tax
    // public function create()
    // {
    //     return view('taxes.create');
    // }

    // Store a newly created tax in the database
    public function taxstore(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'percent' => 'required|numeric',
        ]);

        Tax::create($request->all());

        return back();
    }

    // Show the form for editing an existing tax


    // Update the tax in the database
    public function taxupdate(Request $request, Tax $tax)
    {
        // dd($request->route('tax'));
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'amount' => 'required|numeric',
        // ]);

        $tax->update($request->only(['name', 'amount']));

        return back();
    }


    // Delete a tax from the database
    public function taxdestroy(Tax $tax)
    {
        $tax->delete();

        return back();
    }

    public function taskType()
    {

        $tasktype = TaskType::all();
        return Inertia::render('generalSetup/taskType', compact('tasktype'));
    }



    // Show the form for creating a new tax
    // public function create()
    // {
    //     return view('taxes.create');
    // }

    // Store a newly created tax in the database
    public function tasktypestore(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'status' => 'required',
        ]);

        TaskType::create($request->all());

        return back();
    }

    // Show the form for editing an existing tax


    // Update the tax in the database
    public function tasktypeupdate(Request $request, TaskType $tasktype)
    {
        // dd($request->route('tax'));
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'amount' => 'required|numeric',
        // ]);

        $tasktype->update($request->only(['name', 'status']));

        return back();
    }


    // Delete a tax from the database
    public function tasktypedestroy(TaskType $tasktype)
    {
        $tasktype->delete();

        return back();
    }

    public function interval()
    {
        $interval = Interval::all();
        return Inertia::render('generalSetup/interval', compact('interval'));
    }



    // Show the form for creating a new tax
    // public function create()
    // {
    //     return view('taxes.create');
    // }

    // Store a newly created tax in the database
    public function intervalstore(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'status' => 'required',
        ]);

        Interval::create($request->all());

        return back();
    }

    public function intervalupdate(Request $request, Interval $interval)
    {
        // dd($request->route('tax'));
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'amount' => 'required|numeric',
        // ]);

        $interval->update($request->only(['name', 'status']));

        return back();
    }


    // Delete a tax from the database
    public function intervaldestroy(Interval $interval)
    {
        $interval->delete();

        return back();
    }
}
