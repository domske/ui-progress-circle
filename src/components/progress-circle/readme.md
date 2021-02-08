# ui-progress-circle

Note: You can turn off animation (transition) by adding the class name "no animation" to the element.

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                         | Type                                         | Default                |
| -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------- |
| `color`  | `color`   | The circle color. Use predefined colors like `info`, `success`, `warning` or `danger` or a custom color like `#123456` or `yellow`. | `string`                                     | `defaultValues.color`  |
| `radius` | `radius`  | The circle radius in percent. The default size is 200px (radius 100px) but scaled to 100% of parent.                                | `number`                                     | `defaultValues.radius` |
| `shape`  | `shape`   | The line cap shape. For example: `round`.                                                                                           | `"butt" \| "inherit" \| "round" \| "square"` | `defaultValues.shape`  |
| `stroke` | `stroke`  | The line width in percent. If stroke >= radius then circle is filled (pie).                                                         | `number`                                     | `defaultValues.stroke` |
| `value`  | `value`   | The progress value in percent. Use -1 or undefined for indeterminate loading animation.                                             | `number`                                     | `defaultValues.value`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
