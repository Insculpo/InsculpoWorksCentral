class StarryBG extends HTMLElement {
    constructor() {
        super();
        this.starBox = []
        this.starCount = 256;
        this.docScreen = document.createElement("canvas");
        this.docScreen.style.position = "absolute";
        this.docScreen.style.top = "0";
        this.docScreen.style.left = "0";
        this.docScreen.style.zIndex = "-1";
        this.docScreen.width = window.innerWidth;
        this.docScreen.height = window.innerHeight;
        document.body.appendChild(this.docScreen);

        this.buildStars(this.starCount * 0.1,2.5);
        this.buildStars(this.starCount * 0.5,1.25);
        this.buildStars(this.starCount * 1,0.65);
        this.buildStars(this.starCount * 2,0.2);
    }

    buildStars(starCount, scale) {
        var ctx = this.docScreen.getContext("2d");
        ctx.fillStyle = "white";
        for (let i = 0; i < starCount; i++) {
            var xPick = Math.random() * window.screen.width;
            var yPick = Math.random() * window.screen.height;
            ctx.beginPath();
            ctx.arc(xPick, yPick, Math.pow(2, 1 + (Math.random() * scale * 10 / 10)) / 2, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

customElements.define('starry-bg', StarryBG);