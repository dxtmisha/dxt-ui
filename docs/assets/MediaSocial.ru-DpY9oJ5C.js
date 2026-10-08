import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/media/Classes/MediaSocial - Профили социальных сетей и URL`}),`
`,(0,c.jsx)(t.h1,{id:`класс-mediasocial`,children:`Класс MediaSocial`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` представляет собой `,(0,c.jsx)(t.strong,{children:`основной класс (статический)`}),`, предназначенный для управления конфигурациями социальных сетей, генерации ссылок на профили, извлечения имени пользователя и переопределения иконок для более чем 35 поддерживаемых платформ.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Встроенный каталог платформ`}),` — готовые конфигурации для более чем 35 международных и региональных социальных сетей (например, GitHub, Telegram, LinkedIn, X, ВКонтакте, WeChat, Zalo).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Построение ссылок на профили`}),` — автоматическое формирование канонических ссылок из имени пользователя или логина (`,(0,c.jsx)(t.code,{children:`getUrl`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Извлечение имени пользователя`}),` — парсинг полных ссылок на профили для безопасного извлечения логина путем удаления префиксов и суффиксов (`,(0,c.jsx)(t.code,{children:`getValue`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реестр кастомных иконок`}),` — поддержка регистрации собственных SVG-иконок или имен иконок для отдельных платформ (`,(0,c.jsx)(t.code,{children:`addIcon`}),`, `,(0,c.jsx)(t.code,{children:`addIcons`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Статический интерфейс`}),` — выполнение всех операций напрямую через класс без необходимости создания экземпляра.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление-url-и-значениями`,children:`Управление URL и значениями`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getUrl(code: InputSocialType | InputSocialTypeValue, value: string): string`}),` — строит полную ссылку на профиль по имени пользователя или частичной строке с использованием настроенного префикса и суффикса платформы. Возвращает значение без изменений, если оно уже начинается с префикса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getValue(code: InputSocialType | InputSocialTypeValue, url: string): string`}),` — извлекает чистое имя пользователя или логин из полной ссылки на профиль путем удаления зарегистрированного префикса и суффикса.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`статический-реестр-и-иконки`,children:`Статический реестр и иконки`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: InputSocialType | InputSocialTypeValue): InputSocialItem | undefined`}),` — возвращает конфигурацию социальной сети по ее коду, дополненную кастомной иконкой при ее наличии.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getList(): InputSocialList`}),` — возвращает полный массив конфигураций всех поддерживаемых социальных сетей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addIcon(code: InputSocialTypeValue, icon: string): void`}),` — регистрирует кастомную иконку или SVG-разметку для указанной социальной сети.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addIcons(icons: InputSocialIcons): void`}),` — пакетно регистрирует несколько кастомных иконок.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`inputsocialitem`,children:`InputSocialItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: InputSocialType | InputSocialTypeValue`}),` — уникальный код-идентификатор социальной сети.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — отображаемое название социальной сети.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prefix?: string`}),` — префикс URL для ссылки на профиль (например, `,(0,c.jsx)(t.code,{children:`'https://github.com/'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`suffix?: string`}),` — суффикс URL для ссылки на профиль.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask?: any`}),` — конфигурация маски ввода для полей формы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — имя или SVG-разметка иконки.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`inputsocialtype`,children:`InputSocialType`}),`
`,(0,c.jsxs)(t.p,{children:[`Перечисление (enum) кодов поддерживаемых социальных сетей: `,(0,c.jsx)(t.code,{children:`alipay`}),`, `,(0,c.jsx)(t.code,{children:`baidu`}),`, `,(0,c.jsx)(t.code,{children:`dingtalk`}),`, `,(0,c.jsx)(t.code,{children:`discord`}),`, `,(0,c.jsx)(t.code,{children:`douyin`}),`, `,(0,c.jsx)(t.code,{children:`dzen`}),`, `,(0,c.jsx)(t.code,{children:`facebook`}),`, `,(0,c.jsx)(t.code,{children:`github`}),`, `,(0,c.jsx)(t.code,{children:`gitlab`}),`, `,(0,c.jsx)(t.code,{children:`habr`}),`, `,(0,c.jsx)(t.code,{children:`instagram`}),`, `,(0,c.jsx)(t.code,{children:`line`}),`, `,(0,c.jsx)(t.code,{children:`linkedin`}),`, `,(0,c.jsx)(t.code,{children:`medium`}),`, `,(0,c.jsx)(t.code,{children:`messenger`}),`, `,(0,c.jsx)(t.code,{children:`ok`}),`, `,(0,c.jsx)(t.code,{children:`pinterest`}),`, `,(0,c.jsx)(t.code,{children:`qq`}),`, `,(0,c.jsx)(t.code,{children:`reddit`}),`, `,(0,c.jsx)(t.code,{children:`skype`}),`, `,(0,c.jsx)(t.code,{children:`snapchat`}),`, `,(0,c.jsx)(t.code,{children:`telegram`}),`, `,(0,c.jsx)(t.code,{children:`tiktok`}),`, `,(0,c.jsx)(t.code,{children:`tumblr`}),`, `,(0,c.jsx)(t.code,{children:`twitter`}),`, `,(0,c.jsx)(t.code,{children:`viber`}),`, `,(0,c.jsx)(t.code,{children:`vk`}),`, `,(0,c.jsx)(t.code,{children:`wechat`}),`, `,(0,c.jsx)(t.code,{children:`weibo`}),`, `,(0,c.jsx)(t.code,{children:`whatsapp`}),`, `,(0,c.jsx)(t.code,{children:`x`}),`, `,(0,c.jsx)(t.code,{children:`xiaohongshu`}),`, `,(0,c.jsx)(t.code,{children:`youtube`}),`, `,(0,c.jsx)(t.code,{children:`zalo`}),`, `,(0,c.jsx)(t.code,{children:`zhihu`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Построение полной ссылки на профиль по логину
const profileUrl = MediaSocial.getUrl(InputSocialType.github, 'dxtmisha')
// Результат: 'https://github.com/dxtmisha'

// Извлечение логина из полной ссылки на профиль
const username = MediaSocial.getValue(InputSocialType.telegram, 'https://t.me/dxtmisha')
// Результат: 'dxtmisha'

// Получение объекта конфигурации
const githubConfig = MediaSocial.get(InputSocialType.github)
console.log(githubConfig?.name) // 'GitHub'
console.log(githubConfig?.prefix) // 'https://github.com/'

// Переопределение или добавление кастомной иконки
MediaSocial.addIcon(InputSocialType.telegram, '<svg class="custom-tg">...</svg>')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};