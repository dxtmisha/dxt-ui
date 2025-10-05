import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DB_maGql.js";import{M as r}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function l(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Classes/GeoIntl"}),`
`,n.jsx(e.h1,{id:"класс-geointl",children:"Класс GeoIntl"}),`
`,n.jsx(e.p,{children:"Класс для работы с интернационализацией на основе браузерного API Intl. Предоставляет методы для локализованного форматирования чисел, дат, валют, единиц измерения и других данных с учётом географической локали."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Локализованное форматирование чисел"})," — отображение чисел согласно региональным стандартам"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Работа с валютами"})," — форматирование денежных сумм с символами валют"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Форматирование дат и времени"})," — различные форматы отображения дат"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Относительное время"}),' — отображение времени в формате "2 дня назад", "через час"']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Единицы измерения"})," — форматирование с единицами (км, кг, °C и т.д.)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Размеры файлов"})," — автоматическое преобразование байт в подходящие единицы"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Множественные формы"})," — правильные окончания для разных языков"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Сортировка"})," — сортировка строк с учётом языковых особенностей"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Singleton паттерн"})," — кеширование экземпляров для каждой локали"]}),`
`]}),`
`,n.jsx(e.h2,{id:"создание-экземпляра",children:"Создание экземпляра"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Создаёт экземпляр GeoIntl для указанной локали. Использует singleton паттерн."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код локали (опционально)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoIntl } from '@dxtmisha/functional'

// Создание с автоопределением локали из Geo
const intl = new GeoIntl()

// Создание для конкретной локали
const intlRU = new GeoIntl('ru-RU')
const intlUS = new GeoIntl('en-US')

// Повторное создание вернёт тот же экземпляр
const sameIntl = new GeoIntl('ru-RU') // тот же объект что intlRU
`})}),`
`,n.jsx(e.h3,{id:"static-getinstance",children:n.jsx(e.code,{children:"static getInstance"})}),`
`,n.jsx(e.p,{children:"Статический метод для получения экземпляра (алиас для constructor)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код локали (опционально)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = GeoIntl.getInstance('ru-RU')
`})}),`
`,n.jsx(e.h2,{id:"получение-информации-о-локали",children:"Получение информации о локали"}),`
`,n.jsx(e.h3,{id:"getlocation",children:n.jsx(e.code,{children:"getLocation"})}),`
`,n.jsx(e.p,{children:"Возвращает код локали в формате язык-страна."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — код локали в стандартном формате"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')
intl.getLocation() // 'ru-RU'
`})}),`
`,n.jsx(e.h3,{id:"getfirstday",children:n.jsx(e.code,{children:"getFirstDay"})}),`
`,n.jsx(e.p,{children:"Возвращает первый день недели для текущей локали."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — код первого дня ('Su' для во��кресенья, 'Mo' для понедельника)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')
intl.getFirstDay() // 'Mo' (понедельник)

const intlUS = new GeoIntl('en-US')
intlUS.getFirstDay() // 'Su' (воскресенье)
`})}),`
`,n.jsx(e.h2,{id:"отображение-названий",children:"Отображение названий"}),`
`,n.jsx(e.h3,{id:"display",children:n.jsx(e.code,{children:"display"})}),`
`,n.jsx(e.p,{children:"Возвращает локализованные названия языков, стран и других элементов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — код для отображения (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"typeOptions?: string | Intl.DisplayNamesOptions"})," — тип или объект опций"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — локализованное название"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')

// Названия языков
intl.display('en', 'language') // 'английский'
intl.display('fr', 'language') // 'французский'

// Названия стран
intl.display('US', 'region') // 'США'
intl.display('DE', 'region') // 'Германия'

// С объектом опций
intl.display('en', { type: 'language', style: 'short' })
`})}),`
`,n.jsx(e.h3,{id:"languagename",children:n.jsx(e.code,{children:"languageName"})}),`
`,n.jsx(e.p,{children:"Возвращает название языка для указанного кода."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — код языка (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — стиль отображения (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — название языка"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.languageName('en') // 'английский'
intl.languageName('de') // 'немецкий'
intl.languageName('ru') // 'русский'
`})}),`
`,n.jsx(e.h3,{id:"countryname",children:n.jsx(e.code,{children:"countryName"})}),`
`,n.jsx(e.p,{children:"Возвращает название страны для указанного кода."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — код страны (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — стиль отображения (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — название страны"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.countryName('US') // 'США'
intl.countryName('GB') // 'Великобритания'
intl.countryName('DE') // 'Германия'
`})}),`
`,n.jsx(e.h2,{id:"форматирование-имён",children:"Форматирование имён"}),`
`,n.jsx(e.h3,{id:"fullname",children:n.jsx(e.code,{children:"fullName"})}),`
`,n.jsx(e.p,{children:"Форматирует полное имя согласно культурным особенностям региона."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"last: string"})," — фамилия"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first: string"})," — имя"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"surname?: string"})," — отчество (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"short?: boolean"})," — сокращённый формат (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированное полное имя"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')

// Полные имена
intl.fullName('Иванов', 'Иван', 'Петрович') // 'Иван Петрович Иванов' (fsl формат)
intl.fullName('Петров', 'Иван') // 'Иван Петров'

// Сокращённые имена
intl.fullName('Иванов', 'Иван', 'Петрович', true) // 'И. П. Иванов'

// Для других локалей формат может отличаться
const intlUS = new GeoIntl('en-US')
intlUS.fullName('Smith', 'John') // 'John Smith' (fl формат)
`})}),`
`,n.jsx(e.h2,{id:"форматирование-чисел",children:"Форматирование чисел"}),`
`,n.jsx(e.h3,{id:"number",children:n.jsx(e.code,{children:"number"})}),`
`,n.jsx(e.p,{children:"Форматирует числа согласно локальным стандартам."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — число для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированное число"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')

intl.number(1234.56) // '1 234,56'
intl.number(1000000) // '1 000 000'
intl.number(0.123, { minimumFractionDigits: 3 }) // '0,123'

const intlUS = new GeoIntl('en-US')
intlUS.number(1234.56) // '1,234.56'
`})}),`
`,n.jsx(e.h3,{id:"decimal",children:n.jsx(e.code,{children:"decimal"})}),`
`,n.jsx(e.p,{children:"Возвращает символ десятичной точки для текущей локали."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — символ десятичного разделителя"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')
intl.decimal() // ','

const intlUS = new GeoIntl('en-US')
intlUS.decimal() // '.'
`})}),`
`,n.jsx(e.h2,{id:"работа-с-валютами",children:"Работа с валютами"}),`
`,n.jsx(e.h3,{id:"currency",children:n.jsx(e.code,{children:"currency"})}),`
`,n.jsx(e.p,{children:"Форматирует валютные суммы. Поддерживает автоматическое извлечение кода валюты из строки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — сумма для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyOptions?: string | Intl.NumberFormatOptions"})," — код валюты или опции форматирования (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"numberOnly?: boolean"})," — показывать только число без символа валюты (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированная валютная сумма"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')

// Простое форматирование
intl.currency(1234.56, 'RUB') // '1 234,56 ₽'
intl.currency(1000, 'USD') // '1 000,00 $'

// Автоматическое извлечение валюты из строки
intl.currency('1234.56 USD') // '1 234,56 $'

// Только число без символа валюты
intl.currency(1234.56, 'RUB', true) // '1 234,56'

// С дополнительными опциями
intl.currency(1234.56, {
  currency: 'EUR',
  currencyDisplay: 'code'
}) // '1 234,56 EUR'
`})}),`
`,n.jsx(e.h3,{id:"currencysymbol",children:n.jsx(e.code,{children:"currencySymbol"})}),`
`,n.jsx(e.p,{children:"Возвращает символ валюты для текущей локали."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currency: string"})," — код валюты"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry"})," — тип отображения валюты (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — символ или код валюты"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.currencySymbol('RUB') // '₽'
intl.currencySymbol('USD') // '$'
intl.currencySymbol('EUR', 'code') // 'EUR'
`})}),`
`,n.jsx(e.h2,{id:"единицы-измерения",children:"Единицы измерения"}),`
`,n.jsx(e.h3,{id:"unit",children:n.jsx(e.code,{children:"unit"})}),`
`,n.jsx(e.p,{children:"Форматирует числа с единицами измерения. Поддерживает автоматическое извлечение единицы из строки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — значение для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — единица измерения или опции форматирования (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированное значение с единицей измерения"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')

intl.unit(25, 'celsius') // '25°C'
intl.unit(100, 'kilometer') // '100 км'
intl.unit(2.5, 'kilogram') // '2,5 кг'

// Автоматическое извлечение единицы
intl.unit('100 meter') // '100 м'
intl.unit('25 celsius') // '25°C'
`})}),`
`,n.jsx(e.h3,{id:"sizefile",children:n.jsx(e.code,{children:"sizeFile"})}),`
`,n.jsx(e.p,{children:"Форматирует размеры файлов с автоматическим выбором подходящих единиц."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — размер в байтах"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions"})," — единица измерения или опции форматирования (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированный размер файла"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.sizeFile(1024) // '1 КБ' (автоматически переводит в килобайты)
intl.sizeFile(1048576) // '1 МБ' (автоматически в мегабайты)
intl.sizeFile(500, 'byte') // '500 Б'
intl.sizeFile(1500, 'kilobyte') // '1,46 МБ' (автоматический пересчёт)
`})}),`
`,n.jsx(e.h2,{id:"проценты",children:"Проценты"}),`
`,n.jsx(e.h3,{id:"percent",children:n.jsx(e.code,{children:"percent"})}),`
`,n.jsx(e.p,{children:"Форматирует проценты (значение от 0 до 1)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — значение от 0 до 1"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированный процент"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.percent(0.1234) // '12,34%'
intl.percent(0.5) // '50%'
intl.percent(1.25) // '125%'
`})}),`
`,n.jsx(e.h3,{id:"percentby100",children:n.jsx(e.code,{children:"percentBy100"})}),`
`,n.jsx(e.p,{children:"Форматирует проценты для значений от 0 до 100."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — значение от 0 до 100"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированный процент"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.percentBy100(12.34) // '12,34%'
intl.percentBy100(50) // '50%'
intl.percentBy100(125) // '125%'
`})}),`
`,n.jsx(e.h2,{id:"множественные-формы",children:"Множественные формы"}),`
`,n.jsx(e.h3,{id:"plural",children:n.jsx(e.code,{children:"plural"})}),`
`,n.jsx(e.p,{children:"Применяет правила множественного числа для разных языков."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — число для которого определяется форма"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"words: string"})," — варианты слов в формате ",n.jsx(e.code,{children:"one|two|few|many|other|zero"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.PluralRulesOptions"})," — опции правил множественного числа (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — опции форматирования числа (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Формат words:"})," ",n.jsx(e.code,{children:"one|two|few|many|other|zero"})," (порядок важен!)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')

