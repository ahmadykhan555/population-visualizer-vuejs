<template>
  <div class="h-full box-border flex p-10 w-full">
    <Aside>
      <countries-list :countries="populationData"> </countries-list>
    </Aside>
    <Center></Center>
  </div>
</template>

<script>
import Aside from "./layouts/Aside.vue";
import Center from "./layouts/Center.vue";
import { fetchCountriesPopulationData } from "./helpers/populationApi";
import { ref } from "@vue/reactivity";
import CountriesList from "./components/CountriesList.vue";
export default {
  name: "App",
  components: {
    Aside,
    Center,
    CountriesList,
  },

  setup() {
    const populationData = ref([]);

    const fetchData = async () => {
      console.log("Fetching countries data");
      const _populationData = await fetchCountriesPopulationData();
      populationData.value = _populationData.slice(46);
      console.log({ populationData: populationData.value });
    };
    fetchData();

    return {
      populationData,
    };
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

.mapboxgl-control-container {
  display: none;
}

* ::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
