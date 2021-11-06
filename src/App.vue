<template>
  <div class="h-full box-border flex p-10 w-full">
    <Aside>Aside</Aside>
    <Center>Center</Center>
  </div>
</template>

<script>
import Aside from "./layouts/Aside.vue";
import Center from "./layouts/Center.vue";
export default {
  name: "App",
  components: {
    Aside,
    Center,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2c3e501a;
}
body {
  font-size: 16px;
}
</style>
