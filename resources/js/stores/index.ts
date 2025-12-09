import { defineStore } from 'pinia';
import { ref } from 'vue';

// Dashboard Store
export const useDashboardStore = defineStore(
    'modules/dashboard',
    () => {
        // State
        const counter = ref(0);

        // Actions
        const increment = () => {
            counter.value++;
        };

        const decrement = () => {
            counter.value--;
        };

        const reset = () => {
            counter.value = 0;
        };

        return {
            // State
            counter,
            // Actions
            increment,
            decrement,
            reset,
        };
    },
    {
        // Enable/Disable persistence for this store
        persist: false,
    },
);
