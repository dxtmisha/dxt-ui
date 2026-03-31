export enum TranslatePostType {
  frames = 'translate-type-frames'
}

export enum TranslatePostCommand {
  frames = 'translate-command-frames',
  framesEnabled = 'translate-command-frames-enabled',
  update = 'translate-command-update'
}

export type TranslatePostItem<Data extends Record<string, any> = Record<string, any>>
  = Data
    & {
      command: TranslatePostCommand
    }

export type TranslateFrameItem = {
  name: string
  id: string
  image?: Uint8Array<ArrayBufferLike> | string
}

export type TranslateFrameMessenger = TranslatePostItem<{
  data: TranslateFrameItem[]
}>

export type TranslatePrefixItem = {
  label: string
  description?: string
  value: string
}
export type TranslatePrefixList = TranslatePrefixItem[]
