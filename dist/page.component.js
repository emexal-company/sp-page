import { __decorate, __metadata } from "tslib";
import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import pageStyles from './page.styles';
import template from './page.template';
let Page = class Page extends Base {
    constructor() {
        super(...arguments);
        this.width = "";
        this.buttonLabel = "";
        this.noButton = false;
    }
    getItems() {
        return this.slot
            .assignedNodes({ flatten: true })
            .filter((e) => (e instanceof Text));
    }
    _handleButtonClick() {
        if (this.slot) {
            let clickEvent = new CustomEvent('pageclick', {
                detail: {
                    texts: this.getItems()
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(clickEvent);
        }
    }
    render() {
        return template.call(this);
    }
};
Page.componentStyles = [pageStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Page.prototype, "width", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Page.prototype, "buttonLabel", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Page.prototype, "noButton", void 0);
__decorate([
    query('slot'),
    __metadata("design:type", HTMLElement)
], Page.prototype, "slot", void 0);
Page = __decorate([
    customElement('sp-page')
], Page);
export { Page };
//# sourceMappingURL=page.component.js.map