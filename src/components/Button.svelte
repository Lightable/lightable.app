<script>
	export let content;
	export let gradient;
</script>

<!-- <div class="button-container"> -->
    <button class="btn" style="background: linear-gradient({gradient.direction}, {gradient.colors.join(', ')});">
        <!-- <div class="icon"> -->
            <slot />
        <!-- </div> -->
        {content}
    </button>
<!-- </div> -->

<style>
	.btn {
		all: unset;
		padding: 1em;
		border-radius: 2em;
		background-color: red;
		box-shadow: rgba(255, 255, 255, 0.075) 0px 2px 8px 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: .5em;
        cursor: pointer;
        transition: all .25s ease-in-out;
	}
    .btn:hover {
        box-shadow: rgba(255, 255, 255, 0.11) 0px 2px 10px 5px;
    }
</style>
