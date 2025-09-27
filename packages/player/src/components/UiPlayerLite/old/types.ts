export type UiPlayerLiteEmits = {
  status: [status: string]
}

export interface UiPlayerLiteSlots {
  top?(props: any): any

  default?(props: any): any
}

export interface UiPlayerLiteProps {
  url?: string
  status?: 'play' | 'pause' | 'stop'
}

export const UiPlayerLiteDefaults: UiPlayerLiteProps = {
  status: 'stop'
}
