import AppWrapper from '../AppWrapper.svelte';
import { render } from '@testing-library/svelte';

describe('testing app wrapper', () => {
  it('it should render background image', async () => {
    const { getByTestId } = render(AppWrapper, {
      period: 'afternoon',
    });

    const wrapper = getByTestId('wrapper-element');
    expect(wrapper).toHaveStyle('--image: url(images/afternoon.png)');
  });
});
