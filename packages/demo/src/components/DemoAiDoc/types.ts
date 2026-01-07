export type DemoAiDocEmits = {
  /** Событие клика по компоненту */
  click: [event: MouseEvent]
  /** Событие переключения состояния открытия/закрытия */
  toggle: [isOpen: boolean]
}

export interface DemoAiDocSlots {
  /** Основной контент компонента */
  default?(props: {}): any
  /** Слот для пользовательского заголовка */
  header?(props: { title: string }): any
  /** Слот для футера (отображается только если передан) */
  footer?(props: {}): any
}

export interface DemoAiDocProps {
  /** Заголовок блока */
  title?: string
  /** Краткое описание под заголовком */
  description?: string
  /** Состояние открытия по умолчанию */
  isOpen?: boolean
}

export const DemoAiDocDefaults: DemoAiDocProps = {
  title: 'Demo Component',
  description: 'This is a demo component description.',
  isOpen: true
}
