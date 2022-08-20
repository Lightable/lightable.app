<script>
  export let content
  export let gradient
  export let redirect
  export let text = false
  const handleRedir = () => {
    window.open(redirect)
  }
</script>

<button class="btn ns" style={!text ? `background-image: linear-gradient(${gradient?.direction}, ${gradient?.colors.join(", ")});` : ""} on:click={handleRedir} {text}>
  <slot />
  {content || "Button"}
</button>

<style lang="scss" scoped>
  .btn {
    all: unset;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    background-size: 100% 100%;
    &[text="false"] {
      padding: 1em;
      border-radius: 0.5em;
    }
    &:hover {
      &[text="false"] {
        background-size: 200% 200%;
        background-position-x: 100%;
      }
      &[text="true"] {
        color: rgba(255, 255, 255, 0.603);
      }
    }
  }
  @media screen and (max-width: 478px) {
    .btn {
      width: 125%;
    }
  }
</style>
