import { createColorStyles, colors } from './color';

describe('createColorStyles', () => {
  it('default', () => {
    expect(createColorStyles('success')).toEqual({
      'background-color': colors['success'].base,
      'color': colors['success'].contrast,
    });
  });
  it('text only', () => {
    expect(createColorStyles('danger', true)).toEqual({
      color: colors['danger'].base,
    });
  });
  it('custom color', () => {
    expect(createColorStyles('#123456', true)).toEqual({
      color: '#123456',
    });
  });
});
