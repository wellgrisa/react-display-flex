import { createElement, FC } from 'react'

interface PropTypes {
  alignItemsStart?: boolean
  [key: string]: any
}

const flexClasses: { [key: string]: string } = {
  alignItemsStart: 'align-items-start',
  alignItemsEnd: 'align-items-end',
}

export const ReactFlex: FC<PropTypes> = ({ children, element, ...rest }: PropTypes) => {
  const className = Object.keys(rest)
    .filter((key) => rest[key] === true)
    .reduce((classes, property) => `${classes} ${flexClasses[property]}`, 'react-flex')

  const props = Object.keys(rest).reduce((cleanProps: { [key: string]: string }, key) => {
    if (!flexClasses[key]) {
      cleanProps[key] = rest[key]
    }

    return cleanProps
  }, {})

  return createElement(element, { className, 'data-testid': 'react-flex', ...props }, children)
}

ReactFlex.defaultProps = {
  element: 'div',
}
