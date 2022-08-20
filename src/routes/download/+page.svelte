<script>
  function redirect() {
    if (!this.dataset.redirect) return;
    return (location.href = this.dataset.redirect);
  }
</script>

<svelte:head>
  <title>Lightable - Download</title>
  <meta content="Lightable - Download Today" property="og:title" />
  <meta content="https://lightable.app/download" property="og:url" />
  <meta content="#689ff7" name="theme-color" />
  <meta content="https://api.lightable.app/experimental/image/generate?type=EMBED&text=[[0xf6d9]]%20Download%20[[0xf6d9]]&color=689ff7" property="og:image" />
</svelte:head>

<div class="downloads">
  <div class="download">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 448 512">
        <path fill="#34b4e3" d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
      </svg>
    </div>
    <div class="content">
      <h1 class="title">Windows <span class="little">Windows 11 recommended</span></h1>
      <button class="download" data-redirect="https://github.com/brys0/Lightable/releases" on:click={redirect}>Download</button>
    </div>
  </div>

  <div class="download">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="88" width="88" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"
        ><circle fill="#f47421" cy="50" cx="50" r="45" /><circle fill="none" stroke="#ffffff" stroke-width="8.55" cx="50" cy="50" r="21.825" /><g id="friend"
          ><circle fill="#f47421" cx="19.4" cy="50" r="8.4376" />
          <path stroke="#f47421" stroke-width="3.2378" d="M67,50H77" /><circle fill="#ffffff" cx="19.4" cy="50" r="6.00745" /></g
        ><use xlink:href="#friend" transform="rotate(120,50,50)" /><use xlink:href="#friend" transform="rotate(240,50,50)" />
      </svg>
    </div>
    <div class="content">
      <h1 class="title">Ubuntu <span class="little">Greater than 16.04 <b class="emphasize">required</b></span></h1>
      <button class="download not-downloadable" data-redirect="" on:click={redirect}>Coming Soon</button>
    </div>
  </div>

  <div class="download">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 384 512">
        <path fill="#ddd" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
    </div>
    <div class="content">
      <h1 class="title">MacOS <span class="little">MacOS Catalina or greater <b class="emphasize">required</b></span></h1>
      <button class="download not-downloadable" data-redirect="" on:click={redirect}>Coming Soon</button>
    </div>
  </div>
  <div class="download extra-support" align="center">
    <div class="icon" />
    <div class="content">
      <h1 class="title">Request OS</h1>
      <button class="download" data-redirect="https://github.com/brys0/Lightable/issues/new?assignees=&labels=&template=os-request.md&title=OS%2FVersion+Request+%3E+OS%2FVERSION" on:click={redirect} content="Request">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="18" width="18" class="icon">
          <path d="M305.8 2.076C314.4 5.932 320 14.52 320 24V64H336C406.7 64 464 121.3 464 192V358.7C492.3 371 512 399.2 512 432C512 476.2 476.2 512 432 512C387.8 512 352 476.2 352 432C352 399.2 371.7 371 400 358.7V192C400 156.7 371.3 128 336 128H320V168C320 177.5 314.4 186.1 305.8 189.9C297.1 193.8 286.1 192.2 279.9 185.8L199.9 113.8C194.9 109.3 192 102.8 192 96C192 89.2 194.9 82.71 199.9 78.16L279.9 6.161C286.1-.1791 297.1-1.779 305.8 2.077V2.076zM432 456C445.3 456 456 445.3 456 432C456 418.7 445.3 408 432 408C418.7 408 408 418.7 408 432C408 445.3 418.7 456 432 456zM112 358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 .0004 80 .0004C124.2 .0004 160 35.82 160 80C160 112.8 140.3 140.1 112 153.3V358.7zM80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56zM80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408z" />
        </svg>
        Request
      </button>
    </div>
  </div>
</div>

<style lang="scss" scoped>
  @import "../../variables.scss";
  .downloads {
    margin: 5em 1em 5em 1em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    width: 100%;
    .download {
      max-width: 50em;
      min-width: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 0.5em;
      padding: 0.75em;
      background-color: rgba(25, 28, 38, 0.5);
      gap: 2.5em;
      .icon {
        color: var(--color-primary);
      }
      &[align="center"] {
        justify-content: center;
        gap: 0;
        min-width: 30%;
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 1em;
        .title {
          font-size: 1.275em;
          .little {
            font-size: 0.6em;
            font-weight: normal;
            color: rgba(255, 255, 255, 0.527);
            .emphasize {
              color: $error-color-suppl;
            }
          }
        }
        .not-downloadable {
          cursor: not-allowed !important;
          background-color: rgb(223, 77, 77) !important;
        }
        .download {
          all: unset;
          border-radius: 0.4em;
          background-color: rgba(45, 50, 64, 1);
          height: 2em;
          width: 14em;
          max-width: 14em;
          padding: 0.1em 0.5em 0.1em 0.5em;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
          .icon {
            fill: rgb(80, 247, 191);
          }
          &:hover {
            background-color: rgba(55, 60, 75, 1);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 522px) {
    .downloads {
        margin: 0;
        .download {
            flex-direction: column;
            .content {
                .title {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    gap: 8px;
                }
            }
        }
    }
  }
</style>
