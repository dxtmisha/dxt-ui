import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/ru/functional-basic/Classes/GeoIntl - Интернационализация (Intl)"}),`
`,e.jsx(n.h1,{id:"класс-geointl",children:"Класс GeoIntl"}),`
`,e.jsxs(n.p,{children:["Мощная обертка над нативным браузерным API ",e.jsx(n.code,{children:"Intl"}),", адаптированная под возможности геолокации ",e.jsx(n.code,{children:"Geo"}),". Предоставляет локаль-зависимое форматирование чисел, валют, единиц измерения, дат, времени, имен и сортировки строк — с автоматическим определением локали."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Кэш экземпляров"})," — для каждой локали создается не более одного экземпляра (Singleton на локаль)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Единый интерфейс"})," — все операции через один класс вместо прямых вызовов ",e.jsx(n.code,{children:"new Intl.*"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Форматирование дат"})," — гибкая система с предустановленными типами (",e.jsx(n.code,{children:"'date'"}),", ",e.jsx(n.code,{children:"'time'"}),", ",e.jsx(n.code,{children:"'datetime'"}),", ",e.jsx(n.code,{children:"'full'"})," и др.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Относительное время"})," — методы ",e.jsx(n.code,{children:"relative"}),", ",e.jsx(n.code,{children:"relativeByValue"})," и ",e.jsx(n.code,{children:"relativeLimit"})," для гуманизированного вывода."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Имена и регионы"})," — форматирование полных имен с учетом культурных норм (",e.jsx(n.code,{children:"fullName"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code?: string"})," — код локали (например: ",e.jsx(n.code,{children:"'ru-RU'"}),", ",e.jsx(n.code,{children:"'en-US'"}),"). По умолчанию — текущая локаль ",e.jsx(n.code,{children:"Geo"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = new GeoIntl()          // текущая локаль
const intl2 = new GeoIntl('fr-FR')  // французская
const intl3 = GeoIntl.getInstance('de-DE') // через фабрику
`})}),`
`,e.jsx(n.h2,{id:"общая-информация",children:"Общая информация"}),`
`,e.jsx(n.h3,{id:"getlocation",children:e.jsx(n.code,{children:"getLocation"})}),`
`,e.jsxs(n.p,{children:["Возвращает стрингу стандартной локали (например, ",e.jsx(n.code,{children:"'ru-RU'"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.getLocation() // 'ru-RU'
`})}),`
`,e.jsx(n.h3,{id:"getfirstday",children:e.jsx(n.code,{children:"getFirstDay"})}),`
`,e.jsxs(n.p,{children:["Возвращает первый день недели для данной локали (",e.jsx(n.code,{children:"'Mon'"}),", ",e.jsx(n.code,{children:"'Sun'"})," и т.д.) — полезно для построения календарей."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.getFirstDay() // 'Mon' для России, 'Sun' для США
`})}),`
`,e.jsx(n.h2,{id:"имена-и-регионы",children:"Имена и регионы"}),`
`,e.jsx(n.h3,{id:"display",children:e.jsx(n.code,{children:"display"})}),`
`,e.jsxs(n.p,{children:["Форматирует отображаемое имя языка, региона или скрипта через ",e.jsx(n.code,{children:"Intl.DisplayNames"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — код языка, страны или скрипта (например: ",e.jsx(n.code,{children:"'en'"}),", ",e.jsx(n.code,{children:"'RU'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeOptions?"})," — тип отображения: ",e.jsx(n.code,{children:"'language'"}),", ",e.jsx(n.code,{children:"'region'"}),", ",e.jsx(n.code,{children:"'script'"})," или ",e.jsx(n.code,{children:"Intl.DisplayNamesOptions"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.display('en', 'language') // 'английский'
intl.display('RU', 'region')   // 'Россия'
intl.display()                 // название текущего языка
`})}),`
`,e.jsx(n.h3,{id:"languagename",children:e.jsx(n.code,{children:"languageName"})}),`
`,e.jsx(n.p,{children:"Возвращает локализованное название языка."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — код языка или страны. По умолчанию — текущая локаль."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?"})," — стиль: ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.languageName('en')          // 'английский'
intl.languageName('fr', 'long')  // 'французский'
`})}),`
`,e.jsx(n.h3,{id:"countryname",children:e.jsx(n.code,{children:"countryName"})}),`
`,e.jsx(n.p,{children:"Возвращает локализованное название страны."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: string"})," — код страны (ISO 3166, например: ",e.jsx(n.code,{children:"'RU'"}),", ",e.jsx(n.code,{children:"'DE'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?"})," — стиль: ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.countryName('DE')   // 'Германия'
intl.countryName('US')   // 'США'
`})}),`
`,e.jsx(n.h3,{id:"fullname",children:e.jsx(n.code,{children:"fullName"})}),`
`,e.jsxs(n.p,{children:["Форматирует полное имя по культурным нормам локали. Порядок составляющих (имя/фамилия) определяется полем ",e.jsx(n.code,{children:"nameFormat"})," гео-данных."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"last: string"})," — фамилия."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first: string"})," — имя."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"surname?: string"})," — отчество (опционально)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"short?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", все части кроме первой сокращаются до инициала (",e.jsx(n.code,{children:"Иванов И. И."}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.fullName('Иванов', 'Иван', 'Иванович')        // 'Иван Иванович Иванов' (ru)
intl.fullName('Иванов', 'Иван', 'Иванович', true)  // 'Иванов И. И.'
intl.fullName('Smith', 'John')                      // 'John Smith' (en)
`})}),`
`,e.jsx(n.h2,{id:"числа-и-валюты",children:"Числа и валюты"}),`
`,e.jsx(n.h3,{id:"number",children:e.jsx(n.code,{children:"number"})}),`
`,e.jsxs(n.p,{children:["Форматирует число с учетом локали через ",e.jsx(n.code,{children:"Intl.NumberFormat"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — число для форматирования."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — дополнительные опции ",e.jsx(n.code,{children:"Intl.NumberFormat"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.number(1234567.89)                                   // '1 234 567,89'
intl.number(0.005, { minimumFractionDigits: 2 })          // '0,01'
`})}),`
`,e.jsx(n.h3,{id:"decimal",children:e.jsx(n.code,{children:"decimal"})}),`
`,e.jsx(n.p,{children:"Возвращает символ десятичного разделителя для текущей локали."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`new GeoIntl('ru-RU').decimal() // ','
new GeoIntl('en-US').decimal() // '.'
`})}),`
`,e.jsx(n.h3,{id:"currency",children:e.jsx(n.code,{children:"currency"})}),`
`,e.jsx(n.p,{children:"Форматирует число как денежную сумму в указанной валюте."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — сумма. Также принимает строку с кодом валюты в конце (",e.jsx(n.code,{children:"'1500 RUB'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyOptions?: string | Intl.NumberFormatOptions"})," — код валюты (",e.jsx(n.code,{children:"'RUB'"}),") или опции ",e.jsx(n.code,{children:"Intl.NumberFormatOptions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"numberOnly?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", выводит только число без символа валюты. По умолчанию: ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.currency(1500, 'RUB')              // '1 500,00 ₽'
intl.currency(1500, 'USD')              // '1 500,00 $'
intl.currency('1500 EUR')               // '1 500,00 €'
intl.currency(1500, 'RUB', true)        // '1 500,00' (без символа)
`})}),`
`,e.jsx(n.h3,{id:"currencysymbol",children:e.jsx(n.code,{children:"currencySymbol"})}),`
`,e.jsx(n.p,{children:"Возвращает символ или код валюты для отображения."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currency: string"})," — код валюты (ISO 4217, например: ",e.jsx(n.code,{children:"'USD'"}),", ",e.jsx(n.code,{children:"'EUR'"}),", ",e.jsx(n.code,{children:"'RUB'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyDisplay?"})," — способ отображения: ",e.jsx(n.code,{children:"'symbol'"})," (по умолчанию), ",e.jsx(n.code,{children:"'code'"}),", ",e.jsx(n.code,{children:"'name'"}),", ",e.jsx(n.code,{children:"'narrowSymbol'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.currencySymbol('USD')             // '$'
intl.currencySymbol('USD', 'code')     // 'USD'
intl.currencySymbol('USD', 'name')     // 'доллар США'
`})}),`
`,e.jsx(n.h3,{id:"unit",children:e.jsx(n.code,{children:"unit"})}),`
`,e.jsxs(n.p,{children:["Форматирует число с единицей измерения через ",e.jsx(n.code,{children:"Intl.NumberFormat"})," с ",e.jsx(n.code,{children:"style: 'unit'"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — число. Также принимает строку с аббревиатурой единицы (",e.jsx(n.code,{children:"'100 km'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — единица измерения (",e.jsx(n.code,{children:"'kilometer'"}),", ",e.jsx(n.code,{children:"'liter'"}),") или полные опции."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.unit(100, 'kilometer')   // '100 км'
intl.unit(5, 'liter')         // '5 л'
intl.unit('100 km')           // '100 км'
`})}),`
`,e.jsx(n.h3,{id:"sizefile",children:e.jsx(n.code,{children:"sizeFile"})}),`
`,e.jsx(n.p,{children:"Автоматически конвертирует и форматирует размер файла, начиная от байт и рекурсивно укрупняя единицу при превышении 1024."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — размер в байтах."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?"})," — начальная единица: ",e.jsx(n.code,{children:"'byte'"})," (по умолчанию), ",e.jsx(n.code,{children:"'kilobyte'"}),", ",e.jsx(n.code,{children:"'megabyte'"}),", ",e.jsx(n.code,{children:"'gigabyte'"}),", ",e.jsx(n.code,{children:"'terabyte'"}),", ",e.jsx(n.code,{children:"'petabyte'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.sizeFile(500)              // '500 байт'
intl.sizeFile(1536)             // '1,5 КБ'
intl.sizeFile(1536 * 1024)      // '1,5 МБ'
intl.sizeFile(2 * 1024 ** 3)    // '2 ГБ'
`})}),`
`,e.jsx(n.h3,{id:"percent",children:e.jsx(n.code,{children:"percent"})}),`
`,e.jsx(n.p,{children:"Форматирует число как процент. Принимает значение в виде дроби (0–1)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — число от ",e.jsx(n.code,{children:"0"})," до ",e.jsx(n.code,{children:"1"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — дополнительные опции."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.percent(0.5)    // '50%'
intl.percent(0.007)  // '1%'
`})}),`
`,e.jsx(n.h3,{id:"percentby100",children:e.jsx(n.code,{children:"percentBy100"})}),`
`,e.jsxs(n.p,{children:["Форматирует число как процент, делит на 100. Удобно, когда значение уже хранится как ",e.jsx(n.code,{children:"50"})," вместо ",e.jsx(n.code,{children:"0.5"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.percentBy100(50)   // '50%'
intl.percentBy100(7.5)  // '8%'
`})}),`
`,e.jsx(n.h3,{id:"plural",children:e.jsx(n.code,{children:"plural"})}),`
`,e.jsxs(n.p,{children:["Форматирует число с учётом правил склонения текущей локали через ",e.jsx(n.code,{children:"Intl.PluralRules"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — число."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"words: string"})," — строка со словами, разделёнными ",e.jsx(n.code,{children:"|"}),". Порядок: ",e.jsx(n.code,{children:"one|two|few|many|other"})," (для русского: «яблоко|яблока|яблок»). Количество форм зависит от локали."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.PluralRulesOptions"})," — опции ",e.jsx(n.code,{children:"Intl.PluralRules"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — опции форматирования числа."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.plural(1, 'яблоко|яблока|яблок')   // '1 яблоко'
intl.plural(2, 'яблоко|яблока|яблок')   // '2 яблока'
intl.plural(5, 'яблоко|яблока|яблок')   // '5 яблок'
intl.plural(21, 'яблоко|яблока|яблок')  // '21 яблоко'
`})}),`
`,e.jsx(n.h2,{id:"даты-и-время",children:"Даты и время"}),`
`,e.jsx(n.h3,{id:"date",children:e.jsx(n.code,{children:"date"})}),`
`,e.jsxs(n.p,{children:["Форматирует дату через ",e.jsx(n.code,{children:"toLocaleString"})," с предустановленными типами формата."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrStringOrDate"})," — дата (объект ",e.jsx(n.code,{children:"Date"}),", timestamp или строка)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — предустановленный тип: ",e.jsx(n.code,{children:"'date'"}),", ",e.jsx(n.code,{children:"'time'"}),", ",e.jsx(n.code,{children:"'datetime'"}),", ",e.jsx(n.code,{children:"'full'"}),", ",e.jsx(n.code,{children:"'month'"})," и др."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?"})," — стиль месяца (",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'narrow'"}),") или произвольные ",e.jsx(n.code,{children:"Intl.DateTimeFormatOptions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", переключает на 24-часовой формат."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const d = new Date('2024-03-07T08:15:00')
intl.date(d, 'date')      // '07 мар. 2024'
intl.date(d, 'time')      // '08:15'
intl.date(d, 'datetime')  // '07 мар. 2024, 08:15'
intl.date(d, 'full')      // '7 марта 2024 г., 08:15:00'
intl.date(d, 'date', 'long')        // '07 марта 2024'
intl.date(d, 'time', undefined, true) // '08:15' (принудительно 24ч)
`})}),`
`,e.jsx(n.h3,{id:"time",children:e.jsx(n.code,{children:"time"})}),`
`,e.jsxs(n.p,{children:["Краткая обёртка для ",e.jsx(n.code,{children:"date"})," с типом ",e.jsx(n.code,{children:"'time'"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.time(new Date()) // '08:15'
`})}),`
`,e.jsx(n.h3,{id:"month",children:e.jsx(n.code,{children:"month"})}),`
`,e.jsx(n.p,{children:"Возвращает название месяца для указанной даты."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?"})," — дата. По умолчанию — текущая дата."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?"})," — ",e.jsx(n.code,{children:"'long'"})," (по умолчанию), ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.month(new Date('2024-03-01'), 'long')   // 'март'
intl.month(new Date('2024-03-01'), 'short')  // 'мар.'
`})}),`
`,e.jsx(n.h3,{id:"months",children:e.jsx(n.code,{children:"months"})}),`
`,e.jsxs(n.p,{children:["Возвращает массив всех 12 месяцев в формате ",e.jsx(n.code,{children:"{ label, value }"})," — удобно для ",e.jsx(n.code,{children:"<select>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.months('long')
// [{ label: '', value: undefined }, { label: 'Январь', value: 1 }, ...]
`})}),`
`,e.jsx(n.h3,{id:"weekday",children:e.jsx(n.code,{children:"weekday"})}),`
`,e.jsx(n.p,{children:"Возвращает название дня недели для указанной даты."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?"})," — дата. По умолчанию — текущая дата."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?"})," — ",e.jsx(n.code,{children:"'long'"})," (по умолчанию), ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.weekday(new Date('2024-03-07'), 'long')   // 'четверг'
intl.weekday(new Date('2024-03-07'), 'short')  // 'чт'
`})}),`
`,e.jsx(n.h3,{id:"weekdays",children:e.jsx(n.code,{children:"weekdays"})}),`
`,e.jsxs(n.p,{children:["Возвращает массив 7 дней недели в формате ",e.jsx(n.code,{children:"{ label, value }"}),", с учетом первого дня недели локали."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.weekdays('short')
// [{ label: 'Пн', value: 1 }, { label: 'Вт', value: 2 }, ...]
`})}),`
`,e.jsx(n.h2,{id:"относительное-время",children:"Относительное время"}),`
`,e.jsx(n.h3,{id:"relative",children:e.jsx(n.code,{children:"relative"})}),`
`,e.jsxs(n.p,{children:["Форматирует дату как относительное время от текущего момента (или от ",e.jsx(n.code,{children:"todayValue"}),"). Автоматически выбирает оптимальную единицу (секунды → минуты → часы → дни → месяцы → годы)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrStringOrDate"})," — дата для сравнения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?"})," — стиль: ",e.jsx(n.code,{children:"'long'"}),", ",e.jsx(n.code,{children:"'short'"}),", ",e.jsx(n.code,{children:"'narrow'"})," или ",e.jsx(n.code,{children:"Intl.RelativeTimeFormatOptions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — точка отсчёта. По умолчанию — ",e.jsx(n.code,{children:"new Date()"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.relative(new Date(Date.now() - 60000))       // '1 минуту назад'
intl.relative(new Date(Date.now() - 3600000))     // '1 час назад'
intl.relative(new Date(Date.now() + 86400000))    // 'через 1 день'
intl.relative(new Date(Date.now() - 60000), 'short') // '1 мин. назад'
`})}),`
`,e.jsx(n.h3,{id:"relativebyvalue",children:e.jsx(n.code,{children:"relativeByValue"})}),`
`,e.jsx(n.p,{children:"Форматирует относительное время по явно заданному числовому значению и единице времени."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrString"})," — число (отрицательное — в прошлом, положительное — в будущем)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unit: Intl.RelativeTimeFormatUnit"})," — единица: ",e.jsx(n.code,{children:"'second'"}),", ",e.jsx(n.code,{children:"'minute'"}),", ",e.jsx(n.code,{children:"'hour'"}),", ",e.jsx(n.code,{children:"'day'"}),", ",e.jsx(n.code,{children:"'month'"}),", ",e.jsx(n.code,{children:"'year'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?"})," — стиль или ",e.jsx(n.code,{children:"Intl.RelativeTimeFormatOptions"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.relativeByValue(-5, 'minute')    // '5 минут назад'
intl.relativeByValue(2, 'day')        // 'через 2 дня'
intl.relativeByValue(-1, 'year')      // 'в прошлом году'
`})}),`
`,e.jsx(n.h3,{id:"relativelimit",children:e.jsx(n.code,{children:"relativeLimit"})}),`
`,e.jsxs(n.p,{children:["Если дата находится в пределах ",e.jsx(n.code,{children:"limit"})," дней от ",e.jsx(n.code,{children:"todayValue"})," — выводит относительное время. Если нет — выводит абсолютную дату."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: NumberOrStringOrDate"})," — дата."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit: number"})," — порог в днях (например: ",e.jsx(n.code,{children:"7"})," — относительно для дат в пределах недели)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — точка отсчёта. По умолчанию — ",e.jsx(n.code,{children:"new Date()"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"relativeOptions?"})," — опции форматирования относительного времени."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dateOptions?"})," — опции форматирования даты (при превышении лимита)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — тип формата для абсолютной даты."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — 24-часовой формат."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Вчера → относительное время
intl.relativeLimit(new Date(Date.now() - 86400000), 7)  // 'вчера'

// 2 недели назад → абсолютная дата
intl.relativeLimit(new Date(Date.now() - 86400000 * 14), 7) // '22 фев. 2025'
`})}),`
`,e.jsx(n.h2,{id:"сортировка",children:"Сортировка"}),`
`,e.jsx(n.h3,{id:"sort",children:e.jsx(n.code,{children:"sort"})}),`
`,e.jsxs(n.p,{children:["Сортирует массив строк с учетом особенностей локали через ",e.jsx(n.code,{children:"Intl.Collator"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: T[]"})," — массив для сортировки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"compareFn?"})," — функция-компаратор для извлечения строки из элемента (если массив не строковый)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.sort(['яблоко', 'апельсин', 'банан'])
// ['апельсин', 'банан', 'яблоко']

intl.sort([{ name: 'Яблоко' }, { name: 'Апельсин' }], item => item.name)
// [{ name: 'Апельсин' }, { name: 'Яблоко' }]
`})})]})}function x(l={}){const{wrapper:n}={...c(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(i,{...l})}):i(l)}export{x as default};
