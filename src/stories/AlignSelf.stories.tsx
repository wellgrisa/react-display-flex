import { Meta } from '@storybook/react/types-6-0'

import { Flex, FlexibleBox } from '../FlexibleBox'
import { ExampleFlexibleBox } from './FlexibleBoxTemplate'

export default {
  title: 'Container/FlexibleBox/AlignSelf',
  component: Flex,
  decorators: [
    (Story) => (
      <Flex className="flexible-story" style={{ minHeight: 200 }}>
        <ExampleFlexibleBox>0</ExampleFlexibleBox>
        <ExampleFlexibleBox>1</ExampleFlexibleBox>
        <Story />
        <ExampleFlexibleBox>3</ExampleFlexibleBox>
        <ExampleFlexibleBox>4</ExampleFlexibleBox>
      </Flex>
    ),
  ],
} as Meta

const alignSelfProps = { children: 2 }

export const AlignSelfStart = ExampleFlexibleBox.bind({})

AlignSelfStart.args = {
  alignSelfStart: true,
  ...alignSelfProps,
}

export const AlignSelfCenter = ExampleFlexibleBox.bind({})

AlignSelfCenter.args = {
  alignSelfCenter: true,
  ...alignSelfProps,
}

export const AlignSelfEnd = ExampleFlexibleBox.bind({})

AlignSelfEnd.args = {
  alignSelfEnd: true,
  ...alignSelfProps,
}

export const AlignSelfStretch = ExampleFlexibleBox.bind({})

AlignSelfStretch.args = {
  alignSelfStretch: true,
  ...alignSelfProps,
}

export const AlignSelfBaseline = ExampleFlexibleBox.bind({})

AlignSelfBaseline.args = {
  alignSelfBaseline: true,
  ...alignSelfProps,
}
