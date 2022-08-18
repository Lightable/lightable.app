<div class="features">
    <div class="feature">
        <div class="image-container">
            <img class="feature-image" src="/placeholder-image.png" alt="Placeholder">
        </div>
        <p class="feature-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo illo, sunt, cumque vero eum neque obcaecati earum amet tempore optio reprehenderit eligendi rerum molestiae.
        </p>
    </div>
    <div class="feature">
        <p class="feature-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, autem?
        </p>
        <div class="image-container">
            <img class="feature-image" src="/placeholder-image.png" alt="Placeholder">
        </div>
    </div>
</div>

<style lang="scss" scoped>
    .features {
        display: flex;
		flex-direction: column;
        align-items: center;
        gap: 5em;
    }
    .feature {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        word-wrap: break-word;
        gap: 2em;
        .image-container {
            .feature-image {
                max-width: 400px;
                border-radius: .5em;
                -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.5)));
                mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.5));
            }
        }
        .feature-desc {
            color: var(--color-primary)
        }
    }
    @media screen and (max-width: 523px) {
        /* Mobile */
        .feature {
            flex-wrap: wrap;
        }
    }
</style>