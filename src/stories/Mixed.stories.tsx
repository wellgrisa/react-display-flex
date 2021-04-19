import './mixed.css'

import { Meta } from '@storybook/react/types-6-0'

import { Column, Flex, Row } from '../FlexibleBox'

export default {
  title: 'Container/FlexibleBox/Mixed',
  component: Flex,
  decorators: [
    (Story) => (
      <Column style={{ minHeight: '80vh' }}>
        <Story />
      </Column>
    ),
  ],
} as Meta

export const Layout = () => (
  <Column className="layout" alignSelfStretch flexGrow>
    <Row element="header" justifyContentSpaceBetween>
      <label>Beautiful Logo</label>
      <label>Log me out please</label>
    </Row>
    <Column justifyContentSpaceBetween flexGrow>
      <Row flexGrow>
        <Column element="nav">
          <ul>
            <li>Cool Item</li>
            <li>Not so cool item</li>
            <li>Bureaucracy item</li>
            <li>Lorem</li>
            <li>Maybe Lorem</li>
          </ul>
        </Column>
        <Column flexGrow justifyContentCenter element="section" className="content">
          <Row>
            <p>Bigger square</p>
          </Row>
          <Row alignSelfCenter>
            <p>in the</p>
          </Row>
          <Row alignSelfEnd>
            <p>room</p>
          </Row>
        </Column>
      </Row>
      <Column element="footer">
        <p>Being a sasquatch in this world</p>
      </Column>
    </Column>
  </Column>
)
