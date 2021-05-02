<template>
  <div>
    <router-view name="header"></router-view>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
.link--active {
  font-size: 20px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
