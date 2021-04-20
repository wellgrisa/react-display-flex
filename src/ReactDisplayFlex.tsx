import './react-display-flex.css'

import { createElement } from 'react'

import { buildFlexibleClassName } from './build-flexible-class-name'
import { cleanProps } from './clean-props'
import { ReactDisplayFlexPropTypes } from './react-display-flex-types'

export const FlexibleBox = ({ alignContentBaseline, children, element, ...props }: ReactDisplayFlexPropTypes) =>
  createElement(element, { ...cleanProps({ props }), className: buildFlexibleClassName(props) }, children)

FlexibleBox.defaultProps = {
  element: 'div',
}

export const Flex = (props: ReactDisplayFlexPropTypes) => <FlexibleBox {...props} flex />

export const Column = (props: ReactDisplayFlexPropTypes) => <Flex {...props} column />

export const Row = (props: ReactDisplayFlexPropTypes) => <Flex {...props} row />
