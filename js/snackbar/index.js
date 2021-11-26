import snackbarLayout from './snackbar.layout.js';
import snackbar from './snackbar.js';

const element = document.createElement('h-snackbar-container');
const app = document.getElementById('app');

if (app) {
  app.appendChild(element);
} else {
  console.error('App is not found');
}

export default { snackbarLayout, snackbar, addNotification: element.addNotification }
