import { flexibleBoxClasses } from './flexible-classes'
import { FlexibleBoxPropTypes } from './flexible-types'

export const buildFlexibleClassName = ({ flex, ...props }: FlexibleBoxPropTypes) =>
  Object.keys(props)
    .filter((key) => props[key] === true)
    .reduce(
      (classes, property) => `${classes} ${flexibleBoxClasses[property] ? flexibleBoxClasses[property] : ''}`,
      `flexible-box${flexibleBoxClasses[flex] ? ` ${flexibleBoxClasses[flex]}` : ''}`,
    )
