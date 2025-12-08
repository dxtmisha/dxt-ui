import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/ru/Classes/MetaOg"}),`
`,e.jsx(n.h1,{id:"класс-metaog",children:"Класс MetaOg"}),`
`,e.jsxs(n.p,{children:["Класс для работы с Open Graph мета-тегами, обеспечивающий оптимальное отображение контента при публикации в социальных сетях (Facebook, LinkedIn, VK и других). Наследует функциональность ",e.jsx(n.code,{children:"MetaManager"})," и предоставляет типобезопасные методы для управления стандартными Open Graph тегами."]}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Типобезопасность"})," — строгая типизация для всех Open Graph тегов и типов контента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическая синхронизация"})," — обновление мета-тегов в ",e.jsx(n.code,{children:"<head>"})," документа"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка property"})," — использует атрибут ",e.jsx(n.code,{children:"property"})," вместо ",e.jsx(n.code,{children:"name"})," (стандарт Open Graph)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Удобный API"})," — специализированные методы для каждого тега"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SSR совместимость"})," — генерация HTML для серверного рендеринга"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Валидация типов"})," — поддержка всех официальных типов Open Graph"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Цепочечные методы"})," — возможность последовательной установки значений"]}),`
`]}),`
`,e.jsx(n.h2,{id:"конструктор",children:"Конструктор"}),`
`,e.jsx(n.h3,{id:"constructor",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Создает экземпляр MetaOg с предустановленным списком всех поддерживаемых Open Graph тегов. Автоматически считывает существующие теги из DOM."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg } from '@dxtmisha/functional'

// Создание экземпляра
const og = new MetaOg()

// Класс автоматически управляет всеми стандартными OG тегами:
// og:title, og:type, og:url, og:image, og:description,
// og:locale, og:site_name и другими
`})}),`
`,e.jsx(n.h2,{id:"методы-получения-данных",children:"Методы получения данных"}),`
`,e.jsx(n.h3,{id:"gettitle",children:e.jsx(n.code,{children:"getTitle"})}),`
`,e.jsx(n.p,{children:"Получает заголовок страницы для Open Graph."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})," — заголовок страницы"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const title = og.getTitle()
// 'Заголовок статьи'

// Использование для отладки
console.log('OG Title:', og.getTitle())

// Проверка наличия
if (og.getTitle()) {
  console.log('Заголовок установлен')
}
`})}),`
`,e.jsx(n.h3,{id:"gettype",children:e.jsx(n.code,{children:"getType"})}),`
`,e.jsx(n.p,{children:"Получает тип контента Open Graph."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"MetaOpenGraphType"})," — тип контента (website, article, video и т.д.)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const type = og.getType()
// 'article'

// Проверка типа контента
if (og.getType() === 'article') {
  console.log('Это статья')
}

// Условная логика по типу
switch (og.getType()) {
  case 'article':
    // Логика для статей
    break
  case 'product':
    // Логика для товаров
    break
}
`})}),`
`,e.jsx(n.h3,{id:"geturl",children:e.jsx(n.code,{children:"getUrl"})}),`
`,e.jsx(n.p,{children:"Получает канонический URL страницы."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})," — URL страницы"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const url = og.getUrl()
// 'https://example.com/article/my-post'

// Получение домена
const domain = new URL(og.getUrl()).hostname

// Проверка совпадения с текущим URL
if (og.getUrl() !== window.location.href) {
  console.warn('OG URL не совпадает с текущим')
}
`})}),`
`,e.jsx(n.h3,{id:"getimage",children:e.jsx(n.code,{children:"getImage"})}),`
`,e.jsx(n.p,{children:"Получает URL изображения для превью."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})," — URL изображения"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const imageUrl = og.getImage()
// 'https://example.com/images/preview.jpg'

// Предзагрузка изображения
const img = new Image()
img.src = og.getImage()

// Проверка наличия изображения
if (!og.getImage()) {
  console.warn('OG изображение не установлено')
}
`})}),`
`,e.jsx(n.h3,{id:"getdescription",children:e.jsx(n.code,{children:"getDescription"})}),`
`,e.jsx(n.p,{children:"Получает описание страницы для Open Graph."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})," — описание страницы"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const description = og.getDescription()
// 'Подробное описание статьи...'

