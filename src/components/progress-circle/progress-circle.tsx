import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';
import { createColorStyles } from '../../utils/color';
import { isSafeNumber, isString } from '../../utils/type-guards';

export type SvgLineCap = 'butt' | 'round' | 'square' | 'inherit';

interface Properties {
  value: number;
  radius: number;
  color: string;
  stroke: number;
  shape: SvgLineCap;
}

const defaultValues: Properties = {
  value: -1,
  radius: 100,
  color: '',
  stroke: 10,
  shape: 'butt',
};

@Component({
  tag: 'ui-progress-circle',
  styleUrl: 'progress-circle.scss',
  shadow: true,
})
export class ProgressCircleComponent implements ComponentInterface {
  /** The progress value in percent. Use -1 or undefined for indeterminate loading animation. */
  @Prop() value = defaultValues.value;

  /** The circle radius in percent. The default size is 200px (radius 100px) but scaled to 100% of parent. */
  @Prop() radius = defaultValues.radius;

  /** The circle color. Use predefined colors like `info`, `success`, `warning` or `danger` or a custom color like `#123456` or `yellow`. */
  @Prop() color = defaultValues.color;

  /** The line width in percent. If stroke >= radius then circle is filled (pie). */
  @Prop() stroke = defaultValues.stroke;

  /** The line cap shape. For example: `round`. */
  @Prop() shape: SvgLineCap = defaultValues.shape;

  @Element() el!: HTMLElement;

  isIndeterminate(): boolean {
    return this.value < 0;
  }

  private getValidValues(): Properties {
    return {
      value: isSafeNumber(this.value) ? this.value : defaultValues.value,
      radius: isSafeNumber(this.radius) ? this.radius : defaultValues.radius,
      stroke: isSafeNumber(this.stroke) ? this.stroke : defaultValues.stroke,
      color: isString(this.color) ? this.color : defaultValues.color,
      shape: isString(this.shape) ? this.shape : defaultValues.shape,
    };
  }

  render() {
    const props = this.getValidValues();
    const radius = props.radius > 100 ? 100 : props.radius;
    const stroke = props.stroke > radius ? radius : props.stroke;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const offset = circumference - (props.value / 100) * circumference;

    return (
      <Host
        class={{
          indeterminate: this.isIndeterminate(),
        }}
      >
        <svg
          viewBox="0 0 200 200"
          width="100%"
          height="100%"
          style={{
            '--circle-dash': `${circumference}`,
            '--circle-dash-inv': `${-circumference + 1}`,
            ...createColorStyles(props.color, true),
          }}
        >
          <circle
            stroke-dashoffset={offset}
            stroke-width={stroke}
            stroke-linecap={props.shape}
            fill="transparent"
            r={normalizedRadius}
            cx="100"
            cy="100"
          />
        </svg>
      </Host>
    );
  }
}
