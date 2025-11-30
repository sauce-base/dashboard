<?php

use Illuminate\Support\Facades\Route;
use Modules\Dashboard\Http\Controllers\DashboardController;

Route::group(['middleware' => [
    'auth',
    'verified',
    'role:admin|user',
]], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');
});
