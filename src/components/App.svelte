<script lang="ts">
  import { getPalette } from '../lib/get-palette';
  import type { DayPeriod } from '../lib/type/index.type';

  export let date: string;
  export let time: string;
  export let period: DayPeriod;

  const palette = getPalette(period);
</script>

<div style={`background-image: url('images/${period}.png')`} class="root" id="root">
  <div class="root__wrapper">
    <h2 style={`color: ${palette}`} class="root__wrapper__h2">
      {date}
    </h2>
    <h3 style={`color: ${palette}`} class="root__wrapper__h3">
      {time}
    </h3>
  </div>
</div>

<style>
  .root {
    height: 100px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .root__wrapper {
    width: 100%;
    text-align: center;
  }

  .root__wrapper__h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .root__wrapper__h3 {
    margin-top: 5px;
    margin-bottom: 0;
  }
</style>
