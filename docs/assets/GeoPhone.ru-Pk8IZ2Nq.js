import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/GeoPhone - Маски телефонов"}),`
`,n.jsx(e.h1,{id:"класс-geophone",children:"Класс GeoPhone"}),`
`,n.jsx(e.p,{children:"Специализированный класс для хранения и обработки масок международных телефонных номеров. Обеспечивает мощный механизм идентификации географической информации о стране по строке номера, форматирование необработанных чисел в локализованные маски и управление комплексной картой телефонных кодов на базе префиксного дерева."}),`
`,n.jsxs(e.p,{children:["Класс тесно интегрирован с гео-данными ",n.jsx(e.code,{children:"Geo"}),", что позволяет автоматически определять маску на основе текущей локали пользователя или переданных кодов стран."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое сопоставление"})," — динамически определяет подходящую страну и паттерн маски через рекурсивный поиск по префиксному дереву."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Оптимизация дерева префиксов"})," — использует специализированную структуру ",n.jsx(e.code,{children:"map"})," (Trie/Prefix Tree) для высокопроизводительного поиска по международным планам нумерации."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеллектуальная нормализация"})," — автоматически обрабатывает региональные вариации набора, такие как ведущие нули или национальные префиксы (например, российская «8»)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стандартизированное форматирование"})," — преобразует сырые числовые строки в читаемые форматы, соответствующие международным стандартам телефонии."]}),`
`]}),`
`,n.jsx(e.h2,{id:"методы-поиска",children:"Методы поиска"}),`
`,n.jsx(e.h3,{id:"getbyphone",children:n.jsx(e.code,{children:"getByPhone"})}),`
`,n.jsx(e.p,{children:"Основной метод идентификации, который анализирует строку номера телефона для извлечения географической информации и наиболее подходящей маски нумерации."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: string"})," — целевой номер телефона для анализа (принимает как сырые, так и частично отформатированные строки)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoPhoneMapInfo"})," — структурированный объект, содержащий найденный элемент ",n.jsx(e.code,{children:"GeoPhoneMap"})," и нормализованную числовую часть номера."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoPhone } from '@dxtmisha/functional-basic'

const info = GeoPhone.getByPhone('79001234567')
// возвращает:
// { 
//   item: { info: { phone: 7, ... }, mask: ['7 (***) ***-**-**'], ... },
//   phone: '9001234567' 
// }
`})}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Извлекает локализованные метаданные телефона, связанные с конкретным кодом страны."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — стандартный код страны ISO 3166 (например, ",n.jsx(e.code,{children:"'RU'"}),", ",n.jsx(e.code,{children:"'US'"}),", ",n.jsx(e.code,{children:"'VN'"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoPhoneValue | undefined"})," — сырые метаданные для страны или ",n.jsx(e.code,{children:"undefined"}),", если код не найден в базе."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`GeoPhone.get('RU') 
// { phone: 7, within: 8, mask: ['* (***) ***-**-**'], value: 'RU' }
`})}),`
`,n.jsx(e.h3,{id:"getbycode",children:n.jsx(e.code,{children:"getByCode"})}),`
`,n.jsx(e.p,{children:"Расширенный метод получения данных, который возвращает полную информацию о маске, включая узел дерева поиска для заданного кода страны."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — строка целевого кода страны."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoPhoneMap | undefined"})," — объект узла карты для запрошенного кода."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`GeoPhone.getByCode('US')
// { info: { phone: 1, ... }, mask: ['1 (***) ***-****'], ... }
`})}),`
`,n.jsx(e.h2,{id:"методы-доступа-к-данным",children:"Методы доступа к данным"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getList(): GeoPhoneValue[]"})," — возвращает полный отсортированный плоский список всех зарегистрированных метаданных международных телефонов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getMap(): Record<string, GeoPhoneMap>"})," — возвращает корневой узел внутреннего префиксного дерева, используемого для высокоскоростной идентификации номеров."]}),`
`]}),`
`,n.jsx(e.h2,{id:"форматирование-и-утилиты",children:"Форматирование и утилиты"}),`
`,n.jsx(e.h3,{id:"tomask",children:n.jsx(e.code,{children:"toMask"})}),`
`,n.jsx(e.p,{children:"Преобразует сырую числовую строку телефона в отформатированную версию на основе заданного набора масок."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: string"})," — необработанный числовой ввод."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"masks?: string[]"})," — массив строк допустимых масок для сопоставления."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string | undefined"})," — отформатированная строка или ",n.jsx(e.code,{children:"undefined"}),", если длина ввода не соответствует ни одной маске."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`GeoPhone.toMask('9001234567', ['* (***) ***-**-**']) 
// '7 (900) 123-45-67'
`})}),`
`,n.jsx(e.h3,{id:"removezero",children:n.jsx(e.code,{children:"removeZero"})}),`
`,n.jsx(e.p,{children:"Стандартизирует внутреннее представление номера, удаляя ведущие нули или корректируя региональные префиксы для обеспечения согласованной логики поиска."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: string"})," — строка входящего номера телефона."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — нормализованная числовая строка."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`GeoPhone.removeZero('0671234567')  // '671234567'
GeoPhone.removeZero('89001234567') // '9001234567'
`})}),`
`,n.jsx(e.h2,{id:"объекты-geophone",children:"Объекты GeoPhone"}),`
`,n.jsx(e.h3,{id:"geophonevalue",children:n.jsx(e.code,{children:"GeoPhoneValue"})}),`
`,n.jsx(e.p,{children:"Базовая структура метаданных для конфигурации телефона каждой страны:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: number"})," — телефонный код (например, ",n.jsx(e.code,{children:"7"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"within: number"})," — код внутреннего правила набора."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mask: string[]"})," — массив паттернов масок."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — идентификатор страны."]}),`
`]}),`
`,n.jsx(e.h3,{id:"geophonemap",children:n.jsx(e.code,{children:"GeoPhoneMap"})}),`
`,n.jsx(e.p,{children:"Узел внутреннего префиксного дерева:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"items: GeoPhoneValue[]"})," — список элементов в этой ветви."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"info: GeoPhoneValue | undefined"})," — найденное значение в данном конкретном числовом узле."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"next: Record<string, GeoPhoneMap>"})," — указатели на следующие цифры номера в дереве."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoPhone } from '@dxtmisha/functional'

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
`})})]})}function t(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{t as default};
