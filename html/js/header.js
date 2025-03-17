class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <header class="header">
                    <div class="logo">SquadMania</div>
                </header>
        `;
    }
}
customElements.define('my-header', MyHeader);
