import { FC } from 'react'

import { Story } from '@storybook/react/types-6-0'

import { FlexibleBoxPropTypes } from '../flexible-types'
import { Flex, FlexibleBox } from '../FlexibleBox'

const numberOfBoxes = 5

export const ExampleFlexibleBox: FC = ({ children }) => <FlexibleBox className="example-box">{children}</FlexibleBox>

export const FlexibleBoxTemplate: Story<FlexibleBoxPropTypes> = (args) => (
  <Flex className="flexible-story" {...args}>
    {Array.from({ length: numberOfBoxes }).map((_: number, index: number) => (
      <ExampleFlexibleBox key={index}>{index}</ExampleFlexibleBox>
    ))}
  </Flex>
)
