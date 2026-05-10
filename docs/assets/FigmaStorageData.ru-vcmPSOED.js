import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaStorageData - Контейнер данных хранилища`}),`
`,(0,c.jsxs)(n.h1,{id:`класс-figmastoragedata`,children:[`Класс `,(0,c.jsx)(n.code,{children:`FigmaStorageData`})]}),`
`,(0,c.jsx)(n.p,{children:`Низкоуровневый контейнер для управления отдельными записями данных в системах хранения Figma (Client Storage или Plugin Data). Он отслеживает значения вместе с временем их обновления (возрастом) и обрабатывает логику истечения срока действия кэша.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отслеживание кэша`}),` — Автоматически определяет, актуальны ли данные на основе настраиваемого времени жизни (TTL).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Мониторинг обновлений`}),` — Сохраняет метку времени последнего обновления для облегчения проверки свежести данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Готовность к сериализации`}),` — Предоставляет методы для преобразования данных в стандартный формат хранения (`,(0,c.jsx)(n.code,{children:`FigmaStorageDataValue`}),`) и обратно.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Инициализируется именем ключа и опциональным временем кэширования в секундах.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorageData } from '@dxtmisha/figma-code'

// Кэш на 1 час (3600 секунд)
const dataContainer = new FigmaStorageData<string>('user-name', 3600)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`проверка-состояния`,children:`Проверка состояния`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isNull(): boolean`}),` — Проверяет, является ли текущее значение null или undefined.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isCache(): boolean`}),` — Проверяет, находятся ли данные в пределах разрешенного времени жизни кэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isValue(): boolean`}),` — Возвращает true, если значение определено и кэш валиден.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`аксессоры`,children:`Аксессоры`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): T | undefined`}),` — Возвращает текущее значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAge(): number | undefined`}),` — Возвращает метку времени последнего обновления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Возвращает уникальное имя ключа хранилища (с префиксом).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCache(): number | undefined`}),` — Возвращает настроенное время кэширования.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`модификаторы`,children:`Модификаторы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: T, age?: number): this`}),` — Вручную устанавливает значение и время.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setByObject(value?: FigmaStorageDataValue<T>): this`}),` — Устанавливает данные из объекта хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(value?: T): this`}),` — Обновляет значение и устанавливает текущую метку времени.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Очищает значение и время.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`преобразование`,children:`Преобразование`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValue(): FigmaStorageDataValue<T>`}),` — Преобразует текущее состояние в объект, совместимый с хранилищем.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(n.h4,{id:`figmastoragedatavaluet`,children:(0,c.jsx)(n.code,{children:`FigmaStorageDataValue<T>`})}),`
`,(0,c.jsx)(n.p,{children:`Структура, используемая для постоянного хранения.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Фактические данные.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age: number`}),` — Метка времени (мс) момента сохранения данных.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};