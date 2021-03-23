import { createElement, FC } from 'react'

import { buildFlexibleClassName } from './build-flexible-class-name'
import { cleanProps } from './clean-props'
import { FlexibleBoxPropTypes } from './flexible-types'

export const FlexibleBox: FC<FlexibleBoxPropTypes> = ({
  alignContentBaseline,
  children,
  element,
  ...props
}: FlexibleBoxPropTypes) =>
  createElement(element, { className: buildFlexibleClassName(props), ...cleanProps({ props }) }, children)

FlexibleBox.defaultProps = {
  element: 'div',
}

export const Column = (props) => <FlexibleBox {...props} column />

export const Row = (props) => <FlexibleBox {...props} row />
