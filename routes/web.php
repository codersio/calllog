<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AmcController;
use App\Http\Controllers\SmsController;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\DelarController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\IncomeController;
use App\http\Controllers\MasterController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\ProductController;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RolsAndPermission;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\QuotationController;
use App\Http\Controllers\SparePartController;
use App\Http\Controllers\TimesheetController;
use App\Http\Controllers\DailyStatusController;
use App\Http\Controllers\DIstributerController;
use App\Http\Controllers\HolidayWorkController;
use App\Http\Controllers\ServiceCenterController;
use App\Http\Controllers\CallAllocationController;
use App\Http\Controllers\WarrantyExtendController;
use App\Http\Controllers\LeaveManagementController;
use App\Http\Controllers\NotificationAllController;
use App\Http\Controllers\ProductCategoryController;
use Flasher\Prime\Test\Constraint\NotificationCount;
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/', [AdminController::class, 'Dashboard']);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::middleware('check_permission')->group(function () {


        Route::get('/employees', [EmployeeController::class, 'index'])->name('employees');
        Route::get('/employees-create', [EmployeeController::class, 'create'])->name('employees-create');
        Route::post('/employees-store', [EmployeeController::class, 'store']);
        Route::get('/employees-edit/{id}', [EmployeeController::class, 'edit'])->name('employees-edit');
        Route::post('/employees-update/{id}', [EmployeeController::class, 'update']);
        Route::get('/employees-destroy/{id}', [EmployeeController::class, 'destroy']);
        Route::get('/projects', [ProjectController::class, 'index'])->name('projects');
        Route::get('/projects-create', [ProjectController::class, 'create']);
        Route::post('/projects-store', [ProjectController::class, 'store']);
        Route::get('/projects-edit/{id}', [ProjectController::class, 'edit']);
        Route::post('/projects-update/{id}', [ProjectController::class, 'update']);
        Route::get('/projects-delete/{id}', [ProjectController::class, 'destroy']);
        Route::get('/projects-show/{id}', [ProjectController::class, 'show']);



        Route::get('/projects-task', [ProjectController::class, 'Task']);
        Route::get('/task-create/', [ProjectController::class, 'taskCreate']);



        Route::get('/task-category/', [ProjectController::class, 'Tskcategory']);










        Route::get('/leave-type', [LeaveManagementController::class, 'leavType']);
        Route::post('/leave-store', [LeaveManagementController::class, 'leaveStore']);
        Route::post('/leave-update/{id}', [LeaveManagementController::class, 'leaveUpdate']);



        Route::get('/leave-index', [LeaveManagementController::class, 'leave']);
        Route::get('/leave-create', [LeaveManagementController::class, 'leavecreate']);



        Route::get('/leave-store-edit/{id}', [LeaveManagementController::class, 'leaveEdit']);



        Route::get('/holi-day', [TimesheetController::class, 'Holidayindex']);
        Route::post('/holi-store', [TimesheetController::class, 'Holiday']);

        Route::post('/task-update/{id}', [ProjectController::class, 'Taskupdate']);

        Route::get('/task-delete/{id}', [ProjectController::class, 'Taskdestroy']);
    });

    Route::post('/timesheets-status', [TimesheetController::class, 'Statuschange']);
    Route::get('/getProjectTasks', [DailyStatusController::class, 'getProjectTasks'])->name('getProjectTasks');
    Route::post('/leave-approve/{id}', [LeaveManagementController::class, 'leaveStatusApprove']);
    Route::post('/leave-reject/{id}', [LeaveManagementController::class, 'leaveStatusReject']);
    Route::post('/leave-store-data', [LeaveManagementController::class, 'leavestoredata']);
    Route::post('/leave-store-update/{id}', [LeaveManagementController::class, 'leaveUpdatePost']);
    Route::get('/leave-store-delete/{id}', [LeaveManagementController::class, 'leaveDeletes']);
    Route::post('/holi-update/{id}', [TimesheetController::class, 'HolidayUpdate']);
    Route::get('/holi-delete/{id}', [TimesheetController::class, 'DeleteHoliday']);
    Route::get('/holidays', [ReportController::class, 'reportView']);
    Route::get('/holidays-fetch', [TimesheetController::class, 'Holidayfetch']);
    Route::get('/task-edit/{id}', [ProjectController::class, 'Taskedit']);
    Route::get('/daily-status', [DailyStatusController::class, 'index'])->name('daily-status');
    Route::get('/timesheetemp/{week}/{id}', [EmployeeController::class, 'EmployeeIdtime']);
    Route::get('/timesheetemp-employee/{id}', [EmployeeController::class, 'fetchidwithemployee']);
    Route::post('/timesheetemp-employee-status/{id}', [EmployeeController::class, 'Statuschange']);
    Route::get('/holiday-assign/{id}', [EmployeeController::class, 'holidayAssignd']);
    Route::post('/assign-holiday-work', [HolidayWorkController::class, 'store']);
    Route::put('/update-holiday-work/{id}', [HolidayWorkController::class, 'update']);
    Route::delete('/delete-holiday-work/{id}', [HolidayWorkController::class, 'destroy']);
});
Route::post('/task-category-store/', [ProjectController::class, 'TaskcategoryStore']);

