import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-page.styles';
import template from './demo-page.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Page } from '@spectrum/sp-page';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-page')
export class DemoPage extends PageViewElement {
  public static styles = [sharedStyles, styles];

  _handleButtonClick(e) {
    console.log(e);
  }

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-page': DemoPage;
  }
}
