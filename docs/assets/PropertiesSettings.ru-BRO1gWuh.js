import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesSettings - Настройки компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiessettings`,children:`Класс PropertiesSettings`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesSettings`}),` отвечает за автоматический поиск и загрузку конфигурационных файлов компонентов (настроек) во всех активных дизайнах. Он сканирует специальные директории `,(0,c.jsx)(t.code,{children:`settings`}),` и объединяет найденные токены в единый реестр, который затем используется для генерации стилей и типизации.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование`}),` — самостоятельно находит все папки компонентов в путях `,(0,c.jsx)(t.code,{children:`components`}),` и `,(0,c.jsx)(t.code,{children:`constructor`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мульти-дизайнерская поддержка`}),` — загружает настройки для каждого дизайна отдельно и объединяет их с учетом контекста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с конструктором`}),` — содержит специальную логику для сбора свойств конструктора компонентов (`,(0,c.jsx)(t.code,{children:`dxt.constructor`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартизация`}),` — автоматически преобразует сырые данные из файлов настроек в стандартизированный формат свойств через `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации передайте экземпляр `,(0,c.jsx)(t.code,{children:`PropertiesPath`}),` в конструктор.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: PropertiesPath`}),` — объект для работы с путями дизайн-системы.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesPath, PropertiesSettings } from '@dxtmisha/scripts'

const pathHandler = new PropertiesPath()
const settings = new PropertiesSettings(pathHandler)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает объединенный список всех свойств настроек, найденных в системе. Сюда входят как индивидуальные настройки компонентов каждого дизайна, так и общие свойства конструктора компонентов.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`PropertyList`}),` — объект, содержащий все загруженные и стандартизированные настройки.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const allSettings = settings.get();
// Результат: { basic: { button: { ... } }, 'dxt.constructor': { ... } }
`})}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`процесс-сбора-настроек`,children:`Процесс сбора настроек`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesSettings`}),` выполняет поиск данных в несколько этапов:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение путей`}),`: Класс получает актуальные пути к директориям `,(0,c.jsx)(t.code,{children:`settings`}),` для каждого дизайна через менеджер путей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сканирование директорий`}),`: Для каждого найденного пути сканируются все поддиректории (имена компонентов).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Чтение файлов`}),`: Внутри каждой папки компонента ищется файл с токенами (настройками), который считывается через `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Нормализация`}),`: Полученные данные проходят через `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` для приведения их к единому формату (`,(0,c.jsx)(t.code,{children:`PropertyItem`}),`), включая преобразование имен в kebab-case.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация конструктора`}),`: Параллельно вызывается `,(0,c.jsx)(t.code,{children:`getConstructorProperties()`}),`, которая на основе списка найденных папок формирует мета-данные для конструктора компонентов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`сбор-всех-настроек-системы`,children:`Сбор всех настроек системы`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesSettings, PropertiesPath } from '@dxtmisha/scripts'

const settingsManager = new PropertiesSettings(new PropertiesPath())
const config = settingsManager.get()

// Теперь config содержит все переменные компонентов для всех тем
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};