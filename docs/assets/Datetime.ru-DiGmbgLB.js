import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/Datetime - Утилита для Даты и Времени`}),`
`,(0,c.jsx)(t.h1,{id:`класс-datetime`,children:`Класс Datetime`}),`
`,(0,c.jsxs)(t.p,{children:[`Универсальная обертка вокруг нативного объекта JavaScript `,(0,c.jsx)(t.code,{children:`Date`}),`, предназначенная для упрощения работы с датами и временем. Она объединяет возможности форматирования, вычислений (перемещение по датам) и клонирования, опираясь на настройки локализации `,(0,c.jsx)(t.code,{children:`Geo`}),` и `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Упрощенное управление`}),` — интуитивно понятные методы для навигации по датам (переход к началу месяца, инкремент дней и т.д.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Локализация "из коробки"`}),` — автоматическая работа с часовыми поясами и форматами согласно настройкам `,(0,c.jsx)(t.code,{children:`Geo`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Цепочка вызовов (Chaining)`}),` — большинство методов возвращают `,(0,c.jsx)(t.code,{children:`this`}),`, что позволяет создавать сложные манипуляции в одну строку.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка различных типов`}),` — конструктор и методы принимают строки (ISO), числа (timestamp) или объекты `,(0,c.jsx)(t.code,{children:`Date`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умное клонирование`}),` — легкое создание новых экземпляров на основе текущих со сдвигом во времени.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`Datetime(date, type, code)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date?: NumberOrStringOrDate`}),` — дата для инициализации (ISO строка, timestamp или объект `,(0,c.jsx)(t.code,{children:`Date`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: GeoDate = 'date'`}),` — формат вывода по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string = Geo.getLocation()`}),` — код локали (например, 'ru-RU').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Текущее время
const now = new Datetime()

// 2. Конкретная дата
const dt = new Datetime('2024-03-15', 'datetime', 'ru-RU')

// 3. Из timestamp
const fromTs = new Datetime(1710460800000)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`общая-информация`,children:`Общая информация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getIntl(): GeoIntl`}),` — Возвращает объект `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` для работы с форматированием.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDate(): Date`}),` — Возвращает оригинальный нативный объект `,(0,c.jsx)(t.code,{children:`Date`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getType(): string`}),` — Возвращает установленный тип вывода (`,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`datetime`}),` и т.д.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHoursType(): GeoHours`}),` — Определяет формат часов (12 или 24) для текущей локали.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHour24(): boolean`}),` — Возвращает текущую настройку отображения 24-часового формата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTimeZoneOffset(): number`}),` — Возвращает смещение часового пояса в минутах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTimeZone(style?: GeoTimeZoneStyle): string`}),` — Возвращает часовой пояс (поддерживает стили `,(0,c.jsx)(t.code,{children:`minute`}),`, `,(0,c.jsx)(t.code,{children:`hour`}),`, `,(0,c.jsx)(t.code,{children:`RFC`}),`; по умолчанию формат с двоеточием).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstDayCode(): GeoFirstDay`}),` — Возвращает код первого дня недели (0 для воскресенья, 1 для понедельника, 6 для субботы).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`получение-значений`,children:`Получение значений`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getYear(): number`}),` — Возвращает полный год.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMonth(): number`}),` — Возвращает месяц (человекочитаемый, от 1 до 12).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDay(): number`}),` — Возвращает число месяца (1-31).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHour(): number`}),` — Возвращает часы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMinute(): number`}),` — Возвращает минуты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSecond(): number`}),` — Возвращает секунды.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMaxDay(): number`}),` — Возвращает число последнего дня текущего месяца (28-31).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`установка-значений`,children:`Установка значений`}),`
`,(0,c.jsxs)(t.p,{children:[`Позволяют точечно изменять компоненты даты. Методы (кроме `,(0,c.jsx)(t.code,{children:`setCode`}),` и `,(0,c.jsx)(t.code,{children:`setWatch`}),`) инициируют вызов `,(0,c.jsx)(t.code,{children:`watch`}),` колбэка.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDate(value: NumberOrStringOrDate): this`}),` — Полностью перезаписывает дату.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setType(value: GeoDate): this`}),` — Устанавливает тип вывода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setHour24(value: boolean): this`}),` — Включает/выключает 24-часовой формат.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCode(code: string): this`}),` — Меняет код локали.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setWatch(watch: Function): this`}),` — Устанавливает функцию обратного вызова при изменении данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setYear(value: number): this`}),` — Устанавливает год.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setMonth(value: number): this`}),` — Устанавливает месяц (1-12).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDay(value: number): this`}),` — Устанавливает число месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setHour(value: number): this`}),` — Устанавливает часы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setMinute(value: number): this`}),` — Устанавливает минуты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSecond(value: number): this`}),` — Устанавливает секунды.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`навигация-перемещение`,children:`Навигация (Перемещение)`}),`
`,(0,c.jsxs)(t.p,{children:[`Изменяют текущий объект `,(0,c.jsx)(t.code,{children:`Datetime`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByYear(value: number): this`}),` — Смещение на указанное количество лет.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByMonth(value: number): this`}),` — Смещение на количество месяцев.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByDay(value: number): this`}),` — Смещение на количество дней.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByHour(value: number): this`}),` — Смещение на количество часов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByMinute(value: number): this`}),` — Смещение на количество минут.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveBySecond(value: number): this`}),` — Смещение на количество секунд.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveMonthFirst(): this`}),` — Переход к январю текущего года.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveMonthLast(): this`}),` — Переход к декабрю текущего года.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveMonthNext(): this`}),` — Переход к первому числу следующего месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveMonthPrevious(): this`}),` — Переход к первому числу предыдущего месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayFirst(): this`}),` — Переход к первому дню текущей недели.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayLast(): this`}),` — Переход к последнему дню текущей недели.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayFirstByMonth(): this`}),` — Переход к первому дню первой недели месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayLastByMonth(): this`}),` — Переход к последнему дню последней недели текущего месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayNext(): this`}),` — Смещение на одну неделю вперед.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayPrevious(): this`}),` — Смещение на одну неделю назад.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveDayFirst(): this`}),` — Переход к первому числу текущего месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveDayLast(): this`}),` — Переход к последнему числу текущего месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveDayNext(): this`}),` — Смещение на один день вперед.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveDayPrevious(): this`}),` — Смещение на один день назад.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`клонирование`,children:`Клонирование`}),`
`,(0,c.jsx)(t.p,{children:`Создают копии данных.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clone(): Date`}),` — Создает независимую копию нативного объекта `,(0,c.jsx)(t.code,{children:`Date`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneClass(): Datetime`}),` — Создает копию текущего экземпляра `,(0,c.jsx)(t.code,{children:`Datetime`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneMonthFirst(): Datetime`}),` — Копия с переходом к январю.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneMonthLast(): Datetime`}),` — Копия с переходом к декабрю.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneMonthNext(): Datetime`}),` — Копия с переходом к следующему месяцу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneMonthPrevious(): Datetime`}),` — Копия с переходом к предыдущему месяцу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayFirst(): Datetime`}),` — Копия, установленная на начало текущей недели.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayLast(): Datetime`}),` — Копия, установленная на конец текущей недели.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayFirstByMonth(): Datetime`}),` — Копия на начало первой недели месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayLastByMonth(): Datetime`}),` — Копия на конец последней недели месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayNext(): Datetime`}),` — Копия со сдвигом на неделю вперед.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayPrevious(): Datetime`}),` — Копия со сдвигом на неделю назад.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneDayFirst(): Datetime`}),` — Копия на первое число текущего месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneDayLast(): Datetime`}),` — Копия на последнее число текущего месяца.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneDayNext(): Datetime`}),` — Копия со сдвигом на один день вперед.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneDayPrevious(): Datetime`}),` — Копия со сдвигом на один день назад.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`форматирование-и-вывод`,children:`Форматирование и вывод`}),`
`,(0,c.jsx)(t.h3,{id:`locale`,children:(0,c.jsx)(t.code,{children:`locale`})}),`
`,(0,c.jsx)(t.p,{children:`Основной метод для получения локализованной строки.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — формат вывода (по умолчанию берется из настроек экземпляра).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.DateTimeFormatOptions`}),` — переопределение настроек отображения (например, стиль месяца).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` — текстовое представление даты.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const dt = new Datetime('2024-03-15')
dt.locale('full') // "15 марта 2024 г."
dt.locale('date', { month: 'short' }) // "15 мар. 2024 г."
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Дополнительные методы форматирования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeYear(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeMonth(style?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeDay(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeHour(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeMinute(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeSecond(style?: 'numeric' | '2-digit'): string`})}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`standard`,children:(0,c.jsx)(t.code,{children:`standard`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает дату в формате ISO 8601 (YYYY-MM-DDTHH:mm:ss±HH:mm).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeZone: boolean = true`}),` — добавлять ли информацию о часовом поясе.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`dt.standard() // "2024-03-15T00:00:00+03:00"
dt.standard(false) // "2024-03-15T00:00:00"
`})}),`
`,(0,c.jsx)(t.h2,{id:`ssr-и-гидратация`,children:`SSR и Гидратация`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Внимание (SSR):`}),` Создание экземпляра `,(0,c.jsx)(t.code,{children:`Datetime`}),` без указания конкретной даты (использование текущего времени) для отрисовки в SSR может привести к ошибкам гидратации, так как время или часовой пояс сервера могут отличаться от времени на стороне клиента.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`рекомендуемые-практики`,children:`Рекомендуемые практики`}),`
`,(0,c.jsxs)(t.p,{children:[`При использовании `,(0,c.jsx)(t.code,{children:`Datetime`}),` в SSR-окружениях:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Всегда указывайте конкретные даты`}),`: Передавайте явные даты в конструктор вместо использования текущего времени.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Используйте инициализацию даты на сервере`}),`: Инициализируйте даты на сервере с конкретными значениями для обеспечения согласованности.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Только клиентская инициализация для динамических дат`}),`: Для дат, которые должны показывать текущее время, инициализируйте их только на стороне клиента (например, в `,(0,c.jsx)(t.code,{children:`useEffect`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Учитывайте различия часовых поясов`}),`: Помните, что часовые пояса сервера и клиента могут отличаться, что влияет на вычисления и форматирование дат.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`пример-безопасного-использования-в-ssr`,children:`Пример безопасного использования в SSR`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// ✅ Хорошо: Конкретная дата для SSR
const serverDate = new Datetime('2024-03-15')

// ✅ Хорошо: Инициализация на клиенте для текущего времени
useEffect(() => {
  const now = new Datetime()
  setCurrentTime(now.locale('datetime'))
}, [])

// ❌ Избегайте: Текущее время в SSR
const now = new Datetime() // Может вызвать ошибку гидратации
`})}),`
`,(0,c.jsx)(t.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,c.jsx)(t.h3,{id:`работа-с-интервалами-и-навигацией`,children:`Работа с интервалами и навигацией`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// Получаем последний день текущего месяца
const lastDay = new Datetime().moveDayLast().getDay()

// Создаем календарную сетку (находим понедельник первой недели месяца)
const startOfCalendar = new Datetime().moveWeekdayFirstByMonth()

// Вычисляем дату через неделю в это же время
const nextWeek = new Datetime().moveByDay(7).locale('datetime')
`})}),`
`,(0,c.jsx)(t.h3,{id:`форматирование-и-локали`,children:`Форматирование и локали`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const event = new Datetime('2024-12-31T23:59:59')

// Английская локаль
event.setCode('en-US')
console.log(event.locale('full')) // "Tuesday, December 31, 2024"

// Вьетнамская локаль
event.setCode('vi-VN')
console.log(event.locale('full')) // "Thứ Ba, 31 tháng 12, 2024"

// Вывод только времени
console.log(event.locale('time')) // "23:59:59"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};