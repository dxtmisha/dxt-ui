import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypesAi - Низкоуровневый клиент ИИ для генерации типов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypesai`,children:`Класс DesignTypesAi`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` предназначен для низкоуровневого взаимодействия с ИИ-моделями в процессе генерации и оптимизации TypeScript-типов, управления путями директорий и выполнения изолированных промптов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изолированный контекст промптов`}),` — формирует строгие директивы для ИИ, предотвращая влияние истории диалога на результат генерации типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка вспомогательного контекста кода`}),` — передает исходный JavaScript-код как справочный материал без включения лишних сущностей в финальный вывод.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Парсинг JSON-ответов`}),` — метод `,(0,c.jsx)(t.code,{children:`toAiJson`}),` автоматически очищает markdown-блоки кода и парсит структурированные JSON-ответы от LLM.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение контекста проекта`}),` — извлекает и кэширует имя проекта из `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — `,(0,c.jsxs)(t.em,{children:[`(опционально, по умолчанию `,(0,c.jsx)(t.code,{children:`'ai-types-temp'`}),`)`]}),` путь к директории с декларациями типов.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('ai-types-temp')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`isfilefile-string-boolean`,children:(0,c.jsx)(t.code,{children:`isFile(file: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, является ли файл валидным файлом декларации (.d.ts).`}),`
`,(0,c.jsx)(t.h3,{id:`isfilejsfile-string-boolean`,children:(0,c.jsx)(t.code,{children:`isFileJs(file: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, является ли файл валидным JavaScript файлом (.js).`}),`
`,(0,c.jsx)(t.h3,{id:`getmd5content-string-string`,children:(0,c.jsx)(t.code,{children:`getMd5(content: string): string`})}),`
`,(0,c.jsx)(t.p,{children:`Генерирует MD5 хэш для переданного текстового содержимого.`}),`
`,(0,c.jsx)(t.h3,{id:`getdirarray-string`,children:(0,c.jsx)(t.code,{children:`getDirArray(): string[]`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает массив сегментов пути к целевой директории.`}),`
`,(0,c.jsx)(t.h3,{id:`getprojectname-string`,children:(0,c.jsx)(t.code,{children:`getProjectName(): string`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает название текущего проекта из `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`toaicontent-string-prompt-string-code-string-promisestring--undefined`,children:(0,c.jsx)(t.code,{children:`toAi(content: string, prompt: string, code?: string): Promise<string | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Отправляет контент и промпт в ИИ-провайдер и возвращает сгенерированный строковый ответ.`}),`
`,(0,c.jsx)(t.h3,{id:`toaijsontcontent-string-prompt-string-code-string-promiset--undefined`,children:(0,c.jsx)(t.code,{children:`toAiJson<T>(content: string, prompt: string, code?: string): Promise<T | undefined>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Отправляет запрос ИИ и парсит полученный ответ как строго типизированный объект `,(0,c.jsx)(t.code,{children:`T`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompt = 'Оптимизируй типы, удалив неэкспортируемые интерфейсы'
const result = await ai.toAi(dtsContent, prompt, jsCode)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};