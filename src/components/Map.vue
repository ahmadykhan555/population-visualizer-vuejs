<template>
  <div class="h-96 overflow-hidden w-full border-box" id="map-conatiner"></div>
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