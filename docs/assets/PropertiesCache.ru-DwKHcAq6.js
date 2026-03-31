import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/PropertiesCache - Оркестратор постоянного кэша`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiescache`,children:`Класс PropertiesCache`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` — это высокопроизводительная статическая утилита, предназначенная для управления постоянным файловым кэшированием в инструментарии дизайн-системы. Он гарантирует, что сложные трансформации токенов выполняются только при необходимости, значительно сокращая время сборки для крупных проектов за счет отслеживания зависимостей файлов и поддержки структурированной иерархии кэша.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отслеживание зависимостей`}),` — автоматически отслеживает изменения исходных файлов и аннулирует кэш, если любая зависимость была изменена.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Иерархическое хранение`}),` — организует кэшированные данные в скрытой директории `,(0,c.jsx)(n.code,{children:`.cache`}),` со специализированными подпапками для различных этапов обработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инкрементальные сборки`}),` — позволяет выполнять частичное перевычисление за счет хранения промежуточных результатов трансформации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Целостность системы`}),` — ведет реестр `,(0,c.jsx)(n.code,{children:`system.json`}),` для отслеживания временных меток кэша и метаданных файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка Generic`}),` — обеспечивает полную поддержку TypeScript для типобезопасного извлечения кэшированных структур данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Являясь статическим классом, `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` не требует создания экземпляра. Доступ к его методам осуществляется напрямую.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesCache } from '@dxtmisha/scripts'

// Извлечение данных с автоматическим управлением кэшем
const data = PropertiesCache.get(
  ['tokens', 'color'], 
  'palette-cache', 
  () => transformPaletteLogic()
)

// Очистка всех кэшированных данных
PropertiesCache.clear()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-с-кэшем`,children:`Операции с кэшем`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(path, name, callback, extension): T`}),` — извлекает данные из кэша или регенерирует их через функцию обратного вызова.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read<R>(path): R | undefined`}),` — читает файл и регистрирует его как зависимость кэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`write<T>(name, value): void`}),` — сохраняет промежуточные результаты обработки во временный кэш.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`clear(): void`}),` — рекурсивно удаляет всю директорию кэша.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`поток-синхронизации-кэша`,children:`Поток синхронизации кэша`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesCache`}),` работает через сложный внутренний жизненный цикл для обеспечения согласованности данных:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Запрос (`,(0,c.jsx)(n.code,{children:`get`}),`)`]}),`: При запросе данных класс сначала проверяет наличие физического файла кэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Системная валидация`}),`: Он обращается к внутреннему реестру `,(0,c.jsx)(n.code,{children:`system`}),`, чтобы сравнить временную метку создания кэша с временем изменения всех зарегистрированных файлов зависимостей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Регенерация`}),`: Если файл отсутствует или устарел:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Класс помещает текущее имя кэша `,(0,c.jsx)(n.code,{children:`name`}),` во внутренний стек `,(0,c.jsx)(n.code,{children:`listenerName`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Любое последующее чтение файла через `,(0,c.jsx)(n.code,{children:`PropertiesCache.read()`}),` во время выполнения callback автоматически регистрируется как зависимость для этой конкретной записи кэша.`]}),`
`,(0,c.jsx)(n.li,{children:`Результат callback записывается на диск.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Завершение`}),`: После завершения callback обновляется `,(0,c.jsx)(n.code,{children:`system.json`}),` с новой временной меткой и списком зависимостей, гарантируя, что следующий запрос останется валидным, пока не изменится исходный файл.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};