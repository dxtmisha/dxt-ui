import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/Datetime - Утилита для Даты и Времени"}),`
`,e.jsx(n.h1,{id:"класс-datetime",children:"Класс Datetime"}),`
`,e.jsxs(n.p,{children:["Универсальная обертка вокруг нативного объекта JavaScript ",e.jsx(n.code,{children:"Date"}),", предназначенная для упрощения работы с датами и временем. Она объединяет возможности форматирования, вычислений (перемещение по датам) и клонирования, опираясь на настройки локализации ",e.jsx(n.code,{children:"Geo"})," и ",e.jsx(n.code,{children:"GeoIntl"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Упрощенное управление"})," — интуитивно понятные методы для навигации по датам (переход к началу месяца, инкремент дней и т.д.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'Локализация "из коробки"'})," — автоматическая работа с часовыми поясами и форматами согласно настройкам ",e.jsx(n.code,{children:"Geo"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Цепочка вызовов (Chaining)"})," — большинство методов возвращают ",e.jsx(n.code,{children:"this"}),", что позволяет создавать сложные манипуляции в одну строку."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка различных типов"})," — конструктор и методы принимают строки (ISO), числа (timestamp) или объекты ",e.jsx(n.code,{children:"Date"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Умное клонирование"})," — легкое создание новых экземпляров на основе текущих со сдвигом во времени."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(n.code,{children:"Datetime(date, type, code)"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date?: NumberOrStringOrDate"})," — дата для инициализации (ISO строка, timestamp или объект ",e.jsx(n.code,{children:"Date"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: GeoDate = 'date'"})," — формат вывода по умолчанию."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code: string = Geo.getLocation()"})," — код локали (например, 'ru-RU')."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Текущее время
const now = new Datetime()

// 2. Конкретная дата
const dt = new Datetime('2024-03-15', 'datetime', 'ru-RU')

// 3. Из timestamp
const fromTs = new Datetime(1710460800000)
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"общая-информация",children:"Общая информация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getIntl(): GeoIntl"})," — Возвращает объект ",e.jsx(n.code,{children:"GeoIntl"})," для работы с форматированием."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDate(): Date"})," — Возвращает оригинальный нативный объект ",e.jsx(n.code,{children:"Date"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getType(): string"})," — Возвращает установленный тип вывода (",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"datetime"})," и т.д.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHoursType(): GeoHours"})," — Определяет формат часов (12 или 24) для текущей локали."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHour24(): boolean"})," — Возвращает текущую настройку отображения 24-часового формата."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTimeZoneOffset(): number"})," — Возвращает смещение часового пояса в минутах."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTimeZone(style?: GeoTimeZoneStyle): string"})," — Возвращает часовой пояс (поддерживает стили ",e.jsx(n.code,{children:"minute"}),", ",e.jsx(n.code,{children:"hour"}),", ",e.jsx(n.code,{children:"RFC"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFirstDayCode(): GeoFirstDay"})," — Возвращает код первого дня недели (0 для воскресенья, 1 для понедельника, 6 для субботы)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"получение-значений",children:"Получение значений"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getYear(): number"})," — Возвращает полный год."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMonth(): number"})," — Возвращает месяц (человекочитаемый, от 1 до 12)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDay(): number"})," — Возвращает число месяца (1-31)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHour(): number"})," — Возвращает часы."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMinute(): number"})," — Возвращает минуты."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSecond(): number"})," — Возвращает секунды."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMaxDay(): number"})," — Возвращает количество дней в текущем месяце."]}),`
`]}),`
`,e.jsx(n.h3,{id:"установка-значений",children:"Установка значений"}),`
`,e.jsxs(n.p,{children:["Позволяют точечно изменять компоненты даты. Методы (кроме ",e.jsx(n.code,{children:"setCode"})," и ",e.jsx(n.code,{children:"setWatch"}),") инициируют вызов ",e.jsx(n.code,{children:"watch"})," колбэка."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDate(value: NumberOrStringOrDate): this"})," — Полностью перезаписывает дату."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setType(value: GeoDate): this"})," — Устанавливает тип вывода."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setHour24(value: boolean): this"})," — Включает/выключает 24-часовой формат."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setCode(code: string): this"})," — Меняет код локали."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setWatch(watch: Function): this"})," — Устанавливает функцию обратного вызова при изменении данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setYear(value: number): this"})," — Устанавливает год."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setMonth(value: number): this"})," — Устанавливает месяц (1-12)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDay(value: number): this"})," — Устанавливает число месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setHour(value: number): this"})," — Устанавливает часы."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setMinute(value: number): this"})," — Устанавливает минуты."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setSecond(value: number): this"})," — Устанавливает секунды."]}),`
`]}),`
`,e.jsx(n.h3,{id:"навигация-перемещение",children:"Навигация (Перемещение)"}),`
`,e.jsxs(n.p,{children:["Изменяют текущий объект ",e.jsx(n.code,{children:"Datetime"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByYear(value: number): this"})," — Смещение на указанное количество лет."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByMonth(value: number): this"})," — Смещение на количество месяцев."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByDay(value: number): this"})," — Смещение на количество дней."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByHour(value: number): this"})," — Смещение на количество часов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveByMinute(value: number): this"})," — Смещение на количество минут."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveBySecond(value: number): this"})," — Смещение на количество секунд."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveMonthFirst(): this"})," — Переход к январю текущего года."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveMonthLast(): this"})," — Переход к декабрю текущего года."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveMonthNext(): this"})," — Переход к первому числу следующего месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveMonthPrevious(): this"})," — Переход к первому числу предыдущего месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayFirst(): this"})," — Переход к первому дню текущей недели."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayLast(): this"})," — Переход к последнему дню текущей недели."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayFirstByMonth(): this"})," — Переход к первому дню первой недели месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayLastByMonth(): this"})," — Переход к первому дню первой полной недели следующего месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayNext(): this"})," — Смещение на одну неделю вперед."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveWeekdayPrevious(): this"})," — Смещение на одну неделю назад."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveDayFirst(): this"})," — Переход к первому числу текущего месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveDayLast(): this"})," — Переход к последнему числу текущего месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveDayNext(): this"})," — Смещение на один день вперед."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"moveDayPrevious(): this"})," — Смещение на один день назад."]}),`
`]}),`
`,e.jsx(n.h3,{id:"клонирование",children:"Клонирование"}),`
`,e.jsx(n.p,{children:"Создают копии данных."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"clone(): Date"})," — Создает независимую копию нативного объекта ",e.jsx(n.code,{children:"Date"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneClass(): Datetime"})," — Создает копию текущего экземпляра ",e.jsx(n.code,{children:"Datetime"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneMonthFirst(): Datetime"})," — Копия с переходом к январю."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneMonthLast(): Datetime"})," — Копия с переходом к декабрю."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneMonthNext(): Datetime"})," — Копия с переходом к следующему месяцу."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneMonthPrevious(): Datetime"})," — Копия с переходом к предыдущему месяцу."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayFirst(): Datetime"})," — Копия, установленная на начало текущей недели."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayLast(): Datetime"})," — Копия, установленная на конец текущей недели."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayFirstByMonth(): Datetime"})," — Копия на начало первой недели месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayLastByMonth(): Datetime"})," — Копия на начало последней недели месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayNext(): Datetime"})," — Копия со сдвигом на неделю вперед."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneWeekdayPrevious(): Datetime"})," — Копия со сдвигом на неделю назад."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneDayFirst(): Datetime"})," — Копия на первое число текущего месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneDayLast(): Datetime"})," — Копия на последнее число текущего месяца."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneDayNext(): Datetime"})," — Копия со сдвигом на один день вперед."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cloneDayPrevious(): Datetime"})," — Копия со сдвигом на один день назад."]}),`
`]}),`
`,e.jsx(n.h2,{id:"форматирование-и-вывод",children:"Форматирование и вывод"}),`
`,e.jsx(n.h3,{id:"locale",children:e.jsx(n.code,{children:"locale"})}),`
`,e.jsx(n.p,{children:"Основной метод для получения локализованной строки."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — формат вывода (по умолчанию берется из настроек экземпляра)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.DateTimeFormatOptions"})," — переопределение настроек отображения (например, стиль месяца)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})," — текстовое представление даты."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const dt = new Datetime('2024-03-15')
dt.locale('full') // "15 марта 2024 г."
dt.locale('date', { month: 'short' }) // "15 мар. 2024 г."
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Дополнительные методы форматирования:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeYear(style?: 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeMonth(style?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeDay(style?: 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeHour(style?: 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeMinute(style?: 'numeric' | '2-digit'): string"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"localeSecond(style?: 'numeric' | '2-digit'): string"})}),`
`]}),`
`,e.jsx(n.h3,{id:"standard",children:e.jsx(n.code,{children:"standard"})}),`
`,e.jsx(n.p,{children:"Возвращает дату в формате ISO 8601 (YYYY-MM-DDTHH:mm:ss±HH:mm)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"timeZone: boolean = true"})," — добавлять ли информацию о часовом поясе."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`dt.standard() // "2024-03-15T00:00:00+03:00"
dt.standard(false) // "2024-03-15T00:00:00"
`})}),`
`,e.jsx(n.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,e.jsx(n.h3,{id:"работа-с-интервалами-и-навигацией",children:"Работа с интервалами и навигацией"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Datetime } from '@dxtmisha/functional-basic'

// Получаем последний день текущего месяца
const lastDay = new Datetime().moveDayLast().getDay()

// Создаем календарную сетку (находим понедельник первой недели месяца)
const startOfCalendar = new Datetime().moveWeekdayFirstByMonth()

// Вычисляем дату через неделю в это же время
const nextWeek = new Datetime().moveByDay(7).locale('datetime')
`})}),`
`,e.jsx(n.h3,{id:"форматирование-и-локали",children:"Форматирование и локали"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const event = new Datetime('2024-12-31T23:59:59')

// Английская локаль
event.setCode('en-US')
console.log(event.locale('full')) // "Tuesday, December 31, 2024"

// Вьетнамская локаль
event.setCode('vi-VN')
console.log(event.locale('full')) // "Thứ Ba, 31 tháng 12, 2024"

// Вывод только времени
console.log(event.locale('time')) // "23:59:59"
`})})]})}function j(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