// Русские множественные формы
intl.plural(1, 'товар|товара|товаров') // '1 товар'
intl.plural(2, 'товар|товара|товаров') // '2 товара'
intl.plural(5, 'товар|товара|товаров') // '5 товаров'

// Полный формат с нулем
intl.plural(0, 'день|дня|дней|много дней|дней|нет дней') // '0 нет дней'

const intlEN = new GeoIntl('en-US')
intlEN.plural(1, 'item|items') // '1 item'
intlEN.plural(5, 'item|items') // '5 items'
`})}),`
`,n.jsx(e.h2,{id:"работа-с-датами",children:"Работа с датами"}),`
`,n.jsx(e.h3,{id:"date",children:n.jsx(e.code,{children:"date"})}),`
`,n.jsx(e.p,{children:"Форматирует дату и время согласно типу и стилю."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — дата для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — тип форматирования даты (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: string | Intl.DateTimeFormatOptions"})," — стиль или опции форматирования (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — использовать 24-часовой формат (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Типы дат:"})," ",n.jsx(e.code,{children:"'full'"}),", ",n.jsx(e.code,{children:"'datetime'"}),", ",n.jsx(e.code,{children:"'date'"}),", ",n.jsx(e.code,{children:"'time'"}),", ",n.jsx(e.code,{children:"'year-month'"}),", ",n.jsx(e.code,{children:"'year'"}),", ",n.jsx(e.code,{children:"'month'"}),", ",n.jsx(e.code,{children:"'day-month'"}),", ",n.jsx(e.code,{children:"'day'"}),", ",n.jsx(e.code,{children:"'hour-minute'"}),", ",n.jsx(e.code,{children:"'hour'"}),", ",n.jsx(e.code,{children:"'minute'"}),", ",n.jsx(e.code,{children:"'second'"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированная дата или время"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntl('ru-RU')
const date = new Date('2024-03-15T14:30:45')

intl.date(date) // '15.03.2024' (по умолчанию)
intl.date(date, 'full') // '15.03.2024, 14:30:45'
intl.date(date, 'time') // '14:30:45'
intl.date(date, 'year-month') // 'мар. 2024 г.'
intl.date(date, 'day-month') // '15 мар.'

// С 12-часовым форматом
intl.date(date, 'time', undefined, false) // '2:30:45 PM'

// С пользовательскими опциями
intl.date(date, 'date', { weekday: 'long' }) // 'пятница, 15.03.2024'
`})}),`
`,n.jsx(e.h3,{id:"month",children:n.jsx(e.code,{children:"month"})}),`
`,n.jsx(e.p,{children:"Возвращает название месяца."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: NumberOrStringOrDate"})," — дата (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — стиль отображения (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — название месяца"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.month(new Date('2024-03-15')) // 'март'
intl.month(new Date('2024-03-15'), 'short') // 'мар.'
intl.month(new Date('2024-03-15'), 'narrow') // 'М'
`})}),`
`,n.jsx(e.h3,{id:"months",children:n.jsx(e.code,{children:"months"})}),`
`,n.jsx(e.p,{children:"Возвращает список всех месяцев в формате для выпадающих списков."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — стиль отображения (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"{ label: string, value: number }[]"})," — массив объектов с метками и значениями месяцев"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const monthsList = intl.months()
// [
//   { label: '', value: undefined },
//   { label: 'Январь', value: 1 },
//   { label: 'Февраль', value: 2 },
//   ...
//   { label: 'Декабрь', value: 12 }
// ]

const monthsShort = intl.months('short')
// [{ label: '', value: undefined }, { label: 'Янв.', value: 1 }, ...]
`})}),`
`,n.jsx(e.h3,{id:"weekday",children:n.jsx(e.code,{children:"weekday"})}),`
`,n.jsx(e.p,{children:"Возвращает название дня недели."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: NumberOrStringOrDate"})," — дата (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — стиль отображения (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — название дня недели"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.weekday(new Date('2024-03-15')) // 'пятница'
intl.weekday(new Date('2024-03-15'), 'short') // 'пт'
intl.weekday(new Date('2024-03-15'), 'narrow') // 'П'
`})}),`
`,n.jsx(e.h3,{id:"weekdays",children:n.jsx(e.code,{children:"weekdays"})}),`
`,n.jsx(e.p,{children:"Возвращает список дней недели с учётом первого дня недели для локали."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — стиль отображения (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"{ label: string, value: number }[]"})," — массив объектов с метками и значениями дней недели"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const weekdaysList = intl.weekdays()
// Для ru-RU (первый день — понедельник):
// [
//   { label: '', value: undefined },
//   { label: 'Понедельник', value: 1 },
//   { label: 'Вторник', value: 2 },
//   ...
//   { label: 'Воскресенье', value: 0 }
// ]
`})}),`
`,n.jsx(e.h3,{id:"time",children:n.jsx(e.code,{children:"time"})}),`
`,n.jsx(e.p,{children:"Форматирует только время."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — дата/время для форматирования"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированное время"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.time(new Date('2024-03-15T14:30:45')) // '14:30:45'
`})}),`
`,n.jsx(e.h2,{id:"относительное-время",children:"Относительное время"}),`
`,n.jsx(e.h3,{id:"relative",children:n.jsx(e.code,{children:"relative"})}),`
`,n.jsx(e.p,{children:"Автоматически вычисляет и форматирует относительное время."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — дата для сравнения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: string | Intl.RelativeTimeFormatOptions"})," — стиль или опции форматирования (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — базовая дата для сравнения (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированное относительное время"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const now = new Date()
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)

intl.relative(yesterday) // 'вчера'
intl.relative(tomorrow) // 'завтра'
intl.relative(new Date(now.getTime() - 2 * 60 * 60 * 1000)) // '2 часа назад'

// С опциями стиля
intl.relative(yesterday, 'short') // 'вчера'
intl.relative(yesterday, { numeric: 'always' }) // '1 день назад'
`})}),`
`,n.jsx(e.h3,{id:"relativelimit",children:n.jsx(e.code,{children:"relativeLimit"})}),`
`,n.jsx(e.p,{children:"Форматирует относительное время с ограничением. Если разница превышает лимит дней, показывает обычную дату."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — дата для сравнения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"limit: number"})," — лимит дней для относительного времени"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — базовая дата для сравнения (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"relativeOptions?: string | Intl.RelativeTimeFormatOptions"})," — опции относительного времени (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dateOptions?: string | Intl.DateTimeFormatOptions"})," — опции обычной даты (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — тип форматиро��ания даты (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — использовать 24-часовой формат (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированное относительное время или дата"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

