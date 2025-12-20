// import type { App } from 'vue';

/**
 * Dashboard module setup
 * Called during app initialization before mounting
 *
 * NOTE: Navigation registration has been moved to backend DashboardServiceProvider.
 */
export function setup(/* app: App */) {
    console.debug('Dashboard module loaded');
}

/**
 * Dashboard module after mount logic
 * Called after the app has been mounted
 */
export function afterMount(/* app: App */) {
    console.debug('Dashboard module after mount logic executed');
}