// Проверка длины
if (og.getDescription().length > 200) {
  console.warn('Описание слишком длинное')
}

// Использование в превью
const previewText = og.getDescription().substring(0, 100) + '...'
`})}),`
`,e.jsx(n.h3,{id:"getlocale",children:e.jsx(n.code,{children:"getLocale"})}),`
`,e.jsx(n.p,{children:"Получает локаль (язык) контента."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})," — локаль в формате language_TERRITORY"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const locale = og.getLocale()
// 'ru_RU'

// Определение языка
const language = og.getLocale().split('_')[0] // 'ru'

// Использование для локализации
if (og.getLocale().startsWith('ru')) {
  console.log('Русский контент')
}
`})}),`
`,e.jsx(n.h3,{id:"getsitename",children:e.jsx(n.code,{children:"getSiteName"})}),`
`,e.jsx(n.p,{children:"Получает название сайта."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string"})," — название сайта"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

const siteName = og.getSiteName()
// 'Мой Блог'

// Использование в заголовке
document.title = \`\${og.getTitle()} - \${og.getSiteName()}\`

// Проверка бренда
const isBrandSet = og.getSiteName() !== ''
`})}),`
`,e.jsx(n.h2,{id:"методы-установки-данных",children:"Методы установки данных"}),`
`,e.jsx(n.h3,{id:"settitle",children:e.jsx(n.code,{children:"setTitle"})}),`
`,e.jsx(n.p,{children:"Устанавливает заголовок страницы для Open Graph."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title: string"})," — заголовок страницы"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Установка заголовка
og.setTitle('Потрясающая статья о веб-разработке')

// Цепочка методов
og
  .setTitle('Новый заголовок')
  .setDescription('Новое описание')

// Динамическое обновление
const updateTitle = (newTitle) => {
  og.setTitle(newTitle)
}

// Автоматическая генерация
og.setTitle(\`\${article.title} - \${siteName}\`)
`})}),`
`,e.jsx(n.h3,{id:"settype",children:e.jsx(n.code,{children:"setType"})}),`
`,e.jsx(n.p,{children:"Устанавливает тип контента Open Graph."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: MetaOpenGraphType"})," — тип контента"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Доступные типы:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"website"})," — обычный сайт/главная страница"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"article"})," — статья/блог пост"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video"})," — видео контент"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video.movie"})," — фильм"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video.episode"})," — эпизод сериала"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"video.tv_show"})," — сериал"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"music.song"})," — песня"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"music.album"})," — музыкальный альбом"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"music.playlist"})," — плейлист"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"music.radio_station"})," — радиостанция"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"product"})," — товар в магазине"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"book"})," — книга"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"profile"})," — профиль пользователя"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"business.business"})," — компания/организация"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"place"})," — место/локация"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event"})," — событие/мероприятие"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"app"})," — приложение"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

const og = new MetaOg()

// Установка типа статьи
og.setType(MetaOpenGraphType.article)

// Для главной страницы
og.setType(MetaOpenGraphType.website)

// Для товаров в магазине
og.setType(MetaOpenGraphType.product)

// Для видео
og.setType(MetaOpenGraphType.videoMovie)

// Условная установка
const contentType = isArticle
  ? MetaOpenGraphType.article
  : MetaOpenGraphType.website

og.setType(contentType)
`})}),`
`,e.jsx(n.h3,{id:"seturl",children:e.jsx(n.code,{children:"setUrl"})}),`
`,e.jsx(n.p,{children:"Устанавливает канонический URL страницы."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"url: string"})," — URL страницы"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Установка URL
og.setUrl('https://example.com/article/my-post')

// Использование текущего URL
og.setUrl(window.location.href)

// Очистка query параметров
const cleanUrl = window.location.origin + window.location.pathname
og.setUrl(cleanUrl)

// Для SPA
router.afterEach((to) => {
  og.setUrl(\`https://example.com\${to.fullPath}\`)
})

// Абсолютный URL из относительного
const absoluteUrl = new URL('/article', window.location.origin).href
og.setUrl(absoluteUrl)
`})}),`
`,e.jsx(n.h3,{id:"setimage",children:e.jsx(n.code,{children:"setImage"})}),`
`,e.jsx(n.p,{children:"Устанавливает URL изображения для превью."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"url: string"})," — URL изображения"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Установка изображения
og.setImage('https://example.com/images/preview.jpg')

