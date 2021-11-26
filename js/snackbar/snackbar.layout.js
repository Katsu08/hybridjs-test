import { html, define } from '../../node_modules/hybrids/src/index.js';
import snackbarStyles from './snackbar.styles.js';

export default define({
  tag: "hSnackbarMessage",
  timeOut: 0,
  show: {
    connect: (host, key, invalidate) => {
      clearTimeout(host.timeOut);

      host.timeOut = setTimeout(() => {
        host.remove();
      }, 2000);
    },
  },
  render: ({innerHTML}) => html`
    <div class="hSnackbar__bar">
      ${innerHTML}
    </div>
  `.style(snackbarStyles)
});
