[![<ORG_NAME>](https://circleci.com/gh/wellgrisa/react-flexible-box.svg?style=shield)](https://app.circleci.com/pipelines/github/wellgrisa/react-flexible-box)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://wellgrisa.github.io/react-flexible-box/)

# Flexible Box - Why?

The [Flexible Box](https://www.w3.org/TR/css-flexbox-1/), deals with the layout module as simple as possible by using only plain css and classes. See [Storybook here](https://wellgrisa.github.io/react-flexible-box/).

The idea of this another Flex lib is to be dependencyless and aims people who like to have their styles in classes and styles files.

Therefore, **there are no properties to deal with value-based attribute** like height, width, flex-shrink, flex-basis. To handle these, when necessary, you should add a specific className or work with the beautiful cascade stylesheets.

It relies on boolean properties to make it straightforward and also in the knowledge of the person using it, i.e.: there are no validations regarding its properties, it's just a way of setting the css attributes as [classes](https://github.com/wellgrisa/react-flexible-box/blob/main/src/flexible-box.css). It's just like adding attributes in a class, you can add as much as you want, but it wouldn't work. For example:

```jsx
import { FlexibleBox } from 'react-flexible-box'

<FlexibleBox column />

// which ends up rendering a
// <div class="flexible-box-flex flexible-box-column" />
```

```css
.flexible-box-flex {
  display: flex;
}

.flexible-box-column {
  flex-direction: column;
}
```

This way the element can be manipulated the way it might be necessary, e.g.: if it's a child element, it can have other attributes set on it.

Another important thing to mention is the possibility of having different elements from `<div />` as the html element to be flexible. This can be seen in a good example in the Mixed - Layout section.

```jsx
import { FlexibleBox } from 'react-flexible-box'

<FlexibleBox column element="section" />

// which ends up rendering a
// <section class="flexible-box-flex flexible-box-column" />
```

There are another couple of libs which handles the Flexbox Layout with different approaches.

- [flexbox-react](https://github.com/nachoaIvarez/flexbox-react)
- [react-css-flex](https://github.com/bikk-uk/react-css-flex)
- [reflexbox](https://github.com/jxnblk/reflexbox)
- [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)
- [react-styled-flexboxgrid](https://www.npmjs.com/package/react-styled-flexboxgrid)

and so on... each one is great in some way, so it's just a matter of try and feel which one fits you better.
