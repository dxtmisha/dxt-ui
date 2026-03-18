import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/PropertiesCache - Оркестратор постоянного кэша"}),`
`,e.jsx(n.h1,{id:"класс-propertiescache",children:"Класс PropertiesCache"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"PropertiesCache"})," — это высокопроизводительная статическая утилита, предназначенная для управления постоянным файловым кэшированием в инструментарии дизайн-системы. Он гарантирует, что сложные трансформации токенов выполняются только при необходимости, значительно сокращая время сборки для крупных проектов за счет отслеживания зависимостей файлов и поддержки структурированной иерархии кэша."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Отслеживание зависимостей"})," — автоматически отслеживает изменения исходных файлов и аннулирует кэш, если любая зависимость была изменена."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Иерархическое хранение"})," — организует кэшированные данные в скрытой директории ",e.jsx(n.code,{children:".cache"})," со специализированными подпапками для различных этапов обработки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Инкрементальные сборки"})," — позволяет выполнять частичное перевычисление за счет хранения промежуточных результатов трансформации."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Целостность системы"})," — ведет реестр ",e.jsx(n.code,{children:"system.json"})," для отслеживания временных меток кэша и метаданных файлов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка Generic"})," — обеспечивает полную поддержку TypeScript для типобезопасного извлечения кэшированных структур данных."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Являясь статическим классом, ",e.jsx(n.code,{children:"PropertiesCache"})," не требует создания экземпляра. Доступ к его методам осуществляется напрямую."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesCache } from '@dxtmisha/scripts'

// Извлечение данных с автоматическим управлением кэшем
const data = PropertiesCache.get(
  ['tokens', 'color'], 
  'palette-cache', 
  () => transformPaletteLogic()
)

// Очистка всех кэшированных данных
PropertiesCache.clear()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"операции-с-кэшем",children:"Операции с кэшем"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get<T>(path, name, callback, extension): T"})," — извлекает данные из кэша или регенерирует их через функцию обратного вызова."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"read<R>(path): R | undefined"})," — читает файл и регистрирует его как зависимость кэша."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"write<T>(name, value): void"})," — сохраняет промежуточные результаты обработки во временный кэш."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"clear(): void"})," — рекурсивно удаляет всю директорию кэша."]}),`
`]}),`
`,e.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(n.h3,{id:"поток-синхронизации-кэша",children:"Поток синхронизации кэша"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesCache"})," работает через сложный внутренний жизненный цикл для обеспечения согласованности данных:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Запрос (",e.jsx(n.code,{children:"get"}),")"]}),": При запросе данных класс сначала проверяет наличие физического файла кэша."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Системная валидация"}),": Он обращается к внутреннему реестру ",e.jsx(n.code,{children:"system"}),", чтобы сравнить временную метку создания кэша с временем изменения всех зарегистрированных файлов зависимостей."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Регенерация"}),": Если файл отсутствует или устарел:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Класс помещает текущее имя кэша ",e.jsx(n.code,{children:"name"})," во внутренний стек ",e.jsx(n.code,{children:"listenerName"}),"."]}),`
`,e.jsxs(n.li,{children:["Любое последующее чтение файла через ",e.jsx(n.code,{children:"PropertiesCache.read()"})," во время выполнения callback автоматически регистрируется как зависимость для этой конкретной записи кэша."]}),`
`,e.jsx(n.li,{children:"Результат callback записывается на диск."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Завершение"}),": После завершения callback обновляется ",e.jsx(n.code,{children:"system.json"})," с новой временной меткой и списком зависимостей, гарантируя, что следующий запрос останется валидным, пока не изменится исходный файл."]}),`
`]})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
