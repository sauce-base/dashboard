<script setup lang="ts">
import AppLayout from '@modules/Navigation/resources/js/layouts/AppLayout.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
    title?: string;
    breadcrumbs?: Array<{
        label: string;
        url?: string;
    }>;
}>();
</script>

<template>
    <AppLayout :title="title" :breadcrumbs="breadcrumbs">
        <template v-if="$slots.header" #header>
            <slot name="header" />
        </template>
        <slot />
    </AppLayout>
</template>
