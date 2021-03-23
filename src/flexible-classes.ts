import { DisplayEnum, FlexibleBoxPropTypes } from './flexible-types'

export const buildFlexibleClassName = ({ flex, ...props }: FlexibleBoxPropTypes) =>
  Object.keys(props)
    .filter((key) => props[key] === true)
    .reduce(
      (classes, property) => `${classes} ${flexibleBoxClasses[property] ? flexibleBoxClasses[property] : ''}`,
      `flexible-box${flexibleBoxClasses[flex] ? ` ${flexibleBoxClasses[flex]}` : ''}`,
    )

export const flexibleBoxClasses: { [key in FlexibleBoxClasses]: string } = {
  alignItemsStart: 'align-items-start',
  alignItemsEnd: 'align-items-end',
  alignItemsCenter: 'align-items-center',
  alignItemsBaseline: 'align-items-baseline',
  alignItemsStretch: 'align-items-stretch',
  justifyContentStart: 'justify-content-start',
  justifyContentEnd: 'justify-content-end',
  justifyContentCenter: 'justify-content-center',
  justifyContentSpaceAround: 'justify-content-space-around',
  justifyContentSpaceEvenly: 'justify-content-space-evenly',
  justifyContentSpaceBetween: 'justify-content-space-between',
  justifyContentBaseline: 'justify-content-baseline',
  justifyContentStretch: 'justify-content-stretch',
  alignContentStart: 'align-content-start',
  alignContentEnd: 'align-content-end',
  alignContentCenter: 'align-content-center',
  alignContentSpaceAround: 'align-content-space-around',
  alignContentSpaceEvenly: 'align-content-space-evenly',
  alignContentSpaceBetween: 'align-content-space-between',
  alignContentBaseline: 'align-content-baseline',
  alignContentStretch: 'align-content-stretch',
  alignSelfStart: 'align-self-start',
  alignSelfEnd: 'align-self-end',
  alignSelfCenter: 'align-self-center',
  alignSelfBaseline: 'align-self-baseline',
  alignSelfStretch: 'align-self-stretch',
  alignSelfAuto: 'align-self-auto',
  column: 'flexible-box-column',
  row: 'flexible-box-row',
  [DisplayEnum.flex]: 'flexible-box-flex',
  [DisplayEnum.inlineFlex]: 'flexible-box-inline-flex',
}

export type FlexibleBoxClasses =
  | 'alignItemsStart'
  | 'alignItemsEnd'
  | 'alignItemsCenter'
  | 'alignItemsBaseline'
  | 'alignItemsStretch'
  | 'justifyContentStart'
  | 'justifyContentEnd'
  | 'justifyContentCenter'
  | 'justifyContentSpaceAround'
  | 'justifyContentSpaceEvenly'
  | 'justifyContentSpaceBetween'
  | 'justifyContentBaseline'
  | 'justifyContentStretch'
  | 'alignContentStart'
  | 'alignContentEnd'
  | 'alignContentCenter'
  | 'alignContentSpaceAround'
  | 'alignContentSpaceEvenly'
  | 'alignContentSpaceBetween'
  | 'alignContentBaseline'
  | 'alignContentStretch'
  | 'alignSelfStart'
  | 'alignSelfEnd'
  | 'alignSelfCenter'
  | 'alignSelfBaseline'
  | 'alignSelfStretch'
  | 'alignSelfAuto'
  | 'column'
  | 'row'
  | DisplayEnum.flex
  | DisplayEnum.inlineFlex
