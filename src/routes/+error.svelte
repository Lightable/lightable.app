<script>
  import { page } from "$app/stores";
  console.log($page);
</script>

<svelte:head>
  <title>{$page.status} - {$page.error.message}</title>
  <meta content="Lightable - {$page.status}" property="og:title" />
  <meta content="{$page.href}" property="og:url" />
  <meta content="#f64b4b" name="theme-color" />
  <meta content=" {$page.status}: {$page.error.message}" property="og:description">
  <meta content="https://api.lightable.app/experimental/image/generate?type=EMBED&amp;text=[[0xf071]]%20{$page.error.message}%20[[0xf071]]&amp;color=f64b4b" property="og:image" />
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
