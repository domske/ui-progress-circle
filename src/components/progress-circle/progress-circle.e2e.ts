import { newE2EPage } from '@stencil/core/testing';

describe('ui-progress-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-progress-circle></ui-progress-circle>');
    const element = await page.find('ui-progress-circle');
    expect(element).toHaveClass('hydrated');
  });
});
