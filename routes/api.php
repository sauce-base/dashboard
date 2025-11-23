<?php

use Illuminate\Support\Facades\Route;
use Modules\Dashboard\Http\Controllers\DashboardController;

Route::middleware(['auth:sanctum'])->prefix('api/v1/dashboard')->group(function () {
    Route::apiResource('dashboard', DashboardController::class);
});
