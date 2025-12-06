<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar';

import NavMain from '@modules/Dashboard/resources/js/components/NavMain.vue';
import NavUser from '@modules/Dashboard/resources/js/components/NavUser.vue';
import TenantSwitcher from '@modules/Dashboard/resources/js/components/TenantSwitcher.vue';
import { SquareTerminal } from 'lucide-vue-next';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

import { useAuthStore } from '@modules/Auth/resources/js/stores';
import { trans } from 'laravel-vue-i18n';
import { computed } from 'vue';

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
  variant: 'inset',
});

const authStore = useAuthStore();

const data = computed(() => ({
  navMain: [
    {
      title: trans('Dashboard'),
      url: '/dashboard',
      icon: SquareTerminal,
      isActive: route().current('dashboard'),
    },
  ],
}));
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TenantSwitcher />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser v-if="authStore.user" :user="authStore.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
