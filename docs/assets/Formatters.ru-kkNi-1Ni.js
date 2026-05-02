import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/Formatters - Утилита для Форматирования Данных`}),`
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
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`List extends FormattersListProp`}),` — тип входных данных (массив или один элемент).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Item extends FormattersItemProp<List>`}),` — тип одного элемента в списке.`]}),`
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
  }
}

// 2. Исходные данные
const data = [
  {
    price: 100,
    currency: 'RUB',
    created: '2024-03-07T12:00:00',
    name: 'Иван',
    surname: 'Иванов'
  }
]

// 3. Инициализация
const formatter = new Formatters(options, data)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`обработка`,children:`Обработка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(): FormattersReturn<List, Options>`}),` — Обрабатывает данные и возвращает результат. Если на вход был массив, возвращает новый массив обогащенных элементов. Если был один элемент — один объект. Добавляет свойства с суффиксом `,(0,c.jsx)(n.code,{children:`Format`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`настройка`,children:`Настройка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list?: List): this`}),` — Обновляет данные для форматирования. Поддерживает чейнинг.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Проверяет, установлены ли данные для обработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isArray(): boolean`}),` — Являются ли текущие данные массивом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length(): number`}),` — Возвращает количество записей в списке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): FormattersList<Item>`}),` — Возвращает текущий список в виде массива.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): Options`}),` — Возвращает текущую конфигурацию форматирования.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-и-параметры-форматирования`,children:`Типы и параметры форматирования`}),`
`,(0,c.jsxs)(n.p,{children:[`Конфигурация `,(0,c.jsx)(n.code,{children:`FormattersOptionsList`}),` — это словарь, где ключи соответствуют именам свойств в данных (поддерживается точечная нотация `,(0,c.jsx)(n.code,{children:`path.to.prop`}),`), а значения — объекту `,(0,c.jsx)(n.code,{children:`FormattersOptionsItem`}),`.`]}),`
`,(0,c.jsxs)(n.h3,{id:`общая-структура-formattersoptionsitem`,children:[`Общая структура `,(0,c.jsx)(n.code,{children:`FormattersOptionsItem`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: FormattersType`}),` — Тип форматировщика.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (value, item, options) => string`}),` — Кастомная функция преобразования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Options`}),` — Объект параметров, структура которого зависит от выбранного `,(0,c.jsx)(n.code,{children:`type`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`подробное-описание-типов`,children:`Подробное описание типов`}),`
`,(0,c.jsxs)(n.h4,{id:`1-валюта-currency`,children:[`1. Валюта (`,(0,c.jsx)(n.code,{children:`currency`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Используется для локализованного отображения денежных значений.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyPropName?: string`}),` — Имя свойства в элементе, из которого берется код валюты (по умолчанию `,(0,c.jsx)(n.code,{children:`currency`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: string | Intl.NumberFormatOptions`}),` — Можно передать фиксированный код (например, `,(0,c.jsx)(n.code,{children:`'USD'`}),`) или объект настроек `,(0,c.jsx)(n.code,{children:`Intl.NumberFormat`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — Если `,(0,c.jsx)(n.code,{children:`true`}),`, возвращает только отформатированное число без символа валюты.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`2-дата-date`,children:[`2. Дата (`,(0,c.jsx)(n.code,{children:`date`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Форматирование дат и времени через `,(0,c.jsx)(n.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — Предустановленный формат:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`full`}),` — Полная дата и время.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`datetime`}),` — Дата и время (без секунд).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date`}),` — Только дата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`time`}),` — Только время.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`year-month`}),`, `,(0,c.jsx)(n.code,{children:`year`}),`, `,(0,c.jsx)(n.code,{children:`month`}),`, `,(0,c.jsx)(n.code,{children:`day`}),`, `,(0,c.jsx)(n.code,{children:`day-month`}),`, `,(0,c.jsx)(n.code,{children:`hour-minute`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.DateTimeFormatOptions`}),` — Стандартные параметры `,(0,c.jsx)(n.code,{children:`Intl`}),` (например, `,(0,c.jsx)(n.code,{children:`month: 'long'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — Если `,(0,c.jsx)(n.code,{children:`true`}),`, принудительно включает 24-часовой режим.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`3-имя-name`,children:[`3. Имя (`,(0,c.jsx)(n.code,{children:`name`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Склеивает ФИО в правильном порядке.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastPropName?: string`}),` — Поле для фамилии (по умолчанию `,(0,c.jsx)(n.code,{children:`lastName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`firstPropName?: string`}),` — Поле для имени (по умолчанию `,(0,c.jsx)(n.code,{children:`firstName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`surname?: string`}),` — Поле для отчества (по умолчанию `,(0,c.jsx)(n.code,{children:`surname`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`short?: boolean`}),` — Если `,(0,c.jsx)(n.code,{children:`true`}),`, выводит фамилию и инициалы (например, «Иванов И. И.»).`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`4-число-number`,children:[`4. Число (`,(0,c.jsx)(n.code,{children:`number`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Обычное форматирование чисел с разделением разрядов.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Параметры `,(0,c.jsx)(n.code,{children:`Intl`}),` (количество знаков после запятой, стиль и т.д.).`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`5-множественное-число-plural`,children:[`5. Множественное число (`,(0,c.jsx)(n.code,{children:`plural`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Выбор правильной формы слова в зависимости от числа.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — Формы слова через разделитель `,(0,c.jsx)(n.code,{children:`|`}),`.`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Для русского: `,(0,c.jsx)(n.code,{children:`"яблоко|яблока|яблок"`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Для английского: `,(0,c.jsx)(n.code,{children:`"apple|apples"`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.PluralRulesOptions`}),` — Настройки правил плюрализации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — Настройки форматирования самого числа, которое выводится перед словом.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`6-единица-измерения-unit`,children:[`6. Единица измерения (`,(0,c.jsx)(n.code,{children:`unit`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Добавление единиц измерения (км, кг, л).`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unit: string`}),` — Код единицы измерения (например, `,(0,c.jsx)(n.code,{children:`'kilometer'`}),`, `,(0,c.jsx)(n.code,{children:`'kilogram'`}),`, `,(0,c.jsx)(n.code,{children:`'liter'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Параметры форматирования числовой части.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`использование-точечной-нотации-dot-notation`,children:`Использование точечной нотации (Dot Notation)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const options = {
  'user.profile.age': { type: 'number' }
}
const data = { user: { profile: { age: 25 } } }
const formatter = new Formatters(options, data)

const result = formatter.to()
// result.userProfileAgeFormat === "25"
`})}),`
`,(0,c.jsx)(n.h3,{id:`кастомная-трансформация`,children:`Кастомная трансформация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const options = {
  status: {
    // Пользовательская функция имеет приоритет над type
    transformation: (value, item) => {
       return value === 'active' ? \`✅ \${item.name} в сети\` : '❌ Оффлайн'
    }
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};