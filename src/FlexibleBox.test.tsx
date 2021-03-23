import { render, screen } from '@testing-library/react'

import { Column, FlexibleBox, Row } from './FlexibleBox'

const getReactFlexibleBox = async ({ dataTestId } = { dataTestId: 'flexible-box' }) => screen.findByTestId(dataTestId)

describe('ReactFlexibleBox', () => {
  it('renders an element with flexible class', async () => {
    render(<FlexibleBox data-testid="flexible-box" />)

    const reactFlex = await getReactFlexibleBox()

    expect(reactFlex.className).toBe('flexible-box')
  })

  it('renders an element with align items start class', async () => {
    render(<FlexibleBox data-testid="flexible-box" alignItemsStart />)

    const reactFlex = await getReactFlexibleBox()

    expect(reactFlex).toHaveClass('align-items-start')
  })

  it('renders an element with extra html properties', async () => {
    render(<FlexibleBox data-testid="flexible-box" role="dialog" />)

    const reactFlexByRole = screen.getByRole('dialog')

    expect(reactFlexByRole).toBeDefined()
  })

  it('renders a react flexible column or row by using the shortcut elements', async () => {
    render(<Row data-testid="flexible-box" />)
    render(<Column data-testid="flexible-box" />)

    const [row, column] = await screen.findAllByTestId('flexible-box')

    expect(row).toHaveClass('flexible-row')
    expect(column).toHaveClass('flexible-column')
  })
})
