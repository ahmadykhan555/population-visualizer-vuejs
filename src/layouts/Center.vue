<template>
  <div class="flex-1 h-full w-full flex-col flex ml-10">
    <div class="flex-1">
      <map-component></map-component>
    </div>
    <div class="flex-1">
      <graph-view></graph-view>
    </div>
  </div>
</template>
<script>
import MapComponent from "../components/Map.vue";
import GraphView from "../components/GraphView.vue";
export default {
  components: {
    MapComponent,
    GraphView,
  },
};
</script>