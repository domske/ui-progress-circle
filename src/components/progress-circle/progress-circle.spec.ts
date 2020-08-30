import { newSpecPage } from '@stencil/core/testing';
import { ProgressCircleComponent } from './progress-circle';

describe('ui-progress-circle', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ProgressCircleComponent],
      html: '<ui-progress-circle></ui-progress-circle>',
    });
    expect(root).toEqualLightHtml(`
      <ui-progress-circle class="indeterminate responsive"></ui-progress-circle>
    `);
  });

  it('render with value', async () => {
    const { root } = await newSpecPage({
      components: [ProgressCircleComponent],
      html: '<ui-progress-circle radius="50" value="67"></ui-progress-circle>',
    });
    expect(root).toEqualLightHtml(`
      <ui-progress-circle radius="50" value="67"></ui-progress-circle>
    `);
  });
});
