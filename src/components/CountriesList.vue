<template>
  <div class="flex text-left px-3 mb-3">
    <h3 class="flex-1 font-bold uppercase">Country</h3>
    <h3 class="font-bold uppercase">Population</h3>
  </div>
  <div class="overflow-y-auto" :style="{ maxHeight: 'calc(100% - 50px)' }">
    <country-list-item
      @countryItemSelected="handleCountrySelected"
      v-for="(country, index) in countries"
      :key="`country-list-item-${country.code}`"
      :country="{ ...country, index }"
    ></country-list-item>
  </div>
</template>

<script>
import CountryListItem from "./CountryListItem.vue";
export default {
  components: {
    CountryListItem,
  },
  props: {
    countries: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const handleCountrySelected = ({ country, selected }) => {
      console.log({ country, selected });
    };
    return {
      handleCountrySelected,
    };
  },
};
</script>

<style>
</style>