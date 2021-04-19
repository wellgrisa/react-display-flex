import { buildFlexibleClassName } from './build-flexible-class-name'
import { flexibleBoxClasses } from './flexible-classes'
import { FlexibleBoxPropTypes } from './flexible-types'

describe('Building the flexible class name', () => {
  it('returns the flexible class name', () => {
    const singleFlexibleClassProperty: FlexibleBoxPropTypes = {}

    const className = buildFlexibleClassName(singleFlexibleClassProperty)

    expect(className).toBe('flexible-box')
  })

  it('returns the given className given', () => {
    const className = buildFlexibleClassName({
      className: 'given-class-name',
    })

    expect(className).toBe('given-class-name flexible-box')
  })

  it('returns the flexible class name with a single flex class property', () => {
    const singleFlexibleClassProperty: FlexibleBoxPropTypes = {
      alignContentStart: true,
    }

    const className = buildFlexibleClassName(singleFlexibleClassProperty)

    expect(className).toBe('flexible-box align-content-start')
  })

  it('returns the flexible class name ignoring html attributes', () => {
    const singleFlexibleClassProperty: FlexibleBoxPropTypes = {
      alignContentStart: true,
      role: 'dialoga',
    }

    const className = buildFlexibleClassName(singleFlexibleClassProperty)

    expect(className).toBe('flexible-box align-content-start')
  })

  it('returns the flexible class name with every property contained in the flexible classes object', () => {
    const multipleFlexProperties = Object.keys(flexibleBoxClasses).reduce((flexibleProperties, flexibleProperty) => {
      flexibleProperties[flexibleProperty] = true

      return flexibleProperties
    }, {}) as FlexibleBoxPropTypes

    const className = buildFlexibleClassName(multipleFlexProperties)

    expect(className).toMatchSnapshot()
  })
})
