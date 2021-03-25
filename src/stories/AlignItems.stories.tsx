import { Meta } from '@storybook/react/types-6-0'

import { Flex } from '../FlexibleBox'
import { FlexBoxTemplate } from './FlexibleBoxTemplate'

export default {
  title: 'Container/FlexibleBox/AlignItems',
  component: Flex,
} as Meta

export const AlignItemsStart = FlexBoxTemplate.bind({})

AlignItemsStart.args = {
  alignItemsStart: true,
}

export const AlignItemsCenter = FlexBoxTemplate.bind({})

AlignItemsCenter.args = {
  alignItemsCenter: true,
}

export const AlignItemsEnd = FlexBoxTemplate.bind({})

AlignItemsEnd.args = {
  alignItemsEnd: true,
}

export const AlignItemsStretch = FlexBoxTemplate.bind({})

AlignItemsStretch.args = {
  alignItemsStretch: true,
}

export const AlignItemsBaseline = FlexBoxTemplate.bind({})

AlignItemsBaseline.args = {
  alignItemsBaseline: true,
}
