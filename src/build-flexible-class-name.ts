import { flexibleBoxClasses } from './flexible-classes'
import { FlexibleBoxPropTypes } from './flexible-types'

export const buildFlexibleClassName = ({ display, ...props }: FlexibleBoxPropTypes) =>
  Object.keys(props)
    .filter((key) => props[key] === true)
    .reduce(
      (classes, property) => `${classes} ${flexibleBoxClasses[property] ? flexibleBoxClasses[property] : ''}`,
      `flexible-box${flexibleBoxClasses[display] ? ` ${flexibleBoxClasses[display]}` : ''}`,
    )