Route::get('/task-category-delete/{id}', [ProjectController::class, 'TaskcategoryDestroy']);
// Route::get('projects', [AdminController::class, 'countProject']);
Route::get('/project-task-assign', [ProjectController::class, 'Taskassign']);
Route::post('/project-task-status/{id}', [ProjectController::class, 'changestatus']);
Route::get('/reports', [ReportController::class, 'index']);
Route::get('/reports-get', [ReportController::class, 'reportView'])->name('reports-get');
Route::post('/task-store', [ProjectController::class, 'taskStore']);
Route::get('/timesheets/{week}', [TimesheetController::class, 'index']);

Route::get('/timesheets/{timesheet}', [TimesheetController::class, 'show']);
Route::put('/timesheets/{timesheet}', [TimesheetController::class, 'update']);
Route::delete('/timesheets/{timesheet}', [TimesheetController::class, 'destroy']);
Route::get('/leave-delete/{id}', [LeaveManagementController::class, 'leaveDelete']);
Route::get('/roles-permission', [RolsAndPermission::class, 'Permmissions']);
Route::post('/roles-permission-store', [RolsAndPermission::class, 'store']);
Route::get('/roles-permission-details', [RolsAndPermission::class, 'Roles']);
Route::get('/roles-permission-edit/{id}', [RolsAndPermission::class, 'edit']);
Route::post('/roles-permission-update/{id}', [RolsAndPermission::class, 'update']);
Route::get('/dashboard', [AdminController::class, 'Dashboard'])->name('dashboard');
Route::get('/unauthorized', [RolsAndPermission::class, 'unauthorized'])->name('unauthorized');
Route::get('notif', [AdminController::class, 'notif'])->name('notif');

require __DIR__ . '/auth.php';
Route::post('/timesheets-store', [TimesheetController::class, 'store']);
Route::get('/timesheets-time', [DailyStatusController::class, 'tasktime']);
// Route::get('/timesheets-time/{taskid}', [DailyStatusController::class, 'tasktime']);
Route::get('/csrf-token', function () {
    return ['csrf_token' => csrf_token()];
});
Route::get('/test', [TestController::class, 'index'])->name('test');
// Route::get('/trigger-status-submit', function () {
//     Artisan::call('status:submit');
//     return 'Status submission triggered.';
// });

Route::get('permission_create', [RolsAndPermission::class, 'permission_create']);
Route::post('readta/{id}', [AdminController::class, 'markAsRead']);
Route::get('getNotificationsWithDetails', [AdminController::class, 'getUserNotificationsWithProject']);
Route::get('/reports/export', [ReportController::class, 'export'])->name('report.export');
Route::post('updateEstimateHours/{id}', [AdminController::class, 'updateEstimateHours'])->name('updateEstimateHours');
Route::post('updateEstimateemp/{id}', [AdminController::class, 'TaskAssignUpdate'])->name('TaskAssignUpdate');
Route::post('/check-leave-days', [LeaveManagementController::class, 'checkLeaveDays']);
Route::get('/getProjectTasksEmployess/{id}', [LeaveManagementController::class, 'getProjectTasksEmployess']);
Route::get('/timesheets/{week}/{id}', [TimesheetController::class, 'employeeindex']);
Route::get('/timesheets-time/{id}', [DailyStatusController::class, 'employeetasktime']);
Route::get('/holiday-details/', [HolidayWorkController::class, 'HolidayAssign']);
Route::get('/notifications-get/', [NotificationAllController::class, 'Notification']);
Route::get('/taskstatus/', [ProjectController::class, 'TaskStatus']);
//Route::get('/task-status', [TaskStatusController::class, 'index']);
Route::post('/task-status/store', [ProjectController::class, 'taskstatusstore']);
Route::put('/task-status/update/{id}', [ProjectController::class, 'taskstatuupdate']);
Route::delete('/task-status/delete/{id}', [ProjectController::class, 'taskstatudestroy']);
Route::post('/task-category-update/{id}', [ProjectController::class, 'TaskcategoryUpdate']);
Route::get('/project-tasks/{id}/total-hours', [ProjectController::class, 'getTotalTaskHours']);



Route::post('/phonepe/initiate', [\App\Http\Controllers\PhonePeController::class, 'phonePe'])->name('phonepe.initiate');
Route::get('/phonepe/callback', [\App\Http\Controllers\PhonePeController::class, 'response'])->name('phonepe.callback');
// routes/api.php (if you're using API routes)
Route::get('/timesheets-delete/{id}', [TimesheetController::class, 'destroyTime']);
Route::get('/totalworkingtime', [AdminController::class, 'TotalTime']);
Route::get('/assign-employee', [ReportController::class, 'AssignEmployee']);
Route::get('/assign-employeeproject', [ProjectController::class, 'proassignemployess']);
Route::post('/approvetime/{id}', [EmployeeController::class, 'ApproveStatuschange']);
Route::post('/rejectapprovetime/{id}', [EmployeeController::class, 'RejectStatuschange']);


