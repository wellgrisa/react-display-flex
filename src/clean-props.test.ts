import { cleanProps } from './clean-props'
import { flexibleBoxClasses } from './flexible-classes'
import { ReactDisplayFlexPropTypesWithHtmlAttributes } from './react-display-flex-types'

describe('Cleaning props', () => {
  it('deletes a single flexible class property', () => {
    const singleFlexibleClassProperty: ReactDisplayFlexPropTypesWithHtmlAttributes = {
      alignContentStart: true,
      role: 'dialog',
    }

    const cleanedProps = cleanProps({ props: singleFlexibleClassProperty })

    expect(cleanedProps).toEqual(
      expect.objectContaining({
        role: 'dialog',
      }),
    )

    expect(cleanedProps).toEqual(
      expect.not.objectContaining({
        alignContentStart: true,
      }),
    )
  })

  it('deletes every property contained in flexible classes object', () => {
    let multipleFlexProperties: ReactDisplayFlexPropTypesWithHtmlAttributes = {
      role: 'dialog',
    }

    Object.keys(flexibleBoxClasses).forEach((flexibleProperty) => (multipleFlexProperties[flexibleProperty] = true))

    const cleanedProps = cleanProps({ props: multipleFlexProperties })

    expect(cleanedProps).toEqual(
      expect.objectContaining({
        role: 'dialog',
      }),
    )
    expect(Object.keys(multipleFlexProperties)).toHaveLength(36)
    expect(Object.keys(cleanedProps)).toHaveLength(1)
  })
})
