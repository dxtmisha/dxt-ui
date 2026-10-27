import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/GeoIntlRef - Реактивное форматирование чисел и дат`}),`
`,(0,c.jsx)(t.h1,{id:`класс-geointlref`,children:`Класс GeoIntlRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивный фасад `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` для чисел, валют, дат, названий и сортировки с учётом локали. Методы возвращают вычисляемые ссылки, отслеживающие поддерживаемые входные ссылки и явную локаль либо резервную локаль `,(0,c.jsx)(t.code,{children:`GeoRef`}),`. Используйте нереактивный GeoIntl, если вычисляемые обновления не нужны.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Вычисляемые результаты`}),` — читайте значение через `,(0,c.jsx)(t.code,{children:`.value`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция Intl`}),` — опции чисел, дат, названий и относительного времени.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сортировка без мутаций`}),` — исходные массивы копируются.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor(code?: RefOrNormal<string>)`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Используйте обычный `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`, если реактивность не нужна. `,(0,c.jsx)(t.code,{children:`RefOrNormal<T>`}),` принимает значение либо ref/computed Vue, но не функцию-геттер. Опции передаются обычными объектами, если сигнатура явно не содержит `,(0,c.jsx)(t.code,{children:`RefOrNormal`}),`. Относительное время пересчитывается при изменении зависимостей, без таймера. Передайте `,(0,c.jsx)(t.code,{children:`todayValue`}),` для фиксированной точки отсчёта. Списки месяцев и дней недели начинаются с `,(0,c.jsx)(t.code,{children:`{ label: "", value: undefined }`}),`; затем месяцы используют 1–12, дни недели — стандартные коды в порядке локали. Единицы размера файла повышаются при значении больше 1024, а не равном 1024. Преобразование чисел и резервные значения определяет `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const locale = /*#__PURE__*/ ref('en-US')
const amount = /*#__PURE__*/ ref(0)
const formatter = /*#__PURE__*/ new GeoIntlRef(locale)
const formatted = /*#__PURE__*/ formatter.currency(amount, ref('USD'))
amount.value = 1234.5
locale.value = 'vi-VN'
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`отображаемые-названия`,children:`Отображаемые названия`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`display( value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions ): ComputedRef<string>`}),` — Возвращает локализованное название для указанного типа Intl.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`languageName( value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle ): ComputedRef<string>`}),` — Возвращает локализованное название языка.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`countryName( value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle ): ComputedRef<string>`}),` — Возвращает локализованное название региона.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`числа`,children:`Числа`}),`
`,(0,c.jsx)(t.h4,{id:`number`,children:(0,c.jsx)(t.code,{children:`number`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`number( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Форматирует число или числовую строку по правилам локали и числовым опциям.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Параметры настройки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const number = /*#__PURE__*/ formatter.number(amount, { maximumFractionDigits: 2 })
`})}),`
`,(0,c.jsx)(t.h4,{id:`percent`,children:(0,c.jsx)(t.code,{children:`percent`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`percent( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Форматирует долю в проценты: 0.25 превращается в 25%.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Параметры настройки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const percent = /*#__PURE__*/ formatter.percent(0.25)
`})}),`
`,(0,c.jsx)(t.h4,{id:`percentby100`,children:(0,c.jsx)(t.code,{children:`percentBy100`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`percentBy100( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Делит на 100 перед форматированием процентов: 25 превращается в 25%.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Параметры настройки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const percent = /*#__PURE__*/ formatter.percentBy100(25)
`})}),`
`,(0,c.jsx)(t.h4,{id:`plural`,children:(0,c.jsx)(t.code,{children:`plural`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`plural( value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выбирает форму множественного числа и форматирует количество. Передавайте варианты слов через вертикальную черту по правилам `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`words: string`}),` — Формы слова через вертикальную черту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.PluralRulesOptions`}),` — Параметры настройки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — Опции форматирования числового количества.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const label = /*#__PURE__*/ formatter.plural(amount, 'item|items')
`})}),`
`,(0,c.jsx)(t.h3,{id:`десятичный-разделитель`,children:`Десятичный разделитель`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`decimal(): ComputedRef<string>`}),` — Возвращает десятичный разделитель локали.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`валюты-и-единицы`,children:`Валюты и единицы`}),`
`,(0,c.jsx)(t.h4,{id:`currency`,children:(0,c.jsx)(t.code,{children:`currency`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`currency( value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly = false ): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Форматирует сумму с кодом валюты или реактивным объектом опций. `,(0,c.jsx)(t.code,{children:`numberOnly`}),` убирает обозначение валюты.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>`}),` — Код валюты либо числовые опции Intl.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`numberOnly = false`}),` — Убрать обозначение валюты; по умолчанию false.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const money = /*#__PURE__*/ formatter.currency(amount, ref('USD'), false)
`})}),`
`,(0,c.jsx)(t.h4,{id:`unit`,children:(0,c.jsx)(t.code,{children:`unit`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`unit( value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Форматирует число с единицей Intl; не выполняет региональную конвертацию единиц.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unitOptions?: string | Intl.NumberFormatOptions`}),` — Идентификатор единицы либо числовые опции Intl.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const distance = /*#__PURE__*/ formatter.unit(amount, 'meter')
`})}),`
`,(0,c.jsx)(t.h4,{id:`sizefile`,children:(0,c.jsx)(t.code,{children:`sizeFile`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`sizeFile( value: RefOrNormal<NumberOrString>, unitOptions: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions = 'byte' ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Форматирует размер файла начиная с переданной единицы. Строковые единицы повышаются при значении больше 1024; объект опций передаётся форматированию единиц.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unitOptions: 'byte'     | 'kilobyte'     | 'megabyte'     | 'gigabyte'     | 'terabyte'     | 'petabyte'     | Intl.NumberFormatOptions = 'byte'`}),` — Идентификатор единицы либо числовые опции Intl.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const size = /*#__PURE__*/ formatter.sizeFile(2048, 'byte')
`})}),`
`,(0,c.jsx)(t.h3,{id:`символы-валют`,children:`Символы валют`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencySymbol( currency: RefOrNormal<string>, currencyDisplay: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry = 'symbol' ): ComputedRef<string>`}),` — Возвращает запрошенное представление валюты с резервным возвратом кода.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`форматирование-дат`,children:`Форматирование дат`}),`
`,(0,c.jsx)(t.h4,{id:`date`,children:(0,c.jsx)(t.code,{children:`date`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`date( value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Форматирует дату с типом Geo, опциями даты и необязательным переключением на 24-часовые часы.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Формат вывода либо типы событий согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Стиль Intl либо параметры форматирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour24?: boolean`}),` — Использовать ли 24-часовые часы.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const date = /*#__PURE__*/ formatter.date(ref('2025-01-01'), 'date', 'long')
`})}),`
`,(0,c.jsx)(t.h3,{id:`календарные-названия-и-время`,children:`Календарные названия и время`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`month( value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month'] ): ComputedRef<string>`}),` — Возвращает название месяца переданной даты.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`months( style?: Intl.DateTimeFormatOptions['month'] ): ComputedRef<ItemValue<number | undefined>[]>`}),` — Возвращает пустую запись и 12 месяцев с номерами 1–12.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`weekday( value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday'] ): ComputedRef<string>`}),` — Возвращает название дня недели переданной даты.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`weekdays( style?: Intl.DateTimeFormatOptions['weekday'] ): ComputedRef<ItemValue<number | undefined>[]>`}),` — Возвращает пустую запись и семь дней недели в порядке локали.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>`}),` — Форматирует переданную дату как местное время.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`относительное-время`,children:`Относительное время`}),`
`,(0,c.jsx)(t.h4,{id:`relative`,children:(0,c.jsx)(t.code,{children:`relative`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`relative( value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Форматирует дату относительно точки отсчёта с выбором единицы по правилам GeoIntl.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — Стиль Intl либо параметры форматирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`todayValue?: Date`}),` — Дата отсчёта; при отсутствии используется текущая дата в момент вычисления.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const relative = /*#__PURE__*/ formatter.relative('2025-01-03', 'long', new Date(2025, 0, 1))
`})}),`
`,(0,c.jsx)(t.h4,{id:`relativelimit`,children:(0,c.jsx)(t.code,{children:`relativeLimit`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`relativeLimit( value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Использует относительное время внутри включительного интервала ±limit дней. Снаружи форматирует дату со всеми переданными опциями даты.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` — Включительный лимит относительного времени в днях.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`todayValue?: Date`}),` — Дата отсчёта; при отсутствии используется текущая дата в момент вычисления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — Стиль либо опции Intl относительного времени.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Стиль либо опции Intl даты за пределами лимита.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Формат вывода либо типы событий согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour24?: boolean`}),` — Использовать ли 24-часовые часы.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const label = /*#__PURE__*/ formatter.relativeLimit('2025-01-05', 2, new Date(2025, 0, 1), 'long', 'long', 'date', true)
`})}),`
`,(0,c.jsx)(t.h4,{id:`relativebyvalue`,children:(0,c.jsx)(t.code,{children:`relativeByValue`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`relativeByValue( value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Форматирует явный интервал со знаком в переданной единице относительного времени.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unit: Intl.RelativeTimeFormatUnit`}),` — Идентификатор единицы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — Стиль Intl либо параметры форматирования.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const relative = /*#__PURE__*/ formatter.relativeByValue(-5, 'minute')
`})}),`
`,(0,c.jsx)(t.h3,{id:`сортировка-по-локали`,children:`Сортировка по локали`}),`
`,(0,c.jsx)(t.h4,{id:`sort`,children:(0,c.jsx)(t.code,{children:`sort`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`sort<T>( data: RefOrNormal<T[]>, compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string] ): ComputedRef<T[]>`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает отсортированную копию по правилам локали. Для массива объектов передайте функцию, возвращающую две сравниваемые строки.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: RefOrNormal<T[]>`}),` — Входной массив; не изменяется.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string]`}),` — Преобразует две записи в две строки для сравнения Intl.Collator.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<T[]>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const sorted = /*#__PURE__*/ formatter.sort(ref([{ label: 'café' }, { label: 'apple' }]), (first, second) => [first.label, second.label])
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};