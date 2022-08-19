<div class="features">
    <div class="feature">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{opacity:0.3;}</style></defs><g id="Abstract_Elements" data-name="Abstract Elements"><g id="abs001-049"><g id="abs021-030"><g id="abs023"><path class="cls-1" d="M12,20.39a1,1,0,0,0,1.79.47l5.36-9.37A1,1,0,0,0,18.28,10H12Z"/><path d="M12,3.61a1,1,0,0,0-1.79-.47L4.85,12.51A1,1,0,0,0,5.72,14H12Z"/></g></g></g></g></svg>
        <div class="title">
            <p>Open Source</p>
        </div>
        <div class="description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident.
            </p>
        </div>
    </div>
    <div class="feature">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{opacity:0.3;}</style></defs><g id="Files_and_folders" data-name="Files and folders"><g id="fil011-020"><g id="fil016"><path class="cls-1" d="M10,4H21a1,1,0,0,1,1,1V7a0,0,0,0,1,0,0H10a0,0,0,0,1,0,0V4A0,0,0,0,1,10,4Z"/><path class="cls-1" d="M10.29,15.29l.71-.7-2.29-2.3a1,1,0,1,0-1.42,1.42l3,3A1,1,0,0,1,10.29,15.29Z"/><path d="M10.43,3.65,12,6h9a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H9.22A1.44,1.44,0,0,1,10.43,3.65Zm1.28,13.06,5-5a1,1,0,0,0-1.42-1.42L11,14.59l-2.29-2.3a1,1,0,1,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0Z"/></g></g></g></svg>
        <div class="title">
            <p>Free. Forever.</p>
        </div>
        <div class="description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident.
            </p>
        </div>
    </div>
    <div class="feature">
        <svg id="General" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{opacity:0.3;}</style></defs><g id="gen011-020"><g id="gen016"><path d="M15.43,8.57l-4.68,6.57a1,1,0,0,0-.09,1l2.54,5.31a1,1,0,0,0,.88.56h0a1,1,0,0,0,.88-.63l6.93-18a1,1,0,0,0-.22-1Z"/><path class="cls-1" d="M20.67,2.06,2.63,9A1,1,0,0,0,2,9.88a1,1,0,0,0,.56.92l5.31,2.54a1,1,0,0,0,1-.09l6.57-4.68,6.28-6.28A1,1,0,0,0,20.67,2.06Z"/></g></g></svg>
        <div class="title">
            <p>Find new friends!</p>
        </div>
        <div class="description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique explicabo eius libero ea, numquam officiis expedita quam minus? Veritatis velit recusandae assumenda quae laboriosam architecto fugiat hic ad excepturi. Tempora alias ea minima error eaque dolore at ratione! Voluptatum, repellat, pariatur voluptatem ad iure consequuntur a nesciunt eaque sed amet perferendis tempore id iste veniam praesentium quaerat, maxime laboriosam sint! Necessitatibus dolorum fugit fugiat. Molestiae similique ducimus possimus veritatis laboriosam? Cum libero, molestiae fugiat ipsum facilis ab cupiditate fugit.
            </p>
        </div>
    </div>
</div>


<style lang="scss" scoped>
    .features {
        display: flex;
		flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5em;
    }
    svg {
        min-width: 10em;
        max-width: 10em;
        min-height: 10em;
        max-height: 10em;
    }
    path { fill: white;}
    .feature {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        word-wrap: break-word;
        gap: 1em;
        width: 20em;
        min-width: 20em;
        height: 22em;
        background-color: rgb(33, 34, 41);
        border-radius: 1.5em;
        padding: 1.5em;
        .title {
            font-weight: bold;
            color: var(--color-primary);
        }
        .description::-webkit-scrollbar {
            display: none;
        }
        .description {
            text-align: center;
            color: var(--color-secondary);
            overflow-y: scroll;
            max-height: 3.5em;
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    }
    @media screen and (max-width: 523px) {
        /* Mobile */
    }
</style>