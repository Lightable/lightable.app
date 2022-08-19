<script>
  import Button from "../../components/Button.svelte";
</script>

<svelte:head>
  <title>Lightable - Download</title>
  <meta content="Lightable - Download Today" property="og:title" />
  <meta content="https://lightable.app/download" property="og:url" />
  <meta content="#689ff7" name="theme-color" />
  <meta content="https://api.lightable.app/experimental/image/generate?type=EMBED&text=[[0xf6d9]]%20Download%20[[0xf6d9]]&color=689ff7" property="og:image" />
</svelte:head>

<div class="downloads">
  <div class="download-card" id="windows">
    <div class="header ns">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="windows icon">
        <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
      </svg>
      <h2>Download for Windows</h2>
    </div>
    <div class="body">
      <Button content="Download for Windows" text={true} redirect="https://github.com/brys0/Lightable/releases"/>
    </div>
  </div>
  <div class="download-card" id="linux">
    <div class="header ns disabled">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="linux icon">
        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm52.7 93c8.8-15.2 28.3-20.5 43.5-11.7 15.3 8.8 20.5 28.3 11.7 43.6-8.8 15.2-28.3 20.5-43.5 11.7-15.3-8.9-20.5-28.4-11.7-43.6zM87.4 287.9c-17.6 0-31.9-14.3-31.9-31.9 0-17.6 14.3-31.9 31.9-31.9 17.6 0 31.9 14.3 31.9 31.9 0 17.6-14.3 31.9-31.9 31.9zm28.1 3.1c22.3-17.9 22.4-51.9 0-69.9 8.6-32.8 29.1-60.7 56.5-79.1l23.7 39.6c-51.5 36.3-51.5 112.5 0 148.8L172 370c-27.4-18.3-47.8-46.3-56.5-79zm228.7 131.7c-15.3 8.8-34.7 3.6-43.5-11.7-8.8-15.3-3.6-34.8 11.7-43.6 15.2-8.8 34.7-3.6 43.5 11.7 8.8 15.3 3.6 34.8-11.7 43.6zm.3-69.5c-26.7-10.3-56.1 6.6-60.5 35-5.2 1.4-48.9 14.3-96.7-9.4l22.5-40.3c57 26.5 123.4-11.7 128.9-74.4l46.1.7c-2.3 34.5-17.3 65.5-40.3 88.4zm-5.9-105.3c-5.4-62-71.3-101.2-128.9-74.4l-22.5-40.3c47.9-23.7 91.5-10.8 96.7-9.4 4.4 28.3 33.8 45.3 60.5 35 23.1 22.9 38 53.9 40.2 88.5l-46 .6z" />
      </svg>
      <h2>Download for Ubuntu</h2>
    </div>
    <div class="body">To be developed</div>
  </div>
  <div class="download-card" id="linux">
    <div class="header ns disabled">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="apple icon">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      <h2>Download for MacOS</h2>
    </div>
    <div class="body">To be developed</div>
  </div>
</div>

<style lang="scss" scoped>
  .downloads {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 32px;
    margin-top: 2em;
    .download-card {
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        &.disabled {
          color: rgba(95, 95, 95, 0.836);
          .icon {
            opacity: 0.5;
          }
        }
        .windows {
          fill: #00a2ed;
        }
        .linux {
          fill: #e95420;
        }
        .apple {
          fill: #f6f3ed;
        }
        .details {
          font-size: 12px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
        }
      }
      .body {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
    }
  }
  .icon {
    height: 42px;
    width: 42px;
  }
</style>
