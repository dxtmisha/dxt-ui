import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/GeoPhone - Маски телефонов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-geophone`,children:`Класс GeoPhone`}),`
`,(0,c.jsx)(n.p,{children:`Специализированный класс для хранения и обработки масок международных телефонных номеров. Обеспечивает мощный механизм идентификации географической информации о стране по строке номера, форматирование необработанных чисел в локализованные маски и управление комплексной картой телефонных кодов на базе префиксного дерева.`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс тесно интегрирован с гео-данными `,(0,c.jsx)(n.code,{children:`Geo`}),`, что позволяет автоматически определять маску на основе текущей локали пользователя или переданных кодов стран.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое сопоставление`}),` — динамически определяет подходящую страну и паттерн маски через рекурсивный поиск по префиксному дереву.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизация дерева префиксов`}),` — использует специализированную структуру `,(0,c.jsx)(n.code,{children:`map`}),` (Trie/Prefix Tree) для высокопроизводительного поиска по международным планам нумерации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальная нормализация`}),` — автоматически обрабатывает региональные вариации набора, такие как ведущие нули или национальные префиксы (например, российская «8»).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизированное форматирование`}),` — преобразует сырые числовые строки в читаемые форматы, соответствующие международным стандартам телефонии.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-поиска`,children:`Методы поиска`}),`
`,(0,c.jsx)(n.h3,{id:`getbyphone`,children:(0,c.jsx)(n.code,{children:`getByPhone`})}),`
`,(0,c.jsx)(n.p,{children:`Основной метод идентификации, который анализирует строку номера телефона для извлечения географической информации и наиболее подходящей маски нумерации.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: string`}),` — целевой номер телефона для анализа (принимает как сырые, так и частично отформатированные строки).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`GeoPhoneMapInfo`}),` — структурированный объект, содержащий найденный элемент `,(0,c.jsx)(n.code,{children:`GeoPhoneMap`}),` и нормализованную числовую часть номера.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional-basic'

const info = GeoPhone.getByPhone('79001234567')
// возвращает:
// { 
//   item: { info: { phone: 7, ... }, mask: ['7 (***) ***-**-**'], ... },
//   phone: '9001234567' 
// }
`})}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает локализованные метаданные телефона, связанные с конкретным кодом страны.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — стандартный код страны ISO 3166 (например, `,(0,c.jsx)(n.code,{children:`'RU'`}),`, `,(0,c.jsx)(n.code,{children:`'US'`}),`, `,(0,c.jsx)(n.code,{children:`'VN'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`GeoPhoneValue | undefined`}),` — сырые метаданные для страны или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если код не найден в базе.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.get('RU') 
// { phone: 7, within: 8, mask: ['* (***) ***-**-**'], value: 'RU' }
`})}),`
`,(0,c.jsx)(n.h3,{id:`getbycode`,children:(0,c.jsx)(n.code,{children:`getByCode`})}),`
`,(0,c.jsx)(n.p,{children:`Расширенный метод получения данных, который возвращает полную информацию о маске, включая узел дерева поиска для заданного кода страны.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — строка целевого кода страны.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`GeoPhoneMap | undefined`}),` — объект узла карты для запрошенного кода.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.getByCode('US')
// { info: { phone: 1, ... }, mask: ['1 (***) ***-****'], ... }
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы-доступа-к-данным`,children:`Методы доступа к данным`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoPhoneValue[]`}),` — возвращает полный отсортированный плоский список всех зарегистрированных метаданных международных телефонов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMap(): Record<string, GeoPhoneMap>`}),` — возвращает корневой узел внутреннего префиксного дерева, используемого для высокоскоростной идентификации номеров.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`форматирование-и-утилиты`,children:`Форматирование и утилиты`}),`
`,(0,c.jsx)(n.h3,{id:`tomask`,children:(0,c.jsx)(n.code,{children:`toMask`})}),`
`,(0,c.jsx)(n.p,{children:`Преобразует сырую числовую строку телефона в отформатированную версию на основе заданного набора масок.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: string`}),` — необработанный числовой ввод.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`masks?: string[]`}),` — массив строк допустимых масок для сопоставления.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`}),` — отформатированная строка или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если длина ввода не соответствует ни одной маске.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.toMask('9001234567', ['* (***) ***-**-**']) 
// '7 (900) 123-45-67'
`})}),`
`,(0,c.jsx)(n.h3,{id:`removezero`,children:(0,c.jsx)(n.code,{children:`removeZero`})}),`
`,(0,c.jsx)(n.p,{children:`Стандартизирует внутреннее представление номера, удаляя ведущие нули или корректируя региональные префиксы для обеспечения согласованной логики поиска.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: string`}),` — строка входящего номера телефона.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — нормализованная числовая строка.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.removeZero('0671234567')  // '671234567'
GeoPhone.removeZero('89001234567') // '9001234567'
`})}),`
`,(0,c.jsx)(n.h2,{id:`объекты-geophone`,children:`Объекты GeoPhone`}),`
`,(0,c.jsx)(n.h3,{id:`geophonevalue`,children:(0,c.jsx)(n.code,{children:`GeoPhoneValue`})}),`
`,(0,c.jsx)(n.p,{children:`Базовая структура метаданных для конфигурации телефона каждой страны:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: number`}),` — телефонный код (например, `,(0,c.jsx)(n.code,{children:`7`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`within: number`}),` — код внутреннего правила набора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mask: string[]`}),` — массив паттернов масок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — идентификатор страны.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geophonemap`,children:(0,c.jsx)(n.code,{children:`GeoPhoneMap`})}),`
`,(0,c.jsx)(n.p,{children:`Узел внутреннего префиксного дерева:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: GeoPhoneValue[]`}),` — список элементов в этой ветви.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`info: GeoPhoneValue | undefined`}),` — найденное значение в данном конкретном числовом узле.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`next: Record<string, GeoPhoneMap>`}),` — указатели на следующие цифры номера в дереве.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional'

// 1. Идентификация страны по номеру телефона
const lookup = GeoPhone.getByPhone('+79001234567')
if (lookup.item) {
    console.log('Страна:', lookup.item.value) // 'RU'
    console.log('Основная маска:', lookup.item.mask[0])
}

// 2. Ручное форматирование
const formatted = GeoPhone.toMask('442071234567', ['+** (**) **** ****'])
console.log(formatted) // '+44 (20) 7123 4567'

// 3. Нормализация ввода для поиска
const rawInput = '0084901234567'
const normalized = GeoPhone.removeZero(rawInput.replace(/^00/, ''))
console.log(normalized) // '84901234567'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};