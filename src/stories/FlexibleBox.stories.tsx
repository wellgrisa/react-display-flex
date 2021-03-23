import { Meta, Story } from '@storybook/react/types-6-0'

import { FlexibleBoxPropTypes } from '../flexible-types'
import { Flex, FlexibleBox } from '../FlexibleBox'

export default {
  title: 'Flex',
  component: Flex,
} as Meta

const ExampleFlexibleBox = () => <FlexibleBox className="example-box" />

const Template: Story<FlexibleBoxPropTypes> = (args) => (
  <Flex {...args}>
    <ExampleFlexibleBox />
    <ExampleFlexibleBox />
    <ExampleFlexibleBox />
  </Flex>
)

export const AlignItemsStart = Template.bind({})
AlignItemsStart.args = {
  alignItemsStart: true,
}
