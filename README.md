[![<ORG_NAME>](https://circleci.com/gh/wellgrisa/react-display-flex.svg?style=shield)](https://app.circleci.com/pipelines/github/wellgrisa/react-display-flex)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)
[![GitHub stars](https://img.shields.io/github/stars/wellgrisa/react-display-flex?style=social)](https://github.com/wellgrisa/react-display-flex)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://wellgrisa.github.io/react-display-flex/)

# React Display Flex - Why?

The `react-display-flex` deals with the [flexible layout module](https://www.w3.org/TR/css-flexbox-1/) as simple as possible by using only plain css and classes.

See [Storybook here](https://wellgrisa.github.io/react-display-flex/).

See [props here](https://wellgrisa.github.io/react-display-flex/?path=/story/props--page).

The idea of this another flex lib is to be dependencyless and aim people who like to have their styles in classes and styles files only.

Therefore, **there are no properties to deal with value-based attribute** like height, width, flex-shrink, flex-basis. To handle these, when necessary, you should add a specific className or work with the cascade stylesheets. The only exception is the property `flexGrow` which will add the class `react-display-flex-grow`, adding the attribute `flex-grow: 1` to the component. The idea behind this is a very common scenario which we need the component to grow in the full area.

This lib relies on boolean properties to make it straightforward and also in the knowledge of the person using it, i.e.: there are no validations regarding its properties, it's just a way of setting the css attributes as [classes](https://github.com/wellgrisa/react-display-flex/blob/main/src/react-display.css). It's just like adding attributes in a class, you can add as much as you want, but it wouldn't work if you add confusing rules.

A simple usage:

```jsx
import { FlexibleBox } from 'react-display-flex'

<FlexibleBox column />

// which ends up rendering a
// <div class="react-display-flex-flex react-display-flex-column" />
```

```css
.react-display-flex-flex {
  display: flex;
}

.react-display-flex-column {
  flex-direction: column;
}
```

Another important thing to mention is the possibility of having different elements from `<div />` as the html element to be flexible. This can be seen in a good example in the [Layout Example](https://wellgrisa.github.io/react-display-flex/?path=/story/layout-example--page).

```jsx
import { FlexibleBox } from 'react-display-flex'

<FlexibleBox column element="section" />

// which ends up rendering a
// <section class="react-display-flex-flex react-display-flex-column" />
```

There are another libs which handles the Flexbox Layout with different approaches:

- [flexbox-react](https://github.com/nachoaIvarez/flexbox-react)
- [react-css-flex](https://github.com/bikk-uk/react-css-flex)
- [reflexbox](https://github.com/jxnblk/reflexbox)
- [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)
- [react-styled-flexboxgrid](https://www.npmjs.com/package/react-styled-flexboxgrid)

and so on... each one is great in some way, so it's just a matter of try and feel which one fits you better.
