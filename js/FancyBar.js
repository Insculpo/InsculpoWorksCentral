class FancyBar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="link-flex">
            <div>
                <a class="sub-flex" href="index.html">Home</a>
            </div>
            <div>
                <a class="sub-flex" href="arcade.html">InsculpoWorks Arcade</a>
            </div>
            <div>
                <a class="sub-flex" href="galaxy.html">Sprawlverse Encyclopedia</a>
            </div>
            <div>
                <a class="sub-flex" href="gallery.html">Design Gallery</a>
            </div>   
            <div>
                <a class="sub-flex" href="blog.html">Updates</a>
            </div>
        </div>
        `
    }
}

customElements.define('fancy-bar',FancyBar)