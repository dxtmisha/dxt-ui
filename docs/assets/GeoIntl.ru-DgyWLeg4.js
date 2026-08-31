import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/GeoIntl - Интернационализация (Intl)`}),`
`,(0,c.jsx)(t.h1,{id:`класс-geointl`,children:`Класс GeoIntl`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` представляет собой высокоуровневую оптимизированную обертку над нативным браузерным API `,(0,c.jsx)(t.code,{children:`Intl`}),`, разработанную специально для интеграции с возможностями геолокации `,(0,c.jsx)(t.code,{children:`Geo`}),`. Он предоставляет единый локаль-зависимый интерфейс для форматирования чисел, валют, единиц измерения, дат, времени и географических имен, автоматически управляя определением локали и кэшированием экземпляров.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Класс реализует паттерн `,(0,c.jsx)(t.strong,{children:`Singleton на уровне локали`}),`, гарантируя создание и кэширование только одного экземпляра для каждого уникального кода локали, что значительно снижает накладные расходы на повторное создание объектов `,(0,c.jsx)(t.code,{children:`Intl`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование экземпляров`}),` — Автоматическое управление и повторное использование инстансов на основе стандартизированной строки локали.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Унифицированный API форматирования`}),` — Упрощает сложные конфигурации `,(0,c.jsx)(t.code,{children:`Intl`}),` до понятных высокоуровневых методов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Адаптивная геолокация`}),` — Автоматически подтягивает значения по умолчанию из глобального состояния `,(0,c.jsx)(t.code,{children:`Geo`}),`, если локаль не указана явно.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Культурные особенности`}),` — Корректно обрабатывает различные конвенции имен, первые дни недели в календарях и правила склонения числительных.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.h3,{id:`getinstance`,children:(0,c.jsx)(t.code,{children:`getInstance`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает кэшированный экземпляр или создает новый для указанного кода локали.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: string`}),` — Стандартизированная строка локали (например, `,(0,c.jsx)(t.code,{children:`'ru-RU'`}),`, `,(0,c.jsx)(t.code,{children:`'en-US'`}),`). По умолчанию используется `,(0,c.jsx)(t.code,{children:`Geo.getLocation()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` — Синглтон-экземпляр для запрошенной локали.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance('ru-RU')
const currentIntl = new GeoIntl() // Также использует синглтон-кэш внутри
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы-локализации-и-географии`,children:`Методы локализации и географии`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocation(): string`}),` — Возвращает нормализованную строку стандартной локали (например, `,(0,c.jsx)(t.code,{children:`'ru-RU'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstDay(): string`}),` — Возвращает спецификацию первого дня недели для локали (например, `,(0,c.jsx)(t.code,{children:`'Mon'`}),`, `,(0,c.jsx)(t.code,{children:`'Sun'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`имена-и-регионы`,children:`Имена и регионы`}),`
`,(0,c.jsx)(t.h3,{id:`display`,children:(0,c.jsx)(t.code,{children:`display`})}),`
`,(0,c.jsxs)(t.p,{children:[`Предоставляет локализованные переводы для языков, регионов и скриптов, используя движок `,(0,c.jsx)(t.code,{children:`Intl.DisplayNames`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: string`}),` — Идентификационный код (например, `,(0,c.jsx)(t.code,{children:`'en'`}),`, `,(0,c.jsx)(t.code,{children:`'RU'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeOptions?`}),` — Строка, представляющая тип отображения (`,(0,c.jsx)(t.code,{children:`'language'`}),`, `,(0,c.jsx)(t.code,{children:`'region'`}),`, `,(0,c.jsx)(t.code,{children:`'script'`}),`), или полный объект `,(0,c.jsx)(t.code,{children:`Intl.DisplayNamesOptions`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` — Локализованное название.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`intl.display('en', 'language') // 'английский'
intl.display('DE', 'region')   // 'Германия'
`})}),`
`,(0,c.jsxs)(t.h3,{id:`languagename--countryname`,children:[(0,c.jsx)(t.code,{children:`languageName`}),` / `,(0,c.jsx)(t.code,{children:`countryName`})]}),`
`,(0,c.jsx)(t.p,{children:`Удобные методы для получения локализованных названий языков и стран.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: string`}),` — Код языка или страны.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style?`}),` — Стиль форматирования: `,(0,c.jsx)(t.code,{children:`'long'`}),`, `,(0,c.jsx)(t.code,{children:`'short'`}),` или `,(0,c.jsx)(t.code,{children:`'narrow'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`})]}),`
`,(0,c.jsx)(t.h3,{id:`fullname`,children:(0,c.jsx)(t.code,{children:`fullName`})}),`
`,(0,c.jsxs)(t.p,{children:[`Форматирует полное имя человека в соответствии с культурными традициями текущей локали. Порядок компонентов (Имя-Отчество-Фамилия или Фамилия-Имя-Отчество) определяется полем `,(0,c.jsx)(t.code,{children:`nameFormat`}),` в географических данных.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`last: string`}),` — Фамилия.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`first: string`}),` — Имя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`surname?: string`}),` — Отчество (опционально).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`short?: boolean`}),` — Если `,(0,c.jsx)(t.code,{children:`true`}),`, сокращает все части после первой до инициала (например, `,(0,c.jsx)(t.code,{children:`Иванов И. И.`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`})]}),`
`,(0,c.jsx)(t.h2,{id:`форматирование-чисел`,children:`Форматирование чисел`}),`
`,(0,c.jsx)(t.h3,{id:`number`,children:(0,c.jsx)(t.code,{children:`number`})}),`
`,(0,c.jsxs)(t.p,{children:[`Форматирует число, используя возможности `,(0,c.jsx)(t.code,{children:`Intl.NumberFormat`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: NumberOrString`}),` — Числовое значение для форматирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Конфигурация десятичных знаков, группировки и т.д.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`})]}),`
`,(0,c.jsx)(t.h3,{id:`currency`,children:(0,c.jsx)(t.code,{children:`currency`})}),`
`,(0,c.jsx)(t.p,{children:`Специализированный форматер валют с автоматическим размещением символа.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: NumberOrString`}),` — Сумма. Также парсит строки с суффиксами валют (например, `,(0,c.jsx)(t.code,{children:`'1500 RUB'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencyOptions?: string | Intl.NumberFormatOptions`}),` — Код валюты (`,(0,c.jsx)(t.code,{children:`'RUB'`}),`) или детальные опции форматирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`numberOnly?: boolean`}),` — Если `,(0,c.jsx)(t.code,{children:`true`}),`, возвращает только отформатированные цифры без символа валюты.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`intl.currency(1500, 'RUB') // '1 500,00 ₽'
intl.currency('1500 USD')  // '1 500,00 $'
`})}),`
`,(0,c.jsxs)(t.h3,{id:`unit--sizefile`,children:[(0,c.jsx)(t.code,{children:`unit`}),` / `,(0,c.jsx)(t.code,{children:`sizeFile`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Форматирует числа с единицами измерения. `,(0,c.jsx)(t.code,{children:`sizeFile`}),` обеспечивает рекурсивное масштабирование байтов (автоматическое переключение на КБ, МБ, ГБ).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Параметры (`,(0,c.jsx)(t.code,{children:`sizeFile`}),`):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: NumberOrString`}),` — Размер в байтах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unitOptions?`}),` — Начальная единица измерения (по умолчанию `,(0,c.jsx)(t.code,{children:`'byte'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`})]}),`
`,(0,c.jsx)(t.h3,{id:`plural`,children:(0,c.jsx)(t.code,{children:`plural`})}),`
`,(0,c.jsx)(t.p,{children:`Применяет правила склонения числительных с учетом локали.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: NumberOrString`}),` — Число.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`words: string`}),` — Формы слова, разделенные `,(0,c.jsx)(t.code,{children:`|`}),`: `,(0,c.jsx)(t.code,{children:`one|two|few|many|other|zero`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?`}),` — `,(0,c.jsx)(t.code,{children:`Intl.PluralRulesOptions`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` — Отформатированное число, за которым следует правильная словоформа.`]}),`
`,(0,c.jsx)(t.h2,{id:`даты-и-время`,children:`Даты и время`}),`
`,(0,c.jsxs)(t.h3,{id:`date--time`,children:[(0,c.jsx)(t.code,{children:`date`}),` / `,(0,c.jsx)(t.code,{children:`time`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Основной движок форматирования дат, предоставляющий локализованные представления на основе предустановленных пресетов `,(0,c.jsx)(t.code,{children:`GeoDate`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: NumberOrStringOrDate`}),` — Входящая дата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Идентификатор пресета: `,(0,c.jsx)(t.code,{children:`'date'`}),`, `,(0,c.jsx)(t.code,{children:`'time'`}),`, `,(0,c.jsx)(t.code,{children:`'datetime'`}),`, `,(0,c.jsx)(t.code,{children:`'full'`}),`, и др.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?`}),` — Кастомные `,(0,c.jsx)(t.code,{children:`Intl.DateTimeFormatOptions`}),` или строка стиля месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour24?: boolean`}),` — Принудительное 24-часовое представление времени.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`})]}),`
`,(0,c.jsxs)(t.h3,{id:`months--weekdays`,children:[(0,c.jsx)(t.code,{children:`months`}),` / `,(0,c.jsx)(t.code,{children:`weekdays`})]}),`
`,(0,c.jsx)(t.p,{children:`Возвращает массивы локализованных названий месяцев или дней недели, идеально подходит для заполнения компонентов выбора в UI.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ItemValue<number>[]`}),` — Массив объектов с полями `,(0,c.jsx)(t.code,{children:`label`}),` и `,(0,c.jsx)(t.code,{children:`value`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`относительное-время`,children:`Относительное время`}),`
`,(0,c.jsx)(t.h3,{id:`relative`,children:(0,c.jsx)(t.code,{children:`relative`})}),`
`,(0,c.jsx)(t.p,{children:`Вычисляет и форматирует относительную разницу во времени от контрольной точки (сейчас), автоматически выбирая наиболее подходящую единицу измерения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: NumberOrStringOrDate`}),` — Прошедшая или будущая дата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?`}),` — Стиль форматирования (например, `,(0,c.jsx)(t.code,{children:`'long'`}),`, `,(0,c.jsx)(t.code,{children:`'short'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`todayValue?: Date`}),` — Явная точка отсчета (по умолчанию `,(0,c.jsx)(t.code,{children:`new Date()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` (например, `,(0,c.jsx)(t.code,{children:`'2 часа назад'`}),`, `,(0,c.jsx)(t.code,{children:`'через 3 дня'`}),`)`]}),`
`,(0,c.jsx)(t.h3,{id:`relativelimit`,children:(0,c.jsx)(t.code,{children:`relativeLimit`})}),`
`,(0,c.jsxs)(t.p,{children:[`Комбинированный форматер для относительного и абсолютного времени. Если дата находится в пределах определенного лимита (`,(0,c.jsx)(t.code,{children:`limit`}),`) дней, возвращается относительное время; в противном случае происходит переключение на стандартный формат абсолютной даты.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`})]}),`
`,(0,c.jsx)(t.h2,{id:`сортировка`,children:`Сортировка`}),`
`,(0,c.jsx)(t.h3,{id:`sort`,children:(0,c.jsx)(t.code,{children:`sort`})}),`
`,(0,c.jsxs)(t.p,{children:[`Сортирует массив элементов, используя локаль-зависимое сравнение через `,(0,c.jsx)(t.code,{children:`Intl.Collator`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: T[]`}),` — Целевой массив.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compareFn?`}),` — Опциональная функция трансформации для извлечения ключей сортировки из сложных объектов.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`T[]`}),` — Отсортированный массив.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`intl.sort(['яблоко', 'апельсин', 'банан'])
// ['апельсин', 'банан', 'яблоко']
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};