import { Meta } from '@storybook/react/types-6-0'

import { Flex } from '../ReactDisplayFlex'
import { FlexBoxTemplate } from './ReactDisplayFlexTemplate'

export default {
  title: 'Container/ReactDisplayFlex/Direction',
  component: Flex,
} as Meta

export const Column = FlexBoxTemplate.bind({})

Column.args = {
  column: true,
}

export const Row = FlexBoxTemplate.bind({})

Row.args = {
  row: true,
}

export const ColumnReverse = FlexBoxTemplate.bind({})

ColumnReverse.args = {
  columnReverse: true,
}

export const RowReverse = FlexBoxTemplate.bind({})

RowReverse.args = {
  rowReverse: true,
}
