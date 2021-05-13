import './global.css';

import App from './components/App.svelte';
import { getDisplayDateTime } from './lib/utils';

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
