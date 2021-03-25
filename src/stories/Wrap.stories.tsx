import { Meta } from '@storybook/react/types-6-0'

import { Flex } from '../FlexibleBox'
import { FlexBoxTemplate } from './FlexibleBoxTemplate'

export default {
  title: 'Container/FlexibleBox/Wrap',
  component: Flex,
} as Meta

export const Wrap = FlexBoxTemplate.bind({})

Wrap.args = {
  wrap: true,
}

export const NoWrap = FlexBoxTemplate.bind({})

NoWrap.args = {
  noWrap: true,
}

export const WrapReverse = FlexBoxTemplate.bind({})

WrapReverse.args = {
  wrapReverse: true,
}
