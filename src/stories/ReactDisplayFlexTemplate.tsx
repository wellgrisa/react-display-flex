import { Story } from '@storybook/react/types-6-0'

import { ReactDisplayFlexPropTypes } from '../react-display-flex-types'
import { Flex, FlexibleBox } from '../ReactDisplayFlex'

const numberOfBoxes = 5

export const ExampleFlexibleBox: Story<ReactDisplayFlexPropTypes> = ({ children, ...args }) => (
  <FlexibleBox className="example-box" {...args}>
    {children}
  </FlexibleBox>
)

export const FlexibleBoxTemplate: Story<ReactDisplayFlexPropTypes> = (args) => (
  <FlexibleBox className="react-display-flex-story" {...args}>
    {Array.from({ length: numberOfBoxes }).map((_: any, index: number) => (
      <ExampleFlexibleBox key={index}>{index}</ExampleFlexibleBox>
    ))}
  </FlexibleBox>
)

export const FlexBoxTemplate: Story<ReactDisplayFlexPropTypes> = (args) => (
  <Flex className="react-display-flex-story" {...args}>
    {Array.from({ length: numberOfBoxes }).map((_: any, index: number) => (
      <ExampleFlexibleBox key={index}>{index}</ExampleFlexibleBox>
    ))}
  </Flex>
)

export const ManyItemsFlexBoxTemplate: Story<ReactDisplayFlexPropTypes> = (args) => (
  <Flex className="react-display-flex-story" {...args}>
    {Array.from({ length: 20 }).map((_: any, index: number) => (
      <ExampleFlexibleBox key={index}>{index}</ExampleFlexibleBox>
    ))}
  </Flex>
)
