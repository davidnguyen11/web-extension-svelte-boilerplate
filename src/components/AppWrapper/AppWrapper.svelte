<script lang="ts">
  import type { DayPeriod } from '../../type/index.type';

  export let period: DayPeriod = 'morning';

  const imageUrl = `url(images/${period}.png)`;
</script>

<div role="main" style={`background-image: ${imageUrl}`} class="root">
  <slot />
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
</style>
