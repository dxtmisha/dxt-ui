import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DB_maGql.js";import{M as d}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/functional/ru/Classes/Datetime"}),`
`,e.jsx(n.h1,{id:"класс-datetime",children:"Класс Datetime"}),`
`,e.jsx(n.p,{children:"Класс для работы с датами, предоставляющий мощные возможности форматирования, манипуляции и локализации. Интегрируется с географическими настройками и поддерживает различные форматы вывода с учётом часовых поясов и региональных особенностей."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Локализованное форматирование"})," — автоматическое форматирование дат согласно региональным настройкам"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Манипуляции с датами"})," — удобные методы для изменения и перемещения дат"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка часовых поясов"})," — работа с часовыми поясами и их смещениями"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Клонирование объектов"})," — безопасное создание копий дат для операций"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Гибкие форматы вывода"})," — поддержка различных типов представления дат"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция с Geo"})," — использует географические настройки для локализации"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Стандартные форматы"})," — вывод в ISO и других стандартных форматах"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Наблюдение за изменениями"})," — система колбэков для отслеживания изменений"]}),`
`]}),`
`,e.jsx(n.h2,{id:"конструктор",children:"Конструктор"}),`
`,e.jsx(n.h3,{id:"constructor",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Создаёт экземпляр Datetime с указанной датой, типом вывода и кодом локали."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date?: NumberOrStringOrDate"})," — дата для обработки (опционально, по умолчанию текущая дата)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — тип формата даты для вывода (по умолчанию 'date')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code?: string"})," — код страны и языка (по умолчанию из Geo.getLocation())"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Datetime } from '@dxtmisha/functional'

// Создание с текущей датой
const now = new Datetime()

// Создание с конкретной датой
const birthday = new Datetime('1990-05-15')
const timestamp = new Datetime(1234567890000)

