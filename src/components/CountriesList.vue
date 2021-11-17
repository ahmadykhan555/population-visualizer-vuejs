<template>
  <div class="flex text-left px-1 mb-3">
    <h3 class="flex-1 font-bold uppercase">Country</h3>
    <h3 class="font-bold uppercase">Population</h3>
  </div>
  <div v-if="selectedForComparison.length">
    <h3 class="font-extrabold text-lg text-left px-2 mt-3">Selected</h3>
    <div class="overflow-y-auto max-h-80">
      <country-list-item
        @countryItemSelected="handleCountrySelected($event, false)"
        v-for="(country, index) in selectedForComparison"
        :key="`country-list-item-${country.code}`"
        :country="{ ...country, index }"
      ></country-list-item>
    </div>
  </div>

  <div v-if="countries.length">
    <h3 class="font-extrabold text-lg text-left px-2 mt-3">All</h3>
    <div class="overflow-y-auto" :style="{ maxHeight: 'calc(100vh - 50px)' }">
      <country-list-item
        @countryItemSelected="handleCountrySelected($event, true)"
        v-for="(country, index) in countries"
        :key="`country-list-item-${country.code}`"
        :country="{ ...country, index }"
      ></country-list-item>
    </div>
  </div>
</template>

<script>
import CountryListItem from "./CountryListItem.vue";
export default {
  components: {
    CountryListItem,
  },
  emits: ["countryItemSelected"],
  props: {
    countries: {
      type: Array,
      default: () => [],
    },
    selectedForComparison: {
      type: Array,
      default: () => [],
    },
  },
  setup(_, ctx) {
    const handleCountrySelected = ({ country }, selected) => {
      ctx.emit("countryItemSelected", { country, selected });
    };
    return { handleCountrySelected };
  },
};
</script>

<style>
</style>