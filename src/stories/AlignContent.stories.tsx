import { Meta } from '@storybook/react/types-6-0'

import { Flex } from '../ReactDisplayFlex'
import { ManyItemsFlexBoxTemplate as FlexBoxTemplate } from './ReactDisplayFlexTemplate'

export default {
  title: 'Container/ReactDisplayFlex/AlignContent',
  component: Flex,
} as Meta

const style = { height: 400 }

export const AlignContentStart = FlexBoxTemplate.bind({})

AlignContentStart.args = {
  alignContentStart: true,
  wrap: true,
  style,
}

export const AlignContentCenter = FlexBoxTemplate.bind({})

AlignContentCenter.args = {
  alignContentCenter: true,
  wrap: true,
  style,
}

export const AlignContentEnd = FlexBoxTemplate.bind({})

AlignContentEnd.args = {
  alignContentEnd: true,
  wrap: true,
  style,
}

export const AlignContentStretch = FlexBoxTemplate.bind({})

AlignContentStretch.args = {
  alignContentStretch: true,
  wrap: true,
  style,
}

export const AlignContentBaseline = FlexBoxTemplate.bind({})

AlignContentBaseline.args = {
  alignContentBaseline: true,
  wrap: true,
  style,
}

export const AlignContentSpaceAround = FlexBoxTemplate.bind({})

AlignContentSpaceAround.args = {
  alignContentSpaceAround: true,
  wrap: true,
  style,
}

export const AlignContentSpaceEvenly = FlexBoxTemplate.bind({})

AlignContentSpaceEvenly.args = {
  alignContentSpaceEvenly: true,
  wrap: true,
  style,
}

export const AlignContentSpaceBetween = FlexBoxTemplate.bind({})

AlignContentSpaceBetween.args = {
  alignContentSpaceBetween: true,
  wrap: true,
  style,
}
