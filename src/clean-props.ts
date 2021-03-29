import { flexibleBoxClasses } from './flexible-classes'

const isFlexibleProperty = (key) => key in flexibleBoxClasses || key === 'display'

export const cleanProps = ({ props }) =>
  Object.keys(props).some(isFlexibleProperty)
    ? Object.keys(props).reduce((cleanProps: { [key: string]: string }, key) => {
        if (!isFlexibleProperty(key)) {
          cleanProps[key] = props[key]
        }

        return cleanProps
      }, {})
    : props
