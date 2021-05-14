import './assets/css/global.css';

import App from './components/App/App.svelte';
import { getDisplayDateTime } from './lib/get-display-datetime';

const { date, time, period } = getDisplayDateTime();

const app = new App({
  target: document.body,
  props: {
    date,
    time,
    period,
  },
});

export default app;
