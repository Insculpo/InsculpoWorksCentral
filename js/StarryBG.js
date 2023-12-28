class StarryBG extends HTMLElement {
    constructor() {
        super();
        this.starCount = 256;
        this.docScreen = document.createElement("canvas");
        this.docScreen.style.position = "absolute";
        this.docScreen.style.top = "0";
        this.docScreen.style.left = "0";
        this.docScreen.style.zIndex = "-1";
        this.docScreen.width = window.innerWidth;
        this.docScreen.height = window.innerHeight;
        document.body.appendChild(this.docScreen);

        // Array of nebula image URLs
        this.nebulaImages = [
            'url-to-nebula-image-1.png',
            'url-to-nebula-image-2.png',
            // add more image URLs as needed
        ];

        // Create a new div for the nebula background
        this.nebulaDiv = document.createElement("div");
        this.nebulaDiv.style.position = "absolute";
        this.nebulaDiv.style.top = "0";
        this.nebulaDiv.style.left = "0";
        this.nebulaDiv.style.zIndex = "-2";
        this.nebulaDiv.style.width = "100%";
        this.nebulaDiv.style.height = "100%";
        this.nebulaDiv.style.backgroundSize = "cover";
        this.nebulaDiv.style.backgroundImage = `url(${this.randomNebulaImage()})`;
        document.body.appendChild(this.nebulaDiv);
    }

    randomNebulaImage() {
        // Select a random image URL from the array
        return this.nebulaImages[Math.floor(Math.random() * this.nebulaImages.length)];
    }

    connectedCallback() {
        this.buildStar(this.starCount);
    }

    buildStar(starCount) {
        var ctx = this.docScreen.getContext("2d");
        ctx.fillStyle = "white";
        for(let i = 0; i < starCount; i++){
            var xPick = Math.random() * this.docScreen.width;
            var yPick = Math.random() * this.docScreen.height;
            ctx.beginPath();
            ctx.arc(xPick, yPick, Math.pow(2, 1 + (Math.random() * 10/10))/2, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

customElements.define('starry-bg', StarryBG);