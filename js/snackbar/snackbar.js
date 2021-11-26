import { html, define } from '../../node_modules/hybrids/src/index.js';
import snackbarStyles from './snackbar.styles.js';

export default define({
  tag: "hSnackbar-container",
  messages: [],
  newMessage: '',
  addNotification: (host) => {
    return (message) => {
      host.messages = [
        ...host.messages,
        message
      ]
    }
  },
  render: ({ messages }) => html`
    <div class="hSnackbar">
      ${messages.map(message => html`
          <h-snackbar-message>${message}</h-snackbar-message>
        `
      )}
    </div>
  `.style(snackbarStyles)
});
