import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/ru/functional-basic/Classes/Geo - Глобальные Географические Данные"}),`
`,e.jsx(n.h1,{id:"класс-geo",children:"Класс Geo"}),`
`,e.jsx(n.p,{children:"Статический служебный класс для централизованного управления географическими данными приложения. Он отвечает за работу с кодами языков (ISO 639-1), стран (ISO 3166-1 alpha-2), временными зонами и локализацией. Класс автоматически определяет настройки окружения и обеспечивает их согласованное использование во всей системе."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическое определение"})," — интеллектуально определяет локаль пользователя через ",e.jsx(n.code,{children:"navigator.language"})," или настройки HTML, если они не заданы явно."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Персистентность"})," — использует ",e.jsx(n.code,{children:"DataStorage"})," для сохранения и восстановления выбранных пользователем предпочтений языка и страны."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция с медиа-базой"})," — предоставляет доступ к полной базе данных стран и языков из библиотеки ",e.jsx(n.code,{children:"@dxtmisha/media"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальное управление временем"})," — централизованная установка и получение смещения часового пояса для корректной работы с датами."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Статический доступ"})," — все методы класса статические, что исключает необходимость создания экземпляров (",e.jsx(n.code,{children:"new Geo()"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"базовое-использование",children:"Базовое использование"}),`
`,e.jsx(n.p,{children:"Поскольку класс статический, его методы можно вызывать напрямую."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional-basic'

// Получаем текущий код языка
console.log(Geo.getLanguage()) // например, 'ru'

// Устанавливаем новую локаль и сохраняем её
Geo.set('en-US', true)

// Получаем форматированную временную зону
console.log(Geo.getTimezoneFormat()) // например, '+03:00'
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"общая-информация",children:"Общая информация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): GeoItemFull"})," — Возвращает полный объект данных о текущей стране и языке."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getCountry(): string"})," — Возвращает 2-буквенный код текущей страны (в верхнем регистре)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLanguage(): string"})," — Возвращает 2-буквенный код текущего языка (в нижнем регистре)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getStandard(): string"})," — Возвращает комбинированную строку локали (например, ",e.jsx(n.code,{children:"'ru-RU'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFirstDay(): string"})," — Возвращает код первого дня недели для текущей локали (",e.jsx(n.code,{children:"'Mo'"}),", ",e.jsx(n.code,{children:"'Su'"})," и т.д.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLocation(): string"})," — Возвращает текущую установленную локаль в виде строки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(): GeoItemFull"})," — Возвращает копию объекта текущих настроек с учетом языка."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTimezone(): number"})," — Возвращает смещение часового пояса в минутах."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTimezoneFormat(): string"})," — Возвращает смещение часового пояса в строковом формате (например, ",e.jsx(n.code,{children:"'+03:00'"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"списки-и-поиск",children:"Списки и поиск"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): GeoItem[]"})," — Возвращает полный список доступных стран и языков из медиа-базы."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getByCode(code?: string): GeoItemFull"})," — Ищет данные по коду языка или страны (с поддержкой фоллбэков)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getByCodeFull(code: string): GeoItem | undefined"})," — Ищет точное совпадение по полному коду локали (язык-страна)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getByCountry(country: string): GeoItem | undefined"})," — Ищет данные по коду или альтернативному названию страны."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getByLanguage(language: string): GeoItem | undefined"})," — Ищет данные по коду языка."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"find(code: string): GeoItemFull"})," — Алиас для метода ",e.jsx(n.code,{children:"getByCode"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"изменение-данных-сеттеры",children:"Изменение данных (Сеттеры)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"set(code: string, save?: boolean): void"})," — Глобально устанавливает текущую локаль. Если ",e.jsx(n.code,{children:"save"})," равен ",e.jsx(n.code,{children:"true"}),", сохраняет выбор в ",e.jsx(n.code,{children:"localStorage"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setTimezone(timezone: number): void"})," — Устанавливает кастомное смещение часового пояса в минутах."]}),`
`]}),`
`,e.jsx(n.h3,{id:"утилиты",children:"Утилиты"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toStandard(item: GeoItem): string"})," — Статический метод для формирования стандартной строки ",e.jsx(n.code,{children:"'язык-страна'"})," из объекта ",e.jsx(n.code,{children:"GeoItem"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(n.h3,{id:"ручная-установка-локали-при-запуске-приложения",children:"Ручная установка локали при запуске приложения"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional-basic'

// Предположим, мы получили настройки пользователя из API
const userLocale = 'vi-VN'

Geo.set(userLocale)
console.log(Geo.getCountry()) // 'VN'
`})}),`
`,e.jsx(n.h3,{id:"работа-с-временными-зонами",children:"Работа с временными зонами"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Установка смещения для Токио (UTC+9)
Geo.setTimezone(-540) // смещение в минутах (9 * 60)

console.log(Geo.getTimezoneFormat()) // '+09:00'
`})}),`
`,e.jsx(n.h3,{id:"получение-списка-стран-для-селектора",children:"Получение списка стран для селектора"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:"const countries = Geo.getList().map(item => ({\n  value: item.country,\n  label: `${item.language.toUpperCase()} - ${item.country}`\n}))\n"})})]})}function j(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{j as default};
