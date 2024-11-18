<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Task;
use App\Models\TaskType;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::join('tbl_user','tbl_user.user_id','=','tasks.customer_id')
        ->join('tbl_user as a_user','a_user.user_id','=','tasks.employee_id')
        ->join('task_types','task_types.id','=','tasks.task_type_id')
        ->select('tasks.*','a_user.first_name as af_name','a_user.middle_name as am_name','a_user.last_name as al_name','tbl_user.first_name','tbl_user.middle_name','tbl_user.last_name')->get(); // Get tasks with related employees
        return Inertia::render('task/index', [
            'tasks' => $tasks,
        ]);
    }

    // Show the form for creating a new task
    public function create()
    {
        $employees = DB::table('tbl_user')->where('role','employee')->get();
        $customers = DB::table('tbl_user')->where('role','client')->get();
        $ttype = TaskType::where('status',1)->get();
        return Inertia::render('task/create', [
            'employees' => $employees,
            'customers'=>$customers,
            'ttypes'=>$ttype
        ]);
    }

    // Store a newly created task in storage
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'customer_id'=>'required',
            'task_type_id'=>'required',
            'assign_date'=>'required',
            'close_date'=>'required',
            'subject' => 'required',
            'employee_id' => 'required',
            'description' => 'required',
            'attachment' => 'required',
            'status' => 'required',
        ]);

        

        // Handle file upload
        if ($request->hasFile('attachment')) {
            $file = $request->file('attachment');
            $fileName = time() . '_' . $file->getClientOriginalName(); // Create a unique filename
            $file->move(public_path('attachments'), $fileName); // Move the file to the 'attachments' directory
            $validated['attachment'] = 'attachments/' . $fileName; // Save the path in the database
        }

        // Create the task
        Task::create($validated);

        // Redirect back to the index page
        return redirect()->route('tasks.index');
    }

    // Show the form for editing the specified task
    public function edit(Task $task)
    {
        $employees = DB::table('tbl_user')->where('role','employee')->get();
        $customers = DB::table('tbl_user')->where('role','client')->get();
        $ttype = TaskType::where('status',1)->get();
        return Inertia::render('task/edit', [
           'employees' => $employees,
            'customers'=>$customers,
            'ttypes'=>$ttype,
            'task'=>$task
        ]);
    }

    // Update the specified task in storage
    public function update(Request $request, Task $task)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'customer_id'=>'required',
            'task_type_id'=>'required',
            'assign_date'=>'required',
            'close_date'=>'required',
            'subject' => 'required',
            'employee_id' => 'required',
            'description' => 'required',
            'status' => 'required',
        ]);

        // Handle file upload
        if ($request->hasFile('attachment')) {
            // Delete the old attachment if it exists
            if ($task->attachment) {
                $oldFilePath = public_path($task->attachment);
                if (file_exists($oldFilePath)) {
                    unlink($oldFilePath); // Delete the old file
                }
            }

            $file = $request->file('attachment');
            $fileName = time() . '_' . $file->getClientOriginalName(); // Create a unique filename
            $file->move(public_path('attachments'), $fileName); // Move the new file
            $validated['attachment'] = 'attachments/' . $fileName; // Save the path in the database
        }

        // Update the task
        $task->update($validated);

        // Redirect back to the index page
        return redirect()->route('tasks.index');
    }

    // Remove the specified task from storage
    public function destroy(Task $task)
    {
        // Delete the attachment if it exists
        if ($task->attachment) {
            $oldFilePath = public_path($task->attachment);
            if (file_exists($oldFilePath)) {
                unlink($oldFilePath); // Delete the old file
            }
        }
        
        $task->delete(); // Delete the task

        return redirect()->route('tasks.index');
    }
}
