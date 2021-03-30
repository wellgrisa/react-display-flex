import { flexibleBoxClasses } from './flexible-classes'

export const cleanProps = ({ props }) =>
  Object.keys(props).some((key) => key in flexibleBoxClasses)
    ? Object.keys(props).reduce((cleanProps: { [key: string]: string }, key) => {
        if (!flexibleBoxClasses[key]) {
          cleanProps[key] = props[key]
        }

        return cleanProps
      }, {})
    : props
