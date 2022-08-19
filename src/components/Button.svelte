<script>
    export let content
    export let gradient
    export let redirect
    const handleRedir = () => {
        location.href = redirect
    };
</script>

<button class="btn ns" style="background-image: linear-gradient({gradient?.direction}, {gradient?.colors.join(', ')});" on:click={handleRedir}>
    <slot />
    {content || 'Button'}
</button>

<style lang="scss" scoped>
    .btn {
        all: unset;
        padding: 1em;
        border-radius: 0.5em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        cursor: pointer;
        transition: all 0.25s ease-in-out;
        background-size: 100% 100%;
        &:hover {
            background-size: 200% 200%;
            background-position-x: 100%;
        }
    }
    @media screen and (max-width: 478px) {
        .btn {
            width: 125%;
        } 
    }
</style>
