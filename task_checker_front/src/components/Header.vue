<script setup>
import CheckAll from 'vue-material-design-icons/CheckAll.vue';

</script>

<template>
  <div class="header">
    <CheckAll class="header_icon" fontsize="large" />
    <span class="header-title">Task Checker</span>
  </div>
</template>


<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
}

.header_icon {
  color: rgb(170, 1, 1);
}

.header_title {
  font-size: 25px;
  color: rgb(70, 70, 70);
  font-weight: bold;
  margin-left: 10px;
}
</style>
