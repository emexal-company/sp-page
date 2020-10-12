import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
import '@spectrum/sp-icon';
import '@spectrum/sp-button';
export default function template() {
    const buttonTemplate = [];
    if (!this.noButton) {
        buttonTemplate.push(html `
            <sp-button type="cta" label="${this.buttonLabel}" @click="${this._handleButtonClick}"></sp-button>
        `);
    }
    return html `
    <div class="spectrum" style="${styleMap({ width: this.width + 'px' })}">
            <slot></slot>
            <br>
            <br>
        <div>
            ${buttonTemplate}
        </div>
    </div>
    `;
}
//# sourceMappingURL=page.template.js.map