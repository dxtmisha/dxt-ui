import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ApiErrorStorage - Управление ошибками`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apierrorstorage`,children:`Класс ApiErrorStorage`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`ApiErrorStorage`}),` является `,(0,c.jsx)(n.strong,{children:`менеджером для обработки и идентификации состояний ошибок API`}),`. Он обеспечивает централизованное хранилище критериев ошибок API, позволяя системе идентифицировать конкретные ошибки путем сопоставления статуса ответа, кода ошибки из тела JSON, метода запроса и URL.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Централизованное хранилище`}),` — агрегация всех известных паттернов ошибок API в одном месте для единообразной обработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сопоставление по паттернам`}),` — идентификация ошибок по статусу HTTP, пользовательским кодам ошибок, методам запроса или шаблонам URL (включая RegExp).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Структурированное преобразование`}),` — преобразование сырых сетевых ошибок в структурированные элементы ошибок прикладного уровня.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пользовательская валидация`}),` — поддержка кастомных функций валидации для сложных сценариев идентификации ошибок.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): this`}),` — Добавляет один или несколько элементов или списков ошибок во внутреннее хранилище.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`идентификация`,children:`Идентификация`}),`
`,(0,c.jsx)(n.h4,{id:`find`,children:(0,c.jsx)(n.code,{children:`find`})}),`
`,(0,c.jsx)(n.p,{children:`Ищет подходящий элемент ошибки в хранилище путем анализа ответа. Автоматически пытается извлечь код и сообщение об ошибке из тела ответа.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — HTTP-метод, использованный для запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response: Response`}),` — Объект ответа Fetch API.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiErrorStorageItem>`}),` — Найденный элемент ошибки или сгенерированный элемент ошибки, если совпадений не найдено.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const errorItem = await errorStorage.find(ApiMethodItem.get, response);

if (errorItem.code === 'USER_NOT_FOUND') {
  // Обработка конкретной ошибки
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`apierrorstorageitem`,children:`ApiErrorStorageItem`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url: string | RegExp`}),` — Строка URL или регулярное выражение для сопоставления с URL запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — HTTP-метод, необходимый для совпадения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — Необязательный код ошибки для сопоставления с телом JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: number`}),` — Необязательный код статуса HTTP для сопоставления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validation?: (response: Response) => boolean`}),` — Необязательная функция пользовательской валидации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string | ((response?: Response) => string)`}),` — Необязательное сообщение об ошибке или фабрика сообщений.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};