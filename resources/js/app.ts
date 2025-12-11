// import type { App } from 'vue';
import { useNavigationStore } from '@modules/Navigation/resources/js/stores';
import { SquareTerminal } from 'lucide-vue-next';

/**
 * Dashboard module setup
 * Called during app initialization before mounting
 */
export function setup(/* app: App */) {
    console.debug('Dashboard module loaded');

    const navigationStore = useNavigationStore();

    // Register Dashboard navigation item
    navigationStore.addItem({
        id: 'dashboard',
        type: 'link',
        title: 'Dashboard',
        url: route('dashboard'),
        icon: SquareTerminal,
        isActive: () => route().current('dashboard'),
    });
}

/**
 * Dashboard module after mount logic
 * Called after the app has been mounted
 */
export function afterMount(/* app: App */) {
    console.debug('Dashboard module after mount logic executed');
}
