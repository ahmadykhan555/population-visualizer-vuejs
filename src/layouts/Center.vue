<template>
  <div class="flex-1 h-full w-full flex-col flex ml-10">
    <div class="h-3/6">
      <map-component></map-component>
    </div>
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import MapComponent from "../components/Map.vue";
export default {
  components: {
    MapComponent,
  },
};
</script>