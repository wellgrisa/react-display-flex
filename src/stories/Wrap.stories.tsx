import { Meta } from '@storybook/react/types-6-0'

import { Flex } from '../FlexibleBox'
import { FlexBoxTemplate } from './FlexibleBoxTemplate'

const maxWidthStyle = { style: { maxWidth: '30rem', border: '1px solid OrangeRed', padding: 20 } }

export default {
  title: 'Container/FlexibleBox/Wrap',
  component: Flex,
} as Meta

export const Wrap = FlexBoxTemplate.bind({})

Wrap.args = {
  wrap: true,
  ...maxWidthStyle,
}

export const NoWrap = FlexBoxTemplate.bind({})

NoWrap.args = {
  noWrap: true,
  ...maxWidthStyle,
}

export const WrapReverse = FlexBoxTemplate.bind({})

WrapReverse.args = {
  wrapReverse: true,
  ...maxWidthStyle,
}
