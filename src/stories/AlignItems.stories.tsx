import { Meta } from '@storybook/react/types-6-0'

import { Flex } from '../ReactDisplayFlex'
import { FlexBoxTemplate } from './ReactDisplayFlexTemplate'

export default {
  title: 'Container/ReactDisplayFlex/AlignItems',
  component: Flex,
} as Meta

const style = { minHeight: 200 }

export const AlignItemsStart = FlexBoxTemplate.bind({})

AlignItemsStart.args = {
  alignItemsStart: true,
  style,
}

export const AlignItemsCenter = FlexBoxTemplate.bind({})

AlignItemsCenter.args = {
  alignItemsCenter: true,
  style,
}

export const AlignItemsEnd = FlexBoxTemplate.bind({})

AlignItemsEnd.args = {
  alignItemsEnd: true,
  style,
}

export const AlignItemsStretch = FlexBoxTemplate.bind({})

AlignItemsStretch.args = {
  alignItemsStretch: true,
  style,
}

export const AlignItemsBaseline = FlexBoxTemplate.bind({})

AlignItemsBaseline.args = {
  alignItemsBaseline: true,
  style,
}
