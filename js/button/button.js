import { html, define } from '../../node_modules/hybrids/src/index.js';
import buttonStyles from './button.styles.js';

export default define({
  tag: "hButton",
  render: ({id, innerHTML, classList}) => html`
    <button id="${id}" class="btn ${classList}">
      ${innerHTML}
    </button>  
  `.style(buttonStyles)
});
