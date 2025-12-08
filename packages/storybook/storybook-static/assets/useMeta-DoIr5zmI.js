import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/ru/Composables/useMeta"}),`
`,e.jsx(n.h1,{id:"композабл-usemeta",children:"Композабл useMeta"}),`
`,e.jsx(n.p,{children:"Композабл для управления мета-тегами страницы в Vue 3 приложениях. Предоставляет реактивный интерфейс для работы с SEO-тегами, Open Graph и Twitter Card с автоматической синхронизацией DOM. Использует паттерн singleton — все компоненты работают с единым состоянием мета-тегов."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивное управление мета-тегами"})," — автоматическое обновление DOM при изменении значений"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton паттерн"})," — единое состояние мета-тегов для всего приложения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SEO поддержка"})," — управление title, description, keywords, canonical, robots, author"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Open Graph"})," — полная поддержка Open Graph протокола для социальных сетей"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Twitter Card"})," — интеграция Twitter Card для оптимального отображения в Twitter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SSR поддержка"})," — генерация HTML строки для серверного рендеринга"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript поддержка"})," — полная типизация всех свойств и методов"]}),`
`]}),`
`,e.jsx(n.h2,{id:"базовое-использование",children:"Базовое использование"}),`
`,e.jsx(n.h3,{id:"простое-управление-мета-тегами",children:"Простое управление мета-тегами"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useMeta } from '@dxtmisha/functional'

// Получаем реактивные refs для управления мета-тегами
const { title, description, keyword } = useMeta()

// Устанавливаем значения
title.value = 'Главная страница'
description.value = 'Описание главной страницы сайта'
keyword.value = 'ключевые, слова, сайта'
`})}),`
`,e.jsx(n.h3,{id:"использование-в-компоненте",children:"Использование в компоненте"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { onMounted } from 'vue'

const { title, description, image, canonical } = useMeta()

onMounted(() => {
  title.value = 'О компании'
  description.value = 'Узнайте больше о нашей компании'
  image.value = 'https://example.com/about-image.jpg'
  canonical.value = 'https://example.com/about'
})
<\/script>

<template>
  <div>
    <h1>О компании</h1>
    <p>Контент страницы...</p>
  </div>
</template>
`})}),`
`,e.jsx(n.h2,{id:"возвращаемые-значения",children:"Возвращаемые значения"}),`
`,e.jsx(n.h3,{id:"meta",children:e.jsx(n.code,{children:"meta"})}),`
`,e.jsx(n.p,{children:"Экземпляр класса Meta для расширенных операций."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Meta"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { meta } = useMeta()

// Доступ к расширенным методам
meta.setLocale('ru_RU')
meta.setSuffix('Мой Сайт')

// Получение дочерних классов для детальной настройки
const og = meta.getOg()
const twitter = meta.getTwitter()
`})}),`
`,e.jsx(n.h3,{id:"title",children:e.jsx(n.code,{children:"title"})}),`
`,e.jsx(n.p,{children:"Реактивный заголовок страницы (без суффикса)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { title } = useMeta()

title.value = 'Новый заголовок'
// Автоматически обновляет:
// - document.title (с суффиксом, если установлен)
// - Open Graph og:title
// - Twitter Card twitter:title
`})}),`
`,e.jsx(n.h3,{id:"keyword",children:e.jsx(n.code,{children:"keyword"})}),`
`,e.jsx(n.p,{children:"Реактивный мета-тег keywords."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { keyword } = useMeta()

keyword.value = 'vue, композабл, мета-теги, seo'
// Обновляет <meta name="keywords" content="...">
`})}),`
`,e.jsx(n.h3,{id:"description",children:e.jsx(n.code,{children:"description"})}),`
`,e.jsx(n.p,{children:"Реактивный мета-тег description."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { description } = useMeta()

description.value = 'Полное описание страницы для поисковых систем'
// Обновляет <meta name="description" content="...">
`})}),`
`,e.jsx(n.h3,{id:"image",children:e.jsx(n.code,{children:"image"})}),`
`,e.jsx(n.p,{children:"Реактивный URL изображения для Open Graph и Twitter Card."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { image } = useMeta()

image.value = 'https://example.com/preview.jpg'
// Автоматически обновляет:
// - Open Graph og:image
// - Twitter Card twitter:image
`})}),`
`,e.jsx(n.h3,{id:"canonical",children:e.jsx(n.code,{children:"canonical"})}),`
`,e.jsx(n.p,{children:"Реактивный канонический URL."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { canonical } = useMeta()

canonical.value = 'https://example.com/page'
// Автоматически обновляет:
// - <link rel="canonical" href="...">
// - Open Graph og:url
// - Twitter Card twitter:url
`})}),`
`,e.jsx(n.h3,{id:"robots",children:e.jsx(n.code,{children:"robots"})}),`
`,e.jsx(n.p,{children:"Реактивная директива мета-тега robots."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<MetaRobots>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { robots } = useMeta()

robots.value = 'index, follow'
// Другие варианты: 'noindex', 'nofollow', 'noindex, nofollow'
// Обновляет <meta name="robots" content="...">
`})}),`
`,e.jsx(n.h3,{id:"author",children:e.jsx(n.code,{children:"author"})}),`
`,e.jsx(n.p,{children:"Реактивный мета-тег author."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { author } = useMeta()

author.value = 'Иван Иванов'
// Обновляет <meta name="author" content="...">
`})}),`
`,e.jsx(n.h3,{id:"sitename",children:e.jsx(n.code,{children:"siteName"})}),`
`,e.jsx(n.p,{children:"Реактивное название сайта для Open Graph и Twitter Card."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"Ref<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { siteName } = useMeta()

siteName.value = 'Мой Сайт'
// Автоматически обновляет:
// - Open Graph og:site_name
// - Twitter Card twitter:site
`})}),`
`,e.jsx(n.h3,{id:"gethtmlmeta",children:e.jsx(n.code,{children:"getHtmlMeta"})}),`
`,e.jsx(n.p,{children:"Функция для генерации HTML строки со всеми мета-тегами (для SSR)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Тип:"})," ",e.jsx(n.code,{children:"() => string"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { getHtmlMeta } = useMeta()

// Генерирует HTML строку со всеми мета-тегами
const metaHtml = getHtmlMeta()
// Возвращает: '<meta name="description" content="..."><meta property="og:title" content="...">...'
`})}),`
`,e.jsx(n.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,e.jsx(n.h3,{id:"динамические-мета-теги-на-основе-данных",children:"Динамические мета-теги на основе данных"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { ref, watch } from 'vue'
import { useMeta } from '@dxtmisha/functional'
import { useApiRef } from '@dxtmisha/functional'

const articleId = ref(1)
const { data: article } = useApiRef(
  computed(() => \`/api/articles/\${articleId.value}\`)
)

const { title, description, image, author, canonical } = useMeta()

watch(article, (newArticle) => {
  if (newArticle) {
    title.value = newArticle.title
    description.value = newArticle.excerpt
    image.value = newArticle.coverImage
    author.value = newArticle.authorName
    canonical.value = \`https://example.com/articles/\${newArticle.slug}\`
  }
})
<\/script>

<template>
  <article v-if="article">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </article>
</template>
`})}),`
`,e.jsx(n.h3,{id:"настройка-мета-тегов-для-разных-страниц",children:"Настройка мета-тегов для разных страниц"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()
const { title, description, robots } = useMeta()

const pageMetadata = {
  home: {
    title: 'Главная страница',
    description: 'Добро пожаловать на наш сайт',
    robots: 'index, follow'
  },
  about: {
    title: 'О компании',
    description: 'Узнайте больше о нашей компании',
    robots: 'index, follow'
  },
  admin: {
    title: 'Админ панель',
    description: 'Панель администратора',
    robots: 'noindex, nofollow'
  }
}

watch(
  () => route.name,
  (routeName) => {
    const meta = pageMetadata[routeName] || pageMetadata.home
    title.value = meta.title
    description.value = meta.description
    robots.value = meta.robots
  },
  { immediate: true }
)
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"расширенная-настройка-с-open-graph-и-twitter-card",children:"Расширенная настройка с Open Graph и Twitter Card"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { onMounted } from 'vue'

const { meta, title, description, image, siteName } = useMeta()

onMounted(() => {
  // Основные мета-теги
  title.value = 'Название статьи'
  description.value = 'Краткое описание статьи'
  image.value = 'https://example.com/article-image.jpg'
  siteName.value = 'Мой Блог'

  // Расширенные настройки
  meta.setSuffix('Мой Блог')
  meta.setLocale('ru_RU')

  // Детальная настройка Open Graph
  const og = meta.getOg()
  og.setType('article')

  // Детальная настройка Twitter Card
  const twitter = meta.getTwitter()
  twitter.setCard('summary_large_image')
})
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"ssr-генерация-мета-тегов-на-сервере",children:"SSR: Генерация мета-тегов на сервере"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// server.js
import { useMeta } from '@dxtmisha/functional'

export function renderMetaTags(pageData) {
  const { title, description, image, canonical, getHtmlMeta } = useMeta()

  // Устанавливаем значения
  title.value = pageData.title
  description.value = pageData.description
  image.value = pageData.image
  canonical.value = pageData.url

  // Генерируем HTML строку
  const metaHtml = getHtmlMeta()

  return \`
    <!DOCTYPE html>
    <html>
      <head>
        <title>\${pageData.title}</title>
        \${metaHtml}
      </head>
      <body>
        <!-- контент -->
      </body>
    </html>
  \`
}
`})}),`
`,e.jsx(n.h3,{id:"управление-индексацией-для-разных-окружений",children:"Управление индексацией для разных окружений"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { onMounted } from 'vue'

const { robots } = useMeta()

onMounted(() => {
  // Запрещаем индексацию на dev/staging окружениях
  const isProduction = import.meta.env.PROD
  robots.value = isProduction ? 'index, follow' : 'noindex, nofollow'
})
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"интеграция-с-многоязычностью",children:"Интеграция с многоязычностью"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script setup>
import { useMeta } from '@dxtmisha/functional'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()
const { meta, title, description } = useMeta()

watch(locale, (newLocale) => {
  // Обновляем локаль для Open Graph
  const localeMap = {
    'ru': 'ru_RU',
    'en': 'en_US',
    'de': 'de_DE'
  }
  meta.setLocale(localeMap[newLocale] || 'en_US')

  // Обновляем контент мета-тегов
  title.value = t('meta.title')
  description.value = t('meta.description')
}, { immediate: true })
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"важные-замечания",children:"Важные замечания"}),`
`,e.jsx(n.h3,{id:"singleton-паттерн",children:"Singleton паттерн"}),`
`,e.jsxs(n.p,{children:["Композабл ",e.jsx(n.code,{children:"useMeta"})," использует singleton паттерн, что означает, что все компоненты работают с единым экземпляром мета-тегов. Это полезно для:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Согласованности"})," — изменения в одном компоненте отражаются везде"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Производительности"})," — нет дублирования экземпляров"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Простоты"})," — не нужно передавать состояние между компонентами"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// В любом компоненте приложения
const { title } = useMeta()
title.value = 'Новый заголовок'

// В другом компоненте получим то же значение
const { title: sameTitle } = useMeta()
console.log(sameTitle.value) // 'Новый заголовок'
`})}),`
`,e.jsx(n.h3,{id:"автоматическая-синхронизация",children:"Автоматическая синхронизация"}),`
`,e.jsx(n.p,{children:"Все изменения реактивных свойств автоматически синхронизируются с DOM. Не нужно вызывать дополнительные методы:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const { title, description } = useMeta()

// Эти изменения сразу применяются в DOM
title.value = 'Новый заголовок'
description.value = 'Новое описание'
`})}),`
`,e.jsx(n.h3,{id:"open-graph-и-twitter-card",children:"Open Graph и Twitter Card"}),`
`,e.jsxs(n.p,{children:["При изменении ",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"image"})," и ",e.jsx(n.code,{children:"canonical"})," автоматически обновляются соответствующие теги Open Graph и Twitter Card. Для детальной настройки используйте методы ",e.jsx(n.code,{children:"meta.getOg()"})," и ",e.jsx(n.code,{children:"meta.getTwitter()"}),"."]})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default};
