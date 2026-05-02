import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/GeoIntl - Интернационализация (Intl)`}),`
`,(0,c.jsx)(n.h1,{id:`класс-geointl`,children:`Класс GeoIntl`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` представляет собой высокоуровневую оптимизированную обертку над нативным браузерным API `,(0,c.jsx)(n.code,{children:`Intl`}),`, разработанную специально для интеграции с возможностями геолокации `,(0,c.jsx)(n.code,{children:`Geo`}),`. Он предоставляет единый локаль-зависимый интерфейс для форматирования чисел, валют, единиц измерения, дат, времени и географических имен, автоматически управляя определением локали и кэшированием экземпляров.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Класс реализует паттерн `,(0,c.jsx)(n.strong,{children:`Singleton на уровне локали`}),`, гарантируя создание и кэширование только одного экземпляра для каждого уникального кода локали, что значительно снижает накладные расходы на повторное создание объектов `,(0,c.jsx)(n.code,{children:`Intl`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование экземпляров`}),` — Автоматическое управление и повторное использование инстансов на основе стандартизированной строки локали.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Унифицированный API форматирования`}),` — Упрощает сложные конфигурации `,(0,c.jsx)(n.code,{children:`Intl`}),` до понятных высокоуровневых методов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Адаптивная геолокация`}),` — Автоматически подтягивает значения по умолчанию из глобального состояния `,(0,c.jsx)(n.code,{children:`Geo`}),`, если локаль не указана явно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Культурные особенности`}),` — Корректно обрабатывает различные конвенции имен, первые дни недели в календарях и правила склонения числительных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.h3,{id:`getinstance`,children:(0,c.jsx)(n.code,{children:`getInstance`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает кэшированный экземпляр или создает новый для указанного кода локали.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — Стандартизированная строка локали (например, `,(0,c.jsx)(n.code,{children:`'ru-RU'`}),`, `,(0,c.jsx)(n.code,{children:`'en-US'`}),`). По умолчанию используется `,(0,c.jsx)(n.code,{children:`Geo.getLocation()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` — Синглтон-экземпляр для запрошенной локали.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance('ru-RU')
const currentIntl = new GeoIntl() // Также использует синглтон-кэш внутри
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы-локализации-и-географии`,children:`Методы локализации и географии`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocation(): string`}),` — Возвращает нормализованную строку стандартной локали (например, `,(0,c.jsx)(n.code,{children:`'ru-RU'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDay(): string`}),` — Возвращает спецификацию первого дня недели для локали (например, `,(0,c.jsx)(n.code,{children:`'Mon'`}),`, `,(0,c.jsx)(n.code,{children:`'Sun'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`имена-и-регионы`,children:`Имена и регионы`}),`
`,(0,c.jsx)(n.h3,{id:`display`,children:(0,c.jsx)(n.code,{children:`display`})}),`
`,(0,c.jsxs)(n.p,{children:[`Предоставляет локализованные переводы для языков, регионов и скриптов, используя движок `,(0,c.jsx)(n.code,{children:`Intl.DisplayNames`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: string`}),` — Идентификационный код (например, `,(0,c.jsx)(n.code,{children:`'en'`}),`, `,(0,c.jsx)(n.code,{children:`'RU'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typeOptions?`}),` — Строка, представляющая тип отображения (`,(0,c.jsx)(n.code,{children:`'language'`}),`, `,(0,c.jsx)(n.code,{children:`'region'`}),`, `,(0,c.jsx)(n.code,{children:`'script'`}),`), или полный объект `,(0,c.jsx)(n.code,{children:`Intl.DisplayNamesOptions`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Локализованное название.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`intl.display('en', 'language') // 'английский'
intl.display('DE', 'region')   // 'Германия'
`})}),`
`,(0,c.jsxs)(n.h3,{id:`languagename--countryname`,children:[(0,c.jsx)(n.code,{children:`languageName`}),` / `,(0,c.jsx)(n.code,{children:`countryName`})]}),`
`,(0,c.jsx)(n.p,{children:`Удобные методы для получения локализованных названий языков и стран.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: string`}),` — Код языка или страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?`}),` — Стиль форматирования: `,(0,c.jsx)(n.code,{children:`'long'`}),`, `,(0,c.jsx)(n.code,{children:`'short'`}),` или `,(0,c.jsx)(n.code,{children:`'narrow'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`fullname`,children:(0,c.jsx)(n.code,{children:`fullName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Форматирует полное имя человека в соответствии с культурными традициями текущей локали. Порядок компонентов (Имя-Отчество-Фамилия или Фамилия-Имя-Отчество) определяется полем `,(0,c.jsx)(n.code,{children:`nameFormat`}),` в географических данных.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`last: string`}),` — Фамилия.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first: string`}),` — Имя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`surname?: string`}),` — Отчество (опционально).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`short?: boolean`}),` — Если `,(0,c.jsx)(n.code,{children:`true`}),`, сокращает все части после первой до инициала (например, `,(0,c.jsx)(n.code,{children:`Иванов И. И.`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h2,{id:`форматирование-чисел`,children:`Форматирование чисел`}),`
`,(0,c.jsx)(n.h3,{id:`number`,children:(0,c.jsx)(n.code,{children:`number`})}),`
`,(0,c.jsxs)(n.p,{children:[`Форматирует число, используя возможности `,(0,c.jsx)(n.code,{children:`Intl.NumberFormat`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Числовое значение для форматирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Конфигурация десятичных знаков, группировки и т.д.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`currency`,children:(0,c.jsx)(n.code,{children:`currency`})}),`
`,(0,c.jsx)(n.p,{children:`Специализированный форматер валют с автоматическим размещением символа.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Сумма. Также парсит строки с суффиксами валют (например, `,(0,c.jsx)(n.code,{children:`'1500 RUB'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyOptions?: string | Intl.NumberFormatOptions`}),` — Код валюты (`,(0,c.jsx)(n.code,{children:`'RUB'`}),`) или детальные опции форматирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — Если `,(0,c.jsx)(n.code,{children:`true`}),`, возвращает только отформатированные цифры без символа валюты.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`intl.currency(1500, 'RUB') // '1 500,00 ₽'
intl.currency('1500 USD')  // '1 500,00 $'
`})}),`
`,(0,c.jsxs)(n.h3,{id:`unit--sizefile`,children:[(0,c.jsx)(n.code,{children:`unit`}),` / `,(0,c.jsx)(n.code,{children:`sizeFile`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Форматирует числа с единицами измерения. `,(0,c.jsx)(n.code,{children:`sizeFile`}),` обеспечивает рекурсивное масштабирование байтов (автоматическое переключение на КБ, МБ, ГБ).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Параметры (`,(0,c.jsx)(n.code,{children:`sizeFile`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Размер в байтах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unitOptions?`}),` — Начальная единица измерения (по умолчанию `,(0,c.jsx)(n.code,{children:`'byte'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`plural`,children:(0,c.jsx)(n.code,{children:`plural`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет правила склонения числительных с учетом локали.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Число.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — Формы слова, разделенные `,(0,c.jsx)(n.code,{children:`|`}),`: `,(0,c.jsx)(n.code,{children:`one|two|few|many|other|zero`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?`}),` — `,(0,c.jsx)(n.code,{children:`Intl.PluralRulesOptions`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Отформатированное число, за которым следует правильная словоформа.`]}),`
`,(0,c.jsx)(n.h2,{id:`даты-и-время`,children:`Даты и время`}),`
`,(0,c.jsxs)(n.h3,{id:`date--time`,children:[(0,c.jsx)(n.code,{children:`date`}),` / `,(0,c.jsx)(n.code,{children:`time`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Основной движок форматирования дат, предоставляющий локализованные представления на основе предустановленных пресетов `,(0,c.jsx)(n.code,{children:`GeoDate`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrStringOrDate`}),` — Входящая дата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — Идентификатор пресета: `,(0,c.jsx)(n.code,{children:`'date'`}),`, `,(0,c.jsx)(n.code,{children:`'time'`}),`, `,(0,c.jsx)(n.code,{children:`'datetime'`}),`, `,(0,c.jsx)(n.code,{children:`'full'`}),`, и др.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?`}),` — Кастомные `,(0,c.jsx)(n.code,{children:`Intl.DateTimeFormatOptions`}),` или строка стиля месяца.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — Принудительное 24-часовое представление времени.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsxs)(n.h3,{id:`months--weekdays`,children:[(0,c.jsx)(n.code,{children:`months`}),` / `,(0,c.jsx)(n.code,{children:`weekdays`})]}),`
`,(0,c.jsx)(n.p,{children:`Возвращает массивы локализованных названий месяцев или дней недели, идеально подходит для заполнения компонентов выбора в UI.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ItemValue<number>[]`}),` — Массив объектов с полями `,(0,c.jsx)(n.code,{children:`label`}),` и `,(0,c.jsx)(n.code,{children:`value`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`относительное-время`,children:`Относительное время`}),`
`,(0,c.jsx)(n.h3,{id:`relative`,children:(0,c.jsx)(n.code,{children:`relative`})}),`
`,(0,c.jsx)(n.p,{children:`Вычисляет и форматирует относительную разницу во времени от контрольной точки (сейчас), автоматически выбирая наиболее подходящую единицу измерения.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrStringOrDate`}),` — Прошедшая или будущая дата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?`}),` — Стиль форматирования (например, `,(0,c.jsx)(n.code,{children:`'long'`}),`, `,(0,c.jsx)(n.code,{children:`'short'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`todayValue?: Date`}),` — Явная точка отсчета (по умолчанию `,(0,c.jsx)(n.code,{children:`new Date()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` (например, `,(0,c.jsx)(n.code,{children:`'2 часа назад'`}),`, `,(0,c.jsx)(n.code,{children:`'через 3 дня'`}),`)`]}),`
`,(0,c.jsx)(n.h3,{id:`relativelimit`,children:(0,c.jsx)(n.code,{children:`relativeLimit`})}),`
`,(0,c.jsxs)(n.p,{children:[`Комбинированный форматер для относительного и абсолютного времени. Если дата находится в пределах определенного лимита (`,(0,c.jsx)(n.code,{children:`limit`}),`) дней, возвращается относительное время; в противном случае происходит переключение на стандартный формат абсолютной даты.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h2,{id:`сортировка`,children:`Сортировка`}),`
`,(0,c.jsx)(n.h3,{id:`sort`,children:(0,c.jsx)(n.code,{children:`sort`})}),`
`,(0,c.jsxs)(n.p,{children:[`Сортирует массив элементов, используя локаль-зависимое сравнение через `,(0,c.jsx)(n.code,{children:`Intl.Collator`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: T[]`}),` — Целевой массив.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compareFn?`}),` — Опциональная функция трансформации для извлечения ключей сортировки из сложных объектов.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T[]`}),` — Отсортированный массив.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`intl.sort(['яблоко', 'апельсин', 'банан'])
// ['апельсин', 'банан', 'яблоко']
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};