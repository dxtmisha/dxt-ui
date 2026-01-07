export type DemoAiDocEmits = {
  click: [event: MouseEvent]
  toggle: [isOpen: boolean]
}

export interface DemoAiDocSlots {
  default?(props: {}): any
  header?(props: { title: string }): any
  footer?(props: {}): any
}

export interface DemoAiDocProps {
  title?: string
  description?: string
  isOpen?: boolean
}

export const DemoAiDocDefaults: DemoAiDocProps = {
  title: 'Demo Component',
  description: 'This is a demo component description.',
  isOpen: true
}
