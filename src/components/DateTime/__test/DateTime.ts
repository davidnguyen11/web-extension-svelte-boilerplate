import DateTime from '../DateTime.svelte';
import { render } from '@testing-library/svelte';

describe('testing datetime', () => {
  it('should render datetime', async () => {
    const { getAllByRole } = render(DateTime, {
      date: 'Fri May 14',
      time: '16:44',
      period: 'afternoon',
    });

    const [h2, h3] = getAllByRole('heading');

    expect(h2).toHaveTextContent('Fri May 14');
    expect(h3).toHaveTextContent('16:44');
  });

  it('it should render datetime without period', async () => {
    const { getAllByRole } = render(DateTime, {
      date: 'Fri May 14',
      time: '16:44',
    });

    const [h2, h3] = getAllByRole('heading');

    expect(h2).toHaveTextContent('Fri May 14');
    expect(h3).toHaveTextContent('16:44');
  });
});
