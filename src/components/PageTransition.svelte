<script>
    import { fly } from 'svelte/transition';
    export let refresh = '';
    console.log(refresh)
  </script>
  
  {#key refresh}
    <div
      in:fly="{{ y: -50, duration: 250, delay: 300 }}">
      <slot/>
    </div>
  {/key}