import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypesDescription - Генератор описания пакета для ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypesdescription`,children:`Класс DesignTypesDescription`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignTypesDescription`}),` отвечает за автоматическую генерацию, форматирование и сохранение файла описания пакета (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), содержащего ключевые возможности, триггеры изучения типов и правила для ИИ-ассистентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматический анализ API`}),` — отправляет скомпилированные типы и JavaScript-код ИИ для создания высокоточного резюме пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция промптов и правил`}),` — объединяет техническое описание пакета со списком специализированных промптов из `,(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Строгий формат вывода`}),` — генерирует сжатый обзор без шаблонного текста: назначение пакета, триггеры чтения `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` и список ключевых возможностей (1–3 слова на пункт).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение артефакта`}),` — записывает результат в файл `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` в корне пакета.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — экземпляр клиента ИИ для выполнения запросов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`makeTypes: DesignTypesMake`}),` — генератор определений типов для получения полного контента деклараций и JS-кода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prompts: DesignTypesPrompts`}),` — менеджер промптов для интеграции правил и ресурсов.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import {
  DesignTypesAi,
  DesignTypesMake,
  DesignTypesPrompts,
  DesignTypesDescription
} from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const makeTypes = new DesignTypesMake(ai)
const prompts = new DesignTypesPrompts('ai-resources', ai)
const desc = new DesignTypesDescription(ai, makeTypes, prompts)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`is-boolean`,children:(0,c.jsx)(t.code,{children:`is(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет наличие файла `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` в проекте.`]}),`
`,(0,c.jsx)(t.h3,{id:`getfulldescription-string`,children:(0,c.jsx)(t.code,{children:`getFullDescription(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает сгенерированный текст полного описания.`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Запускает процесс генерации описания через ИИ и сохраняет файл `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const desc = new DesignTypesDescription(ai, makeTypes, prompts)
await desc.make()

console.log(desc.getFullDescription())
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};