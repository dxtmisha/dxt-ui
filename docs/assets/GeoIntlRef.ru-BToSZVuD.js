import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional/Classes/GeoIntlRef - Реактивное форматирование чисел и дат"}),`
`,n.jsx(e.h1,{id:"класс-geointlref",children:"Класс GeoIntlRef"}),`
`,n.jsx(e.p,{children:"Реактивный класс для управления форматированием чисел, дат, валют и относительного времени. Обеспечивает автоматическое обновление форматированных строк при изменении локали."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Реактивность"})," — автоматическое обновление форматированных строк при изменении ",n.jsx(e.code,{children:"Ref"})," локали."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интернационализация"})," — полная поддержка стандартов ",n.jsx(e.code,{children:"Intl"})," для чисел, дат, валют и единиц измерения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Относительное время"})," — удобные методы для вывода времени в формате «2 дня назад» с поддержкой лимитов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Списки и сортировка"})," — встроенные методы для получения названий месяцев, дней недели и локалезависимой сортировки."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsxs(e.p,{children:["Создает новый экземпляр ",n.jsx(e.code,{children:"GeoIntlRef"})," для реактивного управления форматированием. Класс является оберткой над ",n.jsx(e.code,{children:"GeoIntl"})," и обеспечивает автоматическое обновление всех вычисляемых значений при изменении кода локали."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: RefOrNormal<string>"})," — код локали (например, ",n.jsx(e.code,{children:"'ru-RU'"}),", ",n.jsx(e.code,{children:"'en-US'"}),"). Может быть обычной строкой или реактивным объектом ",n.jsx(e.code,{children:"ref"}),". Если значение не передано, используется текущий язык из ",n.jsx(e.code,{children:"GeoRef"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Инициализация с реактивной локалью
const code = ref('ru-RU')
const geoIntl = new GeoIntlRef(code)

// 2. Использование реактивного форматирования
const price = geoIntl.currency(1000, 'USD') // ComputedRef: '$1,000.00' (на англ) или '1 000,00 $' (на рус)

// 3. Автоматическое обновление
code.value = 'en-US' // price обновится автоматически
`})}),`
`,n.jsx(e.h2,{id:"отображаемые-имена",children:"Отображаемые имена"}),`
`,n.jsx(e.h3,{id:"display",children:n.jsx(e.code,{children:"display"})}),`
`,n.jsx(e.p,{children:"Возвращает переведенное название языка, региона или скрипта."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<string>"})," — код для перевода (например, 'en-US')."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions"})," — тип отображаемого имени."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"languagename",children:n.jsx(e.code,{children:"languageName"})}),`
`,n.jsx(e.p,{children:"Возвращает отображаемое имя языка."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<string>"})," — код языка."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — стиль форматирования."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"countryname",children:n.jsx(e.code,{children:"countryName"})}),`
`,n.jsx(e.p,{children:"Возвращает отображаемое имя региона (страны)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<string>"})," — код страны."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — стиль форматирования."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h2,{id:"форматирование-чисел",children:"Форматирование чисел"}),`
`,n.jsx(e.h3,{id:"number",children:n.jsx(e.code,{children:"number"})}),`
`,n.jsx(e.p,{children:"Форматирует число в соответствии с правилами локали."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число для форматирования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"decimal",children:n.jsx(e.code,{children:"decimal"})}),`
`,n.jsx(e.p,{children:"Возвращает символ десятичного разделителя для текущей локали."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"percent",children:n.jsx(e.code,{children:"percent"})}),`
`,n.jsx(e.p,{children:"Форматирует число как процент."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число (0.25 -> 25%)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"percentby100",children:n.jsx(e.code,{children:"percentBy100"})}),`
`,n.jsx(e.p,{children:"Форматирует число как процент, предварительно разделив на 100."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число (25 -> 25%)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"plural",children:n.jsx(e.code,{children:"plural"})}),`
`,n.jsx(e.p,{children:"Выбирает форму множественного числа для слова."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"words: string"})," — список слов через разделитель ",n.jsx(e.code,{children:"|"})," (например, 'яблоко|яблока|яблок')."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.PluralRulesOptions"})," — опции правил."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — опции форматирования числа."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h2,{id:"валюта-и-единицы-измерения",children:"Валюта и единицы измерения"}),`
`,n.jsx(e.h3,{id:"currency",children:n.jsx(e.code,{children:"currency"})}),`
`,n.jsx(e.p,{children:"Форматирует число как денежную сумму."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — сумма."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>"})," — код валюты или опции."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"numberOnly?: boolean"})," — если ",n.jsx(e.code,{children:"true"}),", возвращает только число без символа валюты."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"currencysymbol",children:n.jsx(e.code,{children:"currencySymbol"})}),`
`,n.jsx(e.p,{children:"Возвращает символ указанной валюты."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currency: RefOrNormal<string>"})," — код валюты (например, 'USD')."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry"})," — способ отображения."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"unit",children:n.jsx(e.code,{children:"unit"})}),`
`,n.jsx(e.p,{children:"Форматирует число с единицами измерения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — единица измерения или опции."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"sizefile",children:n.jsx(e.code,{children:"sizeFile"})}),`
`,n.jsx(e.p,{children:"Форматирует размер файла в человекочитаемый вид (байты, КБ, МБ и т.д.)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — размер в байтах."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — начальная единица или опции."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h2,{id:"даты-и-время",children:"Даты и время"}),`
`,n.jsx(e.h3,{id:"date",children:n.jsx(e.code,{children:"date"})}),`
`,n.jsx(e.p,{children:"Форматирует дату."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — тип формата ('date', 'time', 'datetime' и др.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — стиль отображения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — использовать ли 24-часовой формат."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"time",children:n.jsx(e.code,{children:"time"})}),`
`,n.jsx(e.p,{children:"Форматирует время."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата/время."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"month",children:n.jsx(e.code,{children:"month"})}),`
`,n.jsx(e.p,{children:"Возвращает название месяца."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — дата."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — стиль (long, short, narrow)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"months",children:n.jsx(e.code,{children:"months"})}),`
`,n.jsx(e.p,{children:"Возвращает список всех месяцев."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — стиль отображения."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})]}),`
`,n.jsx(e.h3,{id:"weekday",children:n.jsx(e.code,{children:"weekday"})}),`
`,n.jsx(e.p,{children:"Возвращает название дня недели."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — дата."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — стиль."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"weekdays",children:n.jsx(e.code,{children:"weekdays"})}),`
`,n.jsx(e.p,{children:"Возвращает список дней недели."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — стиль."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})]}),`
`,n.jsx(e.h2,{id:"относительное-время",children:"Относительное время"}),`
`,n.jsx(e.h3,{id:"relative",children:n.jsx(e.code,{children:"relative"})}),`
`,n.jsx(e.p,{children:"Форматирует относительное время (например, «2 дня назад»)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — стиль."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — дата, относительно которой считать."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"relativelimit",children:n.jsx(e.code,{children:"relativeLimit"})}),`
`,n.jsx(e.p,{children:"Форматирует относительное время, но переключается на обычную дату, если лимит превышен."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"limit: number"})," — лимит в днях."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — дата «сегодня»."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — опции относительного времени."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dateOptions?: Intl.DateTimeFormatOptions"})," — опции даты."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"relativebyvalue",children:n.jsx(e.code,{children:"relativeByValue"})}),`
`,n.jsx(e.p,{children:"Форматирует относительный интервал по числовому значению."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — количество единиц."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unit: Intl.RelativeTimeFormatUnit"})," — единица (day, month, year и др.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — стиль."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h2,{id:"списки-и-сортировка",children:"Списки и сортировка"}),`
`,n.jsx(e.h3,{id:"sort",children:n.jsx(e.code,{children:"sort"})}),`
`,n.jsx(e.p,{children:"Сортирует массив строк в соответствии с правилами локали."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: RefOrNormal<T[]>"})," — массив данных."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compareFn?: (a: T, b: T) => [string, string]"})," — функция для получения строк сравнения."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<T[]>"})]})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
