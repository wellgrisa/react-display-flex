import { render, screen } from '@testing-library/react'

import { ReactFlex } from './ReactFlexi'

const getReactFlex = async () => screen.findByTestId('react-flex')

describe('ReactFlex', () => {
  it('renders an element with react-flex class', async () => {
    render(<ReactFlex />)

    const reactFlex = await getReactFlex()

    expect(reactFlex.className).toBe('react-flex')
  })

  it('renders an element with align items start class', async () => {
    render(<ReactFlex alignItemsStart />)

    const reactFlex = await getReactFlex()

    expect(reactFlex).toHaveClass('align-items-start')
  })

  it('renders an element with extra html properties', async () => {
    render(<ReactFlex role="dialog" />)

    const reactFlexByRole = screen.getByRole('dialog')

    expect(reactFlexByRole).toBeDefined()
  })
})
