import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/FigmaApi - Клиент Figma REST API`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmaapi`,children:`Класс FigmaApi`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`FigmaApi`}),` представляет собой полнофункциональную обертку для прямой работы с `,(0,c.jsx)(n.strong,{children:`Figma REST API`}),`. Он упрощает выполнение HTTP-запросов для получения файлов, узлов (слоев), экспорта графических ресурсов, стилей, а также отдельных ассетов из общих библиотек команды.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизированная маршрутизация запросов`}),` — автоматическое конструирование URL конечных точек API в соответствии с паттернами Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Работа со структурой слоев и узлов`}),` — детальное извлечение метаданных, ограничивающих рамок (bounding boxes) и стилей конкретных слоев макета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Экспорт графических ресурсов`}),` — интеграция с движком рендеринга Figma для генерации и получения временных URL-адресов изображений узлов в различных форматах (SVG, PNG, JPG, PDF).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление стилями`}),` — получение каталогов стилей файлов или конкретных стилей по ключу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Цепочечный Fluent-интерфейс`}),` — удобные методы-сеттеры для динамического переключения токена, файла или контекста целевого узла с поддержкой чейнинга.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для работы `,(0,c.jsx)(n.code,{children:`FigmaApi`}),` требуются персональный токен доступа и ключ файла Figma.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`token: string`}),` — Персональный токен доступа Figma Personal Access Token.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileKey: string`}),` — Ключ целевого файла Figma (извлекается из URL файла).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nodeId?: string`}),` — (Опционально) Идентификатор целевого слоя или узла.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaApi } from '@dxtmisha/scripts'

const api = new FigmaApi(
  'figd_xxxxxxxxxxxxxxxxxxxxx',
  'abcde12345XYZ'
)
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`методы-http-запросов-к-api`,children:`Методы HTTP-запросов к API`}),`
`,(0,c.jsx)(n.h4,{id:`files`,children:(0,c.jsx)(n.code,{children:`files`})}),`
`,(0,c.jsx)(n.p,{children:`Получает метаданные документа и полное JSON-дерево макета целевого файла Figma.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parameters: FigmaFilesParams`}),` — (Опционально) Параметры запроса, такие как глубина обхода, версия макета или геометрия.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaFilesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const fileData = await api.files({ depth: 2 })
`})}),`
`,(0,c.jsx)(n.h4,{id:`filenodes`,children:(0,c.jsx)(n.code,{children:`fileNodes`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает полное дерево конкретных узлов или слоев макета внутри указанного файла.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parameters: FigmaFileNodesParams`}),` — Идентификаторы целевых узлов, а также модификаторы геометрии или версий.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaFileNodesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const nodes = await api.fileNodes({ ids: '0:1' })
`})}),`
`,(0,c.jsx)(n.h4,{id:`fileimages`,children:(0,c.jsx)(n.code,{children:`fileImages`})}),`
`,(0,c.jsx)(n.p,{children:`Запускает рендеринг целевых узлов макета на серверах Figma и возвращает ссылки на сгенерированные файлы изображений.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parameters: FigmaFileImagesParams`}),` — Массив ID узлов, масштаб экспорта и формат (например, `,(0,c.jsx)(n.code,{children:`'svg'`}),`, `,(0,c.jsx)(n.code,{children:`'png'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaFileImagesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const images = await api.fileImages({
  ids: '12:34',
  format: 'svg'
})
`})}),`
`,(0,c.jsx)(n.h4,{id:`filestyles`,children:(0,c.jsx)(n.code,{children:`fileStyles`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает список стилей, объявленных непосредственно внутри целевого файла Figma.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaFileStylesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const stylesList = await api.fileStyles()
`})}),`
`,(0,c.jsx)(n.h4,{id:`styles`,children:(0,c.jsx)(n.code,{children:`styles`})}),`
`,(0,c.jsx)(n.p,{children:`Получает детальные метаданные конкретного стиля по его уникальному ключу.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — Уникальный ключ стиля.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaStylesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const styleMeta = await api.styles('1234abcd5678')
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`сеттеры-конфигурации`,children:`Сеттеры конфигурации`}),`
`,(0,c.jsxs)(n.p,{children:[`Все методы-сеттеры поддерживают чейнинг и возвращают экземпляр `,(0,c.jsx)(n.code,{children:`this`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setToken(token: string): this`}),` — Меняет активный токен доступа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setFileKey(fileKey: string): this`}),` — Меняет ключ целевого файла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setNodeId(nodeId?: string): this`}),` — Изменяет используемый по умолчанию ID узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(method: FigmaApiEndpoint, parameters?: Record<string, any>, key?: string): string`}),` — Конструирует абсолютный URL-адрес для запроса к API.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`figmaapiendpoint`,children:`FigmaApiEndpoint`}),`
`,(0,c.jsx)(n.p,{children:`Перечисление поддерживаемых конечных точек Figma REST API:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`files`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/files/:file_key"`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileNodes`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/files/:file_key/nodes"`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileImages`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/images/:file_key"`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileStyles`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/files/:file_key/styles"`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/styles/:key"`})]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};