<script>
  import { fly } from "svelte/transition";
  import Button from "../components/Button.svelte";
</script>

<svelte:head>
  <title>Lightable</title>
</svelte:head>

<div class="title-container" in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>
  <div class="title ns">
    <h1>Open Source Chat</h1>
    <h1>Reimagined</h1>
  </div>
  <h1 class="subtitle ns">Open-source chatting. Free, Open-source, Forever.</h1>
  <!-- <div class="outer"> -->
  <!-- <div class="box"> -->
  <Button content="Download for Windows" gradient={{ direction: "to right", colors: ["#F85D7F", "#7480F2"] }}>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512" height="24" width="24"> <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" fill="currentColor" /></svg>
  </Button>
  <!-- </div> -->
  <!-- </div> -->
</div>

<style lang="scss" scoped>
  .outer {
    position: relative;
  }
  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5em;
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

  @media screen and (max-width: 523px) {
    /* Mobile */
    .title {
      font-size: 2em;
    }
  }
</style>
