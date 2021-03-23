import './flexible-box.css'

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
  createElement(element, { ...cleanProps({ props }), className: buildFlexibleClassName(props) }, children)

FlexibleBox.defaultProps = {
  element: 'div',
}

export const Flex: FC<FlexibleBoxPropTypes> = (props) => <FlexibleBox {...props} flex />

export const Column: FC<FlexibleBoxPropTypes> = (props) => <FlexibleBox {...props} column />

export const Row: FC<FlexibleBoxPropTypes> = (props) => <FlexibleBox {...props} row />
