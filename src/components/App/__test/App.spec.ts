import App from '../App.svelte';
import { render } from '@testing-library/svelte';

describe('testing getDisplayDateTime', () => {
  it('it works', async () => {
    const { getAllByRole } = render(App, {
      date: 'Fri May 14',
      time: '16:44',
      period: 'afternoon',
    });

    const [h2, h3] = getAllByRole('heading');

    expect(h2).toHaveTextContent('Fri May 14');
    expect(h3).toHaveTextContent('16:44');
  });
});
