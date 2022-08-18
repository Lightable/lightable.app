<script>
  import { page } from "$app/stores";
</script>
<svelte:head>
    <title>{$page.status} - {$page.error.message}</title>
</svelte:head>
<div class="error">
  <h1 class="ns">{$page.status}</h1>
  <div class="details ns">
    <span class="msg">{$page.error.message}</span>
  </div>
</div>

<style lang="scss" scoped>
  @import "../variables.scss";
  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 20px;
      color: $error-color;
      font-size: 8em;
    }
    .details {
      .msg {
        color: $error-color-suppl;
        font-size: 1.5em;
      }
    }
  }
</style>
