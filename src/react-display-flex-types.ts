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
  columnReverse?: boolean
  rowReverse?: boolean
}

type FlexGrowType = {
  flexGrow?: boolean
}

type FlexibleHTMLElements = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section'

type ElementType = {
  element?: FlexibleHTMLElements
}

type DisplayType = {
  flex?: boolean
  inlineFlex?: boolean
}

type WrapType = {
  wrap?: boolean
  noWrap?: boolean
  wrapReverse?: boolean
}

type HTMLAttributesType = React.HTMLAttributes<HTMLElement>

export type ReactDisplayFlexPropTypes = AlignItemsType &
  JustifyContentType &
  AlignContentType &
  AlignSelfPropType &
  FlexDirectionType &
  FlexGrowType &
  ElementType &
  DisplayType &
  WrapType

export type ReactDisplayFlexPropTypesWithHtmlAttributes = PropsWithChildren<
  ReactDisplayFlexPropTypes & HTMLAttributesType
>
