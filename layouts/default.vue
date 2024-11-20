<script setup lang="ts"></script>

<template>
  <div>
    Layout: default
    <!-- 返回首頁的連結 -->
    <button type="button" class="btn btn-primary" @click="$router.push('/')">
      返回首頁
    </button>
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
