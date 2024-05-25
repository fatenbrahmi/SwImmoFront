<template>
  <CChartPie :data="chartData" />
</template>

<script>
import { CChartPie } from '@coreui/vue-chartjs';

export default {
  components: {
    CChartPie
  },
  props: {
    chartData: {
      type: Object,
      required: true
    }
  }
}
</script>