// Абсолютный URL
const imageUrl = new URL('/images/og-image.jpg', window.location.origin).href
og.setImage(imageUrl)

// Из данных контента
og.setImage(article.coverImage)

// Fallback изображение
og.setImage(article.image || '/images/default-og.jpg')

// Рекомендуемые размеры: 1200x630 пикселей
// Минимум: 600x315 пикселей
// Формат: JPG, PNG, WebP
`})}),`
`,e.jsx(n.h3,{id:"setdescription",children:e.jsx(n.code,{children:"setDescription"})}),`
`,e.jsx(n.p,{children:"Устанавливает описание страницы для Open Graph."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"description: string"})," — описание страницы"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Установка описания
og.setDescription('Подробное руководство по созданию веб-приложений с использованием современных технологий')

// Обрезка длинного текста
const shortDesc = article.content.substring(0, 200)
og.setDescription(shortDesc)

// Удаление HTML тегов
const plainText = article.html.replace(/<[^>]*>/g, '')
og.setDescription(plainText.substring(0, 300))

// Рекомендации:
// - Оптимальная длина: 150-300 символов
// - Facebook отображает ~300 символов
// - Избегайте специальных HTML символов
`})}),`
`,e.jsx(n.h3,{id:"setlocale",children:e.jsx(n.code,{children:"setLocale"})}),`
`,e.jsx(n.p,{children:"Устанавливает локаль (язык) контента."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"locale: string"})," — локаль в формате language_TERRITORY"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Установка русской локали
og.setLocale('ru_RU')

// Другие популярные локали
og.setLocale('en_US') // Английский (США)
og.setLocale('en_GB') // Английский (Великобритания)
og.setLocale('uk_UA') // Украинский
og.setLocale('de_DE') // Немецкий
og.setLocale('fr_FR') // Французский
og.setLocale('es_ES') // Испанский
og.setLocale('pt_BR') // Португальский (Бразилия)
og.setLocale('ja_JP') // Японский
og.setLocale('zh_CN') // Китайский (упрощенный)

// Автоматическое определение
const userLocale = navigator.language.replace('-', '_')
og.setLocale(userLocale)

