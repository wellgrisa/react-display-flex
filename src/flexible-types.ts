import { PropsWithChildren } from 'react'

type AlignItemsType = {
  alignItemsStart?: boolean
  alignItemsEnd?: boolean
  alignItemsCenter?: boolean
  alignItemsBaseline?: boolean
  alignItemsStretch?: boolean
}

type JustifyContentType = {
  justifyContentStart?: boolean
  justifyContentEnd?: boolean
  justifyContentCenter?: boolean
  justifyContentSpaceAround?: boolean
  justifyContentSpaceEvenly?: boolean
  justifyContentSpaceBetween?: boolean
  justifyContentBaseline?: boolean
  justifyContentStretch?: boolean
}

type AlignContentType = {
  alignContentStart?: boolean
  alignContentEnd?: boolean
  alignContentCenter?: boolean
  alignContentSpaceAround?: boolean
  alignContentSpaceEvenly?: boolean
  alignContentSpaceBetween?: boolean
  alignContentBaseline?: boolean
  alignContentStretch?: boolean
}
type AlignSelfPropType = {
  alignSelfStart?: boolean
  alignSelfEnd?: boolean
  alignSelfCenter?: boolean
  alignSelfBaseline?: boolean
  alignSelfStretch?: boolean
  alignSelfAuto?: boolean
}

type FlexDirectionType = {
  column?: boolean
  row?: boolean
}

type ElementType = {
  element?: string
}

type HTMLAttributesType = React.HTMLAttributes<HTMLElement>

export type FlexibleBoxPropTypes = PropsWithChildren<
  AlignItemsType &
    JustifyContentType &
    AlignContentType &
    AlignSelfPropType &
    FlexDirectionType &
    ElementType &
    HTMLAttributesType
>
