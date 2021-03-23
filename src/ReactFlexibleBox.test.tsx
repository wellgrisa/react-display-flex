import { render, screen } from '@testing-library/react'

import { ReactFlexibleBox } from './ReactFlexibleBox'

const getReactFlexibleBox = async () => screen.findByTestId('react-flexible-box')

describe('ReactFlexibleBox', () => {
  it('renders an element with react-flexible class', async () => {
    render(<ReactFlexibleBox />)

    const reactFlex = await getReactFlexibleBox()

    expect(reactFlex.className).toBe('react-flex')
  })

  it('renders an element with align items start class', async () => {
    render(<ReactFlexibleBox alignItemsStart />)

    const reactFlex = await getReactFlexibleBox()

    expect(reactFlex).toHaveClass('align-items-start')
  })

  it('renders an element with extra html properties', async () => {
    render(<ReactFlexibleBox role="dialog" />)

    const reactFlexByRole = screen.getByRole('dialog')

    expect(reactFlexByRole).toBeDefined()
  })
})
