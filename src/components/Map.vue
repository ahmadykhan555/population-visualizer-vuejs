<template>
  <div class="h-full w-full border-box" id="map-conatiner"></div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { mapInit } from "../helpers/mapbox";
export default {
  setup() {
    onMounted(() => mapInit("map-conatiner"));
  },
};
</script>

<style>
</style>