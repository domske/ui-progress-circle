export type CssStyleMap = { [name: string]: string };

export interface Color {
  base: string;
  contrast: string;
}

export const colors: { [name: string]: Color } = {
  success: {
    base: '#27ae60',
    contrast: '#ffffff',
  },
  info: {
    base: '#2980b9',
    contrast: '#ffffff',
  },
  warning: {
    base: '#f3d112',
    contrast: '#000000',
  },
  danger: {
    base: '#c0392b',
    contrast: '#ffffff',
  },
};

export const createColorStyles = (name: string, textOnly = false): CssStyleMap => {
  const color = colors[name] || { base: name, contrast: 'currentColor' };
  return textOnly
    ? {
        color: color.base,
      }
    : {
        'background-color': color.base,
        'color': color.contrast,
      };
};