Route::resource('/distributers', DIstributerController::class);
Route::resource('/delars', DelarController::class);
Route::resource('/service-centers', ServiceCenterController::class);
Route::resource('/products-category', ProductCategoryController::class);
Route::resource('/products', ProductController::class);
Route::resource('/spare-part', SparePartController::class);
Route::resource('/Call-Allocation', CallAllocationController::class);
Route::get('/Get-Service/{id}', [CallAllocationController::class, 'getDetails']);
Route::get('/Get-Distributer/{id}', [CallAllocationController::class, 'getDetails2']);
Route::resource('/Warranty-Extend', WarrantyExtendController::class);
Route::resource('/Client', ClientController::class);
Route::get('/archiveclient', [ClientController::class, 'archiveclient']);
Route::resource('/Employee', EmployeesController::class);

Route::get('/archiveemployee', [EmployeesController::class, 'archiveemployee']);
Route::get('/Employee-Archive/{id}', [EmployeesController::class, 'addarchive']);
Route::get('/Archive/{id}', [ClientController::class, 'addarchive']);
Route::resource('/Product-List', MasterController::class);
Route::get('/archiveproduct', [MasterController::class, 'archiveproduct']);
Route::get('/Archive-Product/{id}', [MasterController::class, 'addarchive']);

Route::get('/brands', [BrandController::class, 'index']);      // Get all brands
Route::post('/brands', [BrandController::class, 'store']);
Route::delete('/brands/{id}', [BrandController::class, 'destroy']);

Route::get('/categories', [CategoryController::class, 'index']);      // Get all brands
Route::post('/categories', [CategoryController::class, 'store']);
Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

Route::get('/unit', [UnitController::class, 'index']);      // Get all brands
Route::post('/unit', [UnitController::class, 'store']);
Route::delete('/unit/{id}', [UnitController::class, 'destroy']);
Route::get('/sales', [SaleController::class, 'index'])->name('sales.index');
Route::get('/sales/add', [SaleController::class, 'create'])->name('sales.create');
Route::post('/sales/store', [SaleController::class, 'store'])->name('sales.store');
Route::get('/sales/{id}/edit', [SaleController::class, 'edit'])->name('sales.edit');
Route::put('/sales/{id}/edit', [SaleController::class, 'update']);
Route::delete('/sales/{id}/delete', [SaleController::class, 'destroy'])->name('sales.destroy');
Route::resource('purchase',PurchaseController::class);
Route::resource('stocks',StockController::class);
Route::resource('/amc', AmcController::class);
Route::resource('/complaint', ComplaintController::class);
Route::resource('/Quotation',QuotationController::class);
Route::get('/Get-Customer/{id}', [QuotationController::class, 'getCustomer']);
Route::get('/gettaxoptions', [QuotationController::class, 'gettaxoptions']); 
Route::get('/getproduct', [QuotationController::class, 'getproduct']); 
Route::resource('/services', ServiceController::class);
Route::resource('/expense', ExpenseController::class);
Route::resource('/income', IncomeController::class);
Route::get('/income/{id}/edit', [IncomeController::class, 'edit']);

Route::get('amc-expense', [IncomeController::class, 'tblexpensecreate']);
Route::get('amc-expense-index', [IncomeController::class, 'tblindex']);
Route::post('amc-expense-create', [IncomeController::class, 'tblexpensestore']);
Route::get('amc-expense/{id}', [IncomeController::class, 'tblexpenseedit']);
Route::post('amc-expense-update/{id}', [IncomeController::class, 'tblexpenseupdate']);
Route::delete('amc-expense-delete/{id}', [IncomeController::class, 'tblexpensedelete']);
Route::resource('tasks',TaskController::class);
Route::get('/tax', [AccountController::class, 'tax']);
Route::post('/tax-store', [AccountController::class, 'taxstore']);
Route::put('/tax-update/{tax}', [AccountController::class, 'taxupdate']);
Route::delete('/tax-delete/{tax}', [AccountController::class, 'taxdestroy']);
Route::get('/tasktype', [AccountController::class, 'taskType']);
Route::post('/tasktype-store', [AccountController::class, 'tasktypestore']);
Route::put('/tasktype-update/{tasktype}', [AccountController::class, 'tasktypeupdate']);
Route::delete('/tasktype-delete/{tasktype}', [AccountController::class, 'tasktypedestroy']);
Route::get('/interval', [AccountController::class, 'interval']);
Route::post('/interval-store', [AccountController::class, 'intervalstore']);
Route::put('/interval-update/{interval}', [AccountController::class, 'intervalupdate']);
Route::delete('/interval-delete/{interval}', [AccountController::class, 'intervaldestroy']);
Route::get('/complaint-reports',[ReportController::class,'complainReports']);
Route::get('/sales-reports',[ReportController::class,'salesReports']);
Route::get('/service-reports',[ReportController::class,'serviceReports']);
Route::get('/quotation-print/{id}', [QuotationController::class, 'Print']);
Route::get('/complaint-print/{id}',[ComplaintController::class,'Print']);