import type { ConstrBind } from '@dxtmisha/functional'
import type { TextareaAutosizePropsBasic } from './props'

export type TextareaAutosizeComponentInclude = {
  textareaAutosize?: object
}

export type TextareaAutosizePropsInclude<
  TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic
> = {
  textareaAttrs?: ConstrBind<TextareaAutosize>
  autosize?: boolean
}
