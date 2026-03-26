import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignConstructor - Генератор конструктора дизайна`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designconstructor`,children:`Класс DesignConstructor`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` — это специализированная реализация `,(0,c.jsx)(n.code,{children:`DesignCommand`}),`, ориентированная на генерацию внутренней логики и «конструкторов» компонентов. Он автоматизирует создание определений свойств, типов TypeScript и стилевых хуков, которые формируют основу поведенческого слоя компонента.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Развертывание конструктора`}),` — автоматически генерирует полный набор файлов, необходимых для реализации поведенческой логики компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизация типизации`}),` — создает `,(0,c.jsx)(n.code,{children:`props.ts`}),`, `,(0,c.jsx)(n.code,{children:`types.ts`}),` и `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),` для обеспечения строгой типизации всех частей компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стилевой фундамент`}),` — создает начальный файл `,(0,c.jsx)(n.code,{children:`style.scss`}),`, совместимый с системой классов конструктора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация унифицированной логики`}),` — создает файлы `,(0,c.jsx)(n.code,{children:`.ts`}),` и `,(0,c.jsx)(n.code,{children:`.tsx`}),` для гибкой реализации логики компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Системная интеграция`}),` — автоматически обновляет `,(0,c.jsx)(n.code,{children:`package.json`}),` и создает экспорты библиотеки для нового конструктора.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации экземпляра генератора используйте конструктор. Он автоматически определяет целевую директорию внутри папки `,(0,c.jsx)(n.code,{children:`src/constructors`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`command: string`}),` — уникальный идентификатор компонента (например, `,(0,c.jsx)(n.code,{children:`'button'`}),`, `,(0,c.jsx)(n.code,{children:`'list'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Record<string, string>`}),` — дополнительные параметры конфигурации в формате ключ-значение.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignConstructor } from '@dxtmisha/scripts'

const generator = new DesignConstructor('button')
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — запускает полную последовательность создания директорий, генерации файлов и системной регистрации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`структура-генерируемых-файлов`,children:`Структура генерируемых файлов`}),`
`,(0,c.jsxs)(n.p,{children:[`При инициализации `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` обрабатывает несколько файлов на основе шаблонов:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties.json`}),` — конфигурация маппинга для внутренних свойств конструктора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — определения свойств, включая типы и значения по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`types.ts`}),` и `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),` — интерфейсы TypeScript и определения типов для состояния и конфигурации компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style.scss`}),` — начальные определения стилей, связанные со структурой классов конструктора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Constructors.ts`}),` — основной файл реализации логики.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ConstructorsDesign.tsx`}),` — реализация визуального слоя/рендеринга с использованием TSX.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),` — точка входа для экспортов конструктора.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`жизненный-цикл-выполнения`,children:`Жизненный цикл выполнения`}),`
`,(0,c.jsxs)(n.p,{children:[`Процесс `,(0,c.jsx)(n.code,{children:`make()`}),` выполняется в строгом порядке для сохранения целостности данных:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Настройка директорий`}),`: определяет и подтверждает целевой путь в директории `,(0,c.jsx)(n.code,{children:`src/constructors`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация файлов`}),`: последовательно вызывает специализированные методы `,(0,c.jsx)(n.code,{children:`make[File]()`}),` для преобразования шаблонов в код проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Внутренняя интеграция`}),`: обновляет `,(0,c.jsx)(n.code,{children:`package.json`}),` проекта для предоставления доступа к новому конструктору.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Публикация библиотеки`}),`: генерирует файл экспорта в корневой директории библиотеки для обеспечения глобального использования.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};