<template>
  <q-layout view="hHh lpR fFf">

<q-header elevated class="bg-primary text-white" height-hint="98">
  <q-toolbar>
    <q-toolbar-title>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>
      Make your daily easier
    </q-toolbar-title>
  </q-toolbar>

  <q-tabs align="left">
    <q-route-tab to="/menu" label="menu" />
    <q-route-tab to="/" label="tasks" />
    <q-route-tab to="/notes" label="notes" />
  </q-tabs>
</q-header>

<q-page-container>
  <router-view />
</q-page-container>

</q-layout>
</template>

<script setup lang="ts">

</script>
