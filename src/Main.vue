<template>
  <div class="h-full box-border flex p-10 w-full">
    <Aside>
      <countries-list
        @countryItemSelected="handleCountrySelected"
        :countries="populationData"
        :selected-for-comparison="selectedForComparison"
      >
      </countries-list>
    </Aside>
    <Center></Center>
  </div>
</template>

<script>
import Aside from "./layouts/Aside.vue";
import Center from "./layouts/Center.vue";
import { fetchCountriesPopulationData } from "./helpers/populationApi";
import { ref, computed } from "@vue/reactivity";
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
    const selectedForComparison = ref([]);
    const fetchData = async () => {
      const _populationData = await fetchCountriesPopulationData();
      populationData.value = _populationData.slice(46).map((country) => ({
        ...country,
        code: country.code,
        name: country.country,
        latestPopulationCount:
          country.populationCounts[country.populationCounts.length - 1].value,
      }));
    };
    fetchData();

    const sanitizedAndSortedPopulationData = computed(() => {
      console.log("computed sanitized");
      return populationData.value.sort(
        (a, b) => b.latestPopulationCount - a.latestPopulationCount
      );
    });

    const handleCountrySelected = ({ country, selected }) => {
      console.log({ msg: "fromMian", country, selected });
      selected ? moveCountryToSelected(country) : moveCountryToAll(country);
    };

    const moveCountryToSelected = (country) => {
      debugger; // eslint-disable-line no-debugger
      selectedForComparison.value.push({ ...country });
      populationData.value.splice(country.index, 1);
    };

    const moveCountryToAll = (country) => {
      debugger; // eslint-disable-line no-debugger
      const indexInSelected = selectedForComparison.value.findIndex(
        (v) => v.code === country.code
      );
      if (indexInSelected > -1) {
        selectedForComparison.value.splice(indexInSelected, 1);
        populationData.value.push({ ...country });
      }
    };

    return {
      populationData: sanitizedAndSortedPopulationData,
      selectedForComparison,
      handleCountrySelected,
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
