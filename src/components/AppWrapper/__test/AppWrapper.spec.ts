import AppWrapper from '../AppWrapper.svelte';
import { render } from '@testing-library/svelte';

describe('testing app wrapper', () => {
  it('it should render background image', async () => {
    const { getByTestId } = render(AppWrapper, {
      period: 'afternoon',
    });

    const wrapper = getByTestId('wrapper');
    expect(wrapper).toHaveStyle('background-image: url(images/afternoon.png)');
  });

  it('it should render background image default without period', async () => {
    const { getByTestId } = render(AppWrapper);

    const wrapper = getByTestId('wrapper-element');
    expect(wrapper).toHaveStyle('background-image: url(images/morning.png)');
  });
});
