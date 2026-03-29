import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignConstructors - Менеджер конструкторов дизайна`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designconstructors`,children:`Класс DesignConstructors`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignConstructors`}),` выступает в роли высокоуровневого оркестратора для управления всеми конструкторами компонентов внутри дизайн-системы. Он обрабатывает массовые операции, такие как одновременное обновление всех существующих конструкторов, и управляет объединением стилей компонентов в глобальные экспорты библиотеки.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Массовое управление жизненным циклом`}),` — может запускать обновления для всех компонентов в директории `,(0,c.jsx)(n.code,{children:`constructors`}),` или целевое обновление для конкретного компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление кэшем`}),` — автоматически очищает кэш свойств перед началом процесса генерации для обеспечения актуальности данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое объединение стилей`}),` — сканирует все компоненты и генерирует централизованную точку входа SCSS для глобальной библиотеки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обнаружение директорий`}),` — автоматически идентифицирует все конструкторы компонентов, расположенные в исходном пути системы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Для инициализации менеджера используйте конструктор. Если имя передано, операции будут ограничены этим конкретным компонентом.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name?: string`}),` — необязательный уникальный идентификатор компонента для обработки.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignConstructors } from '@dxtmisha/scripts'

// Менеджер для всех конструкторов
const manager = new DesignConstructors()
manager.make()

// Менеджер для конкретного компонента
const buttonManager = new DesignConstructors('button')
buttonManager.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — запускает процесс генерации или обновления для одного или всех идентифицированных конструкторов и обновляет глобальные стили.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponents(): string[]`}),` — возвращает список всех идентификаторов компонентов, найденных в директории конструкторов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentsStyle(): string[]`}),` — возвращает массив инструкций SCSS `,(0,c.jsx)(n.code,{children:`@forward`}),` для всех зарегистрированных компонентов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`генерация-глобальных-стилей`,children:`Генерация глобальных стилей`}),`
`,(0,c.jsxs)(n.p,{children:[`Одной из основных обязанностей этого класса является поддержка файла `,(0,c.jsx)(n.code,{children:`style.scss`}),` в корне библиотеки. Метод `,(0,c.jsx)(n.code,{children:`makeStyle()`}),` выполняет следующее:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сканирование`}),`: получает список всех компонентов через `,(0,c.jsx)(n.code,{children:`getComponents()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маппинг путей`}),`: конструирует правила `,(0,c.jsx)(n.code,{children:`@forward`}),`, указывающие на файл стилей каждого отдельного компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Запись`}),`: записывает эти правила в централизованный файл `,(0,c.jsx)(n.code,{children:`packages/library/style.scss`}),`, обеспечивая доступность стилей всей дизайн-системы через один импорт.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`рабочий-процесс-выполнения`,children:`Рабочий процесс выполнения`}),`
`,(0,c.jsxs)(n.p,{children:[`При вызове `,(0,c.jsx)(n.code,{children:`make()`}),` класс следует этой последовательности:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Очистка`}),`: очищает `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),`, чтобы предотвратить влияние устаревших данных на результат.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Делегирование`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Если при инициализации было передано `,(0,c.jsx)(n.code,{children:`name`}),`, создается новый `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` для этого компонента и вызывается его метод `,(0,c.jsx)(n.code,{children:`make()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Если `,(0,c.jsx)(n.code,{children:`name`}),` не было передано, класс перебирает все обнаруженные компоненты, создавая `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` для каждого и запуская их обновление.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Объединение`}),`: в завершение вызывается `,(0,c.jsx)(n.code,{children:`makeStyle()`}),` для синхронизации глобальных экспортов стилей с актуальным списком компонентов.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};