// С настройками форматирования
const fullDate = new Datetime('2023-12-25', 'full', 'ru-RU')
const timeOnly = new Datetime(new Date(), 'time', 'en-US')
`})}),`
`,e.jsx(n.h2,{id:"получение-информации-о-дате",children:"Получение информации о дате"}),`
`,e.jsx(n.h3,{id:"getintl",children:e.jsx(n.code,{children:"getIntl"})}),`
`,e.jsx(n.p,{children:"Возвращает объект для работы с форматированием."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15', 'date', 'ru-RU')
const intl = datetime.getIntl()
// Возвращает экземпляр GeoIntl для работы с локализацией
`})}),`
`,e.jsx(n.h3,{id:"getdate",children:e.jsx(n.code,{children:"getDate"})}),`
`,e.jsx(n.p,{children:"Возвращает объект Date."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15')
const dateObj = datetime.getDate()
console.log(dateObj) // Date объект с 2023-10-15
`})}),`
`,e.jsx(n.h3,{id:"gettype",children:e.jsx(n.code,{children:"getType"})}),`
`,e.jsx(n.p,{children:"Возвращает тип вывода данных."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15', 'datetime')
console.log(datetime.getType()) // 'datetime'
`})}),`
`,e.jsx(n.h3,{id:"gethourstype",children:e.jsx(n.code,{children:"getHoursType"})}),`
`,e.jsx(n.p,{children:"Возвращает формат часов (12 или 24-часовой)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()
console.log(datetime.getHoursType()) // '24' или '12'
`})}),`
`,e.jsx(n.h3,{id:"gethour24",children:e.jsx(n.code,{children:"getHour24"})}),`
`,e.jsx(n.p,{children:"Проверяет, используется ли 24-часовой формат времени."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()
console.log(datetime.getHour24()) // false по умолчанию
`})}),`
`,e.jsx(n.h3,{id:"getfirstdaycode",children:e.jsx(n.code,{children:"getFirstDayCode"})}),`
`,e.jsx(n.p,{children:"Возвращает код первого дня недели."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15', 'date', 'ru-RU')
console.log(datetime.getFirstDayCode()) // 1 (понедельник) для большинства локалей
// 0 - воскресенье, 1 - понедельник, 6 - суббота
`})}),`
`,e.jsx(n.h3,{id:"getmaxday",children:e.jsx(n.code,{children:"getMaxDay"})}),`
`,e.jsx(n.p,{children:"Возвращает последний день месяца."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-02-15') // февраль
console.log(datetime.getMaxDay()) // 28 для февраля 2023 года

const datetime2 = new Datetime('2023-01-15') // январь
console.log(datetime2.getMaxDay()) // 31 для января
`})}),`
`,e.jsx(n.h2,{id:"работа-с-компонентами-даты",children:"Работа с компонентами даты"}),`
`,e.jsx(n.h3,{id:"получение-компонентов",children:"Получение компонентов"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15 14:30:45')

console.log(datetime.getYear())    // 2023
console.log(datetime.getMonth())   // 10 (месяцы с 1)
console.log(datetime.getDay())     // 15
console.log(datetime.getHour())    // 14
console.log(datetime.getMinute())  // 30
console.log(datetime.getSecond())  // 45
`})}),`
`,e.jsx(n.h3,{id:"установка-компонентов",children:"Установка компонентов"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

datetime
  .setYear(2025)
  .setMonth(3)
  .setDay(20)
  .setHour(15)
  .setMinute(45)
  .setSecond(30)

console.log(datetime.locale()) // Отформатированная дата
`})}),`
`,e.jsx(n.h2,{id:"часовые-пояса",children:"Часовые пояса"}),`
`,e.jsx(n.h3,{id:"gettimezoneoffset",children:e.jsx(n.code,{children:"getTimeZoneOffset"})}),`
`,e.jsx(n.p,{children:"Возвращает смещение часового пояса в минутах."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()
const offset = datetime.getTimeZoneOffset()
console.log(offset) // например, -180 для UTC+3
`})}),`
`,e.jsx(n.h3,{id:"gettimezone",children:e.jsx(n.code,{children:"getTimeZone"})}),`
`,e.jsx(n.p,{children:"Возвращает временную зону в различных форматах."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

console.log(datetime.getTimeZone())        // '+03:00'
console.log(datetime.getTimeZone('hour'))  // '+3'
console.log(datetime.getTimeZone('minute')) // '180'
console.log(datetime.getTimeZone('RFC'))   // '+0300'
`})}),`
`,e.jsx(n.h2,{id:"локализованное-форматирование",children:"Локализованное форматирование"}),`
`,e.jsx(n.h3,{id:"locale",children:e.jsx(n.code,{children:"locale"})}),`
`,e.jsx(n.p,{children:"Основной метод для форматирования дат с учётом локали."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-12-25 15:30:00', 'full', 'ru-RU')

console.log(datetime.locale())                    // Полная дата и время
console.log(datetime.locale('date'))              // Только дата
console.log(datetime.locale('time'))              // Только время
console.log(datetime.locale('year'))              // Только год
console.log(datetime.locale('month', 'short'))    // Короткое название месяца
`})}),`
`,e.jsx(n.h3,{id:"специализированные-методы-форматирования",children:"Специализированные методы форматирования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-12-25', 'date', 'ru-RU')

console.log(datetime.localeYear())              // '2023'
console.log(datetime.localeMonth())             // 'декабрь'
console.log(datetime.localeMonth('short'))      // 'дек.'
console.log(datetime.localeDay())               // '25'
console.log(datetime.localeHour())              // текущий час
console.log(datetime.localeMinute())            // текущая минута
console.log(datetime.localeSecond())            // текущая секунда
`})}),`
`,e.jsx(n.h2,{id:"стандартное-форматирование",children:"Стандартное форматирование"}),`
`,e.jsx(n.h3,{id:"standard",children:e.jsx(n.code,{children:"standard"})}),`
`,e.jsx(n.p,{children:"Возвращает дату в стандартном формате (ISO-подобном)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-12-25 15:30:45')

console.log(datetime.standard())        // '2023-12-25T15:30:45+03:00'
console.log(datetime.standard(false))   // '2023-12-25T15:30:45' (без часового пояса)

// Разные типы
const timeOnly = new Datetime('2023-12-25 15:30:45', 'time')
console.log(timeOnly.standard())        // 'T15:30:45+03:00'

const dateOnly = new Datetime('2023-12-25', 'date')
console.log(dateOnly.standard())        // '2023-12-25'
`})}),`
`,e.jsx(n.h2,{id:"перемещение-дат",children:"Перемещение дат"}),`
`,e.jsx(n.h3,{id:"перемещение-по-единицам-времени",children:"Перемещение по единицам времени"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15')

// Перемещение на указанное количество единиц
datetime.moveByYear(1)     // +1 год
datetime.moveByMonth(-2)   // -2 месяца
datetime.moveByDay(10)     // +10 дней
datetime.moveByHour(5)     // +5 часов
datetime.moveByMinute(30)  // +30 минут
datetime.moveBySecond(45)  // +45 секунд

console.log(datetime.locale()) // Результирующая дата
`})}),`
`,e.jsx(n.h3,{id:"перемещение-к-границам-периодов",children:"Перемещение к границам периодов"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-07-15')

// Месяцы
datetime.moveMonthFirst()    // 1 января
datetime.moveMonthLast()     // 31 декабря
datetime.moveMonthNext()     // 1-е число следующего месяца
datetime.moveMonthPrevious() // 1-е число предыдущего месяца

// Дни месяца
datetime.moveDayFirst()      // 1-е число текущего месяца
datetime.moveDayLast()       // последнее число текущего месяца
datetime.moveDayNext()       // следующий день
datetime.moveDayPrevious()   // предыдущий день
`})}),`
`,e.jsx(n.h3,{id:"работа-с-неделями",children:"Работа с неделями"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-07-15') // суббота

// Перемещение в пределах недели
datetime.moveWeekdayFirst()  // понедельник текущей недели
datetime.moveWeekdayLast()   // воскресенье текущей недели

// Перемещение по неделям
datetime.moveWeekdayNext()     // понедельник следующей недели
datetime.moveWeekdayPrevious() // понедельник предыдущей недели

// Недели в контексте месяца
datetime.moveWeekdayFirstByMonth() // первый день первой недели месяца
datetime.moveWeekdayLastByMonth()  // последний день последней недели месяца
`})}),`
`,e.jsx(n.h2,{id:"клонирование-и-создание-вариантов",children:"Клонирование и создание вариантов"}),`
`,e.jsx(n.h3,{id:"базовое-клонирование",children:"Базовое клонирование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const original = new Datetime('2023-10-15')

const dateClone = original.clone()        // Date объект
const classClone = original.cloneClass()  // Datetime объект
`})}),`
`,e.jsx(n.h3,{id:"клонирование-с-перемещением",children:"Клонирование с перемещением"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-07-15')

// Клонирование месяцев
const january = datetime.cloneMonthFirst()    // январь текущего года
const december = datetime.cloneMonthLast()    // декабрь текущего года
const nextMonth = datetime.cloneMonthNext()   // следующий месяц
const prevMonth = datetime.cloneMonthPrevious() // предыдущий месяц

// Клонирование дней
const firstDay = datetime.cloneDayFirst()     // 1-е число месяца
const lastDay = datetime.cloneDayLast()       // последнее число месяца
const tomorrow = datetime.cloneDayNext()      // завтра
const yesterday = datetime.cloneDayPrevious() // вчера

// Клонирование недель
const weekStart = datetime.cloneWeekdayFirst()    // начало недели
const weekEnd = datetime.cloneWeekdayLast()       // конец недели
const nextWeek = datetime.cloneWeekdayNext()      // следующая неделя
const prevWeek = datetime.cloneWeekdayPrevious()  // предыдущая неделя
`})}),`
`,e.jsx(n.h2,{id:"настройки-и-конфигурация",children:"Настройки и конфигурация"}),`
`,e.jsx(n.h3,{id:"settype",children:e.jsx(n.code,{children:"setType"})}),`
`,e.jsx(n.p,{children:"Изменяет тип вывода данных."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15')

datetime.setType('full')     // полная дата и время
datetime.setType('date')     // только дата
datetime.setType('time')     // только время
datetime.setType('year')     // только год
`})}),`
`,e.jsx(n.h3,{id:"sethour24",children:e.jsx(n.code,{children:"setHour24"})}),`
`,e.jsx(n.p,{children:"Устанавливает формат времени (12 или 24 часа)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

datetime.setHour24(true)   // 24-часовой формат
datetime.setHour24(false)  // 12-часовой формат
`})}),`
`,e.jsx(n.h3,{id:"setcode",children:e.jsx(n.code,{children:"setCode"})}),`
`,e.jsx(n.p,{children:"Изменяет локаль."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

datetime.setCode('ru-RU')  // русская локаль
datetime.setCode('en-US')  // американская локаль
datetime.setCode('de-DE')  // немецкая локаль
`})}),`
`,e.jsx(n.h3,{id:"setwatch",children:e.jsx(n.code,{children:"setWatch"})}),`
`,e.jsx(n.p,{children:"Устанавливает функцию наблюдения за изменениями."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

datetime.setWatch((date, type, hour24) => {
  console.log('Дата изменилась:', date)
  console.log('Тип:', type)
  console.log('24-часовой формат:', hour24)
})

datetime.setYear(2025) // Вызовет функцию наблюдения
`})}),`
`,e.jsx(n.h3,{id:"setdate",children:e.jsx(n.code,{children:"setDate"})}),`
`,e.jsx(n.p,{children:"Полностью изменяет дату."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15')

// Установить новую дату
datetime.setDate('2025-12-25')
datetime.setDate(new Date('2024-06-01'))
datetime.setDate(1672531200000) // timestamp

console.log(datetime.locale()) // Новая установленная дата
`})}),`
`,e.jsx(n.h2,{id:"типы-данных",children:"Типы данных"}),`
`,e.jsx(n.h3,{id:"geodate",children:e.jsx(n.code,{children:"GeoDate"})}),`
`,e.jsx(n.p,{children:"Тип определяет формат отображения даты и времени. Поддерживает различные уровни детализации от полного формата до отдельных компонентов."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'full'"})," — полная дата и время (дата + время)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'datetime'"})," — дата и время"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'date'"})," — только дата"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'year-month'"})," — год и месяц"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'year'"})," — только год"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'month'"})," — только месяц"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'day'"})," — только день"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'day-month'"})," — день и месяц"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'time'"})," — только время"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'hour-minute'"})," — часы и минуты"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'hour'"})," — только часы"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'minute'"})," — только минуты"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'second'"})," — только секунды"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Примеры использования разных типов
const datetime = new Datetime('2023-12-25 15:30:45')

datetime.setType('full')        // '25 декабря 2023 г., 15:30:45'
datetime.setType('date')        // '25 декабря 2023 г.'
datetime.setType('time')        // '15:30:45'
datetime.setType('year')        // '2023'
datetime.setType('month')       // 'декабрь'
datetime.setType('day')         // '25'
`})}),`
`,e.jsx(n.h3,{id:"geofirstday",children:e.jsx(n.code,{children:"GeoFirstDay"})}),`
`,e.jsx(n.p,{children:"Тип определяет первый день недели в календаре согласно региональным настройкам."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"})," — воскресенье (США, Канада, Япония и др.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"1"})," — понедельник (большинство европейских стран, Россия)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"6"})," — суббота (некоторые страны Ближнего Востока)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-10-15', 'date', 'ru-RU')
console.log(datetime.getFirstDayCode()) // 1 (понедельник для России)

const datetimeUS = new Datetime('2023-10-15', 'date', 'en-US')
console.log(datetimeUS.getFirstDayCode()) // 0 (воскресенье для США)
`})}),`
`,e.jsx(n.h3,{id:"geohours",children:e.jsx(n.code,{children:"GeoHours"})}),`
`,e.jsx(n.p,{children:"Тип определяет формат отображения времени — 12-часовой или 24-часовой."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'12'"})," — 12-часовой формат с AM/PM"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'24'"})," — 24-часовой формат"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime('2023-12-25 15:30:00')

datetime.setHour24(true)   // 24-часовой формат
console.log(datetime.getHoursType()) // '24'
console.log(datetime.locale('time')) // '15:30'

datetime.setHour24(false)  // 12-часовой формат
console.log(datetime.getHoursType()) // '12'
console.log(datetime.locale('time')) // '3:30 PM'
`})}),`
`,e.jsx(n.h3,{id:"geotimezonestyle",children:e.jsx(n.code,{children:"GeoTimeZoneStyle"})}),`
`,e.jsx(n.p,{children:"Тип определяет стиль отображения информации о часовом поясе."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возможные значения:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'minute'"})," — смещение в минутах (число)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'hour'"})," — смещение в часах с знаком"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'ISO8601'"})," — стандарт ISO 8601 (±HH:MM)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'RFC'"})," — формат RFC (±HHMM)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const datetime = new Datetime()

