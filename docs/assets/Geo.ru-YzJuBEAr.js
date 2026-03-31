import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Geo - Глобальные Географические Данные`}),`
`,(0,c.jsx)(n.h1,{id:`класс-geo`,children:`Класс Geo`}),`
`,(0,c.jsx)(n.p,{children:`Статический служебный класс для централизованного управления географическими данными приложения. Он отвечает за работу с кодами языков (ISO 639-1), стран (ISO 3166-1 alpha-2), временными зонами и локализацией. Класс автоматически определяет настройки окружения и обеспечивает их согласованное использование во всей системе.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое определение`}),` — интеллектуально определяет локаль пользователя через `,(0,c.jsx)(n.code,{children:`navigator.language`}),` или настройки HTML, если они не заданы явно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Персистентность`}),` — использует `,(0,c.jsx)(n.code,{children:`DataStorage`}),` для сохранения и восстановления выбранных пользователем предпочтений языка и страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с медиа-базой`}),` — предоставляет доступ к полной базе данных стран и языков из библиотеки `,(0,c.jsx)(n.code,{children:`@dxtmisha/media`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальное управление временем`}),` — централизованная установка и получение смещения часового пояса для корректной работы с датами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Статический доступ`}),` — все методы класса статические, что исключает необходимость создания экземпляров (`,(0,c.jsx)(n.code,{children:`new Geo()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(n.p,{children:`Поскольку класс статический, его методы можно вызывать напрямую.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Geo } from '@dxtmisha/functional-basic'

// Получаем текущий код языка
console.log(Geo.getLanguage()) // например, 'ru'

// Устанавливаем новую локаль и сохраняем её
Geo.set('en-US', true)

// Получаем форматированную временную зону
console.log(Geo.getTimezoneFormat()) // например, '+03:00'
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`общая-информация`,children:`Общая информация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): GeoItemFull`}),` — Возвращает полный объект данных о текущей стране и языке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCountry(): string`}),` — Возвращает 2-буквенный код текущей страны (в верхнем регистре).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLanguage(): string`}),` — Возвращает 2-буквенный код текущего языка (в нижнем регистре).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStandard(): string`}),` — Возвращает комбинированную строку локали (например, `,(0,c.jsx)(n.code,{children:`'ru-RU'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDay(): string`}),` — Возвращает код первого дня недели для текущей локали (`,(0,c.jsx)(n.code,{children:`'Mo'`}),`, `,(0,c.jsx)(n.code,{children:`'Su'`}),` и т.д.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocation(): string`}),` — Возвращает текущую установленную локаль в виде строки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): GeoItemFull`}),` — Возвращает копию объекта текущих настроек с учетом языка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimezone(): number`}),` — Возвращает смещение часового пояса в минутах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimezoneFormat(): string`}),` — Возвращает смещение часового пояса в строковом формате (например, `,(0,c.jsx)(n.code,{children:`'+03:00'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`списки-и-поиск`,children:`Списки и поиск`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoItem[]`}),` — Возвращает полный список доступных стран и языков из медиа-базы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCode(code?: string): GeoItemFull`}),` — Ищет данные по коду языка или страны (с поддержкой фоллбэков).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCodeFull(code: string): GeoItem | undefined`}),` — Ищет точное совпадение по полному коду локали (язык-страна).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCountry(country: string): GeoItem | undefined`}),` — Ищет данные по коду или альтернативному названию страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByLanguage(language: string): GeoItem | undefined`}),` — Ищет данные по коду языка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`find(code: string): GeoItemFull`}),` — Алиас для метода `,(0,c.jsx)(n.code,{children:`getByCode`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`изменение-данных-сеттеры`,children:`Изменение данных (Сеттеры)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(code: string, save?: boolean): void`}),` — Глобально устанавливает текущую локаль. Если `,(0,c.jsx)(n.code,{children:`save`}),` равен `,(0,c.jsx)(n.code,{children:`true`}),`, сохраняет выбор в `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTimezone(timezone: number): void`}),` — Устанавливает кастомное смещение часового пояса в минутах.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`утилиты`,children:`Утилиты`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toStandard(item: GeoItem): string`}),` — Статический метод для формирования стандартной строки `,(0,c.jsx)(n.code,{children:`'язык-страна'`}),` из объекта `,(0,c.jsx)(n.code,{children:`GeoItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`ручная-установка-локали-при-запуске-приложения`,children:`Ручная установка локали при запуске приложения`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Geo } from '@dxtmisha/functional-basic'

// Предположим, мы получили настройки пользователя из API
const userLocale = 'vi-VN'

Geo.set(userLocale)
console.log(Geo.getCountry()) // 'VN'
`})}),`
`,(0,c.jsx)(n.h3,{id:`работа-с-временными-зонами`,children:`Работа с временными зонами`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Установка смещения для Токио (UTC+9)
Geo.setTimezone(-540) // смещение в минутах (9 * 60)

console.log(Geo.getTimezoneFormat()) // '+09:00'
`})}),`
`,(0,c.jsx)(n.h3,{id:`получение-списка-стран-для-селектора`,children:`Получение списка стран для селектора`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const countries = Geo.getList().map(item => ({
  value: item.country,
  label: \`\${item.language.toUpperCase()} - \${item.country}\`
}))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};