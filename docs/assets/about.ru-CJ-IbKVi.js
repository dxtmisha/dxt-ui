import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/media/# О библиотеке`}),`
`,(0,c.jsx)(t.h1,{id:`dxtmishamedia`,children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/media`,rel:`nofollow`,children:`@dxtmisha/media`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` — это легковесный пакет медиаресурсов, векторных иконок и географических данных для дизайн-системы DXT UI и современных веб-приложений. Он объединяет классификацию форматов файлов, метаданные социальных сетей, векторные флаги стран и географические справочники ISO 3166-1 в модульной структуре с поддержкой tree-shaking и нулевыми внешними зависимостями.`]}),`
`,(0,c.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,c.jsx)(t.p,{children:`Установите пакет через npm:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm i @dxtmisha/media
`})}),`
`,(0,c.jsx)(t.h2,{id:`зачем-нужна-эта-библиотека`,children:`Зачем нужна эта библиотека?`}),`
`,(0,c.jsx)(t.p,{children:`Любое современное веб-приложение решает повторяющиеся задачи: обработка файлов, ввод профилей социальных сетей, международная локализация (выбор страны, телефонные коды, флаги). Ручное хранение разрозненных наборов SVG, дублирование MIME-типов и копирование списков стран между проектами неизбежно приводит к ошибкам и раздуванию кодовой базы.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` решает эти задачи в рамках единой, оптимизированной библиотеки:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ноль внешних зависимостей`}),` — только оптимизированные SVG-ассеты, чистые данные и легковесные TypeScript-классы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tree-shaking и модульные экспорты`}),` — подключайте только нужные словари, флаги или утилиты без лишнего веса в бандле.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изоморфность и безопасность для SSR`}),` — библиотека полностью фреймворк-агностична и работает одинаково надежно в Vue 3, Nuxt, React, Vite и Node.js.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsx)(t.h3,{id:`1-классификация-файлов-и-векторные-иконки`,children:`1. Классификация файлов и векторные иконки`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaFile`})}),` — парсинг URL, путей, расширений и браузерных объектов `,(0,c.jsx)(t.code,{children:`File`}),`. Извлекает базовые имена файлов, определяет категории (изображения, видео, документы, архивы и др.) и подбирает соответствующие векторные SVG-иконки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaFiles`})}),` — статический каталог форматов: поиск по более чем 85 расширениям, сопоставление по MIME-типам и предоставление нейтральных иконок категорий.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaFileIcon`})}),` — реестр кастомных иконок для переопределения и глобальной регистрации пользовательской SVG-графики.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`fileIcons`}),` и `,(0,c.jsx)(t.code,{children:`registerFileIcons`})]}),` — доступ ко всему каталогу иконок через словарь `,(0,c.jsx)(t.code,{children:`fileIcons`}),` или их мгновенная регистрация в `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` через `,(0,c.jsx)(t.code,{children:`registerFileIcons`}),` из `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/files`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-социальные-сети-и-профили`,children:`2. Социальные сети и профили`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaSocial`})}),` — поддержка более 35 глобальных и региональных социальных платформ (GitHub, Telegram, LinkedIn, X, WeChat, Zalo и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Помощники ссылок`}),` — генерация канонических ссылок на профили по логину (`,(0,c.jsx)(t.code,{children:`getUrl`}),`) и извлечение чистого имени пользователя из URL (`,(0,c.jsx)(t.code,{children:`getValue`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`socialIcons`}),` и `,(0,c.jsx)(t.code,{children:`registerSocialIcons`})]}),` — доступ к словарю брендовых векторных иконок через `,(0,c.jsx)(t.code,{children:`socialIcons`}),` или их регистрация в реестре `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` с помощью `,(0,c.jsx)(t.code,{children:`registerSocialIcons`}),` из `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/socials`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-флаги-стран-и-географические-данные`,children:`3. Флаги стран и географические данные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Более 250 флагов стран`}),` — векторные SVG-флаги для всех территорий стандарта ISO 3166-1 alpha-2 через `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/flags`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оптимизированный WebP-спрайт`}),` — единый растровый спрайт (`,(0,c.jsx)(t.code,{children:`flags.webp`}),`) со стилями (`,(0,c.jsx)(t.code,{children:`style.css`}),`) для максимальной производительности в длинных списках и селекторах стран.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Географический справочник (`,(0,c.jsx)(t.code,{children:`geo.json`}),`)`]}),` — названия стран, коды ISO, международные телефонные коды, маски ввода номеров и часовые пояса.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`модульные-экспорты`,children:`Модульные экспорты`}),`
`,(0,c.jsx)(t.p,{children:`Пакет разделен на независимые субпути для точечного импорта:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Основная точка входа (классы, каталоги, гео-данные)
import { MediaFile, MediaFiles, MediaSocial, geo } from '@dxtmisha/media'

// Словарь иконок файлов и функция пакетной регистрации
import { fileIcons, registerFileIcons } from '@dxtmisha/media/files'

// Прямой импорт векторных флагов
import { UsSvg, VnSvg, RuSvg } from '@dxtmisha/media/flags'

// Словарь иконок соцсетей и функция пакетной регистрации
import { socialIcons, registerSocialIcons } from '@dxtmisha/media/socials'
`})}),`
`,(0,c.jsx)(t.h2,{id:`принципы-разработки`,children:`Принципы разработки`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Zero Dependencies`}),` — полностью автономная библиотека без сторонних пакетов в runtime.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Строгая типизация`}),` — полная TypeScript-типизация, перечисления (`,(0,c.jsx)(t.code,{children:`MediaFileCategory`}),`, `,(0,c.jsx)(t.code,{children:`MediaFileGroup`}),`, `,(0,c.jsx)(t.code,{children:`InputSocialType`}),`) и интерфейсы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фокус на производительности`}),` — минимальный размер и возможность импортировать ассеты по отдельности.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Готовность к SSR`}),` — предсказуемое выполнение на клиенте и сервере без обращения к DOM-глобалам.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/media`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/media`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};