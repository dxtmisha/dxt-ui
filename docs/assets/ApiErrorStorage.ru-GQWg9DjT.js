import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiErrorStorage - Управление ошибками`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apierrorstorage`,children:`Класс ApiErrorStorage`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`ApiErrorStorage`}),` является `,(0,c.jsx)(t.strong,{children:`менеджером для обработки и идентификации состояний ошибок API`}),`. Он обеспечивает централизованное хранилище критериев ошибок API, позволяя системе идентифицировать конкретные ошибки путем сопоставления статуса ответа, кода ошибки из тела JSON, метода запроса и URL.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Централизованное хранилище`}),` — агрегация всех известных паттернов ошибок API в одном месте для единообразной обработки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сопоставление по паттернам`}),` — идентификация ошибок по статусу HTTP, пользовательским кодам ошибок, методам запроса или шаблонам URL (включая RegExp).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Структурированное преобразование`}),` — преобразование сырых сетевых ошибок в структурированные элементы ошибок прикладного уровня.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Пользовательская валидация`}),` — поддержка кастомных функций валидации для сложных сценариев идентификации ошибок.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): this`}),` — Добавляет один или несколько элементов или списков ошибок во внутреннее хранилище.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`идентификация`,children:`Идентификация`}),`
`,(0,c.jsx)(t.h4,{id:`find`,children:(0,c.jsx)(t.code,{children:`find`})}),`
`,(0,c.jsx)(t.p,{children:`Ищет подходящий элемент ошибки в хранилище путем анализа ответа. Автоматически пытается извлечь код и сообщение об ошибке из тела ответа.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethodItem`}),` — HTTP-метод, использованный для запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: Response`}),` — Объект ответа Fetch API.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Promise<ApiErrorStorageItem>`}),` — Найденный элемент ошибки или сгенерированный элемент ошибки, если совпадений не найдено.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const errorItem = await errorStorage.find(ApiMethodItem.get, response);

if (errorItem.code === 'USER_NOT_FOUND') {
  // Обработка конкретной ошибки
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`apierrorstorageitem`,children:`ApiErrorStorageItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`url: string | RegExp`}),` — Строка URL или регулярное выражение для сопоставления с URL запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethodItem`}),` — HTTP-метод, необходимый для совпадения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: string`}),` — Необязательный код ошибки для сопоставления с телом JSON.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status?: number`}),` — Необязательный код статуса HTTP для сопоставления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validation?: (response: Response) => boolean`}),` — Необязательная функция пользовательской валидации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`message?: string | ((response?: Response) => string)`}),` — Необязательное сообщение об ошибке или фабрика сообщений.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};