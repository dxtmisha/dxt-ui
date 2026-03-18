import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesKeys - Семантический трансформер ключей"}),`
`,e.jsx(s.h1,{id:"класс-propertieskeys",children:"Класс PropertiesKeys"}),`
`,e.jsxs(s.p,{children:["Класс ",e.jsx(s.code,{children:"PropertiesKeys"})," — это специализированная статическая утилита, предназначенная для парсинга и трансформации семантического значения ключей токенов дизайна. Он выступает в роли «грамматического движка» для имен свойств, различая ключи функциональных данных и ключи архитектурных метаданных. Предоставляя механизмы нормализации, типизированного добавления префиксов и обнаружения специальных символов, он гарантирует, что ключи токенов остаются последовательными и предсказуемыми независимо от их исходного формата (JSON, SCSS или внутреннее состояние)."]}),`
`,e.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Идентификация метаданных"})," — обнаруживает защищенные системные ключи, такие как ",e.jsx(s.code,{children:"value"}),", ",e.jsx(s.code,{children:"type"}),", и внутренние свойства, начинающиеся с подчеркивания."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Нормализация префиксов"})," — автоматически удаляет архитектурные символы (такие как ",e.jsx(s.code,{children:"="})," или ",e.jsx(s.code,{children:"|"}),") для извлечения чистого семантического имени."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Оркестрация регистра"})," — интегрируется с ",e.jsx(s.code,{children:"toCamelCase"})," для поддержания единых соглашений об именовании во всем дереве токенов."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Типизированное переименование (Re-keying)"})," — динамически преобразует ключи на основе их категории (например, добавляя ",e.jsx(s.code,{children:"media-"})," к токенам медиа или ",e.jsx(s.code,{children:"container-"})," к контейнерным запросам)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Совместимость с SCSS"})," — обрабатывает специальное форматирование для ключей, совместимых с SCSS, включая ведущие амперсанды."]}),`
`]}),`
`,e.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(s.p,{children:["Являясь статическим сервисным классом, ",e.jsx(s.code,{children:"PropertiesKeys"})," не требует создания экземпляра и готов к использованию сразу после импорта."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesKeys } from '@dxtmisha/scripts'

// Проверка, является ли ключ полем метаданных
const isReserved = PropertiesKeys.isSpecialKey('type')

// Получение чистого семантического имени
const cleanName = PropertiesKeys.getName('=primary-color')
// Возвращает: "primaryColor"
`})}),`
`,e.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isSpecialKey(key): boolean"})," — проверяет, является ли ключ зарезервированным системным полем метаданных."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isFull(name): boolean"})," — определяет, является ли имя абсолютным/полным определением."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getName(name, camelCase?): string"})," — нормализует ключ, удаляя префиксы и опционально применяя camelCase."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"reKey(key, type?): string"})," — преобразует ключ на основе его архитектурного типа (media, container, scss и т.д.)."]}),`
`]}),`
`,e.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(s.h3,{id:"конвейер-трансформации-ключей",children:"Конвейер трансформации ключей"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"PropertiesKeys"})," управляет логикой перевода между необработанными входными форматами и стандартизированными внутренними токенами:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Семантическое извлечение"}),": При вызове ",e.jsx(s.code,{children:"getName()"})," класс использует регулярные выражения ",e.jsx(s.code,{children:"PropertiesTypes"})," для идентификации и удаления управляющих символов (таких как ",e.jsx(s.code,{children:"="}),", означающий неизменяемое значение)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Контекстное добавление префиксов"}),": В потоке ",e.jsx(s.code,{children:"reKey()"})," класс проверяет ",e.jsx(s.code,{children:"_type"})," токена. Если идентифицирован тип ",e.jsx(s.code,{children:"media"}),", он интеллектуально гарантирует, что ключ отражает эту роль (например, ",e.jsx(s.code,{children:"desktop"})," становится ",e.jsx(s.code,{children:"mediaDesktop"}),"), избегая избыточных префиксов, если они уже существуют."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Защита внутреннего состояния"}),": Проверка ",e.jsx(s.code,{children:"isSpecialKey()"})," критически важна для движков обхода; она предотвращает обработку внутренних механизмов (ключи, начинающиеся с ",e.jsx(s.code,{children:"_"}),") как если бы они были реальными токенами дизайна, определенными пользователем."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Адаптация под платформы"}),": Для генерации SCSS класс специально обрабатывает добавление префикса ",e.jsx(s.code,{children:"&"}),", позволяя использовать токены дизайна напрямую во вложенных объявлениях стилей."]}),`
`]})]})}function j(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as default};
