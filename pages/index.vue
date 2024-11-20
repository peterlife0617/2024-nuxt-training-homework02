<script setup lang="ts"></script>

<template>
  <div>
    首頁

    <ul>
      <li>
        <NuxtLink to="/">
          首頁
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/account/login/">
          登入
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/account/signup/">
          註冊
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/rooms">
          客房列表
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/rooms/123">
          客房詳細
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/rooms/123/booking">
          預約
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/booking/confirmation/123">
          預約成功/失敗
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user/123/profile">
          會員 - 修改資料
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user/123/order">
          會員 - 訂單查詢
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
