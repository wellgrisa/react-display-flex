import { render, screen } from '@testing-library/react'

import { Column, FlexibleBox, Row } from './FlexibleBox'

const getFlexibleBox = async ({ dataTestId } = { dataTestId: 'flexible-box' }) => screen.findByTestId(dataTestId)

describe('<FlexibleBox />', () => {
  it('renders an element with the flexible class', async () => {
    render(<FlexibleBox data-testid="flexible-box" />)

    const reactFlex = await getFlexibleBox()

    expect(reactFlex.className).toBe('flexible-box')
  })

  it('renders an element with the flexible class plus a given className', async () => {
    render(<FlexibleBox className="given-class-name" data-testid="flexible-box" />)

    const reactFlex = await getFlexibleBox()

    expect(reactFlex).toHaveClass('flexible-box given-class-name')
  })

  it('renders an element with the flexible class inline accordingly to the display (flex, inline-flex) structure', async () => {
    render(<FlexibleBox flex data-testid="flexible-box" />)
    render(<FlexibleBox inlineFlex data-testid="flexible-box" />)

    const [flex, inlineFlex] = await screen.findAllByTestId('flexible-box')

    expect(flex).toHaveClass('flexible-box flexible-box-flex')
    expect(inlineFlex).toHaveClass('flexible-box flexible-box-inline-flex')
  })

  it('renders an element with align items start class', async () => {
    render(<FlexibleBox data-testid="flexible-box" alignItemsStart />)

    const reactFlex = await getFlexibleBox()

    expect(reactFlex).toHaveClass('align-items-start')
  })

  it('renders an element with extra html properties', async () => {
    render(<FlexibleBox data-testid="flexible-box" role="dialog" />)

    const reactFlexByRole = screen.getByRole('dialog')

    expect(reactFlexByRole).toBeDefined()
  })

  it('renders a flexible column or row by using the shortcut elements', async () => {
    render(<Row data-testid="flexible-box" />)
    render(<Column data-testid="flexible-box" />)

    const [row, column] = await screen.findAllByTestId('flexible-box')

    expect(row).toHaveClass('flexible-box flexible-box-row')
    expect(column).toHaveClass('flexible-box flexible-box-column')
  })

  it('renders a flexible specific html element', async () => {
    render(<FlexibleBox element="header" data-testid="flexible-box" />)
    render(<FlexibleBox element="section" data-testid="flexible-box" />)

    const [header, section] = await screen.findAllByTestId('flexible-box')

    expect(header.tagName).toBe('HEADER')
    expect(section.tagName).toBe('SECTION')
  })
})
