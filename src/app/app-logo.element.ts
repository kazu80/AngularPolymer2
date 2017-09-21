class AppLogo extends HTMLElement {
    private _src: String = '';

    get src() {
        return this._src;
    }

    set src(val) {
        if (this._src !== val) {
            this._src = val;
            this.renderString();
        }
    }

    constructor() {
        super();

        this.addEventListener('click', e => {
            const eventObj = new CustomEvent('logoClicked');


            /*
            if (e.currentTarget.tagName === 'IMG') {
                this.dispatchEvent(eventObj);
            }
            */
        });
    }

    renderString() {
        return `
<div>
    Our Logo Text
    <img src="${this.src}" >
</div>
        `;
    }
}

window.customElements.define('app-logo', AppLogo);
