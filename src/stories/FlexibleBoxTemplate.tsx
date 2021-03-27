import { Story } from '@storybook/react/types-6-0'

import { FlexibleBoxPropTypes } from '../flexible-types'
import { Flex, FlexibleBox } from '../FlexibleBox'

const numberOfBoxes = 5

export const ExampleFlexibleBox = ({ children }) => <FlexibleBox className="example-box">{children}</FlexibleBox>

export const FlexibleBoxTemplate: Story<FlexibleBoxPropTypes> = (args) => (
  <FlexibleBox className="flexible-story" {...args}>
    {Array.from({ length: numberOfBoxes }).map((_: number, index: number) => (
      <ExampleFlexibleBox key={index}>{index}</ExampleFlexibleBox>
    ))}
  </FlexibleBox>
)

export const FlexBoxTemplate: Story<FlexibleBoxPropTypes> = (args) => (
  <Flex className="flexible-story" {...args}>
    {Array.from({ length: numberOfBoxes }).map((_: number, index: number) => (
      <ExampleFlexibleBox key={index}>{index}</ExampleFlexibleBox>
    ))}
  </Flex>
)

export const ManyItemsFlexBoxTemplate: Story<FlexibleBoxPropTypes> = (args) => (
  <Flex className="flexible-story" {...args}>
    {Array.from({ length: 20 }).map((_: number, index: number) => (
      <ExampleFlexibleBox key={index}>{index}</ExampleFlexibleBox>
    ))}
  </Flex>
)
