<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('terminal')->group( function(){
    Route::get('/', function(){
        if(DB::connection()->getDatabaseName()){
            echo "Connected to database ".DB::connection()->getDatabaseName();
        }
        //return redirect('/terminal/home');
    });
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Auth::routes();
});

Route::get('{reactRoutes}', function () {
    return view('welcome');
})->where('reactRoutes', '^((?!api|terminal).)*$');


