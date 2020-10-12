import { Base } from '@spectrum/sp-base';
export declare class Page extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    width: string;
    buttonLabel: string;
    noButton: boolean;
    private slot;
    protected getItems(): Text[];
    _handleButtonClick(): void;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-page': Page;
    }
}
