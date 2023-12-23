class Footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <img src="img/logoRef.png" alt="logo" witdh="256" height="256"></div>
        `
    }
}

customElements.define('the-footer',Footer)