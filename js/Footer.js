class Footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <h2>FOOT</h2>
        `
    }
}

customElements.define('the-footer',Footer)