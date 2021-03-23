import { createElement, FC } from 'react'

import { flexClasses } from './flexible-classes'
import { FlexibleBoxPropTypes } from './flexible-types'

export const FlexibleBox: FC<FlexibleBoxPropTypes> = ({ children, element, ...rest }: FlexibleBoxPropTypes) => {
  const className = Object.keys(rest)
    .filter((key) => rest[key] === true)
    .reduce((classes, property) => `${classes} ${flexClasses[property] ? flexClasses[property] : ''}`, 'flexible-box')

  const props = Object.keys(rest).reduce((cleanProps: { [key: string]: string }, key) => {
    if (!flexClasses[key]) {
      cleanProps[key] = rest[key]
    }

    return cleanProps
  }, {})

  return createElement(element, { className, ...props }, children)
}

FlexibleBox.defaultProps = {
  element: 'div',
}

export const Column = (props) => <FlexibleBox {...props} column />

export const Row = (props) => <FlexibleBox {...props} row />
