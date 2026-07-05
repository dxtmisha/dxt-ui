import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ApiError - Утилита ошибок (Статическая)`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apierror`,children:`Класс ApiError`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`ApiError`}),` является `,(0,c.jsx)(n.strong,{children:`основной утилитой (статической)`}),` для управления хранилищем ошибок API и идентификации сбоев. Он предоставляет централизованный синглтон-интерфейс для регистрации паттернов ошибок и преобразования сырых сетевых ответов в структурированные объекты `,(0,c.jsx)(n.code,{children:`ApiErrorItem`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Статический интерфейс`}),` — управление критериями ошибок и анализ ответов без необходимости создания экземпляра класса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасный синглтон для SSR`}),` — использует `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` для поддержания изолированного хранилища ошибок для разных запросов во время серверного рендеринга.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Регистрация паттернов`}),` — простой API для добавления отдельных паттернов ошибок или массовых списков для глобальной идентификации ошибок.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление-хранилищем`,children:`Управление хранилищем`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStorage(): ApiErrorStorage`}),` — Возвращает внутренний синглтон-экземпляр хранилища ошибок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): void`}),` — Добавляет один или несколько паттернов ошибок в глобальное хранилище.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`анализ`,children:`Анализ`}),`
`,(0,c.jsx)(n.h4,{id:`getitem`,children:(0,c.jsx)(n.code,{children:`getItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Анализирует сырой ответ Fetch и создает структурированный экземпляр `,(0,c.jsx)(n.code,{children:`ApiErrorItem`}),`. Это основной метод для обработки сбоев API.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — HTTP-метод запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response: Response`}),` — Сырой объект ответа Fetch.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiErrorItem>`}),` — Структурированный объект ошибки, содержащий проанализированные детали.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`try {
  const response = await fetch('/api/user');
  if (!response.ok) {
    const errorItem = await ApiError.getItem(ApiMethodItem.get, response);
    console.error(errorItem.getMessage());
  }
} catch (e) {
  // Обработка сетевой ошибки
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};