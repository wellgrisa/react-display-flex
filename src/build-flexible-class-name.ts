import { flexibleBoxClasses } from './flexible-classes'
import { ReactDisplayFlexPropTypes } from './react-display-flex-types'

export const buildFlexibleClassName = ({ className, ...props }: ReactDisplayFlexPropTypes) =>
  Object.keys(props)
    .filter((key) => key in flexibleBoxClasses)
    .reduce(
      (classes, property) => `${classes} ${flexibleBoxClasses[property] ? flexibleBoxClasses[property] : ''}`,
      `${className ? `${className} ` : ''}react-display-flex`,
    )
