<template>
  <div class="h-full w-full border-box" id="map-conatiner"></div>
</template>

<script>
import { mapInit } from "../helpers/mapbox";
export default {
  mounted() {
    mapInit("map-conatiner");
  },
};
</script>

<style>
</style>