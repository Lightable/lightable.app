<script>
  import Button from "../components/Button.svelte";
  import Features from "../components/Features.svelte";
</script>

<svelte:head>
  <title>Lightable</title>
  <meta content="Lightable" property="og:title" />
  <meta content="Lightable <3 OSS" property="og:site_name" />
  <meta content="https://lightable.app/" property="og:url" />
  <meta content="https://api.lightable.app/experimental/image/generate?type=EMBED&amp;text=[[0xf98a]]%20Lightable%20[[0xf98a]]&amp;color=58F2A2" property="og:image">
</svelte:head>

<main>
  <div class="title-container">
    <div class="title ns">
      <h1>Open Source Chat</h1>
      <h1>Reimagined</h1>
    </div>
    <h1 class="subtitle ns">Open-source chatting. Free, Open-source, Forever.</h1>
    <Button content="Download for Windows" redirect="https://github.com/brys0/Lightable/releases" gradient={{ direction: "to right", colors: ["#F85D7F", "#7480F2"] }}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512" height="24" width="24"> <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" fill="currentColor" /></svg>
    </Button>
  </div>
  <div class="features-container">
    <Features />
  </div>
</main>

<style lang="scss" scoped>
  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    margin: 5em;
    text-align: center;
    .title {
      -webkit-text-stroke: 1.3px transparent;
      font-size: 2.5em;
      display: flex;
      flex-direction: column;
      h1:first-child {
        background: linear-gradient(to right, #f46081, #6c82fa);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      h1:last-child {
        background: linear-gradient(to right, #513cff, #22bbff, #a0fbcf);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .subtitle {
      font-weight: 400;
      font-size: 1em;
      color: rgba(255, 255, 255, 0.384);
    }
  }
  .features-container {
    margin-top: 11em;
  }

  @media only screen and (max-width: 478px) {
    .title {
      font-size: 1.5em !important;
    }
  }
  @media screen and (max-width: 523px) {
   .title-container {
    margin-top: .5em;
   }
  }
</style>
