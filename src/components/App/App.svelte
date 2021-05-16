<script lang="ts">
  import type { DayPeriod } from '../../type/index.type';
  import AppWrapper from '../AppWrapper/AppWrapper.svelte';
  import DateTime from '../DateTime/DateTime.svelte';

  export let date: string;
  export let time: string;
  export let period: DayPeriod;

</script>

<AppWrapper {period}>
  <div class="root__wrapper">
    <DateTime {date} {time} {period} />
  </div>
</AppWrapper>

<style>
  .root__wrapper {
    width: 100%;
    text-align: center;
  }
</style>
