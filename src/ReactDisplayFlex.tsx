import './react-display-flex.css'

import { createElement } from 'react'

import { buildFlexibleClassName } from './build-flexible-class-name'
import { cleanProps } from './clean-props'
import { ReactDisplayFlexPropTypesWithHtmlAttributes } from './react-display-flex-types'

export const FlexibleBox = ({
  alignContentBaseline,
  children,
  element,
  ...props
}: ReactDisplayFlexPropTypesWithHtmlAttributes) =>
  createElement(element, { ...cleanProps({ props }), className: buildFlexibleClassName(props) }, children)

FlexibleBox.defaultProps = {
  element: 'div',
}

export const Flex = (props: ReactDisplayFlexPropTypesWithHtmlAttributes) => <FlexibleBox {...props} flex />

export const Column = (props: ReactDisplayFlexPropTypesWithHtmlAttributes) => <Flex {...props} column />

export const Row = (props: ReactDisplayFlexPropTypesWithHtmlAttributes) => <Flex {...props} row />
