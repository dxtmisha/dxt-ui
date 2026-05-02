import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/GeoPhone - Маски телефонов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-geophone`,children:`Класс GeoPhone`}),`
`,(0,c.jsxs)(n.p,{children:[`Специализированный класс для хранения и обработки масок международных телефонных номеров. Обеспечивает механизм идентификации страны по строке номера, форматирование необработанных чисел в локализованные маски и управление комплексной картой телефонных кодов на базе префиксного дерева. Класс тесно интегрирован с гео-данными `,(0,c.jsx)(n.code,{children:`Geo`}),`, что позволяет автоматически определять маску на основе текущей локали пользователя или переданных кодов стран.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое сопоставление`}),` — динамически определяет подходящую страну и паттерн маски через рекурсивный поиск по префиксному дереву.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизация дерева префиксов`}),` — использует специализированную структуру `,(0,c.jsx)(n.code,{children:`map`}),` (Trie) для высокопроизводительного поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальная нормализация`}),` — автоматически обрабатывает региональные вариации набора, такие как ведущие нули или национальные префиксы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизированное форматирование`}),` — преобразует сырые числовые строки в читаемые форматы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(n.p,{children:`Вы можете использовать статические методы класса для быстрой идентификации страны по номеру телефона или форматирования.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional-basic'

// Идентификация страны по номеру
const info = GeoPhone.getByPhone('79001234567')
console.log(info.item?.value) // 'RU'

// Форматирование по маске
const formatted = GeoPhone.toMask('9001234567', ['+* (***) ***-**-**'])
console.log(formatted) // '+7 (900) 123-45-67'
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoPhoneValue[]`}),` — Возвращает полный отсортированный плоский список всех зарегистрированных метаданных международных телефонов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMap(): Record<string, GeoPhoneMap>`}),` — Возвращает корневой узел внутреннего префиксного дерева для поиска.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`выбор`,children:`Выбор`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string): GeoPhoneValue | undefined`}),` — Извлекает метаданные телефона, связанные с конкретным кодом страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByPhone(phone: string): GeoPhoneMapInfo`}),` — Анализирует строку номера телефона для извлечения информации и подходящей маски.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCode(code: string): GeoPhoneMap | undefined`}),` — Возвращает полную информацию о маске, включая узел дерева поиска для заданного кода.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`вспомогательные-методы`,children:`Вспомогательные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toMask(phone: string, masks?: string[]): string | undefined`}),` — Преобразует сырую числовую строку телефона в отформатированную версию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeZero(phone: string): string`}),` — Стандартизирует внутреннее представление номера, удаляя ведущие нули или корректируя региональные префиксы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(n.h3,{id:`geophonevalue`,children:(0,c.jsx)(n.code,{children:`GeoPhoneValue`})}),`
`,(0,c.jsx)(n.p,{children:`Базовая структура метаданных для конфигурации телефона каждой страны:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: number`}),` — Телефонный код страны (например, `,(0,c.jsx)(n.code,{children:`7`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`within: number`}),` — Код внутреннего правила набора (используется для выбора спецсимвола в маске).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mask: string[]`}),` — Массив паттернов масок, закрепленных за страной.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Идентификатор страны (ISO 3166).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geophonemap`,children:(0,c.jsx)(n.code,{children:`GeoPhoneMap`})}),`
`,(0,c.jsx)(n.p,{children:`Узел внутреннего префиксного дерева (Trie), используемый для поиска:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: GeoPhoneValue[]`}),` — Список всех элементов, доступных в данной ветви дерева.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`info: GeoPhoneValue | undefined`}),` — Метаданные телефона, если текущий узел является завершенным кодом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string | undefined`}),` — Идентификатор страны для данного узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mask: string[]`}),` — Массив масок с подставленными спецсимволами (`,(0,c.jsx)(n.code,{children:`~`}),`, `,(0,c.jsx)(n.code,{children:`=`}),`, `,(0,c.jsx)(n.code,{children:`$`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maskFull: string[]`}),` — Полные маски, включая международный код.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`next: Record<string, GeoPhoneMap>`}),` — Указатели на следующие цифры номера в дереве поиска.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geophonemapinfo`,children:(0,c.jsx)(n.code,{children:`GeoPhoneMapInfo`})}),`
`,(0,c.jsxs)(n.p,{children:[`Результат выполнения метода поиска `,(0,c.jsx)(n.code,{children:`getByPhone`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item?: GeoPhoneMap`}),` — Найденный узел дерева с информацией о стране и масках.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone?: string`}),` — Оставшаяся часть номера после отделения кода страны.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`работа-со-спецсимволами-within`,children:`Работа со спецсимволами (Within)`}),`
`,(0,c.jsx)(n.p,{children:`Внутренняя логика класса заменяет первую "звездочку" в маске на спецсимвол в зависимости от региональных правил:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`~`}),` — для России (код внутри страны 8).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$`}),` — для некоторых других регионов.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const mapInfo = GeoPhone.getByCode('RU')
console.log(mapInfo.mask[0]) // '~ (***) ***-**-**'
`})}),`
`,(0,c.jsx)(n.h3,{id:`множественные-маски`,children:`Множественные маски`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const masks = ['+* (***) ***-**-**', '+* (***) ***-***']
console.log(GeoPhone.toMask('79991234567', masks)) // 11 цифр -> '+7 (999) 123-45-67'
console.log(GeoPhone.toMask('7999123456', masks))  // 10 цифр -> '+7 (999) 123-456'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};