<template>
  <div>
    <CChartBar :data="chartData" />
  </div>
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs';

export default {
  components: { CChartBar },
  props: {
    chartData: {
      type: Object,
      required: true
    }
  }
};
</script>
