import { customElement, property, query } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import pageStyles from './page.styles';
import template from './page.template';

@customElement('sp-page')
export class Page extends Base {
  public static componentStyles = [pageStyles];

  @property({ type: String }) width = "";
  @property({ type: String }) buttonLabel = "";
  @property({ type: Boolean }) noButton = false;
  @query('slot') private slot!: HTMLElement;

  protected getItems(): Text[] {
    return (this.slot as HTMLSlotElement)
      .assignedNodes({ flatten: true })
      .filter((e: any) => (e instanceof Text)) as any as Text[];
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

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-page': Page;
  }
}
