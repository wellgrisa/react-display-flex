import { createElement, FC } from 'react'

import { flexClasses } from './react-flexible-classes'
import { ReactFlexibleBoxPropTypes } from './types'

export const ReactFlexibleBox: FC<ReactFlexibleBoxPropTypes> = ({
  children,
  element,
  ...rest
}: ReactFlexibleBoxPropTypes) => {
  const className = Object.keys(rest)
    .filter((key) => rest[key] === true)
    .reduce((classes, property) => `${classes} ${flexClasses[property]}`, 'react-flex')

  const props = Object.keys(rest).reduce((cleanProps: { [key: string]: string }, key) => {
    if (!flexClasses[key]) {
      cleanProps[key] = rest[key]
    }

    return cleanProps
  }, {})

  return createElement(element, { className, 'data-testid': 'react-flexible-box', ...props }, children)
}

ReactFlexibleBox.defaultProps = {
  element: 'div',
}
