import { createElement, FC } from 'react'

interface PropTypes {
  alignItemsStart?: boolean
  [key: string]: any
}

const flexClasses: { [key: string]: string } = {
  alignItemsStart: 'align-items-start',
  alignItemsEnd: 'align-items-end',
}

export const ReactFlexibleBox: FC<PropTypes> = ({ children, element, ...rest }: PropTypes) => {
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