// Из настроек приложения
og.setLocale(i18n.locale.replace('-', '_'))
`})}),`
`,e.jsx(n.h3,{id:"setsitename",children:e.jsx(n.code,{children:"setSiteName"})}),`
`,e.jsx(n.p,{children:"Устанавливает название сайта."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"siteName: string"})," — название сайта"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const og = new MetaOg()

// Установка имени сайта
og.setSiteName('Мой Замечательный Блог')

// Использование константы
const SITE_NAME = 'WebDev Journal'
og.setSiteName(SITE_NAME)

// Из конфигурации
og.setSiteName(config.siteName)

// Примеры хороших названий:
// - Краткие и узнаваемые
// - Соответствуют бренду
// - Без дополнительных символов
`})}),`
`,e.jsx(n.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,e.jsx(n.h3,{id:"полная-настройка-страницы-статьи",children:"Полная настройка страницы статьи"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

const og = new MetaOg()

// Установка всех основных тегов
og
  .setType(MetaOpenGraphType.article)
  .setTitle('Полное руководство по Open Graph протоколу')
  .setDescription('Узнайте, как правильно настроить Open Graph теги для вашего сайта и улучшить отображение в социальных сетях')
  .setUrl('https://example.com/articles/open-graph-guide')
  .setImage('https://example.com/images/og-guide-preview.jpg')
  .setLocale('ru_RU')
  .setSiteName('WebDev Blog')

// Теперь при публикации в соцсетях:
// - Facebook покажет красивую карточку
// - LinkedIn подхватит правильное превью
// - VK отобразит изображение и описание
// - Telegram создаст rich preview
`})}),`
`,e.jsx(n.h3,{id:"динамическое-обновление-для-spa",children:"Динамическое обновление для SPA"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Vue Router
router.afterEach((to) => {
  const og = new MetaOg()

  og
    .setTitle(to.meta.ogTitle || to.meta.title)
    .setDescription(to.meta.ogDescription || to.meta.description)
    .setUrl(\`https://example.com\${to.path}\`)
    .setImage(to.meta.ogImage || '/images/default-og.jpg')
})

// React Router
useEffect(() => {
  const og = new MetaOg()

  og
    .setTitle(page.title)
    .setDescription(page.description)
    .setUrl(window.location.href)
    .setImage(page.image)

  return () => {
    // Cleanup если необходимо
  }
}, [page])
`})}),`
`,e.jsx(n.h3,{id:"настройка-для-разных-типов-контента",children:"Настройка для разных типов контента"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

const og = new MetaOg()

// Для главной страницы
const setupHomePage = () => {
  og
    .setType(MetaOpenGraphType.website)
    .setTitle('Главная - Мой Сайт')
    .setDescription('Добро пожаловать на наш сайт')
    .setUrl('https://example.com')
    .setImage('https://example.com/images/home-og.jpg')
}

// Для страницы товара
const setupProductPage = (product) => {
  og
    .setType(MetaOpenGraphType.product)
    .setTitle(product.name)
    .setDescription(product.description)
    .setUrl(\`https://example.com/products/\${product.id}\`)
    .setImage(product.images[0])
}

// Для видео
const setupVideoPage = (video) => {
  og
    .setType(MetaOpenGraphType.videoMovie)
    .setTitle(video.title)
    .setDescription(video.synopsis)
    .setUrl(\`https://example.com/videos/\${video.id}\`)
    .setImage(video.thumbnail)
}

// Для профиля пользователя
const setupProfilePage = (user) => {
  og
    .setType(MetaOpenGraphType.profile)
    .setTitle(\`\${user.name} - Профиль\`)
    .setDescription(user.bio)
    .setUrl(\`https://example.com/users/\${user.username}\`)
    .setImage(user.avatar)
}
`})}),`
`,e.jsx(n.h3,{id:"генерация-html-для-ssr",children:"Генерация HTML для SSR"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

// Express.js сервер
app.get('/article/:id', async (req, res) => {
  const article = await getArticle(req.params.id)

  const og = new MetaOg()
  og
    .setType(MetaOpenGraphType.article)
    .setTitle(article.title)
    .setDescription(article.excerpt)
    .setUrl(\`https://example.com/article/\${article.id}\`)
    .setImage(article.coverImage)
    .setLocale('ru_RU')
    .setSiteName('Мой Блог')

  const html = \`
    <!DOCTYPE html>
    <html>
      <head>
        <title>\${article.title}</title>
        \${og.html()}
      </head>
      <body>
        \${article.content}
      </body>
    </html>
  \`

  res.send(html)
})

// Результат в HTML:
// <meta property="og:type" content="article">
// <meta property="og:title" content="Заголовок статьи">
// <meta property="og:description" content="Описание...">
// <meta property="og:url" content="https://example.com/article/123">
// <meta property="og:image" content="https://example.com/images/cover.jpg">
// <meta property="og:locale" content="ru_RU">
// <meta property="og:site_name" content="Мой Блог">
`})}),`
`,e.jsx(n.h3,{id:"интеграция-с-cms",children:"Интеграция с CMS"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg, MetaOpenGraphType } from '@dxtmisha/functional'

// Функция обновления OG тегов из CMS данных
const updateOGFromCMS = (pageData) => {
  const og = new MetaOg()

  // Определение типа контента
  const typeMap = {
    'post': MetaOpenGraphType.article,
    'page': MetaOpenGraphType.website,
    'product': MetaOpenGraphType.product,
    'video': MetaOpenGraphType.video
  }

  og
    .setType(typeMap[pageData.contentType] || MetaOpenGraphType.website)
    .setTitle(pageData.seo?.ogTitle || pageData.title)
    .setDescription(pageData.seo?.ogDescription || pageData.excerpt)
    .setUrl(pageData.canonicalUrl)
    .setImage(pageData.seo?.ogImage || pageData.featuredImage)
    .setLocale(pageData.locale)
    .setSiteName(pageData.site.name)

  return og
}

// Использование
const page = await cms.getPage(pageId)
updateOGFromCMS(page)
`})}),`
`,e.jsx(n.h3,{id:"валидация-и-отладка",children:"Валидация и отладка"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg } from '@dxtmisha/functional'

const og = new MetaOg()

// Проверка обязательных полей
const validateOG = () => {
  const errors = []

  if (!og.getTitle()) errors.push('Отсутствует og:title')
  if (!og.getType()) errors.push('Отсутствует og:type')
  if (!og.getUrl()) errors.push('Отсутствует og:url')
  if (!og.getImage()) errors.push('Отсутствует og:image')

  if (errors.length > 0) {
    console.error('Open Graph ошибки:', errors)
  }

  return errors.length === 0
}

// Вывод всех OG тегов для отладки
const debugOG = () => {
  console.group('Open Graph Tags')
  console.log('Title:', og.getTitle())
  console.log('Type:', og.getType())
  console.log('URL:', og.getUrl())
  console.log('Image:', og.getImage())
  console.log('Description:', og.getDescription())
  console.log('Locale:', og.getLocale())
  console.log('Site Name:', og.getSiteName())
  console.groupEnd()
}

// Экспорт для тестирования
const exportOGData = () => {
  return og.getItems()
}
`})}),`
`,e.jsx(n.h2,{id:"рекомендации-по-использованию",children:"Рекомендации по использованию"}),`
`,e.jsx(n.h3,{id:"обязательные-теги",children:"Обязательные теги"}),`
`,e.jsx(n.p,{children:"Для корректного отображения в социальных сетях необходимо установить минимум:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"og:title"})," — заголовок страницы"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"og:type"})," — тип контента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"og:url"})," — канонический URL"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"og:image"})," — изображение для превью"]}),`
`]}),`
`,e.jsx(n.h3,{id:"размеры-изображений",children:"Размеры изображений"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Рекомендуемый размер:"})," 1200×630 px (соотношение 1.91:1)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Минимальный размер:"})," 600×315 px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Максимальный размер файла:"})," 8 MB"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Форматы:"})," JPG, PNG, WebP, GIF"]}),`
`]}),`
`,e.jsx(n.h3,{id:"длина-текста",children:"Длина текста"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"og:title:"})," до 60 символов (оптимально: 40)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"og:description:"})," до 200 символов (Facebook), до 300 (LinkedIn)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"og:site_name:"})," краткое название бренда"]}),`
`]}),`
`,e.jsx(n.h3,{id:"локали",children:"Локали"}),`
`,e.jsxs(n.p,{children:["Используйте формат ",e.jsx(n.code,{children:"language_TERRITORY"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Русский: ",e.jsx(n.code,{children:"ru_RU"})]}),`
`,e.jsxs(n.li,{children:["Английский США: ",e.jsx(n.code,{children:"en_US"})]}),`
`,e.jsxs(n.li,{children:["Английский GB: ",e.jsx(n.code,{children:"en_GB"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"тестирование",children:"Тестирование"}),`
`,e.jsx(n.p,{children:"Проверяйте Open Graph теги с помощью:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developers.facebook.com/tools/debug/",rel:"nofollow",children:"Facebook Sharing Debugger"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.linkedin.com/post-inspector/",rel:"nofollow",children:"LinkedIn Post Inspector"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://cards-dev.twitter.com/validator",rel:"nofollow",children:"Twitter Card Validator"})}),`
`]}),`
`,e.jsx(n.h2,{id:"примечания",children:"Примечания"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Класс наследует все методы от ",e.jsx(n.code,{children:"MetaManager"}),", включая ",e.jsx(n.code,{children:"html()"}),", ",e.jsx(n.code,{children:"getItems()"}),", ",e.jsx(n.code,{children:"setByList()"})]}),`
`,e.jsxs(n.li,{children:["Автоматически использует атрибут ",e.jsx(n.code,{children:"property"})," вместо ",e.jsx(n.code,{children:"name"})," (стандарт Open Graph)"]}),`
`,e.jsx(n.li,{children:"Все изменения немедленно отражаются в DOM дереве"}),`
`,e.jsx(n.li,{children:"При создании экземпляра автоматически считываются существующие OG теги из страницы"}),`
`,e.jsxs(n.li,{children:["Для SSR используйте метод ",e.jsx(n.code,{children:"html()"})," для генерации мета-тегов в серверном шаблоне"]}),`
`,e.jsx(n.li,{children:"Содержимое автоматически экранируется для предотвращения XSS"}),`
`,e.jsx(n.li,{children:"Поддерживает все официальные типы Open Graph протокола"}),`
`]})]})}function g(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{g as default};
