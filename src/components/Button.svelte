<script>
  export let content;
  export let gradient;
</script>

<!-- <div class="button-container"> -->
<button class="btn" style="background-image: linear-gradient({gradient.direction}, {gradient.colors.join(', ')});" aria-pressed="false">
  <!-- <div class="icon"> -->
  <slot />
  <!-- </div> -->
  {content}
</button>

<!-- </div> -->
<style lang="scss" scoped>
  .btn {
    all: unset;
    padding: 1em;
    border-radius: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    background-size: 100% 100%;
    &:hover {
      background-size: 200% 200%;
      background-position-x: 100%;
    }
  }
</style>
