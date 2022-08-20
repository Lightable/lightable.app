<script>
  export let key;
</script>

<nav class="navbar" name="Navigation" aria-roledescription="Navigation for lightable">
  <a href="/">
    <div class="left">
      <svg class="logo" alt="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M15 2h2v5h-2z" fill="currentColor" /><path d="M21.687 8.9l3.506-3.507l1.414 1.415l-3.506 3.506z" fill="currentColor" /><path d="M25 15h5v2h-5z" fill="currentColor" /><path d="M21.687 23.1l1.414-1.414l3.506 3.506l-1.414 1.415z" fill="currentColor" /><path d="M15 25h2v5h-2z" fill="currentColor" /><path d="M5.394 25.192L8.9 21.686l1.414 1.415l-3.506 3.506z" fill="currentColor" /><path d="M2 15h5v2H2z" fill="currentColor" /><path d="M5.394 6.808l1.414-1.415L10.314 8.9L8.9 10.314z" fill="currentColor" /><path d="M16 12a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor" /></svg>
      <span class="nav-item home">Lightable</span>
      <svg class="logo if-mobile" alt="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M15 2h2v5h-2z" fill="currentColor" /><path d="M21.687 8.9l3.506-3.507l1.414 1.415l-3.506 3.506z" fill="currentColor" /><path d="M25 15h5v2h-5z" fill="currentColor" /><path d="M21.687 23.1l1.414-1.414l3.506 3.506l-1.414 1.415z" fill="currentColor" /><path d="M15 25h2v5h-2z" fill="currentColor" /><path d="M5.394 25.192L8.9 21.686l1.414 1.415l-3.506 3.506z" fill="currentColor" /><path d="M2 15h5v2H2z" fill="currentColor" /><path d="M5.394 6.808l1.414-1.415L10.314 8.9L8.9 10.314z" fill="currentColor" /><path d="M16 12a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor" /></svg>
    </div>
  </a>
  <div class="right">
    <a href="/product" class={key === "/product" ? "" : "grey"} sveltekit:prefetch>Product</a>
    <a href="/promise" class={key === "/promise" ? "" : "grey"} sveltekit:prefetch>Promise</a>
    <a href="/download" class={key === "/download" ? "" : "grey"} sveltekit:prefetch>Download</a>
    <!-- <a href={key === "/product" ? "" : "/product"} class="grey" disabled={key === "/product"}>Product</a>
    <a href={key === "/promise" ? "" : "/promise"} class="grey" disabled={key === "/promise"}>Our Promise</a>
    <a href={key === "/download" ? "" : "/download"} disabled={key === "/download"}>Download</a> -->
  </div>
</nav>

<style lang="scss" scoped>
  @import "../variables.scss";
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1.25em;
    align-items: center;
    a {
      padding: 0.75em;
      border-radius: 0.5em;
      transition: all 0.2s ease-in;

      .left {
        display: flex;
        flex-direction: row;
        gap: 0.75em;
        align-items: center;

        .logo {
          width: 25px;
          height: 25px;
          color: $light-color;
          &.if-mobile {
            display: none;
          }
        }
        &:hover {
          .logo {
            color: $light-color-hover;
          }
        }
      }
      &:hover {
        background-color: #18181f;
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      gap: 4em;
      a {
        cursor: pointer !important;
        transition: all 0.2s ease-in;
      }
      a:hover {
        background-color: #18181f;
      }
    }
  }
  @media screen and (min-width: 524px) {
    /* Desktop */
    .hidden-desktop {
      display: none !important;
    }
  }
  @media screen and (max-width: 523px) {
    /* Mobile */
    .navbar {
      flex-direction: column !important;
      gap: 1.5em !important;
    }
    .hidden-mobile {
      display: none !important;
    }
    .right {
      gap: 1.5em !important;
    }
    .if-mobile {
      display: block !important;
    }
  }
  @media only screen and (max-width: 478px) {
    .right {
      gap: 1em !important;
    }
  }
</style>
