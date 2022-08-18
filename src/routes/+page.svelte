<script>
	import Button from "../components/Button.svelte";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="title-container">
	<div class="title">
		<h1>Team Chat</h1>
		<h1>Reimagined</h1>
	</div>
	<h1 class="subtitle">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
		obcaecati ratione nihil iusto non sapiente, ea quos tempora corrupti
		odit.
	</h1>
	<!-- <div class="outer"> -->
		<!-- <div class="box"> -->
			<Button content="Download for Windows" gradient={{ direction: 'to right', colors: [ "#F85D7F", "#7480F2" ]}}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512" height="24" width="24"> <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" fill="currentColor"></path></svg>
            </Button>
		<!-- </div> -->
	<!-- </div> -->
</div>  

<style>
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
	}
	.title {
		font-weight: bold;
		font-size: 2.5em;
		display: flex;
		flex-direction: column;
	}
	@media screen and (max-width: 523px) {
		/* Mobile */
		.title {
			font-size: 2em;
		}
	}
	.title > h1:first-child {
		background: linear-gradient(to right, #f46081, #6c82fa);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.title > h1:last-child {
		background: linear-gradient(to right, #513cff, #a0fbcf);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.subtitle {
		font-weight: 400;
		font-size: 1em;
		color: rgba(255, 255, 255, 0.384);
	}

	.box:before {
		content: "";
		z-index: -1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(-45deg, #fbe9d7 0%, #f6d5f7 100%);
		transform: translate3d(0px, 20px, 0) scale(0.95);
		filter: blur(20px);
		opacity: 0.7;
		transition: opacity 0.3s;
		border-radius: inherit;
	}
	.box::after {
		content: "";
		z-index: -1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: inherit;
		border-radius: inherit;
	}
</style>
