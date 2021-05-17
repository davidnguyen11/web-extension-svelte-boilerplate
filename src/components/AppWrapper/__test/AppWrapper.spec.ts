import AppWrapper from '../AppWrapper.svelte';
import { render } from '@testing-library/svelte';

describe('testing app wrapper', () => {
  it('should render background image', async () => {
    const { getByRole } = render(AppWrapper, {
      period: 'afternoon',
    });

    const wrapper = getByRole('main');
    expect(wrapper).toHaveStyle('background-image: url(images/afternoon.png)');
  });

  it('it should render background image default without period', async () => {
    const { getByRole } = render(AppWrapper);

    const wrapper = getByRole('main');
    expect(wrapper).toHaveStyle('background-image: url(images/morning.png)');
  });
});
