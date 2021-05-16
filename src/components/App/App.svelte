<script lang="ts">
  import { getPalette } from '../../lib/get-palette';
  import type { DayPeriod } from '../../type/index.type';
  import AppWrapper from '../AppWrapper/AppWrapper.svelte';
  import DateTime from '../DateTime/DateTime.svelte';

  export let date: string;
  export let time: string;
  export let period: DayPeriod;

  const palette = getPalette(period);
</script>

<AppWrapper {period}>
  <div class="root__wrapper">
    <DateTime {date} {time} {palette} />
  </div>
</AppWrapper>

<style>
  .root__wrapper {
    width: 100%;
    text-align: center;
  }
</style>
