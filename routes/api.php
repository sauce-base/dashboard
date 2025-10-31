<?php

use Modules\Dashboard\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->prefix('api/v1/dashboard')->group(function () {
    Route::apiResource('dashboard', DashboardController::class);
});
