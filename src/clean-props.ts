import { flexibleBoxClasses } from './flexible-classes'

export const cleanProps = ({ props }) =>
  Object.keys(props).reduce((cleanProps: { [key: string]: string }, key) => {
    if (!flexibleBoxClasses[key]) {
      cleanProps[key] = props[key]
    }

    return cleanProps
  }, {})
