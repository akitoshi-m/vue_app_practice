<template>
  <div>
    <h2>
      Users
    </h2>
    <h3>
      User No.{{ id }}
    </h3>
    <router-link to="/users/1">User1へ</router-link>
    <router-link to="/users/2">User2へ</router-link>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>
    <br>
    <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }}">次のユーザー(nameで指定)</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  }
}
</script>
