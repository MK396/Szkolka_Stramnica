<template>
  <Navbar />
  
  <router-view />

  </template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fcfdfc;
}
</style>