class FancyBar extends HTMLElement {
    connectedCallback(){

        this.innerHTML = `
        <div class="link-flex">
            <div>
                <a class="sub-flex" id="index" href="index.html">Home</a>
            </div>
            <div>
                <a class="sub-flex" id="arcade" href="arcade.html">InsculpoWorks Arcade</a>
            </div>
            <div>
                <a class="sub-flex" id="encyclopedia" href="galaxy.html">Sprawlverse Encyclopedia</a>
            </div>
            <div>
                <a class="sub-flex" id="design" href="gallery.html">Design Gallery</a>
            </div>   
            <div>
                <a class="sub-flex" id="personal" href="blog.html">Updates</a>
            </div>
        </div>
        `
    }
}

function Highlight(code) {
    var links = document.getElementsByClassName("sub-flex");
    for (let i = 0; i < links.length; i++) {
        if (links[i].innerHTML == code) {
            links[i].setAttribute("active","true")
        }
    }
}

function Check(){
    switch(window.location.href){
        case "index.html":
            Highlight("Home");
            break;
        case "arcade.html":
            Highlight("InsculpoWorks Arcade");
            break;
        case "galaxy.html":
            Highlight("Sprawlverse Encyclopedia");
            break;
        case "gallery.html":
            Highlight("Design Gallery");
            break;
        case "blog.html":
            Highlight("Updates");
            break;
    }
}

customElements.define('fancy-bar',FancyBar)