import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypescript - Анализатор метаданных типов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypescript`,children:`Класс DesignTypescript`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignTypescript`}),` предоставляет высокоуровневую обертку вокруг TypeScript Compiler API, позволяя программно анализировать метаданные исходного кода. Он специализируется на извлечении структурированной информации из интерфейсов и псевдонимов типов, что делает его важным инструментом для генерации документации, схем валидации или оптимизированных определений типов для ИИ-помощников.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с Compiler API`}),` — бесшовное взаимодействие с внутренней программой и средством проверки типов TypeScript.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глубокое извлечение типов`}),` — разрешает сложные типы свойств, литеральные объединения и опциональность.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Получение документации`}),` — автоматически извлекает комментарии JSDoc для сохранения контекста, написанного разработчиком.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AST-парсинг`}),` — перемещается по абстрактному синтаксическому дереву (AST) для надежной идентификации интерфейсов и объявлений типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обнаружение литеральных значений`}),` — интеллектуально расширяет литеральные объединения в используемые строковые или числовые опции.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Инициализируйте анализатор, указав путь к исходному файлу TypeScript. Вы также можете указать пользовательские опции компилятора в соответствии с окружением вашего проекта.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — абсолютный или относительный путь к файлу `,(0,c.jsx)(t.code,{children:`.ts`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`''`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: ts.CompilerOptions`}),` — необязательная конфигурация компилятора TypeScript (по умолчанию `,(0,c.jsx)(t.code,{children:`{}`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypescript } from '@dxtmisha/scripts'

const analyzer = new DesignTypescript('src/types/component.ts')
const types = analyzer.getTypes()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypes(): DesignTypescriptList`}),` — сканирует исходный файл и возвращает массив метаданных всех обнаруженных типов и интерфейсов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getType(name: string): DesignTypescriptItem | undefined`}),` — получает метаданные для конкретного типа или интерфейса по его имени.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`рабочий-процесс-анализа-метаданных`,children:`Рабочий процесс анализа метаданных`}),`
`,(0,c.jsxs)(t.p,{children:[`При анализе файла `,(0,c.jsx)(t.code,{children:`DesignTypescript`}),` выполняет следующие шаги:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Создание программы`}),`: инициализирует программу TypeScript и Type Checker для указанного файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обход узлов`}),`: посещает каждый узел в AST, специально разыскивая узлы `,(0,c.jsx)(t.code,{children:`TypeAliasDeclaration`}),` и `,(0,c.jsx)(t.code,{children:`InterfaceDeclaration`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Разрешение свойств`}),`: для каждого идентифицированного типа опрашивает Type Checker для получения его свойств (включая наследуемые).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез информации`}),`: для каждого свойства строит объект метаданных, содержащий:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Name`}),`: идентификатор свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type`}),`: чистое строковое представление типа (например, `,(0,c.jsx)(t.code,{children:`'string | number'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Options`}),`: если свойство является литеральным объединением, извлекает фактические значения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Description`}),`: связанный комментарий JSDoc.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`роль-в-инструментарии`,children:`Роль в инструментарии`}),`
`,(0,c.jsxs)(t.p,{children:[`Этот класс часто используется другими генераторами (такими как `,(0,c.jsx)(t.code,{children:`DesignTypes`}),` или `,(0,c.jsx)(t.code,{children:`DesignCommand`}),`) для преодоления разрыва между статическим кодом и динамической логикой. Предоставляя чистый API к сложному компилятору TypeScript, он позволяет дизайн-системе оставаться «знающей типы» во всех её автоматизированных процессах.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};