<template>
  <div
    v-if="countryData"
    :key="`countries-item-${countryData.code}`"
    @click="handleCountryItemClick"
    class="py-6 my-2 rounded-lg cursor-pointer bg-white"
    :class="{
      'bg-green-100  ': isSelected,
    }"
  >
    <div class="flex text-left px-4">
      <p class="flex-1 font-bold">{{ countryData.name }}</p>
      <p
        class="py-1 px-2 rounded-lg text-xs bg-gray-300 box-border text-right"
        :style="{ width: '70px' }"
      >
        {{ countryData.recentPopulationCount }}
      </p>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "@vue/reactivity";
export default {
  props: ["country"],
  setup(props, ctx) {
    const isSelected = ref(false);
    const countryData = computed(() => {
      const recentPopulationCount =
        props.country.populationCounts[
          props.country.populationCounts.length - 1
        ].value;

      return {
        ...props.country,
        name: props.country.country,
        recentPopulationCount,
      };
    });

    const handleCountryItemClick = () => {
      isSelected.value = !isSelected.value;
      ctx.emit("countryItemSelected", {
        selected: isSelected.value,
        country: props.country,
      });
    };

    return {
      handleCountryItemClick,
      isSelected,
      countryData,
    };
  },
};
</script>