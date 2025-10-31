<?php

use Modules\Dashboard\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::resource('dashboard', DashboardController::class);
