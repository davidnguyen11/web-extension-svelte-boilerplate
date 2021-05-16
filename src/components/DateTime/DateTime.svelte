<script lang="ts">
  export let date: string;
  export let time: string;
  export let palette: string;
</script>

<h2 style={`color: ${palette}`} class="datetime__h2">
  {date}
</h2>
<h3 style={`color: ${palette}`} class="datetime__h3">
  {time}
</h3>

<style>
  .datetime__h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .datetime__h3 {
    margin-top: 5px;
    margin-bottom: 0;
  }
</style>
