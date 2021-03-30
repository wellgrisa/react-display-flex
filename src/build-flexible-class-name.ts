import { flexibleBoxClasses } from './flexible-classes'
import { FlexibleBoxPropTypes } from './flexible-types'

export const buildFlexibleClassName = ({ className, ...props }: FlexibleBoxPropTypes) =>
  Object.keys(props)
    .filter((key) => key in flexibleBoxClasses)
    .reduce(
      (classes, property) => `${classes} ${flexibleBoxClasses[property] ? flexibleBoxClasses[property] : ''}`,
      `${className ? `${className} ` : ''}flexible-box`,
    )
