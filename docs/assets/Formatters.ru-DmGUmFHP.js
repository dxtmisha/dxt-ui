import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/Formatters - Утилита для Форматирования Данных"}),`
`,n.jsx(e.h1,{id:"класс-formatters",children:"Класс Formatters"}),`
`,n.jsxs(e.p,{children:["Специализированный класс для форматирования списков данных на основе предоставленной конфигурации. Он служит мостом между необработанными данными и локализованными, удобочитаемыми строками, используя синглтон ",n.jsx(e.code,{children:"GeoIntl"})," для согласованного форматирования в разных локалях."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Декларативная конфигурация"})," — Определите правила форматирования один раз и примените их ко всему набору данных."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка нескольких типов"})," — Встроенная поддержка валют, дат, имен, чисел, множественного числа и единиц измерения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Пользовательские трансформации"})," — Возможность предоставления собственных функций для уникальных нужд форматирования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типизация"})," — Полная поддержка TypeScript для элементов, параметров и результирующих отформатированных списков."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическая генерация ключей"})," — Автоматически добавляет отформатированные значения к элементам с суффиксом ",n.jsx(e.code,{children:"Format"})," (например, ",n.jsx(e.code,{children:"price"})," становится ",n.jsx(e.code,{children:"priceFormat"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"Formatters(options, list)"}),"."]}),`
`,n.jsx(e.h3,{id:"ограничения-дженериков-generic-constraints",children:"Ограничения дженериков (Generic Constraints)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Options extends FormattersOptionsList"})," — тип параметров форматирования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"List extends FormattersList<FormattersListItem> | FormattersListItem"})," — тип входных данных (массив или один элемент)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Item extends (List extends any[] ? List[number] : List)"})," — тип одного элемента в списке."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options: Options"})," — параметры форматирования для каждого столбца/свойства."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"list?: List"})," — начальный список данных для форматирования."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Formatters } from '@dxtmisha/functional-basic'

// 1. Определение параметров форматирования
const options = {
  price: { 
    type: 'currency', 
    options: { currencyPropName: 'currency' } 
  },
  created: { 
    type: 'date', 
    options: { type: 'datetime' } 
  },
  user: {
    type: 'name',
    options: { lastPropName: 'surname', firstPropName: 'name' }
  },
  weight: { 
    type: 'unit', 
    options: { unit: 'kilogram' } 
  },
  count: { 
    type: 'plural', 
    options: { words: 'яблоко|яблока|яблок' } 
  },
  status: {
    transformation: (value: number) => value === 1 ? 'Активен' : 'Неактивен'
  }
}

// 2. Исходные данные (может быть массивом или одним объектом)
const data = [
  {
    price: 100,
    currency: 'RUB',
    created: '2024-03-07T12:00:00',
    name: 'Иван',
    surname: 'Иванов',
    weight: 75,
    count: 5,
    status: 1
  }
]

// 3. Инициализация
const formatter = new Formatters(options, data)
`})}),`
`,n.jsx(e.h2,{id:"обработка-данных",children:"Обработка данных"}),`
`,n.jsx(e.h3,{id:"to",children:n.jsx(e.code,{children:"to"})}),`
`,n.jsx(e.p,{children:"Обрабатывает данные и возвращает результат. Если на вход был передан массив, метод возвращает новый массив обогащенных элементов. Если был один элемент — возвращает один обогащенный элемент."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"FormattersListColumns<Item, Options> | FormattersListColumnItem<Item, Options>"})," — обогащенные данные с дополнительными свойствами ",n.jsx(e.code,{children:"*Format"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const result = formatter.to()
/*
Результат (если массив): [
  { 
    id: 101, 
    price: 100, 
    currency: 'RUB', 
    priceFormat: '100,00 ₽', 
    status: 1, 
    statusFormat: 'Активен',
    ... 
  }
]

Результат (если один объект): { 
  price: 100, 
  priceFormat: '100,00 ₽', 
  ... 
}
*/
`})}),`
`,n.jsx(e.h2,{id:"получение-и-управление-данными",children:"Получение и управление данными"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is(): boolean"})," — Проверяет, установлен ли список/элемент."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isArray(): boolean"})," — Проверяет, являются ли текущие данные массивом."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"length(): number"})," — Возвращает количество записей в списке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getList(): Item[]"})," — Возвращает текущий список данных в виде массива."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getOptions(): Options"})," — Возвращает текущую карту конфигурации форматирования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setList(list?: List): this"})," — Обновляет данные для форматирования и возвращает экземпляр класса для цепочки вызовов."]}),`
`]}),`
`,n.jsx(e.h2,{id:"структура-конфигурации",children:"Структура конфигурации"}),`
`,n.jsxs(e.p,{children:["Объект конфигурации, передаваемый в конструктор, представляет собой карту, где каждый ключ соответствует имени свойства в ваших данных. Каждое значение должно соответствовать структуре ",n.jsx(e.code,{children:"FormattersOptionsItem"}),"."]}),`
`,n.jsx(e.h3,{id:"основная-структура-элемента",children:"Основная структура элемента"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`{
  // 1. Укажите тип форматирования
  type: 'currency' | 'date' | 'name' | 'number' | 'plural' | 'unit',

  // 2. Передайте параметры, специфичные для типа, здесь
  options: { ... },

  // 3. Или используйте собственную функцию (перекрывает логику типа)
  transformation: (value, item, options) => string
}
`})}),`
`,n.jsx(e.h2,{id:"специфичные-параметры",children:"Специфичные параметры"}),`
`,n.jsxs(e.p,{children:["Ниже приведены параметры, доступные внутри свойства ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"options"})})," для каждого типа."]}),`
`,n.jsxs(e.h3,{id:"валюта-currency",children:["Валюта (",n.jsx(e.code,{children:"currency"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyPropName?: string"})," — Свойство в элементе, содержащее код валюты (по умолчанию ",n.jsx(e.code,{children:"item.currency"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: string | Intl.NumberFormatOptions"})," — Фиксированный код валюты или полные параметры ",n.jsx(e.code,{children:"Intl"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"numberOnly?: boolean"})," — Если ",n.jsx(e.code,{children:"true"}),", возвращает только отформатированное число без символа."]}),`
`]}),`
`,n.jsxs(e.h3,{id:"дата-date",children:["Дата (",n.jsx(e.code,{children:"date"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — Предустановленный тип: ",n.jsx(e.code,{children:"full"}),", ",n.jsx(e.code,{children:"datetime"}),", ",n.jsx(e.code,{children:"date"}),", ",n.jsx(e.code,{children:"year-month"}),", ",n.jsx(e.code,{children:"year"}),", ",n.jsx(e.code,{children:"month"}),", ",n.jsx(e.code,{children:"day"}),", ",n.jsx(e.code,{children:"day-month"}),", ",n.jsx(e.code,{children:"time"}),", ",n.jsx(e.code,{children:"hour-minute"}),", ",n.jsx(e.code,{children:"hour"}),", ",n.jsx(e.code,{children:"minute"}),", ",n.jsx(e.code,{children:"second"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — Дополнительные параметры ",n.jsx(e.code,{children:"Intl"})," или стиль месяца."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — Принудительно использует 24-часовой формат, если ",n.jsx(e.code,{children:"true"}),"."]}),`
`]}),`
`,n.jsxs(e.h3,{id:"имя-name",children:["Имя (",n.jsx(e.code,{children:"name"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lastPropName?: string"})," — Поле для фамилии (по умолчанию: ",n.jsx(e.code,{children:"lastName"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"firstPropName?: string"})," — Поле для имени (по умолчанию: ",n.jsx(e.code,{children:"firstName"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"surname?: string"})," — Поле для отчества (по умолчанию: ",n.jsx(e.code,{children:"surname"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"short?: boolean"})," — Использовать ли краткий формат (инициалы)."]}),`
`]}),`
`,n.jsxs(e.h3,{id:"число-number",children:["Число (",n.jsx(e.code,{children:"number"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — Стандартные параметры чисел ",n.jsx(e.code,{children:"Intl"}),"."]}),`
`]}),`
`,n.jsxs(e.h3,{id:"множественное-число-plural",children:["Множественное число (",n.jsx(e.code,{children:"plural"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"words: string"})," — Формы слов, разделенные ",n.jsx(e.code,{children:"|"})," (например, ",n.jsx(e.code,{children:'"яблоко|яблока|яблок"'}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.PluralRulesOptions"})," — Настройки правил множественного числа."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — Форматирование самого числа."]}),`
`]}),`
`,n.jsxs(e.h3,{id:"единица-измерения-unit",children:["Единица измерения (",n.jsx(e.code,{children:"unit"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unit: string | Intl.NumberFormatOptions"})," — Единица измерения для отображения (например, ",n.jsx(e.code,{children:"'kilometer'"}),", ",n.jsx(e.code,{children:"'kilogram'"}),")."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
