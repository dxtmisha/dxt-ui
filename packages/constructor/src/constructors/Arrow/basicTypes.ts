/** Arrow direction enum / Направление стрелки перечисление */
export enum ArrowDirection {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
  HIDE = 'hide'
}

export type ArrowBorder = {
  top: number
  bottom: number
  left: number
  right: number
}

export type ArrowCenter = {
  x: number
  y: number
}
