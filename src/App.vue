<template>
  <div>
    <nav>
      <router-link to="/" active-class="link--active" exact>Homeへ移動</router-link>
      <router-link to="/users" active-class="link--active" exact>Usersへ移動</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.link--active {
  font-size: 20px;
}
</style>
