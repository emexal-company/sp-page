import { html } from 'lit-element';
import { DemoPage } from './demo-page.component';

import '@spectrum/sp-page';
import '@spectrum/sp-container';


export default function template(this: DemoPage) {
  return html`
  <sp-container>
      <sp-rule medium label="Page - Standard"></sp-rule>

      <sp-demo width="400" height="400">
        <pre>
<sp-page width="380" buttonLabel="Continue"> 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Auctor augue mauris augue neque gravida. 
  Libero volutpat sed ornare arcu. 
  Quisque egestas diam in arcu cursus euismod quis viverra. 
  Posuere ac ut consequat semper viverra nam libero justo laoreet. 
  Enim ut tellus elementum sagittis vitae et leo duis ut. 
  Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. 
  Diam volutpat commodo sed egestas egestas. Dolor magna eget est lorem ipsum dolor. 
  Vitae suscipit tellus mauris a diam maecenas sed. 
</sp-page>
</pre>
</sp-demo>
<sp-rule medium label="Page - No button"></sp-rule>
<sp-demo width="400">
<pre>
<sp-page width="380" noButton> 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Auctor augue mauris augue neque gravida. 
  Libero volutpat sed ornare arcu. 
  Quisque egestas diam in arcu cursus euismod quis viverra. 
  Posuere ac ut consequat semper viverra nam libero justo laoreet. 
  Enim ut tellus elementum sagittis vitae et leo duis ut. 
  Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. 
  Diam volutpat commodo sed egestas egestas. Dolor magna eget est lorem ipsum dolor. 
  Vitae suscipit tellus mauris a diam maecenas sed. 
</sp-page>
</pre>
</sp-demo>
</sp-container>
  `;
}
