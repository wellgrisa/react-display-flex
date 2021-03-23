import { Meta } from '@storybook/react/types-6-0'

import { Flex } from '../FlexibleBox'
import { FlexibleBoxTemplate } from './build-stories-actors'

export default {
  title: 'Container/Flex',
  component: Flex,
} as Meta

export const AlignItemsStart = FlexibleBoxTemplate.bind({})

AlignItemsStart.args = {
  alignItemsStart: true,
}

export const AlignItemsCenter = FlexibleBoxTemplate.bind({})

AlignItemsCenter.args = {
  alignItemsCenter: true,
}

export const AlignItemsEnd = FlexibleBoxTemplate.bind({})

AlignItemsEnd.args = {
  alignItemsEnd: true,
}

export const AlignItemsStretch = FlexibleBoxTemplate.bind({})

AlignItemsStretch.args = {
  alignItemsStretch: true,
}
