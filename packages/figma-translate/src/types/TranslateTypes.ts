export enum TranslateCommand {
  frames = 'translate-frames'
}

export type TranslatePrefixItem = {
  label: string
  description?: string
  value: string
}
export type TranslatePrefixList = TranslatePrefixItem[]
