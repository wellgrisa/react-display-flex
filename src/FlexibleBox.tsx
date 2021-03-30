import './flexible-box.css'

import { createElement } from 'react'

import { buildFlexibleClassName } from './build-flexible-class-name'
import { cleanProps } from './clean-props'
import { FlexibleBoxPropTypes } from './flexible-types'

export const FlexibleBox = ({ alignContentBaseline, children, element, ...props }: FlexibleBoxPropTypes) =>
  createElement(element, { ...cleanProps({ props }), className: buildFlexibleClassName(props) }, children)

FlexibleBox.defaultProps = {
  element: 'div',
}

export const Flex = (props: FlexibleBoxPropTypes) => <FlexibleBox {...props} flex />

export const Column = (props: FlexibleBoxPropTypes) => <Flex {...props} column />

export const Row = (props: FlexibleBoxPropTypes) => <Flex {...props} row />
