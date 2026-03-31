import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Formatters - Утилита для Форматирования Данных`}),`
`,(0,c.jsx)(n.h1,{id:`класс-formatters`,children:`Класс Formatters`}),`
`,(0,c.jsxs)(n.p,{children:[`Специализированный класс для форматирования списков данных на основе предоставленной конфигурации. Он служит мостом между необработанными данными и локализованными, удобочитаемыми строками, используя синглтон `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` для согласованного форматирования в разных локалях.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Декларативная конфигурация`}),` — Определите правила форматирования один раз и примените их ко всему набору данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка нескольких типов`}),` — Встроенная поддержка валют, дат, имен, чисел, множественного числа и единиц измерения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пользовательские трансформации`}),` — Возможность предоставления собственных функций для уникальных нужд форматирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Типизация`}),` — Полная поддержка TypeScript для элементов, параметров и результирующих отформатированных списков.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая генерация ключей`}),` — Автоматически добавляет отформатированные значения к элементам с суффиксом `,(0,c.jsx)(n.code,{children:`Format`}),` (например, `,(0,c.jsx)(n.code,{children:`price`}),` становится `,(0,c.jsx)(n.code,{children:`priceFormat`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`Formatters(options, list)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Options extends FormattersOptionsList`}),` — тип параметров форматирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`List extends FormattersList<FormattersListItem> | FormattersListItem`}),` — тип входных данных (массив или один элемент).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Item extends (List extends any[] ? List[number] : List)`}),` — тип одного элемента в списке.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Options`}),` — параметры форматирования для каждого столбца/свойства.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list?: List`}),` — начальный список данных для форматирования.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Formatters } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(n.h2,{id:`обработка-данных`,children:`Обработка данных`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsx)(n.p,{children:`Обрабатывает данные и возвращает результат. Если на вход был передан массив, метод возвращает новый массив обогащенных элементов. Если был один элемент — возвращает один обогащенный элемент.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`FormattersListColumns<Item, Options> | FormattersListColumnItem<Item, Options>`}),` — обогащенные данные с дополнительными свойствами `,(0,c.jsx)(n.code,{children:`*Format`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const result = formatter.to()
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
`,(0,c.jsx)(n.h2,{id:`получение-и-управление-данными`,children:`Получение и управление данными`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Проверяет, установлен ли список/элемент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isArray(): boolean`}),` — Проверяет, являются ли текущие данные массивом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length(): number`}),` — Возвращает количество записей в списке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): Item[]`}),` — Возвращает текущий список данных в виде массива.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): Options`}),` — Возвращает текущую карту конфигурации форматирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list?: List): this`}),` — Обновляет данные для форматирования и возвращает экземпляр класса для цепочки вызовов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`структура-конфигурации`,children:`Структура конфигурации`}),`
`,(0,c.jsxs)(n.p,{children:[`Объект конфигурации, передаваемый в конструктор, представляет собой карту, где каждый ключ соответствует имени свойства в ваших данных. Каждое значение должно соответствовать структуре `,(0,c.jsx)(n.code,{children:`FormattersOptionsItem`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`основная-структура-элемента`,children:`Основная структура элемента`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`{
  // 1. Укажите тип форматирования
  type: 'currency' | 'date' | 'name' | 'number' | 'plural' | 'unit',

  // 2. Передайте параметры, специфичные для типа, здесь
  options: { ... },

  // 3. Или используйте собственную функцию (перекрывает логику типа)
  transformation: (value, item, options) => string
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`специфичные-параметры`,children:`Специфичные параметры`}),`
`,(0,c.jsxs)(n.p,{children:[`Ниже приведены параметры, доступные внутри свойства `,(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`options`})}),` для каждого типа.`]}),`
`,(0,c.jsxs)(n.h3,{id:`валюта-currency`,children:[`Валюта (`,(0,c.jsx)(n.code,{children:`currency`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyPropName?: string`}),` — Свойство в элементе, содержащее код валюты (по умолчанию `,(0,c.jsx)(n.code,{children:`item.currency`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: string | Intl.NumberFormatOptions`}),` — Фиксированный код валюты или полные параметры `,(0,c.jsx)(n.code,{children:`Intl`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — Если `,(0,c.jsx)(n.code,{children:`true`}),`, возвращает только отформатированное число без символа.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`дата-date`,children:[`Дата (`,(0,c.jsx)(n.code,{children:`date`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — Предустановленный тип: `,(0,c.jsx)(n.code,{children:`full`}),`, `,(0,c.jsx)(n.code,{children:`datetime`}),`, `,(0,c.jsx)(n.code,{children:`date`}),`, `,(0,c.jsx)(n.code,{children:`year-month`}),`, `,(0,c.jsx)(n.code,{children:`year`}),`, `,(0,c.jsx)(n.code,{children:`month`}),`, `,(0,c.jsx)(n.code,{children:`day`}),`, `,(0,c.jsx)(n.code,{children:`day-month`}),`, `,(0,c.jsx)(n.code,{children:`time`}),`, `,(0,c.jsx)(n.code,{children:`hour-minute`}),`, `,(0,c.jsx)(n.code,{children:`hour`}),`, `,(0,c.jsx)(n.code,{children:`minute`}),`, `,(0,c.jsx)(n.code,{children:`second`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Дополнительные параметры `,(0,c.jsx)(n.code,{children:`Intl`}),` или стиль месяца.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — Принудительно использует 24-часовой формат, если `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`имя-name`,children:[`Имя (`,(0,c.jsx)(n.code,{children:`name`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastPropName?: string`}),` — Поле для фамилии (по умолчанию: `,(0,c.jsx)(n.code,{children:`lastName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`firstPropName?: string`}),` — Поле для имени (по умолчанию: `,(0,c.jsx)(n.code,{children:`firstName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`surname?: string`}),` — Поле для отчества (по умолчанию: `,(0,c.jsx)(n.code,{children:`surname`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`short?: boolean`}),` — Использовать ли краткий формат (инициалы).`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`число-number`,children:[`Число (`,(0,c.jsx)(n.code,{children:`number`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Стандартные параметры чисел `,(0,c.jsx)(n.code,{children:`Intl`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`множественное-число-plural`,children:[`Множественное число (`,(0,c.jsx)(n.code,{children:`plural`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — Формы слов, разделенные `,(0,c.jsx)(n.code,{children:`|`}),` (например, `,(0,c.jsx)(n.code,{children:`"яблоко|яблока|яблок"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.PluralRulesOptions`}),` — Настройки правил множественного числа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — Форматирование самого числа.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`единица-измерения-unit`,children:[`Единица измерения (`,(0,c.jsx)(n.code,{children:`unit`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unit: string | Intl.NumberFormatOptions`}),` — Единица измерения для отображения (например, `,(0,c.jsx)(n.code,{children:`'kilometer'`}),`, `,(0,c.jsx)(n.code,{children:`'kilogram'`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};