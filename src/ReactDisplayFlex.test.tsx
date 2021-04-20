import { render, screen } from '@testing-library/react'

import { Column, FlexibleBox, Row } from './ReactDisplayFlex'

const getFlexibleBox = async ({ dataTestId } = { dataTestId: 'react-display-flex' }) => screen.findByTestId(dataTestId)

describe('<FlexibleBox />', () => {
  it('renders an element with the flexible class', async () => {
    render(<FlexibleBox data-testid="react-display-flex" />)

    const reactFlex = await getFlexibleBox()

    expect(reactFlex.className).toBe('react-display-flex')
  })

  it('renders an element with the flexible class plus a given className', async () => {
    render(<FlexibleBox className="given-class-name" data-testid="react-display-flex" />)

    const reactFlex = await getFlexibleBox()

    expect(reactFlex).toHaveClass('react-display-flex given-class-name')
  })

  it('renders an element with the flexible class inline accordingly to the display (flex, inline-flex) structure', async () => {
    render(<FlexibleBox flex data-testid="react-display-flex" />)
    render(<FlexibleBox inlineFlex data-testid="react-display-flex" />)

    const [flex, inlineFlex] = await screen.findAllByTestId('react-display-flex')

    expect(flex).toHaveClass('react-display-flex react-display-flex-flex')
    expect(inlineFlex).toHaveClass('react-display-flex react-display-flex-inline-flex')
  })

  it('renders an element with align items start class', async () => {
    render(<FlexibleBox data-testid="react-display-flex" alignItemsStart />)

    const reactFlex = await getFlexibleBox()

    expect(reactFlex).toHaveClass('align-items-start')
  })

  it('renders an element with extra html properties', async () => {
    render(<FlexibleBox data-testid="react-display-flex" role="dialog" />)

    const reactFlexByRole = screen.getByRole('dialog')

    expect(reactFlexByRole).toBeDefined()
  })

  it('renders a flexible column or row by using the shortcut elements', async () => {
    render(<Row data-testid="react-display-flex" />)
    render(<Column data-testid="react-display-flex" />)

    const [row, column] = await screen.findAllByTestId('react-display-flex')

    expect(row).toHaveClass('react-display-flex react-display-flex-row')
    expect(column).toHaveClass('react-display-flex react-display-flex-column')
  })

  it('renders a flexible specific html element', async () => {
    render(<FlexibleBox element="header" data-testid="react-display-flex" />)
    render(<FlexibleBox element="section" data-testid="react-display-flex" />)

    const [header, section] = await screen.findAllByTestId('react-display-flex')

    expect(header.tagName).toBe('HEADER')
    expect(section.tagName).toBe('SECTION')
  })
})
