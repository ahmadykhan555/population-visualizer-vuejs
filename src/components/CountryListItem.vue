<template>
  <div
    v-if="country"
    @click="handleCountryItemClick($event, 'alpha')"
    class="py-6 my-2 rounded-lg cursor-pointer bg-white"
  >
    <div class="flex text-left px-4">
      <p class="flex-1 font-bold">
        {{ country.index + 1 }} {{ country?.name }}
      </p>
      <p
        class="py-1 px-2 rounded-lg text-xs bg-gray-300 box-border text-right"
        :style="{ minWidth: '70px' }"
      >
        {{ country.latestPopulationCount }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["country"],
  emits: ["countryItemSelected"],
  setup(props, ctx) {
    const isSelected = ref(false);

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
    };
  },
};
</script>