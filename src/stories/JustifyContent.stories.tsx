import { Meta } from '@storybook/react/types-6-0'

import { Flex } from '../FlexibleBox'
import { FlexBoxTemplate } from './FlexibleBoxTemplate'

export default {
  title: 'Container/FlexibleBox/JustifyContent',
  component: Flex,
} as Meta

export const JustifyContentStart = FlexBoxTemplate.bind({})

JustifyContentStart.args = {
  justifyContentStart: true,
}

export const JustifyContentCenter = FlexBoxTemplate.bind({})

JustifyContentCenter.args = {
  justifyContentCenter: true,
}

export const JustifyContentEnd = FlexBoxTemplate.bind({})

JustifyContentEnd.args = {
  justifyContentEnd: true,
}

export const JustifyContentSpaceAround = FlexBoxTemplate.bind({})

JustifyContentSpaceAround.args = {
  justifyContentSpaceAround: true,
}

export const JustifyContentSpaceEvenly = FlexBoxTemplate.bind({})

JustifyContentSpaceEvenly.args = {
  justifyContentSpaceEvenly: true,
}

export const JustifyContentSpaceBetween = FlexBoxTemplate.bind({})

JustifyContentSpaceBetween.args = {
  justifyContentSpaceBetween: true,
}
