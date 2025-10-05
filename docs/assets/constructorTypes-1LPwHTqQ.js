import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DB_maGql.js";import{M as r}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Types/constructorTypes"}),`
`,n.jsx(e.h1,{id:"типы-конструктора-constructortypes",children:"Типы конструктора (constructorTypes)"}),`
`,n.jsx(e.p,{children:"Набор специализированных TypeScript типов для системы конструктора компонентов. Предоставляет типы для создания, конфигурации и управления Vue компонентами с поддержкой реактивности, стилизации и событий."}),`
`,n.jsx(e.h2,{id:"базовые-типы-конструктора",children:"Базовые типы конструктора"}),`
`,n.jsx(e.h3,{id:"constritem",children:n.jsx(e.code,{children:"ConstrItem"})}),`
`,n.jsx(e.p,{children:"Дженерик тип записи для элементов конструктора."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrItem = Record<string, any>

// Использование
interface MyComponentData extends ConstrItem {
  title: string
  count: number
  visible: boolean
}

const componentData: ConstrItem = {
  name: 'MyComponent',
  version: '1.0.0',
  config: { theme: 'dark' }
}
`})}),`
`,n.jsx(e.h3,{id:"constrvaluet",children:n.jsx(e.code,{children:"ConstrValue<T>"})}),`
`,n.jsx(e.p,{children:"Обертка значения конструктора с опциональным свойством value."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrValue<T = any> = {
  value?: T
}

// Использование
const stringValue: ConstrValue<string> = { value: 'Hello' }
const numberValue: ConstrValue<number> = { value: 42 }
const emptyValue: ConstrValue<boolean> = {} // value не обязательно

function processValue<T>(wrapper: ConstrValue<T>): T | undefined {
  return wrapper.value
}
`})}),`
`,n.jsx(e.h3,{id:"constrcomponent",children:n.jsx(e.code,{children:"ConstrComponent"})}),`
`,n.jsx(e.p,{children:"Дженерик тип записи для компонентов конструктора."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrComponent = Record<string, any>

// Использование
const components: ConstrComponent = {
  Button: defineComponent({ /* ... */ }),
  Input: defineComponent({ /* ... */ }),
  Modal: defineComponent({ /* ... */ })
}
`})}),`
`,n.jsx(e.h2,{id:"модификация-компонентов",children:"Модификация компонентов"}),`
`,n.jsx(e.h3,{id:"constrcomponentmodp",children:n.jsx(e.code,{children:"ConstrComponentMod<P>"})}),`
`,n.jsx(e.p,{children:"Тип модификации компонента конструктора с реактивными или обычными значениями."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
  [K in keyof P]?: RefOrNormal<P[K]>
}

// Использование
interface ButtonProps {
  text: string
  disabled: boolean
  variant: 'primary' | 'secondary'
}

const buttonMod: ConstrComponentMod<ButtonProps> = {
  text: ref('Click me'), // реактивное значение
  disabled: false,       // обычное значение
  variant: computed(() => theme.value === 'dark' ? 'primary' : 'secondary')
}
`})}),`
`,n.jsx(e.h2,{id:"система-событий",children:"Система событий"}),`
`,n.jsx(e.h3,{id:"uniontointersectionu",children:n.jsx(e.code,{children:"UnionToIntersection<U>"})}),`
`,n.jsx(e.p,{children:"Утилитарный тип для преобразования объединенных типов в пересеченные."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

// Использование
type A = { a: string }
type B = { b: number }
type C = { c: boolean }

type Combined = UnionToIntersection<A | B | C>
// Результат: { a: string } & { b: number } & { c: boolean }
`})}),`
`,n.jsx(e.h3,{id:"constremititemt",children:n.jsx(e.code,{children:"ConstrEmitItem<T>"})}),`
`,n.jsx(e.p,{children:"Извлечение типа элемента emit из элемента конструктора."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrEmitItem<T extends ConstrItem> = T[keyof T]

// Использование
interface MyEmits {
  click: [MouseEvent]
  change: [string, number]
  close: []
}

type EmitItem = ConstrEmitItem<MyEmits>
// Результат: [MouseEvent] | [string, number] | []
`})}),`
`,n.jsx(e.h3,{id:"constremitt",children:n.jsx(e.code,{children:"ConstrEmit<T>"})}),`
`,n.jsx(e.p,{children:"Тип emit конструктора с правильными сигнатурами обработчиков событий."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
  [K in keyof T]: (evt: K, ...args: T[K]) => void
}>>

// Использование
interface ComponentEmits {
  click: [MouseEvent]
  input: [string]
  change: [string, number]
}

const emitHandlers: ConstrEmit<ComponentEmits> = (evt, ...args) => {
  if (evt === 'click') {
    // args типизированы как [MouseEvent]
    console.log('Click at:', args[0].clientX, args[0].clientY)
  } else if (evt === 'input') {
    // args типизированы как [string]
    console.log('Input value:', args[0])
  }
}
`})}),`
`,n.jsx(e.h2,{id:"система-стилизации",children:"Система стилизации"}),`
`,n.jsx(e.h3,{id:"constrclassobject",children:n.jsx(e.code,{children:"ConstrClassObject"})}),`
`,n.jsx(e.p,{children:"Тип объекта для CSS классов с булевыми значениями."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrClassObject = Record<string, boolean>

// Использование
const classObject: ConstrClassObject = {
  'btn': true,
  'btn-primary': true,
  'btn-disabled': false,
  'btn-large': true
}
`})}),`
`,n.jsx(e.h3,{id:"constrclass",children:n.jsx(e.code,{children:"ConstrClass"})}),`
`,n.jsx(e.p,{children:"Тип класса конструктора, поддерживающий строки, массивы и объекты."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject

// Использование
const stringClass: ConstrClass = 'btn btn-primary'

const arrayClass: ConstrClass = [
  'btn',
  'btn-primary',
  condition ? 'btn-large' : null,
  ['nested', 'classes']
]

const objectClass: ConstrClass = {
  'btn': true,
  'btn-primary': isPrimary,
  'btn-disabled': isDisabled
}
`})}),`
`,n.jsx(e.h3,{id:"constrclasslist",children:n.jsx(e.code,{children:"ConstrClassList"})}),`
`,n.jsx(e.p,{children:"Тип записи для сопоставления имен классов с определениями классов."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrClassList = Record<string, ConstrClass>

// Использование
const classList: ConstrClassList = {
  button: 'btn btn-primary',
  input: ['form-control', { 'is-invalid': hasError }],
  modal: {
    'modal': true,
    'modal-open': isOpen,
    'modal-large': size === 'large'
  }
}
`})}),`
`,n.jsx(e.h3,{id:"constrclasses",children:n.jsx(e.code,{children:"ConstrClasses"})}),`
`,n.jsx(e.p,{children:"Классы конструктора с обязательным основным классом и дополнительным списком классов."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrClasses = { main: ConstrClass } & ConstrClassList

// Использование
const componentClasses: ConstrClasses = {
  main: 'component-root',
  header: 'component-header',
  body: ['component-body', { 'is-expanded': isExpanded }],
  footer: {
    'component-footer': true,
    'has-actions': hasActions
  }
}
`})}),`
`,n.jsx(e.h3,{id:"constrstylesitem",children:n.jsx(e.code,{children:"ConstrStylesItem"})}),`
`,n.jsx(e.p,{children:"Тип элемента стиля конструктора для отдельных свойств стиля."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrStylesItem = string | null

// Использование
const width: ConstrStylesItem = '100px'
const height: ConstrStylesItem = null // не применяется
const color: ConstrStylesItem = '#ff0000'
`})}),`
`,n.jsx(e.h3,{id:"constrstyles",children:n.jsx(e.code,{children:"ConstrStyles"})}),`
`,n.jsx(e.p,{children:"Тип стилей конструктора, поддерживающий объекты и массивы определений стилей."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[]

// Использование как объект
const objectStyles: ConstrStyles = {
  width: '100px',
  height: '50px',
  backgroundColor: '#f0f0f0',
  borderRadius: null // не применяется
}

// Использование как массив
const arrayStyles: ConstrStyles = [
  { width: '100px', height: '50px' },
  { backgroundColor: theme.value === 'dark' ? '#333' : '#fff' },
  conditionalStyles ? { border: '1px solid red' } : {}
]
`})}),`
`,n.jsx(e.h2,{id:"конфигурация-компонента",children:"Конфигурация компонента"}),`
`,n.jsx(e.h3,{id:"constroptionscomp-emits-p",children:n.jsx(e.code,{children:"ConstrOptions<COMP, EMITS, P>"})}),`
`,n.jsx(e.p,{children:"Интерфейс опций конструктора для конфигурации компонента."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrOptions<
  COMP extends ConstrComponent,
  EMITS extends ConstrItem,
  P extends ConstrItem
> = {
  components?: COMP
  compMod?: ConstrComponentMod<P>
  emits?: ConstrEmit<EMITS>
  classes?: RefType<ConstrClasses>
  styles?: RefType<ConstrStyles>
}

// Использование
interface MyComponentProps {
  title: string
  count: number
}

interface MyComponentEmits {
  click: [MouseEvent]
  change: [number]
}

const options: ConstrOptions<ConstrComponent, MyComponentEmits, MyComponentProps> = {
  components: {
    Button: ButtonComponent,
    Icon: IconComponent
  },
  compMod: {
    title: ref('Dynamic Title'),
    count: computed(() => store.count)
  },
  emits: (evt, ...args) => {
    console.log('Event:', evt, args)
  },
  classes: computed(() => ({
    main: 'my-component',
    header: 'my-component__header'
  })),
  styles: ref({
    width: '300px',
    height: '200px'
  })
}
`})}),`
`,n.jsx(e.h3,{id:"constrsetupe-classes-setup",children:n.jsx(e.code,{children:"ConstrSetup<E, CLASSES, SETUP>"})}),`
`,n.jsx(e.p,{children:"Интерфейс настройки конструктора для инициализации компонента."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrSetup<
  E extends Element,
  CLASSES extends ConstrClasses,
  SETUP extends ConstrItem
> = {
  name: string
  element: Ref<E | undefined>
  classes: RefType<CLASSES>
  styles: RefType<ConstrStyles>
} & SETUP

// Использование
interface MySetupData {
  count: Ref<number>
  increment: () => void
}

const setup: ConstrSetup<HTMLDivElement, ConstrClasses, MySetupData> = {
  name: 'MyComponent',
  element: ref<HTMLDivElement>(),
  classes: computed(() => ({
    main: 'my-component',
    button: 'my-component__button'
  })),
  styles: ref({
    padding: '16px',
    backgroundColor: '#f5f5f5'
  }),
  count: ref(0),
  increment: () => setup.count.value++
}
`})}),`
`,n.jsx(e.h2,{id:"регистрация-и-привязка",children:"Регистрация и привязка"}),`
`,n.jsx(e.h3,{id:"constrregistration",children:n.jsx(e.code,{children:"ConstrRegistration"})}),`
`,n.jsx(e.p,{children:"Конфигурация регистрации конструктора."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrRegistration = {
  flag?: boolean
  translate?: Record<string, string>
}

// Использование
const registration: ConstrRegistration = {
  flag: true,
  translate: {
    'button.save': 'Сохранить',
    'button.cancel': 'Отменить',
    'message.success': 'Успешно выполнено'
  }
}
`})}),`
`,n.jsx(e.h3,{id:"constrbindt",children:n.jsx(e.code,{children:"ConstrBind<T>"})}),`
`,n.jsx(e.p,{children:"Тип привязки конструктора для привязки компонента с поддержкой классов и стилей."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrBind<T> = T & Record<string, any> & {
  class?: ConstrClass
  style?: ConstrStyles
}

// Использование
interface ButtonProps {
  text: string
  disabled: boolean
}

const boundButton: ConstrBind<ButtonProps> = {
  text: 'Click me',
  disabled: false,
  onClick: () => console.log('Clicked'),
  class: ['btn', 'btn-primary'],
  style: {
    width: '120px',
    height: '40px'
  }
}
`})}),`
`,n.jsx(e.h2,{id:"система-props",children:"Система Props"}),`
`,n.jsx(e.h3,{id:"constrpropitemoptionst",children:n.jsx(e.code,{children:"ConstrPropItemOptions<T>"})}),`
`,n.jsx(e.p,{children:"Опции элемента prop конструктора для определений Vue prop."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrPropItemOptions<T = any> = {
  type?: PropType<T>
  required?: boolean
  default?: any
  validator?(value: any, props: any): boolean
}

// Использование
const titleProp: ConstrPropItemOptions<string> = {
  type: String,
  required: true,
  validator: (value) => value.length > 0
}

const countProp: ConstrPropItemOptions<number> = {
  type: Number,
  default: 0,
  validator: (value) => value >= 0
}
`})}),`
`,n.jsx(e.h3,{id:"constrpropitemt",children:n.jsx(e.code,{children:"ConstrPropItem<T>"})}),`
`,n.jsx(e.p,{children:"Тип элемента prop конструктора с опциями или прямым PropType."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>

// Использование простого PropType
const simpleProp: ConstrPropItem<string> = String

// Использование с опциями
const complexProp: ConstrPropItem<number> = {
  type: Number,
  required: true,
  default: 42,
  validator: (value) => value > 0
}
`})}),`
`,n.jsx(e.h3,{id:"constrpropsp",children:n.jsx(e.code,{children:"ConstrProps<P>"})}),`
`,n.jsx(e.p,{children:"Тип props конструктора для определений props компонента."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type ConstrProps<P = Record<string, any>> = {
  [K in keyof P]: ConstrPropItem<P[K]>
}

// Использование
interface ComponentProps {
  title: string
  count: number
  enabled: boolean
  items: string[]
}

const props: ConstrProps<ComponentProps> = {
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0
  },
  enabled: Boolean,
  items: {
    type: Array as PropType<string[]>,
    default: () => []
  }
}
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"создание-компонента-с-полной-типизацией",children:"Создание компонента с полной типизацией"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { defineComponent } from 'vue'
import type {
  ConstrSetup,
  ConstrOptions,
  ConstrProps,
  ConstrClasses
} from '@dxtmisha/functional'

interface ButtonProps {
  text: string
  variant: 'primary' | 'secondary'
  disabled: boolean
}

interface ButtonEmits {
  click: [MouseEvent]
}

interface ButtonSetup {
  handleClick: (event: MouseEvent) => void
}

const buttonProps: ConstrProps<ButtonProps> = {
  text: { type: String, required: true },
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary'
  },
  disabled: { type: Boolean, default: false }
}

export default defineComponent({
  name: 'ConstructorButton',
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit }) {
    const setup: ConstrSetup<HTMLButtonElement, ConstrClasses, ButtonSetup> = {
      name: 'ConstructorButton',
      element: ref<HTMLButtonElement>(),
      classes: computed(() => ({
        main: 'btn',
        variant: \`btn-\${props.variant}\`,
        disabled: props.disabled ? 'btn-disabled' : ''
      })),
      styles: computed(() => ({
        opacity: props.disabled ? '0.6' : '1',
        cursor: props.disabled ? 'not-allowed' : 'pointer'
      })),
      handleClick: (event: MouseEvent) => {
        if (!props.disabled) {
          emit('click', event)
        }
      }
    }

    return setup
  }
})
`})}),`
`,n.jsx(e.p,{children:"Эти типы конструктора обеспечивают полную типизацию и структурированный подход к созданию Vue компонентов с поддержкой реактивности, стилизации и событий."})]})}function m(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{m as default};
