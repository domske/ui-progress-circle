import { Component, Prop, h, ComponentInterface, Host, Element } from '@stencil/core';
import { createColorStyles } from '../../utils/color';

@Component({
  tag: 'ui-progress-circle',
  styleUrl: 'progress-circle.scss',
  shadow: true,
})
export class ProgressCircleComponent implements ComponentInterface {
  /** The progress value in percent. Use -1 or undefined for indeterminate loading animation. */
  @Prop() value = -1;

  /** The circle radius in percent. The default size is 200px (radius 100px) but scaled to 100% of parent. */
  @Prop() radius = 100;

  /** The circle color. Use predefined colors like `info`, `success`, `warning` or `danger` or a custom color like `#123456` or `yellow`. */
  @Prop() color: string;

  /** The line width in percent. If stroke >= radius then circle is filled (pie). */
  @Prop() stroke = 10;

  /** The line cap shape. For example: `round`. */
  @Prop() shape: CanvasLineCap = 'butt';

  @Element() el!: HTMLElement;

  isIndeterminate(): boolean {
    return this.value < 0;
  }

  render() {
    const radius = this.radius > 100 ? 100 : this.radius;
    const stroke = this.stroke > radius ? radius : this.stroke;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const offset = circumference - (this.value / 100) * circumference;

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
            ...createColorStyles(this.color, true),
          }}
        >
          <circle
            stroke-dashoffset={offset}
            stroke-width={stroke}
            stroke-linecap={this.shape}
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
