import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Classes/GeoIntlRef - Реактивное форматирование чисел и дат`}),`
`,(0,c.jsx)(n.h1,{id:`класс-geointlref`,children:`Класс GeoIntlRef`}),`
`,(0,c.jsx)(n.p,{children:`Реактивный класс для управления форматированием чисел, дат, валют и относительного времени. Обеспечивает автоматическое обновление форматированных строк при изменении локали.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реактивность`}),` — автоматическое обновление форматированных строк при изменении `,(0,c.jsx)(n.code,{children:`Ref`}),` локали.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интернационализация`}),` — полная поддержка стандартов `,(0,c.jsx)(n.code,{children:`Intl`}),` для чисел, дат, валют и единиц измерения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Относительное время`}),` — удобные методы для вывода времени в формате «2 дня назад» с поддержкой лимитов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Списки и сортировка`}),` — встроенные методы для получения названий месяцев, дней недели и локалезависимой сортировки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.h3,{id:`constructor`,children:(0,c.jsx)(n.code,{children:`constructor`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` для реактивного управления форматированием. Класс является оберткой над `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` и обеспечивает автоматическое обновление всех вычисляемых значений при изменении кода локали.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: RefOrNormal<string>`}),` — код локали (например, `,(0,c.jsx)(n.code,{children:`'ru-RU'`}),`, `,(0,c.jsx)(n.code,{children:`'en-US'`}),`). Может быть обычной строкой или реактивным объектом `,(0,c.jsx)(n.code,{children:`ref`}),`. Если значение не передано, используется текущий язык из `,(0,c.jsx)(n.code,{children:`GeoRef`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Инициализация с реактивной локалью
const code = ref('ru-RU')
const geoIntl = new GeoIntlRef(code)

// 2. Использование реактивного форматирования
const price = geoIntl.currency(1000, 'USD') // ComputedRef: '$1,000.00' (на англ) или '1 000,00 $' (на рус)

// 3. Автоматическое обновление
code.value = 'en-US' // price обновится автоматически
`})}),`
`,(0,c.jsx)(n.h2,{id:`отображаемые-имена`,children:`Отображаемые имена`}),`
`,(0,c.jsx)(n.h3,{id:`display`,children:(0,c.jsx)(n.code,{children:`display`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает переведенное название языка, региона или скрипта.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<string>`}),` — код для перевода (например, 'en-US').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions`}),` — тип отображаемого имени.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`languagename`,children:(0,c.jsx)(n.code,{children:`languageName`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает отображаемое имя языка.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<string>`}),` — код языка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.RelativeTimeFormatStyle`}),` — стиль форматирования.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`countryname`,children:(0,c.jsx)(n.code,{children:`countryName`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает отображаемое имя региона (страны).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<string>`}),` — код страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.RelativeTimeFormatStyle`}),` — стиль форматирования.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h2,{id:`форматирование-чисел`,children:`Форматирование чисел`}),`
`,(0,c.jsx)(n.h3,{id:`number`,children:(0,c.jsx)(n.code,{children:`number`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует число в соответствии с правилами локали.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — число для форматирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — опции форматирования.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`decimal`,children:(0,c.jsx)(n.code,{children:`decimal`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает символ десятичного разделителя для текущей локали.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`percent`,children:(0,c.jsx)(n.code,{children:`percent`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует число как процент.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — число (0.25 -> 25%).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — опции форматирования.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`percentby100`,children:(0,c.jsx)(n.code,{children:`percentBy100`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует число как процент, предварительно разделив на 100.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — число (25 -> 25%).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — опции форматирования.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`plural`,children:(0,c.jsx)(n.code,{children:`plural`})}),`
`,(0,c.jsx)(n.p,{children:`Выбирает форму множественного числа для слова.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — число.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — список слов через разделитель `,(0,c.jsx)(n.code,{children:`|`}),` (например, 'яблоко|яблока|яблок').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.PluralRulesOptions`}),` — опции правил.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — опции форматирования числа.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h2,{id:`валюта-и-единицы-измерения`,children:`Валюта и единицы измерения`}),`
`,(0,c.jsx)(n.h3,{id:`currency`,children:(0,c.jsx)(n.code,{children:`currency`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует число как денежную сумму.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — сумма.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>`}),` — код валюты или опции.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, возвращает только число без символа валюты.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`currencysymbol`,children:(0,c.jsx)(n.code,{children:`currencySymbol`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает символ указанной валюты.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currency: RefOrNormal<string>`}),` — код валюты (например, 'USD').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry`}),` — способ отображения.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`unit`,children:(0,c.jsx)(n.code,{children:`unit`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует число с единицами измерения.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — число.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unitOptions?: string | Intl.NumberFormatOptions`}),` — единица измерения или опции.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`sizefile`,children:(0,c.jsx)(n.code,{children:`sizeFile`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует размер файла в человекочитаемый вид (байты, КБ, МБ и т.д.).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — размер в байтах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unitOptions?: string | Intl.NumberFormatOptions`}),` — начальная единица или опции.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h2,{id:`даты-и-время`,children:`Даты и время`}),`
`,(0,c.jsx)(n.h3,{id:`date`,children:(0,c.jsx)(n.code,{children:`date`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует дату.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — дата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — тип формата ('date', 'time', 'datetime' и др.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — стиль отображения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — использовать ли 24-часовой формат.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`time`,children:(0,c.jsx)(n.code,{children:`time`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует время.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — дата/время.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`month`,children:(0,c.jsx)(n.code,{children:`month`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает название месяца.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<NumberOrStringOrDate>`}),` — дата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.DateTimeFormatOptions['month']`}),` — стиль (long, short, narrow).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`months`,children:(0,c.jsx)(n.code,{children:`months`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает список всех месяцев.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.DateTimeFormatOptions['month']`}),` — стиль отображения.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<ItemValue<number | undefined>[]>`})]}),`
`,(0,c.jsx)(n.h3,{id:`weekday`,children:(0,c.jsx)(n.code,{children:`weekday`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает название дня недели.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: RefOrNormal<NumberOrStringOrDate>`}),` — дата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.DateTimeFormatOptions['weekday']`}),` — стиль.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`weekdays`,children:(0,c.jsx)(n.code,{children:`weekdays`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает список дней недели.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Intl.DateTimeFormatOptions['weekday']`}),` — стиль.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<ItemValue<number | undefined>[]>`})]}),`
`,(0,c.jsx)(n.h2,{id:`относительное-время`,children:`Относительное время`}),`
`,(0,c.jsx)(n.h3,{id:`relative`,children:(0,c.jsx)(n.code,{children:`relative`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует относительное время (например, «2 дня назад»).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — дата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — стиль.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`todayValue?: Date`}),` — дата, относительно которой считать.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`relativelimit`,children:(0,c.jsx)(n.code,{children:`relativeLimit`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует относительное время, но переключается на обычную дату, если лимит превышен.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — дата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit: number`}),` — лимит в днях.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`todayValue?: Date`}),` — дата «сегодня».`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — опции относительного времени.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dateOptions?: Intl.DateTimeFormatOptions`}),` — опции даты.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`relativebyvalue`,children:(0,c.jsx)(n.code,{children:`relativeByValue`})}),`
`,(0,c.jsx)(n.p,{children:`Форматирует относительный интервал по числовому значению.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<NumberOrString>`}),` — количество единиц.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unit: Intl.RelativeTimeFormatUnit`}),` — единица (day, month, year и др.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — стиль.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h2,{id:`списки-и-сортировка`,children:`Списки и сортировка`}),`
`,(0,c.jsx)(n.h3,{id:`sort`,children:(0,c.jsx)(n.code,{children:`sort`})}),`
`,(0,c.jsx)(n.p,{children:`Сортирует массив строк в соответствии с правилами локали.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: RefOrNormal<T[]>`}),` — массив данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compareFn?: (a: T, b: T) => [string, string]`}),` — функция для получения строк сравнения.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<T[]>`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};