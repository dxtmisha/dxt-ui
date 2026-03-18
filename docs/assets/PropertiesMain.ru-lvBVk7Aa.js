import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesMain - Оркестратор глобальных токенов"}),`
`,n.jsx(e.h1,{id:"класс-propertiesmain",children:"Класс PropertiesMain"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"PropertiesMain"})," — это высокоуровневый оркестратор, отвечающий за синтез глобального дерева токенов дизайна. Он управляет всем жизненным циклом «основных» (main) токенов — от обнаружения в файловой системе и необработанного чтения до многоэтапной семантической трансформации и иерархического слияния. Абстрагируя сложности модульной загрузки свойств, он предоставляет единую точку входа для получения полностью разрешенных и стандартизированных конфигураций дизайна."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматизированная оркестровка конвейера"})," — объединяет несколько утилит (",n.jsx(e.code,{children:"Import"}),", ",n.jsx(e.code,{children:"Standard"}),", ",n.jsx(e.code,{children:"Convector"}),") в единую последовательность загрузки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Дизайн-центричное обнаружение"})," — использует ",n.jsx(e.code,{children:"PropertiesPath"})," для автоматического поиска и обработки токенов для всех активных тем дизайна."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамическое слияние конфигураций"})," — поддерживает «горячую» замену или наслоение настроек на глобальное дерево через глубокую рекурсивную синхронизацию."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обеспечение структурной целостности"})," — автоматически применяет структурную обертку и разделители, чтобы гарантировать правильную категоризацию и доступность токенов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синхронизация внутреннего состояния"})," — сохраняет внутренние флаги движка (свойства, начинающиеся с ",n.jsx(e.code,{children:"_"}),") во время обновления конфигурации."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"PropertiesMain(path)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesPath"})," — экземпляр класса, отвечающего за обнаружение в файловой системе и разрешение путей."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesMain, PropertiesPath } from '@dxtmisha/scripts'

// 1. Инициализация необходимого менеджера путей
const pathManager = new PropertiesPath(['packages', 'tokens'])

// 2. Создание оркестратора основных токенов
const main = new PropertiesMain(pathManager)

// 3. Разрешение полного глобального дерева свойств
const globalTokens = main.get()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(): PropertyList"})," — выполняет полный конвейер трансформации и возвращает все разрешенные основные токены."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getBySettings(list): PropertyList"})," — объединяет кастомный кластер настроек с глобальным деревом токенов."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"глобальный-конвейер-трансформации",children:"Глобальный конвейер трансформации"}),`
`,n.jsxs(e.p,{children:["При вызове ",n.jsx(e.code,{children:"get()"})," класс ",n.jsx(e.code,{children:"PropertiesMain"})," выполняет следующую последовательность для каждого обнаруженного дизайна:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Чтение"}),": Получает необработанные данные из файловой системы с помощью ",n.jsx(e.code,{children:"PropertiesTool"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Семантическая конвертация"}),": Пропускает данные через ",n.jsx(e.code,{children:"PropertiesConvector"})," для преобразования сырых значений в токены."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стандартизация"}),": Нормализует структуры через ",n.jsx(e.code,{children:"PropertiesStandard"})," для обеспечения единообразия объектов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Разрешение ссылок"}),": Использует ",n.jsx(e.code,{children:"PropertiesImport"})," для рекурсивного получения и слияния любых ссылок на внешние файлы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Структурное завершение"}),": При необходимости разделяет ключи через ",n.jsx(e.code,{children:"PropertiesSeparator"})," и применяет ",n.jsx(e.code,{children:"PropertiesWrap"})," для организации токенов в итоговые иерархические контейнеры."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Унифицированный синтез"}),": Объединяет обработанные данные всех дизайнов в единый ",n.jsx(e.code,{children:"PropertyList"}),", где ключами являются названия дизайнов верхнего уровня."]}),`
`]})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