console.log(datetime.getTimeZone())          // '+03:00' (ISO8601 по умолчанию)
console.log(datetime.getTimeZone('hour'))    // '+3'
console.log(datetime.getTimeZone('minute'))  // '180'
console.log(datetime.getTimeZone('RFC'))     // '+0300'
`})}),`
`,e.jsx(n.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,e.jsx(n.h3,{id:"календарные-операции",children:"Календарные операции"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class Calendar {
  constructor(date = new Date()) {
    this.current = new Datetime(date, 'date', 'ru-RU')
  }

  getCurrentMonth() {
    return {
      year: this.current.getYear(),
      month: this.current.getMonth(),
      monthName: this.current.localeMonth(),
      firstDay: this.current.cloneDayFirst().locale(),
      lastDay: this.current.cloneDayLast().locale()
    }
  }

  nextMonth() {
    this.current.moveMonthNext()
    return this.getCurrentMonth()
  }

  previousMonth() {
    this.current.moveMonthPrevious()
    return this.getCurrentMonth()
  }
}

// Использование
const calendar = new Calendar()
console.log(calendar.getCurrentMonth())
`})}),`
`,e.jsx(n.h3,{id:"форматирование-дат",children:"Форматирование дат"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const formatDates = {
  formatForLocales(date, locales) {
    return locales.map(locale => {
      const datetime = new Datetime(date, 'full', locale)
      return {
        locale,
        formatted: datetime.locale(),
        standard: datetime.standard()
      }
    })
  }
}

// Использование
const formatted = formatDates.formatForLocales('2023-12-25', ['ru-RU', 'en-US'])
console.log(formatted)
`})}),`
`,e.jsx(n.h3,{id:"рабочие-дни",children:"Рабочие дни"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class BusinessDays {
  constructor(startDate, locale = 'ru-RU') {
    this.start = new Datetime(startDate, 'date', locale)
  }

  isWeekend(date) {
    const dayOfWeek = date.getDate().getDay()
    return dayOfWeek === 0 || dayOfWeek === 6
  }

  addBusinessDays(days) {
    const result = this.start.cloneClass()
    let addedDays = 0

    while (addedDays < days) {
      result.moveDayNext()
      if (!this.isWeekend(result)) {
        addedDays++
      }
    }

    return result
  }
}

// Использование
const businessDays = new BusinessDays('2023-10-01')
const futureDate = businessDays.addBusinessDays(10)
console.log('Через 10 рабочих дней:', futureDate.locale())
`})}),`
`,e.jsx(n.p,{children:"Класс Datetime предоставляет мощный и гибкий инструмент для работы с датами в JavaScript-приложениях, поддерживая локализацию, манипуляции и форматирование в соответствии с региональными настройками и требованиями приложения."}),`
`,e.jsx(n.h2,{id:"внутренние-методы",children:"Внутренние методы"}),`
`,e.jsxs(n.h3,{id:"update-защищенный-метод",children:[e.jsx(n.code,{children:"update"})," (защищенный метод)"]}),`
`,e.jsx(n.p,{children:"Внутренний метод для обновления всех значений и вызова функции наблюдения."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Этот метод вызывается автоматически при изменении даты
// Он недоступен для прямого использования, так как является защищенным
// Вызывает функцию watch, если она была установлена через setWatch()
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Примечание:"})," Этот метод автоматически вызывается всеми методами изменения даты (",e.jsx(n.code,{children:"setYear"}),", ",e.jsx(n.code,{children:"setMonth"}),", ",e.jsx(n.code,{children:"setDay"}),", ",e.jsx(n.code,{children:"setHour"}),", ",e.jsx(n.code,{children:"setMinute"}),", ",e.jsx(n.code,{children:"setSecond"}),", ",e.jsx(n.code,{children:"setDate"}),", ",e.jsx(n.code,{children:"setType"}),", ",e.jsx(n.code,{children:"setHour24"}),") для обеспечения согласованности состояния и уведомления наблюдателей об изменениях."]})]})}function m(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
