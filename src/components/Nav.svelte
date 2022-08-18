<script>
  export let key;
</script>

<nav class="navbar" name="Navigation" aria-roledescription="Navigation for lightable">
  <a href="/">
    <div class="left">
      <svg class="logo" alt="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M15 2h2v5h-2z" fill="currentColor" /><path d="M21.687 8.9l3.506-3.507l1.414 1.415l-3.506 3.506z" fill="currentColor" /><path d="M25 15h5v2h-5z" fill="currentColor" /><path d="M21.687 23.1l1.414-1.414l3.506 3.506l-1.414 1.415z" fill="currentColor" /><path d="M15 25h2v5h-2z" fill="currentColor" /><path d="M5.394 25.192L8.9 21.686l1.414 1.415l-3.506 3.506z" fill="currentColor" /><path d="M2 15h5v2H2z" fill="currentColor" /><path d="M5.394 6.808l1.414-1.415L10.314 8.9L8.9 10.314z" fill="currentColor" /><path d="M16 12a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor" /></svg>
      <p class="nav-item home">Lightable</p>
    </div>
  </a>
  <div class="right">
    <a href={key === "/product" ? "" : "/product"} class="grey" disabled={key === "/product"}>Product</a>
    <a href={key === "/promise" ? "" : "/promise"} class="grey" disabled={key === "/promise"}>Our Promise</a>
    <a href={key === "/download" ? "" : "/download"} disabled={key === "/download"}>Download</a>
  </div>
</nav>

<style lang="scss">
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2em;
    align-items: center;
    a {
      transition: color 0.2s ease-in;
      .left {
        display: flex;
        flex-direction: row;
        gap: 0.75em;
        align-items: center;

        .logo {
          width: 25px;
          height: 25px;
        }
      }
      &[disabled="true"] {
        cursor: not-allowed;
      }

      &:hover {
        &[disabled="false"] {
          color: rgba(255, 255, 255, 0.692);
        }
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      gap: 4em;
      a {
        transition: color 0.2s ease-in;
      }
    }
  }
  @media screen and (min-width: 524px) {
    /* Desktop */
    .hidden-desktop {
      display: none;
    }
  }
  @media screen and (max-width: 523px) {
    /* Mobile */
    .navbar {
      flex-direction: column;
      gap: 2.5em;
    }
    .hidden-mobile {
      display: none;
    }
    .right {
      gap: 2.5em;
    }
  }
</style>
