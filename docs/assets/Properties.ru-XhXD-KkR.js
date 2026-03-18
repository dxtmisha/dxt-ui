import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/Properties - Оркестратор токенов дизайна"}),`
`,n.jsx(s.h1,{id:"класс-properties",children:"Класс Properties"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"Properties"})," — это основное ядро инфраструктуры токенов дизайн-системы. Он выступает в роли центрального оркестратора, координирующего загрузку, структурное слияние и рекурсивное преобразование необработанных определений свойств в конечное, разрешенное состояние. Абстрагируя сложность десятков специализированных правил трансформации, он предоставляет стабильный «источник истины» для всех компонентов и инструментов сборки."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Многоэтапный конвейер обработки"})," — выполняет специализированные трансформаторы для замены, клонирования, связывания и перемещения токенов дизайна."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Структурное слияние"})," — интеллектуально разрешает и объединяет настройки, глобальные значения по умолчанию и переопределения для конкретных компонентов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Инкрементальное управление кэшем"})," — использует ",n.jsx(s.code,{children:"PropertiesCache"})," для сохранения результатов обработки, что значительно повышает производительность сборки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Синтез SCSS"})," — компилирует разрешенные токены в структурированный формат SCSS для прямого использования в слоях стилизации."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Оптимизированные для ИИ метаданные"})," — подготавливает структуры свойств, которые легко потребляются движками документации и генераторами на базе ИИ."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(s.p,{children:"Инициализируйте оркестратор, чтобы немедленно запустить обработку токенов, определенных в конфигурации проекта."}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { Properties } from '@dxtmisha/scripts'

const engine = new Properties()
const tokens = engine.get() // Возвращает полностью обработанный PropertiesItems
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"доступ-к-данным",children:"Доступ к данным"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"get(): PropertiesItems"})," — Возвращает основной контейнер всех обработанных токенов дизайна."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"getScss(): string"})," — Возвращает скомпилированное представление текущего набора токенов в формате SCSS."]}),`
`]}),`
`,n.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(s.h3,{id:"конвейер-обработки-токенов",children:"Конвейер обработки токенов"}),`
`,n.jsxs(s.p,{children:["При создании экземпляра ",n.jsx(s.code,{children:"Properties"})," координирует комплексный многоуровневый поток трансформаций:"]}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Получение источников"}),": читает и объединяет необработанные данные из ",n.jsx(s.code,{children:"PropertiesSettings"}),", ",n.jsx(s.code,{children:"PropertiesMain"})," и внешних JSON-файлов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Базовая нормализация"}),": запускает фундаментальные преобразования:",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Замена (Replacement)"}),": разрешает паттерны алиасов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Разрешение палитры"}),": внедряет значения цветовых палитр."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Клонирование и синтез подсвойств"}),": обрабатывает сложные репликации свойств."]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Продвинутая трансформация"}),": выполняет высокоуровневую логику для:",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Разрешения компонентов"}),": сопоставляет свойства со структурами конкретных компонентов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Маппинга состояний и классов"}),": генерирует метаданные для состояний UI (hover, active) и BEM-классов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Синтеза медиа и анимаций"}),": разрешает адаптивные контрольные точки и токены движения."]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Оптимизация и очистка"}),": сортирует свойства, обрабатывает дубликаты и удаляет пустые узлы."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Сохранение"}),": финальный результат сохраняется в ",n.jsx(s.code,{children:"PropertiesCache"})," с использованием уникального хеша на основе текущей конфигурации дизайна."]}),`
`]})]})}function j(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
