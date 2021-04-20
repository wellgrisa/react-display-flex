import { buildFlexibleClassName } from './build-flexible-class-name'
import { flexibleBoxClasses } from './flexible-classes'
import { ReactDisplayFlexPropTypes, ReactDisplayFlexPropTypesWithHtmlAttributes } from './react-display-flex-types'

describe('Building the flexible class name', () => {
  it('returns the flexible class name', () => {
    const singleFlexibleClassProperty: ReactDisplayFlexPropTypes = {}

    const className = buildFlexibleClassName(singleFlexibleClassProperty)

    expect(className).toBe('react-display-flex')
  })

  it('returns the given className given', () => {
    const className = buildFlexibleClassName({
      className: 'given-class-name',
    })

    expect(className).toBe('given-class-name react-display-flex')
  })

  it('returns the flexible class name with a single flex class property', () => {
    const singleFlexibleClassProperty: ReactDisplayFlexPropTypes = {
      alignContentStart: true,
    }

    const className = buildFlexibleClassName(singleFlexibleClassProperty)

    expect(className).toBe('react-display-flex align-content-start')
  })

  it('returns the flexible class name ignoring html attributes', () => {
    const singleFlexibleClassProperty: ReactDisplayFlexPropTypesWithHtmlAttributes = {
      alignContentStart: true,
      role: 'dialog',
    }

    const className = buildFlexibleClassName(singleFlexibleClassProperty)

    expect(className).toBe('react-display-flex align-content-start')
  })

  it('returns the flexible class name with every property contained in the flexible classes object', () => {
    const multipleFlexProperties = Object.keys(flexibleBoxClasses).reduce((flexibleProperties, flexibleProperty) => {
      flexibleProperties[flexibleProperty] = true

      return flexibleProperties
    }, {}) as ReactDisplayFlexPropTypes

    const className = buildFlexibleClassName(multipleFlexProperties)

    expect(className).toMatchSnapshot()
  })
})
