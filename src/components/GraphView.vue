<template>
  <div class="h-full w-full">
    <canvas id="myChart" :style="{ maxHeight: '90%' }" class="w-full"></canvas>
  </div>
</template>


<script>
import { inject, onMounted, computed, watch } from "vue";
import { Chart, registerables } from "chart.js";
export default {
  components: {},
  setup() {
    const selectedCountries = inject("selectedCountries");
    let chart = null;

    watch(
      selectedCountries,
      (updated) => {
        const data = updated.map((country) => country.latestPopulationCount);
        const labels = updated.map((country) => country.name);
        console.log({ data, labels });
        updateChart({ data, labels });
      },
      { deep: true }
    );
    const _selected = computed(() => {
      return [...selectedCountries];
    });

    const createChart = ({ data, labels }) => {
      const ctx = document.getElementById("myChart").getContext("2d");
      const c = new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Population Comparator",
              data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      return c;
    };

    const updateChart = ({ data, labels }) => {
      if (chart && chart.data) {
        chart.data.datasets[0] = {
          ...chart.data.datasets[0],
          data,
        };
        chart.data.labels = labels;
        chart.update();
      }
    };

    onMounted(() => {
      Chart.register(...registerables);
      chart = createChart({
        data: [1200, 1129, 375, 582, 12, 223],
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      });
    });
    return { selectedCountries, _selected };
  },
};
</script>
