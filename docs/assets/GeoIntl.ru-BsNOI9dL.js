import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/GeoIntl - Интернационализация (Intl)"}),`
`,n.jsx(e.h1,{id:"класс-geointl",children:"Класс GeoIntl"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"GeoIntl"})," представляет собой высокоуровневую оптимизированную обертку над нативным браузерным API ",n.jsx(e.code,{children:"Intl"}),", разработанную специально для интеграции с возможностями геолокации ",n.jsx(e.code,{children:"Geo"}),". Он предоставляет единый локаль-зависимый интерфейс для форматирования чисел, валют, единиц измерения, дат, времени и географических имен, автоматически управляя определением локали и кэшированием экземпляров."]}),`
`,n.jsxs(e.p,{children:["Класс реализует паттерн ",n.jsx(e.strong,{children:"Singleton на уровне локали"}),", гарантируя создание и кэширование только одного экземпляра для каждого уникального кода локали, что значительно снижает накладные расходы на повторное создание объектов ",n.jsx(e.code,{children:"Intl"}),"."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кэширование экземпляров"})," — Автоматическое управление и повторное использование инстансов на основе стандартизированной строки локали."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Унифицированный API форматирования"})," — Упрощает сложные конфигурации ",n.jsx(e.code,{children:"Intl"})," до понятных высокоуровневых методов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Адаптивная геолокация"})," — Автоматически подтягивает значения по умолчанию из глобального состояния ",n.jsx(e.code,{children:"Geo"}),", если локаль не указана явно."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Культурные особенности"})," — Корректно обрабатывает различные конвенции имен, первые дни недели в календарях и правила склонения числительных."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.h3,{id:"getinstance",children:n.jsx(e.code,{children:"getInstance"})}),`
`,n.jsx(e.p,{children:"Возвращает кэшированный экземпляр или создает новый для указанного кода локали."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — Стандартизированная строка локали (например, ",n.jsx(e.code,{children:"'ru-RU'"}),", ",n.jsx(e.code,{children:"'en-US'"}),"). По умолчанию используется ",n.jsx(e.code,{children:"Geo.getLocation()"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoIntl"})," — Синглтон-экземпляр для запрошенной локали."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance('ru-RU')
const currentIntl = new GeoIntl() // Также использует синглтон-кэш внутри
`})}),`
`,n.jsx(e.h2,{id:"методы-локализации-и-географии",children:"Методы локализации и географии"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getLocation(): string"})," — Возвращает нормализованную строку стандартной локали (например, ",n.jsx(e.code,{children:"'ru-RU'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFirstDay(): string"})," — Возвращает спецификацию первого дня недели для локали (например, ",n.jsx(e.code,{children:"'Mon'"}),", ",n.jsx(e.code,{children:"'Sun'"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"имена-и-регионы",children:"Имена и регионы"}),`
`,n.jsx(e.h3,{id:"display",children:n.jsx(e.code,{children:"display"})}),`
`,n.jsxs(e.p,{children:["Предоставляет локализованные переводы для языков, регионов и скриптов, используя движок ",n.jsx(e.code,{children:"Intl.DisplayNames"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — Идентификационный код (например, ",n.jsx(e.code,{children:"'en'"}),", ",n.jsx(e.code,{children:"'RU'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"typeOptions?"})," — Строка, представляющая тип отображения (",n.jsx(e.code,{children:"'language'"}),", ",n.jsx(e.code,{children:"'region'"}),", ",n.jsx(e.code,{children:"'script'"}),"), или полный объект ",n.jsx(e.code,{children:"Intl.DisplayNamesOptions"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — Локализованное название."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.display('en', 'language') // 'английский'
intl.display('DE', 'region')   // 'Германия'
`})}),`
`,n.jsxs(e.h3,{id:"languagename--countryname",children:[n.jsx(e.code,{children:"languageName"})," / ",n.jsx(e.code,{children:"countryName"})]}),`
`,n.jsx(e.p,{children:"Удобные методы для получения локализованных названий языков и стран."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — Код языка или страны."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?"})," — Стиль форматирования: ",n.jsx(e.code,{children:"'long'"}),", ",n.jsx(e.code,{children:"'short'"})," или ",n.jsx(e.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h3,{id:"fullname",children:n.jsx(e.code,{children:"fullName"})}),`
`,n.jsxs(e.p,{children:["Форматирует полное имя человека в соответствии с культурными традициями текущей локали. Порядок компонентов (Имя-Отчество-Фамилия или Фамилия-Имя-Отчество) определяется полем ",n.jsx(e.code,{children:"nameFormat"})," в географических данных."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"last: string"})," — Фамилия."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first: string"})," — Имя."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"surname?: string"})," — Отчество (опционально)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"short?: boolean"})," — Если ",n.jsx(e.code,{children:"true"}),", сокращает все части после первой до инициала (например, ",n.jsx(e.code,{children:"Иванов И. И."}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h2,{id:"форматирование-чисел",children:"Форматирование чисел"}),`
`,n.jsx(e.h3,{id:"number",children:n.jsx(e.code,{children:"number"})}),`
`,n.jsxs(e.p,{children:["Форматирует число, используя возможности ",n.jsx(e.code,{children:"Intl.NumberFormat"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — Числовое значение для форматирования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — Конфигурация десятичных знаков, группировки и т.д."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h3,{id:"currency",children:n.jsx(e.code,{children:"currency"})}),`
`,n.jsx(e.p,{children:"Специализированный форматер валют с автоматическим размещением символа."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — Сумма. Также парсит строки с суффиксами валют (например, ",n.jsx(e.code,{children:"'1500 RUB'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyOptions?: string | Intl.NumberFormatOptions"})," — Код валюты (",n.jsx(e.code,{children:"'RUB'"}),") или детальные опции форматирования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"numberOnly?: boolean"})," — Если ",n.jsx(e.code,{children:"true"}),", возвращает только отформатированные цифры без символа валюты."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.currency(1500, 'RUB') // '1 500,00 ₽'
intl.currency('1500 USD')  // '1 500,00 $'
`})}),`
`,n.jsxs(e.h3,{id:"unit--sizefile",children:[n.jsx(e.code,{children:"unit"})," / ",n.jsx(e.code,{children:"sizeFile"})]}),`
`,n.jsxs(e.p,{children:["Форматирует числа с единицами измерения. ",n.jsx(e.code,{children:"sizeFile"})," обеспечивает рекурсивное масштабирование байтов (автоматическое переключение на КБ, МБ, ГБ)."]}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Параметры (",n.jsx(e.code,{children:"sizeFile"}),"):"]})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — Размер в байтах."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?"})," — Начальная единица измерения (по умолчанию ",n.jsx(e.code,{children:"'byte'"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h3,{id:"plural",children:n.jsx(e.code,{children:"plural"})}),`
`,n.jsx(e.p,{children:"Применяет правила склонения числительных с учетом локали."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — Число."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"words: string"})," — Формы слова, разделенные ",n.jsx(e.code,{children:"|"}),": ",n.jsx(e.code,{children:"one|two|few|many|other|zero"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?"})," — ",n.jsx(e.code,{children:"Intl.PluralRulesOptions"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — Отформатированное число, за которым следует правильная словоформа."]}),`
`,n.jsx(e.h2,{id:"даты-и-время",children:"Даты и время"}),`
`,n.jsxs(e.h3,{id:"date--time",children:[n.jsx(e.code,{children:"date"})," / ",n.jsx(e.code,{children:"time"})]}),`
`,n.jsxs(e.p,{children:["Основной движок форматирования дат, предоставляющий локализованные представления на основе предустановленных пресетов ",n.jsx(e.code,{children:"GeoDate"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — Входящая дата."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — Идентификатор пресета: ",n.jsx(e.code,{children:"'date'"}),", ",n.jsx(e.code,{children:"'time'"}),", ",n.jsx(e.code,{children:"'datetime'"}),", ",n.jsx(e.code,{children:"'full'"}),", и др."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?"})," — Кастомные ",n.jsx(e.code,{children:"Intl.DateTimeFormatOptions"})," или строка стиля месяца."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — Принудительное 24-часовое представление времени."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsxs(e.h3,{id:"months--weekdays",children:[n.jsx(e.code,{children:"months"})," / ",n.jsx(e.code,{children:"weekdays"})]}),`
`,n.jsx(e.p,{children:"Возвращает массивы локализованных названий месяцев или дней недели, идеально подходит для заполнения компонентов выбора в UI."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ItemValue<number>[]"})," — Массив объектов с полями ",n.jsx(e.code,{children:"label"})," и ",n.jsx(e.code,{children:"value"}),"."]}),`
`,n.jsx(e.h2,{id:"относительное-время",children:"Относительное время"}),`
`,n.jsx(e.h3,{id:"relative",children:n.jsx(e.code,{children:"relative"})}),`
`,n.jsx(e.p,{children:"Вычисляет и форматирует относительную разницу во времени от контрольной точки (сейчас), автоматически выбирая наиболее подходящую единицу измерения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — Прошедшая или будущая дата."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?"})," — Стиль форматирования (например, ",n.jsx(e.code,{children:"'long'"}),", ",n.jsx(e.code,{children:"'short'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — Явная точка отсчета (по умолчанию ",n.jsx(e.code,{children:"new Date()"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," (например, ",n.jsx(e.code,{children:"'2 часа назад'"}),", ",n.jsx(e.code,{children:"'через 3 дня'"}),")"]}),`
`,n.jsx(e.h3,{id:"relativelimit",children:n.jsx(e.code,{children:"relativeLimit"})}),`
`,n.jsxs(e.p,{children:["Комбинированный форматер для относительного и абсолютного времени. Если дата находится в пределах определенного лимита (",n.jsx(e.code,{children:"limit"}),") дней, возвращается относительное время; в противном случае происходит переключение на стандартный формат абсолютной даты."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h2,{id:"сортировка",children:"Сортировка"}),`
`,n.jsx(e.h3,{id:"sort",children:n.jsx(e.code,{children:"sort"})}),`
`,n.jsxs(e.p,{children:["Сортирует массив элементов, используя локаль-зависимое сравнение через ",n.jsx(e.code,{children:"Intl.Collator"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: T[]"})," — Целевой массив."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compareFn?"})," — Опциональная функция трансформации для извлечения ключей сортировки из сложных объектов."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T[]"})," — Отсортированный массив."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.sort(['яблоко', 'апельсин', 'банан'])
// ['апельсин', 'банан', 'яблоко']
`})})]})}function t(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{t as default};
