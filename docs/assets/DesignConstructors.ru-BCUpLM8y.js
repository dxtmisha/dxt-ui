import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignConstructors - Менеджер конструкторов дизайна`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designconstructors`,children:`Класс DesignConstructors`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignConstructors`}),` выступает в роли высокоуровневого оркестратора для управления всеми конструкторами компонентов внутри дизайн-системы. Он обрабатывает массовые операции, такие как одновременное обновление всех существующих конструкторов, и управляет объединением стилей компонентов в глобальные экспорты библиотеки.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Массовое управление жизненным циклом`}),` — может запускать обновления для всех компонентов в директории `,(0,c.jsx)(t.code,{children:`constructors`}),` или целевое обновление для конкретного компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление кэшем`}),` — автоматически очищает кэш свойств перед началом процесса генерации для обеспечения актуальности данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое объединение стилей`}),` — сканирует все компоненты и генерирует централизованную точку входа SCSS для глобальной библиотеки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обнаружение директорий`}),` — автоматически идентифицирует все конструкторы компонентов, расположенные в исходном пути системы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Для инициализации менеджера используйте конструктор. Если имя передано, операции будут ограничены этим конкретным компонентом.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — необязательный уникальный идентификатор компонента для обработки.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignConstructors } from '@dxtmisha/scripts'

// Менеджер для всех конструкторов
const manager = new DesignConstructors()
manager.make()

// Менеджер для конкретного компонента
const buttonManager = new DesignConstructors('button')
buttonManager.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — запускает процесс генерации или обновления для одного или всех идентифицированных конструкторов и обновляет глобальные стили.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponents(): string[]`}),` — возвращает список всех идентификаторов компонентов, найденных в директории конструкторов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentsStyle(): string[]`}),` — возвращает массив инструкций SCSS `,(0,c.jsx)(t.code,{children:`@forward`}),` для всех зарегистрированных компонентов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`генерация-глобальных-стилей`,children:`Генерация глобальных стилей`}),`
`,(0,c.jsxs)(t.p,{children:[`Одной из основных обязанностей этого класса является поддержка файла `,(0,c.jsx)(t.code,{children:`style.scss`}),` в корне библиотеки. Метод `,(0,c.jsx)(t.code,{children:`makeStyle()`}),` выполняет следующее:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сканирование`}),`: получает список всех компонентов через `,(0,c.jsx)(t.code,{children:`getComponents()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Маппинг путей`}),`: конструирует правила `,(0,c.jsx)(t.code,{children:`@forward`}),`, указывающие на файл стилей каждого отдельного компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Запись`}),`: записывает эти правила в централизованный файл `,(0,c.jsx)(t.code,{children:`packages/library/style.scss`}),`, обеспечивая доступность стилей всей дизайн-системы через один импорт.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`рабочий-процесс-выполнения`,children:`Рабочий процесс выполнения`}),`
`,(0,c.jsxs)(t.p,{children:[`При вызове `,(0,c.jsx)(t.code,{children:`make()`}),` класс следует этой последовательности:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Очистка`}),`: очищает `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),`, чтобы предотвратить влияние устаревших данных на результат.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Делегирование`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Если при инициализации было передано `,(0,c.jsx)(t.code,{children:`name`}),`, создается новый `,(0,c.jsx)(t.code,{children:`DesignConstructor`}),` для этого компонента и вызывается его метод `,(0,c.jsx)(t.code,{children:`make()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если `,(0,c.jsx)(t.code,{children:`name`}),` не было передано, класс перебирает все обнаруженные компоненты, создавая `,(0,c.jsx)(t.code,{children:`DesignConstructor`}),` для каждого и запуская их обновление.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Объединение`}),`: в завершение вызывается `,(0,c.jsx)(t.code,{children:`makeStyle()`}),` для синхронизации глобальных экспортов стилей с актуальным списком компонентов.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};