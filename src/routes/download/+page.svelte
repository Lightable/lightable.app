<script>
    function redirect() {
        if (!this.dataset.redirect) return
        return location.href = this.dataset.redirect
    }
</script>

<div class="downloads">

    <div class="download">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="88" width="88">
                <path style="fill:#00adef;" d="m0,12.402,35.687-4.8602,0.0156,34.423-35.67,0.20313zm35.67,33.529,0.0277,34.453-35.67-4.9041-0.002-29.78zm4.3261-39.025,47.318-6.906,0,41.527-47.318,0.37565zm47.329,39.349-0.0111,41.34-47.318-6.6784-0.0663-34.739z"/>
            </svg>
        </div>
        <div class="content">
            <h1 class="title">Download for Windows</h1>
            <button class="download" data-redirect="https://github.com/brys0/Lightable/releases" on:click={redirect}>Download</button>
        </div> <!-- column -->
    </div>

    <div class="download">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="88" width="88" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><circle fill="#f47421" cy="50" cx="50" r="45"/><circle fill="none" stroke="#ffffff" stroke-width="8.55" cx="50" cy="50" r="21.825"/><g id="friend"><circle fill="#f47421" cx="19.4" cy="50" r="8.4376"/>
                <path stroke="#f47421" stroke-width="3.2378" d="M67,50H77"/><circle fill="#ffffff" cx="19.4" cy="50" r="6.00745"/></g><use xlink:href="#friend" transform="rotate(120,50,50)"/><use xlink:href="#friend" transform="rotate(240,50,50)"/>
            </svg>
        </div>
        <div class="content">
            <h1 class="title">Download for Ubuntu</h1>
            <button class="download not-downloadable" data-redirect="" on:click={redirect}>To be developed</button>
        </div>
    </div>

    <div class="download">
        <div class="icon">
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="88" height="88" viewBox="0 0 842.32007 1000.0001" version="1.1" id="svg2" inkscape:version="0.92.3 (2405546, 2018-03-11)" sodipodi:docname="Apple_logo_black.svg"><metadata id="metadata10"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title /></cc:Work></rdf:RDF></metadata><defs id="defs8" /><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1366" inkscape:window-height="705" id="namedview6" showgrid="false" inkscape:zoom="0.1767767" inkscape:cx="-621.03745" inkscape:cy="964.94676" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg2" />
                <path d="m 824.66636,779.30363 c -15.12299,34.93724 -33.02368,67.09674 -53.7638,96.66374 -28.27076,40.3074 -51.4182,68.2078 -69.25717,83.7012 -27.65347,25.4313 -57.2822,38.4556 -89.00964,39.1963 -22.77708,0 -50.24539,-6.4813 -82.21973,-19.629 -32.07926,-13.0861 -61.55985,-19.5673 -88.51583,-19.5673 -28.27075,0 -58.59083,6.4812 -91.02193,19.5673 -32.48053,13.1477 -58.64639,19.9994 -78.65196,20.6784 -30.42501,1.29623 -60.75123,-12.0985 -91.02193,-40.2457 -19.32039,-16.8514 -43.48632,-45.7394 -72.43607,-86.6641 C 77.707522,829.30207 52.171259,778.62464 32.165691,720.84861 10.740416,658.44309 0,598.01283 0,539.50845 0,472.49197 14.481044,414.69125 43.486336,366.25444 66.28194,327.34823 96.60818,296.6578 134.5638,274.1276 c 37.95566,-22.53016 78.96676,-34.01129 123.1321,-34.74585 24.16591,0 55.85633,7.47508 95.23784,22.166 39.27042,14.74029 64.48571,22.21538 75.54091,22.21538 8.26518,0 36.27668,-8.7405 83.7629,-26.16587 44.90607,-16.16001 82.80614,-22.85118 113.85458,-20.21546 84.13326,6.78992 147.34122,39.95559 189.37699,99.70686 -75.24463,45.59122 -112.46573,109.4473 -111.72502,191.36456 0.67899,63.8067 23.82643,116.90384 69.31888,159.06309 20.61664,19.56727 43.64066,34.69027 69.2571,45.4307 -5.55531,16.11062 -11.41933,31.54225 -17.65372,46.35662 z M 631.70926,20.0057 c 0,50.01141 -18.27108,96.70693 -54.6897,139.92782 -43.94932,51.38118 -97.10817,81.07162 -154.75459,76.38659 -0.73454,-5.99983 -1.16045,-12.31444 -1.16045,-18.95003 0,-48.01091 20.9006,-99.39207 58.01678,-141.40314 C 497.65157,54.696 521.21876,37.0095 549.79815,22.90064 578.3158,9.00229 605.2903,1.31621 630.65988,0 c 0.74076,6.68575 1.04938,13.37191 1.04938,20.00505 z" id="path4" inkscape:connector-curvature="0" style="stroke-width:0.84231985;fill:#b3b3b3;fill-opacity:1" />
            </svg>
        </div>
        <div class="content">
            <h1 class="title">Download for MacOS</h1>
            <button class="download not-downloadable" data-redirect="" on:click={redirect}>To be developed</button>
        </div>
    </div>

</div>

<style lang="scss" scoped>
    .downloads {
        margin: 5em 1em 5em 1em;
        display: flex;
        flex-direction: column;
        gap: 2em;
        align-items: center;
        .download {
            max-width: 50em;
            min-width: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: .5em;
            padding: .75em;
            background-color: rgba(26, 30, 36, 0.95);
            gap: 2.5em;
            .icon { color: var(--color-primary) }
            .content {
                display: flex;
                flex-direction: column;
                gap: 1em;
                .title {
                    font-size: 1.275em;
                }
                .not-downloadable {
                    cursor: not-allowed !important;
                    background-color: rgb(223, 77, 77) !important;
                }
                .download {
                    all: unset;
                    border-radius: .4em;
                    background-color: rgba(45, 50, 64, 1);
                    height: 2em;
                    width: 14em;
                    max-width: 14em;
                    padding: .1em .5em .1em .5em;
                    text-align: center;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    &:hover {
                        background-color: rgba(55, 60, 75, 1);
                    }
                }
            }
        }
    }
</style>