// Лимит 10 дней
intl.relativeLimit(weekAgo, 10) // 'неделю назад'
intl.relativeLimit(monthAgo, 10) // '15.02.2024' (обычная дата)
`})}),`
`,n.jsx(e.h3,{id:"relativebyvalue",children:n.jsx(e.code,{children:"relativeByValue"})}),`
`,n.jsx(e.p,{children:"Форматирует относительное время для указанного значения и единицы."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — значение (количество единиц)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unit: Intl.RelativeTimeFormatUnit"})," — единица времени (",n.jsx(e.code,{children:"'day'"}),", ",n.jsx(e.code,{children:"'hour'"}),", ",n.jsx(e.code,{children:"'month'"})," и т.д.)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: string | Intl.RelativeTimeFormatOptions"})," — стиль или опции форматирования (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — отформатированное относительное время"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.relativeByValue(-2, 'day') // '2 дня назад'
intl.relativeByValue(3, 'hour') // 'через 3 часа'
intl.relativeByValue(-1, 'month') // 'в прошлом месяце'
`})}),`
`,n.jsx(e.h2,{id:"сортировка",children:"Сортировка"}),`
`,n.jsx(e.h3,{id:"sort",children:n.jsx(e.code,{children:"sort"})}),`
`,n.jsx(e.p,{children:"Сортирует массив с учётом языковых особенностей локали."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: T[]"})," — массив для сортировки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compareFn?: (a: T, b: T) => [string, string]"})," — функция сравнения (опционально)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const names = ['Яков', 'Анна', 'Борис', 'Ёлка']
intl.sort(names) // ['Анна', 'Борис', 'Ёлка', 'Яков'] (правильный порядок для русского)

// С пользовательской функцией сравнения
const users = [{ name: 'Яков' }, { name: 'Анна' }]
intl.sort(users, (a, b) => [a.name, b.name])
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры-использования",children:"Практические примеры использования"}),`
`,n.jsx(e.h3,{id:"компонент-календаря",children:"Компонент календаря"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class Calendar {
  constructor(locale = 'ru-RU') {
    this.intl = new GeoIntl(locale)
  }

  getCalendarData() {
    return {
      months: this.intl.months('long'), // для выпадающего списка
      weekdays: this.intl.weekdays('short'), // для заголовков дней
      firstDay: this.intl.getFirstDay() // для начала недели
    }
  }

  formatDate(date) {
    return this.intl.date(date, 'date', { weekday: 'long' })
  }
}
`})}),`
`,n.jsx(e.h3,{id:"финансовое-приложение",children:"Финансовое приложение"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class FinanceFormatter {
  constructor(locale) {
    this.intl = new GeoIntl(locale)
  }

  formatBalance(amount, currency) {
    return this.intl.currency(amount, currency)
  }

  formatChange(change, currency) {
    const formatted = this.intl.currency(Math.abs(change), currency, true)
    return change >= 0 ? \`+\${formatted}\` : \`-\${formatted}\`
  }

  formatPercent(value) {
    return this.intl.percentBy100(value)
  }
}

const finance = new FinanceFormatter('ru-RU')
finance.formatBalance(1234567.89, 'RUB') // '1 234 567,89 ₽'
finance.formatChange(-123.45, 'RUB') // '-123,45'
finance.formatPercent(12.34) // '12,34%'
`})}),`
`,n.jsx(e.h3,{id:"система-уведомлений",children:"Система уведомлений"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class NotificationSystem {
  constructor(locale) {
    this.intl = new GeoIntl(locale)
  }

  formatNotificationTime(date) {
    return this.intl.relativeLimit(date, 7) // показать относительное время для последней недели
  }

  formatFileSize(bytes) {
    return this.intl.sizeFile(bytes)
  }

  formatItemCount(count, itemType) {
    const words = {
      message: 'сообщение|сообщения|сообщений',
      file: 'файл|файла|файлов',
      user: 'пользователь|пользователя|пользователей'
    }

    return this.intl.plural(count, words[itemType] || 'элемент|элемента|элементов')
  }
}

const notifications = new NotificationSystem('ru-RU')
notifications.formatNotificationTime(yesterday) // 'вчера'
notifications.formatFileSize(1048576) // '1 МБ'
notifications.formatItemCount(5, 'message') // '5 сообщений'
`})}),`
`,n.jsx(e.h2,{id:"интеграция-с-системой",children:"Интеграция с системой"}),`
`,n.jsx(e.p,{children:"Класс GeoIntl интегрируется с:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Geo"})," — автоматическое получение текущей локали и географических настроек"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Браузерный Intl API"})," — использование нативных возможностей для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Singleton паттерн"})," — кеширование экземпляров для оптимизации производительности"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vue компоненты"})," — предоставление локализованных данных для интерфейса"]}),`
`]}),`
`,n.jsx(e.p,{children:"Это делает его основным инструментом для создания локализованных интерфейсов с правильным отображением всех типов данных согласно культурным и языковым особенностям региона."})]})}function j(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{j as default};
