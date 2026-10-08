import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/media/2. Социальные сети`}),`
`,(0,c.jsx)(t.h1,{id:`социальные-сети-подключение-и-интеграция`,children:`Социальные сети: подключение и интеграция`}),`
`,(0,c.jsxs)(t.p,{children:[`Пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` включает комплексную подсистему работы с социальными сетями, охватывающую более 35 международных и региональных платформ (GitHub, Telegram, LinkedIn, X, WeChat, Zalo, Discord, YouTube и др.). Она предоставляет официальные векторные SVG-иконки брендов, префиксы и суффиксы для ссылок, извлечение логинов, маски ввода и динамическую замену иконок.`]}),`
`,(0,c.jsx)(t.h2,{id:`способы-подключения`,children:`Способы подключения`}),`
`,(0,c.jsx)(t.p,{children:`В зависимости от задач вашего приложения доступны три основных способа интеграции социальных ресурсов:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Словарь иконок и регистрация (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/socials`}),`)`]}),` — использование полного словаря `,(0,c.jsx)(t.code,{children:`socialIcons`}),` по ключам платформ или пакетная инициализация через `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Формирование и парсинг URL через `,(0,c.jsx)(t.code,{children:`MediaSocial`})]}),` — автоматическое построение канонических ссылок (`,(0,c.jsx)(t.code,{children:`getUrl`}),`) и извлечение чистых логинов (`,(0,c.jsx)(t.code,{children:`getValue`}),`) для профилей и полей ввода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реестр кастомных иконок`}),` — глобальная замена встроенных SVG-иконок соцсетей или регистрация корпоративных стилей для всех компонентов приложения.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`модуль-socialsts-dxtmishamediasocials`,children:[`Модуль `,(0,c.jsx)(t.code,{children:`socials.ts`}),` (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/socials`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Модуль `,(0,c.jsx)(t.code,{children:`socials.ts`}),` служит основным источником векторных SVG-иконок брендов в пакете. Он экспортирует:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Словарь `,(0,c.jsx)(t.code,{children:`socialIcons`}),`, в котором иконки сопоставлены с кодами перечисления `,(0,c.jsx)(t.code,{children:`InputSocialType`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Функцию пакетной инициализации `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Обратите внимание: отдельные иконки соцсетей не экспортируются в виде отдельных переменных; доступ ко всем SVG осуществляется через словарь `,(0,c.jsx)(t.code,{children:`socialIcons`}),` либо динамически через методы класса `,(0,c.jsx)(t.code,{children:`MediaSocial`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-функция-registersocialicons`,children:[`1. Функция `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Функция `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),` автоматически регистрирует все 35+ стандартных брендовых SVG-иконок из словаря `,(0,c.jsx)(t.code,{children:`socialIcons`}),` в статическом реестре `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` за один вызов:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { registerSocialIcons } from '@dxtmisha/media/socials'

// Регистрирует все стандартные иконки соцсетей в реестре MediaSocial
registerSocialIcons()
`})}),`
`,(0,c.jsxs)(t.p,{children:[`После вызова этой функции метод `,(0,c.jsx)(t.code,{children:`MediaSocial.get(code)`}),` сразу же возвращает зарегистрированную SVG-иконку, которую автоматически подхватывают компоненты формы, такие как `,(0,c.jsx)(t.code,{children:`D1InputSocial`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-словарь-socialicons`,children:[`2. Словарь `,(0,c.jsx)(t.code,{children:`socialIcons`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Объект `,(0,c.jsx)(t.code,{children:`socialIcons`}),` представляет собой типизированный словарь (`,(0,c.jsx)(t.code,{children:`InputSocialIcons`}),`), ключами которого выступают значения перечисления `,(0,c.jsx)(t.code,{children:`InputSocialType`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { socialIcons } from '@dxtmisha/media/socials'
import { InputSocialType } from '@dxtmisha/media'

// Прямой доступ к иконке бренда по ключу перечисления
const githubSvg = socialIcons[InputSocialType.github]
const telegramSvg = socialIcons[InputSocialType.telegram]
const linkedinSvg = socialIcons[InputSocialType.linkedin]
`})}),`
`,(0,c.jsx)(t.p,{children:`В шаблонах Vue 3:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="social-links">
    <a href="https://github.com/dxtmisha" target="_blank" v-html="socialIcons['github']" />
    <a href="https://t.me/dxtmisha" target="_blank" v-html="socialIcons['telegram']" />
  </div>
</template>

<script setup lang="ts">
import { socialIcons } from '@dxtmisha/media/socials'
<\/script>
`})}),`
`,(0,c.jsxs)(t.h2,{id:`управление-url-через-mediasocial`,children:[`Управление URL через `,(0,c.jsx)(t.code,{children:`MediaSocial`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` берет на себя рутину построения ссылок на профили и извлечения логинов, избавляя от написания регулярных выражений.`]}),`
`,(0,c.jsxs)(t.h3,{id:`построение-ссылки-на-профиль-geturl`,children:[`Построение ссылки на профиль (`,(0,c.jsx)(t.code,{children:`getUrl`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Создает полную ссылку на профиль пользователя по коду соцсети и логину:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Возвращает 'https://github.com/dxtmisha'
const githubUrl = MediaSocial.getUrl(InputSocialType.github, 'dxtmisha')

// Возвращает 'https://t.me/dxtmisha'
const tgUrl = MediaSocial.getUrl(InputSocialType.telegram, 'dxtmisha')

// Если значение уже содержит префикс платформы, оно возвращается без изменений
const existingUrl = MediaSocial.getUrl(InputSocialType.github, 'https://github.com/dxtmisha')
// Возвращает: 'https://github.com/dxtmisha'
`})}),`
`,(0,c.jsxs)(t.h3,{id:`извлечение-логина-getvalue`,children:[`Извлечение логина (`,(0,c.jsx)(t.code,{children:`getValue`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Извлекает чистое имя пользователя из полной ссылки на профиль, удаляя префикс и суффикс платформы:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Возвращает 'dxtmisha'
const username = MediaSocial.getValue(InputSocialType.telegram, 'https://t.me/dxtmisha')

// Возвращает 'dxtmisha'
const githubUser = MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha')
`})}),`
`,(0,c.jsx)(t.h2,{id:`регистрация-кастомных-иконок-соцсетей`,children:`Регистрация кастомных иконок соцсетей`}),`
`,(0,c.jsxs)(t.p,{children:[`Если в вашем дизайне используются монохромные, инвертированные или особые корпоративные варианты иконок, зарегистрируйте их с помощью `,(0,c.jsx)(t.code,{children:`MediaSocial.addIcon`}),` или `,(0,c.jsx)(t.code,{children:`MediaSocial.addIcons`}),`:`]}),`
`,(0,c.jsx)(t.h3,{id:`замена-одной-иконки`,children:`Замена одной иконки`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Переопределение иконки Telegram кастомной разметкой
MediaSocial.addIcon(
  InputSocialType.telegram,
  '<svg class="custom-telegram" viewBox="0 0 24 24"><path d="..."/></svg>'
)
`})}),`
`,(0,c.jsx)(t.h3,{id:`пакетная-замена`,children:`Пакетная замена`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

MediaSocial.addIcons({
  [InputSocialType.github]: '<svg class="brand-gh">...</svg>',
  [InputSocialType.x]: '<svg class="brand-x">...</svg>'
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`После регистрации любой компонент, обращающийся к `,(0,c.jsx)(t.code,{children:`MediaSocial.get(code)`}),` или использующий `,(0,c.jsx)(t.code,{children:`D1InputSocial`}),`, автоматически отобразит вашу кастомную иконку.`]}),`
`,(0,c.jsx)(t.h2,{id:`запросы-к-каталогу-соцсетей-и-метаданным`,children:`Запросы к каталогу соцсетей и метаданным`}),`
`,(0,c.jsx)(t.p,{children:`Вы можете запросить список всех поддерживаемых платформ или конфигурацию отдельной сети:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Получение конфигурации отдельной платформы
const linkedin = MediaSocial.get(InputSocialType.linkedin)
console.log(linkedin?.name)   // 'LinkedIn'
console.log(linkedin?.prefix) // 'https://www.linkedin.com/in/'
console.log(linkedin?.icon)   // Векторная строка SVG

// Получение массива всех поддерживаемых сетей (35+ платформ)
const allSocials = MediaSocial.getList()
`})}),`
`,(0,c.jsx)(t.h2,{id:`интеграция-с-компонентами-дизайн-системы`,children:`Интеграция с компонентами дизайн-системы`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MediaSocial`}),` органично работает в сочетании с компонентами ввода, такими как `,(0,c.jsx)(t.code,{children:`D1InputSocial`}),` в `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <d1-input-social
    v-model="socialHandle"
    :type="InputSocialType.telegram"
    label="Имя пользователя Telegram"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputSocialType } from '@dxtmisha/media'

const socialHandle = ref('dxtmisha')
<\/script>
`})}),`
`,(0,c.jsx)(t.h2,{id:`справочник-поддерживаемых-платформ`,children:`Справочник поддерживаемых платформ`}),`
`,(0,c.jsxs)(t.p,{children:[`Перечисление `,(0,c.jsx)(t.code,{children:`InputSocialType`}),` определяет более 35 поддерживаемых сетей:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`GitHub (`,(0,c.jsx)(t.code,{children:`github`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://github.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Telegram (`,(0,c.jsx)(t.code,{children:`telegram`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://t.me/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`LinkedIn (`,(0,c.jsx)(t.code,{children:`linkedin`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.linkedin.com/in/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`X / Twitter (`,(0,c.jsx)(t.code,{children:`x`}),`, `,(0,c.jsx)(t.code,{children:`twitter`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://x.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Discord (`,(0,c.jsx)(t.code,{children:`discord`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://discord.gg/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`YouTube (`,(0,c.jsx)(t.code,{children:`youtube`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.youtube.com/@`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Instagram (`,(0,c.jsx)(t.code,{children:`instagram`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.instagram.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Facebook (`,(0,c.jsx)(t.code,{children:`facebook`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.facebook.com/`})]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsxs)(t.strong,{children:[`WeChat (`,(0,c.jsx)(t.code,{children:`wechat`}),`)`]})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Zalo (`,(0,c.jsx)(t.code,{children:`zalo`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://zalo.me/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`VK (`,(0,c.jsx)(t.code,{children:`vk`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://vk.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`TikTok (`,(0,c.jsx)(t.code,{children:`tiktok`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.tiktok.com/@`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Reddit (`,(0,c.jsx)(t.code,{children:`reddit`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.reddit.com/user/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Medium (`,(0,c.jsx)(t.code,{children:`medium`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://medium.com/@`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};