<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Complaint;
use App\Models\Timesheet;
use App\Exports\ExcelExport;
use App\Models\Sale;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    public function index(Request $request)
    {
        // Get query parameters
        $startDate = $request->query('startDate');
        $endDate = $request->query('endDate');
        $projectTitle = $request->query('projectTitle');
        $employeeName = $request->query('employeeName');
        $taskName = $request->query('taskName'); // Get task name from query parameters
        // Set default date range to today if not provided
        if (!$startDate || !$endDate) {
            $startDate = now()->startOfDay()->toDateString(); // Start of today
            $endDate = now()->endOfDay()->toDateString(); // End of today
        }

        // Build the query
        $query = Timesheet::join('users', 'users.id', '=', 'timesheets.user_id')
            ->join('projects', 'projects.id', '=', 'timesheets.project_id')
            ->join('tasks', 'tasks.id', '=', 'timesheets.task_id')
            ->join('task_assigns', 'tasks.id', '=', 'task_assigns.task_id')
            ->select(
                'tasks.task_name',
                'projects.title',
                'timesheets.date',
                'timesheets.time_number',
                'timesheets.description',
                'users.name',
                'task_assigns.employee_hours'
            )
            ->whereBetween('timesheets.date', [$startDate, $endDate]);

        // Apply project title filter if provided
        if ($projectTitle) {
            $query->where('projects.title', 'like', '%' . $projectTitle . '%');
        }

        // Apply employee name filter if provided
        if ($employeeName) {
            $query->where('users.name', 'like', '%' . $employeeName . '%');
        }
        if ($taskName) {
            $query->where('tasks.task_name', 'like', '%' . $taskName . '%');
        }
        // Execute the query and get the results
        $timesheets = $query->distinct()->get();

        // Return the results as JSON
        return response()->json($timesheets);
    }

    public function reportView()
    {
        $user = Auth::user()->name;
        $userss = Auth::user();
        if ($userss) {
            // Ensure permissions are assigned and fetched correctly
            $user_type = $userss->getAllPermissions()->pluck('name')->toArray();
            // dd($permissions);
        }
        $usrrr = Auth::user()->id;
        $employee = User::join('employees', 'employees.user_id', '=', 'users.id')
            ->select('users.name')->get();
        $project = Project::all();
        $notif = Auth::user()->notifications;
        $tasks = Task::select('task_name')
            ->groupBy('task_name')
            ->get();
        //dd($tasks);
        return Inertia::render('reports/index', compact('employee', 'project', 'user', 'user_type', 'usrrr', 'notif', 'tasks'));
    }
    public function export(Request $request)
    {
        $sheets = new ExcelExport(json_decode($request->timesheets));
        return Excel::download($sheets, 'report.xlsx');
    }

    public function AssignEmployee()
    {

        $user = Auth::user()->name;
        $userss = Auth::user();
        if ($userss) {
            // Ensure permissions are assigned and fetched correctly
            $user_type = $userss->getAllPermissions()->pluck('name')->toArray();
            // dd($permissions);
        }
        $usrrr = Auth::user()->id;
        $employee = User::join('employees', 'employees.user_id', '=', 'users.id')
            ->select('users.name')->get();
        $project = Project::all();
        $notif = Auth::user()->notifications;
        $tasks = Task::select('task_name')
            ->groupBy('task_name')
            ->get();
        return Inertia::render('reports/employeehours', compact('project', 'user', 'user_type', 'usrrr', 'employee', 'tasks', 'notif'));
    }

    public function complainReports(Request $request)
    {
        // Retrieve query parameters for date filtering
        $start_date = $request->input('startDate');
        $end_date = $request->input('endDate');
        $client = $request->input('client');
        $option = $request->input('option');

        $complaintsQuery = Complaint::query();

        // Apply date filters only if the dates are valid
        if ($start_date) {
            $complaintsQuery->whereDate('date', '>=', $start_date);
        }
        if ($end_date) {
            $complaintsQuery->whereDate('date', '<=', $end_date);
        }
        if ($client && $client !== 'All') {
            $complaintsQuery->where('customer_id', $client);
        }
        if ($option && $option !== 'All') {
            $complaintsQuery->where('status', $option);
        }

        // Execute the query and group by month with count
        $complaints = $complaintsQuery->selectRaw('DATE_FORMAT(date, "%b-%Y") as month, COUNT(*) as count')
            ->groupBy('month')
            ->orderBy('month') // Order by month for consistent results
            ->get();


        $clients = DB::table('tbl_user')->get(); // Ensure you use a different variable name for clients
        // Return the complaints data to the Inertia view
        return Inertia::render('reports/complainReports', [
            'datas' => $complaints,
            'clients' => $clients,
            'startDate' => $start_date,
            'endDate' => $end_date,
            'client' => $client,
            'option' => $option,
        ]);
    }



    public function salesReports(Request $request)
    {
        $start_date = $request->input('startDate');
        $end_date = $request->input('endDate');
        $client = $request->input('client');
        $option = $request->input('option');

        $complaintsQuery = Sale::query();

        // Apply date filters only if the dates are valid
        if ($start_date) {
            $complaintsQuery->whereDate('date', '>=', $start_date);
        }
        if ($end_date) {
            $complaintsQuery->whereDate('date', '<=', $end_date);
        }
        if ($client && $client !== 'All') {
            $complaintsQuery->where('customer_id', $client);
        }
        if ($option && $option !== 'All') {
            $complaintsQuery->where('status', $option);
        }

        // Execute the query and group by month with count
        $complaints = $complaintsQuery->selectRaw('DATE_FORMAT(date, "%b-%Y") as month, COUNT(*) as count')
            ->groupBy('month')
            ->orderBy('month') // Order by month for consistent results
            ->get();


        $clients = DB::table('tbl_user')->get();

        return Inertia::render('reports/salesReports',[
            'datas' => $complaints,
            'clients' => $clients,
            'startDate' => $start_date,
            'endDate' => $end_date,
            'client' => $client,
            'option' => $option,
        ]);
    }
    public function serviceReports(Request $request)
    {
        $start_date = $request->input('startDate');
        $end_date = $request->input('endDate');
        $client = $request->input('client');
        $option = $request->input('option');

        $complaintsQuery = Service::query();

        // Apply date filters only if the dates are valid
        if ($start_date) {
            $complaintsQuery->whereDate('service_date', '>=', $start_date);
        }
        if ($end_date) {
            $complaintsQuery->whereDate('service_date', '<=', $end_date);
        }
        if ($client && $client !== 'All') {
            $complaintsQuery->where('customer_id', $client);
        }
        if ($option && $option !== 'All') {
            $complaintsQuery->where('status', $option);
        }

        // Execute the query and group by month with count
        $complaints = $complaintsQuery->selectRaw('DATE_FORMAT(service_date, "%b-%Y") as month, COUNT(*) as count')
            ->groupBy('month')
            ->orderBy('month') // Order by month for consistent results
            ->get();


        $clients = DB::table('tbl_user')->get();
        return Inertia::render('reports/servicesReports',[
            'datas' => $complaints,
            'clients' => $clients,
            'startDate' => $start_date,
            'endDate' => $end_date,
            'client' => $client,
            'option' => $option,
        ]);
    }
}
