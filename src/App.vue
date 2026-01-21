<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <Navbar />
    <main class="pt-[80px] grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
