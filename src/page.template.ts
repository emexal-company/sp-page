import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Page } from './page.component';

import '@spectrum/sp-icon';
import '@spectrum/sp-button';


export default function template(this: Page) {

    const buttonTemplate = [];
    if (!this.noButton) {
        buttonTemplate.push(html`
            <sp-button type="cta" label="${this.buttonLabel}" @click="${this._handleButtonClick}"></sp-button>
        `)
    }
    return html`
    <div class="spectrum" style="${styleMap({width: this.width + 'px'})}">
            <slot></slot>
            <br>
            <br>
        <div>
            ${buttonTemplate}
        </div>
    </div>
    `;
}
