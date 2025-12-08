import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as s}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/functional/ru/Classes/MetaTwitter"}),`
`,e.jsx(t.h1,{id:"класс-metatwitter",children:"Класс MetaTwitter"}),`
`,e.jsxs(t.p,{children:["Класс для работы с Twitter Card мета-тегами, обеспечивающий красивое отображение контента при публикации ссылок в Twitter (X). Наследует функциональность ",e.jsx(t.code,{children:"MetaManager"})," и предоставляет типобезопасные методы для управления стандартными Twitter Card тегами."]}),`
`,e.jsx(t.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Типобезопасность"})," — строгая типизация для всех Twitter Card тегов и типов карточек"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Автоматическая синхронизация"})," — обновление мета-тегов в ",e.jsx(t.code,{children:"<head>"})," документа"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Поддержка всех типов карточек"})," — summary, summary_large_image, app, player"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Удобный API"})," — специализированные методы для каждого тега"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"SSR совместимость"})," — генерация HTML для серверного рендеринга"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Валидация типов"})," — поддержка всех официальных типов Twitter Cards"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Цепочечные методы"})," — возможность последовательной установки значений"]}),`
`]}),`
`,e.jsx(t.h2,{id:"конструктор",children:"Конструктор"}),`
`,e.jsx(t.h3,{id:"constructor",children:e.jsx(t.code,{children:"constructor"})}),`
`,e.jsx(t.p,{children:"Создает экземпляр MetaTwitter с предустановленным списком всех поддерживаемых Twitter Card тегов. Автоматически считывает существующие теги из DOM."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional'

// Создание экземпляра
const twitter = new MetaTwitter()

// Класс автоматически управляет всеми стандартными Twitter Card тегами:
// twitter:card, twitter:site, twitter:creator, twitter:title,
// twitter:description, twitter:image и другими
`})}),`
`,e.jsx(t.h2,{id:"методы-получения-данных",children:"Методы получения данных"}),`
`,e.jsx(t.h3,{id:"getcard",children:e.jsx(t.code,{children:"getCard"})}),`
`,e.jsx(t.p,{children:"Получает тип Twitter Card."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"MetaTwitterCard"})," — тип карточки"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const cardType = twitter.getCard()
// 'summary_large_image'

// Проверка типа карточки
if (twitter.getCard() === 'summary_large_image') {
  console.log('Карточка с большим изображением')
}

// Условная логика
switch (twitter.getCard()) {
  case 'summary':
    console.log('Обычная карточка')
    break
  case 'summary_large_image':
    console.log('Карточка с большим изображением')
    break
  case 'player':
    console.log('Видео плеер')
    break
}
`})}),`
`,e.jsx(t.h3,{id:"getsite",children:e.jsx(t.code,{children:"getSite"})}),`
`,e.jsx(t.p,{children:"Получает Twitter аккаунт сайта или бренда."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"string"})," — @username сайта"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const site = twitter.getSite()
// '@mywebsite'

// Использование для атрибуции
console.log('Сайт принадлежит:', twitter.getSite())

// Проверка наличия
if (twitter.getSite()) {
  console.log('Twitter аккаунт сайта установлен')
}

// Извлечение имени без @
const username = twitter.getSite().replace('@', '')
`})}),`
`,e.jsx(t.h3,{id:"getcreator",children:e.jsx(t.code,{children:"getCreator"})}),`
`,e.jsx(t.p,{children:"Получает Twitter аккаунт автора контента."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"string"})," — @username автора"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const creator = twitter.getCreator()
// '@john_doe'

// Отображение автора
console.log('Автор:', twitter.getCreator())

// Использование в UI
const authorLink = \`https://twitter.com/\${twitter.getCreator().replace('@', '')}\`

// Проверка авторства
if (twitter.getCreator()) {
  console.log('У контента есть автор')
}
`})}),`
`,e.jsx(t.h3,{id:"geturl",children:e.jsx(t.code,{children:"getUrl"})}),`
`,e.jsx(t.p,{children:"Получает URL страницы для Twitter Card."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"string"})," — URL страницы"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const url = twitter.getUrl()
// 'https://example.com/article/my-post'

// Получение домена
const domain = new URL(twitter.getUrl()).hostname

// Проверка совпадения с текущим URL
if (twitter.getUrl() !== window.location.href) {
  console.warn('Twitter URL не совпадает с текущим')
}

// Создание ссылки для шаринга
const shareUrl = \`https://twitter.com/intent/tweet?url=\${encodeURIComponent(twitter.getUrl())}\`
`})}),`
`,e.jsx(t.h3,{id:"gettitle",children:e.jsx(t.code,{children:"getTitle"})}),`
`,e.jsx(t.p,{children:"Получает заголовок карточки."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"string"})," — заголовок карточки"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const title = twitter.getTitle()
// 'Удивительная статья о веб-разработке'

// Использование для отладки
console.log('Twitter Title:', twitter.getTitle())

// Проверка длины (рекомендуется до 70 символов)
if (twitter.getTitle().length > 70) {
  console.warn('Заголовок слишком длинный для Twitter')
}

// Использование в превью
const previewTitle = twitter.getTitle()
`})}),`
`,e.jsx(t.h3,{id:"getdescription",children:e.jsx(t.code,{children:"getDescription"})}),`
`,e.jsx(t.p,{children:"Получает описание карточки."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"string"})," — описание карточки"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const description = twitter.getDescription()
// 'Подробное руководство по созданию...'

// Проверка длины (рекомендуется до 200 символов)
if (twitter.getDescription().length > 200) {
  console.warn('Описание слишком длинное')
}

// Обрезка для превью
const shortDesc = twitter.getDescription().substring(0, 150) + '...'

// Использование в мета-данных
console.log('Twitter Description:', twitter.getDescription())
`})}),`
`,e.jsx(t.h3,{id:"getimage",children:e.jsx(t.code,{children:"getImage"})}),`
`,e.jsx(t.p,{children:"Получает URL изображения карточки."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"string"})," — URL изображения"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

const imageUrl = twitter.getImage()
// 'https://example.com/images/twitter-card.jpg'

// Предзагрузка изображения
const img = new Image()
img.src = twitter.getImage()

// Проверка наличия
if (!twitter.getImage()) {
  console.warn('Twitter изображение не установлено')
}

// Использование для превью
const previewImage = twitter.getImage()
`})}),`
`,e.jsx(t.h2,{id:"методы-установки-данных",children:"Методы установки данных"}),`
`,e.jsx(t.h3,{id:"setcard",children:e.jsx(t.code,{children:"setCard"})}),`
`,e.jsx(t.p,{children:"Устанавливает тип Twitter Card."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Параметры:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"card: MetaTwitterCard"})," — тип карточки"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Доступные типы:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"summary"})," — карточка-сводка с небольшим изображением"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"summary_large_image"})," — карточка с большим изображением (самый популярный)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"app"})," — карточка приложения (для iOS/Android)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"player"})," — карточка с видео/аудио плеером"]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

const twitter = new MetaTwitter()

// Установка стандартной карточки
twitter.setCard(MetaTwitterCard.summary)

// Карточка с большим изображением (рекомендуется)
twitter.setCard(MetaTwitterCard.summaryLargeImage)

// Для приложений
twitter.setCard(MetaTwitterCard.app)

// Для видео контента
twitter.setCard(MetaTwitterCard.player)

// Условная установка
const cardType = hasLargeImage
  ? MetaTwitterCard.summaryLargeImage
  : MetaTwitterCard.summary

twitter.setCard(cardType)
`})}),`
`,e.jsx(t.h3,{id:"setsite",children:e.jsx(t.code,{children:"setSite"})}),`
`,e.jsx(t.p,{children:"Устанавливает Twitter аккаунт сайта или бренда."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Параметры:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"site: string"})," — @username сайта"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Установка аккаунта сайта
twitter.setSite('@mywebsite')

// Можно без @
twitter.setSite('mywebsite')

// Из конфигурации
twitter.setSite(config.twitterHandle)

// Цепочка методов
twitter
  .setSite('@mywebsite')
  .setCreator('@author')

// Рекомендации:
// - Используйте официальный аккаунт бренда
// - Формат: @username (с @ или без)
// - Twitter будет показывать "via @username" в карточке
`})}),`
`,e.jsx(t.h3,{id:"setcreator",children:e.jsx(t.code,{children:"setCreator"})}),`
`,e.jsx(t.p,{children:"Устанавливает Twitter аккаунт автора контента."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Параметры:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"creator: string"})," — @username автора"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Установка автора
twitter.setCreator('@john_doe')

// Из данных пользователя
twitter.setCreator(article.author.twitterHandle)

// Динамическое обновление
const updateAuthor = (author) => {
  if (author.twitter) {
    twitter.setCreator(author.twitter)
  }
}

// Цепочка
twitter
  .setCreator('@author_name')
  .setTitle('Заголовок статьи')

// Рекомендации:
// - Используйте для атрибуции автора
// - Twitter покажет "by @username"
// - Отличается от site (site - для сайта, creator - для автора)
`})}),`
`,e.jsx(t.h3,{id:"seturl",children:e.jsx(t.code,{children:"setUrl"})}),`
`,e.jsx(t.p,{children:"Устанавливает URL страницы для Twitter Card."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Параметры:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"url: string"})," — URL страницы"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Установка URL
twitter.setUrl('https://example.com/article/my-post')

// Использование текущего URL
twitter.setUrl(window.location.href)

// Очистка query параметров
const cleanUrl = window.location.origin + window.location.pathname
twitter.setUrl(cleanUrl)

// Для SPA
router.afterEach((to) => {
  twitter.setUrl(\`https://example.com\${to.fullPath}\`)
})

// Абсолютный URL из относительного
const absoluteUrl = new URL('/article', window.location.origin).href
twitter.setUrl(absoluteUrl)

// Рекомендации:
// - Всегда используйте абсолютные URL
// - URL должен быть доступен для Twitter бота
// - Избегайте редиректов
`})}),`
`,e.jsx(t.h3,{id:"settitle",children:e.jsx(t.code,{children:"setTitle"})}),`
`,e.jsx(t.p,{children:"Устанавливает заголовок карточки."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Параметры:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"title: string"})," — заголовок карточки"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Установка заголовка
twitter.setTitle('Потрясающая статья о веб-разработке')

// Цепочка методов
twitter
  .setTitle('Новый заголовок')
  .setDescription('Новое описание')

// Динамическое обновление
const updateTitle = (newTitle) => {
  twitter.setTitle(newTitle)
}

// Автоматическая генерация
twitter.setTitle(\`\${article.title} - \${siteName}\`)

// Обрезка длинного заголовка
const maxLength = 70
const shortTitle = article.title.length > maxLength
  ? article.title.substring(0, maxLength - 3) + '...'
  : article.title

twitter.setTitle(shortTitle)

// Рекомендации:
// - Максимум 70 символов
// - Будет отображаться жирным шрифтом
// - Избегайте дублирования с описанием
`})}),`
`,e.jsx(t.h3,{id:"setdescription",children:e.jsx(t.code,{children:"setDescription"})}),`
`,e.jsx(t.p,{children:"Устанавливает описание карточки."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Параметры:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"description: string"})," — описание карточки"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Установка описания
twitter.setDescription('Полное руководство по созданию веб-приложений с использованием современных технологий')

// Обрезка длинного текста
const shortDesc = article.content.substring(0, 200)
twitter.setDescription(shortDesc)

// Удаление HTML тегов
const plainText = article.html.replace(/<[^>]*>/g, '')
twitter.setDescription(plainText.substring(0, 200))

// Из excerpt
twitter.setDescription(article.excerpt || article.content.substring(0, 200))

// Цепочка
twitter
  .setDescription('Описание статьи')
  .setImage('https://example.com/image.jpg')

// Рекомендации:
// - Максимум 200 символов
// - Twitter может обрезать текст
// - Добавляйте call-to-action
// - Избегайте специальных символов
`})}),`
`,e.jsx(t.h3,{id:"setimage",children:e.jsx(t.code,{children:"setImage"})}),`
`,e.jsx(t.p,{children:"Устанавливает URL изображения карточки."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Параметры:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"image: string"})," — URL изображения"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Возвращает:"})," ",e.jsx(t.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const twitter = new MetaTwitter()

// Установка изображения
twitter.setImage('https://example.com/images/twitter-card.jpg')

// Абсолютный URL
const imageUrl = new URL('/images/twitter-image.jpg', window.location.origin).href
twitter.setImage(imageUrl)

// Из данных контента
twitter.setImage(article.featuredImage)

// Fallback изображение
twitter.setImage(article.image || '/images/default-twitter.jpg')

// Для summary карточки (квадратное изображение)
twitter
  .setCard(MetaTwitterCard.summary)
  .setImage('https://example.com/square-image.jpg') // 1:1 ratio

// Для summary_large_image (широкое изображение)
twitter
  .setCard(MetaTwitterCard.summaryLargeImage)
  .setImage('https://example.com/wide-image.jpg') // 2:1 ratio

// Рекомендуемые размеры:
// summary: 120x120 - 1:1 (минимум)
//          280x150 - оптимально
// summary_large_image: 300x157 - минимум
//                      1200x628 - оптимально (как OG)
//                      Ratio 2:1 или 1.91:1
// Форматы: JPG, PNG, WebP, GIF
// Максимальный размер: 5 MB
`})}),`
`,e.jsx(t.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,e.jsx(t.h3,{id:"полная-настройка-страницы-статьи",children:"Полная настройка страницы статьи"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

const twitter = new MetaTwitter()

// Установка всех основных тегов
twitter
  .setCard(MetaTwitterCard.summaryLargeImage)
  .setTitle('Полное руководство по Twitter Cards')
  .setDescription('Узнайте, как правильно настроить Twitter Card теги для вашего сайта и улучшить отображение в Twitter')
  .setUrl('https://example.com/articles/twitter-cards-guide')
  .setImage('https://example.com/images/twitter-guide.jpg')
  .setSite('@mywebsite')
  .setCreator('@author_name')

// Теперь при публикации в Twitter:
// - Отобразится красивая карточка с большим изображением
// - Будет показан заголовок и описание
// - Появится атрибуция "via @mywebsite by @author_name"
`})}),`
`,e.jsx(t.h3,{id:"динамическое-обновление-для-spa",children:"Динамическое обновление для SPA"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`// Vue Router
router.afterEach((to) => {
  const twitter = new MetaTwitter()

  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(to.meta.twitterTitle || to.meta.title)
    .setDescription(to.meta.twitterDescription || to.meta.description)
    .setUrl(\`https://example.com\${to.path}\`)
    .setImage(to.meta.twitterImage || '/images/default-twitter.jpg')
    .setSite('@mywebsite')
})

// React Router
useEffect(() => {
  const twitter = new MetaTwitter()

  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(page.title)
    .setDescription(page.description)
    .setUrl(window.location.href)
    .setImage(page.image)
    .setSite(config.twitterSite)
    .setCreator(page.author?.twitter)

  return () => {
    // Cleanup если необходимо
  }
}, [page])
`})}),`
`,e.jsx(t.h3,{id:"настройка-для-разных-типов-контента",children:"Настройка для разных типов контента"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

const twitter = new MetaTwitter()

// Для блог-поста
const setupBlogPost = (post) => {
  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(post.title)
    .setDescription(post.excerpt)
    .setUrl(\`https://example.com/blog/\${post.slug}\`)
    .setImage(post.coverImage)
    .setSite('@myblog')
    .setCreator(post.author.twitter)
}

// Для новости (с небольшим изображением)
const setupNews = (news) => {
  twitter
    .setCard(MetaTwitterCard.summary)
    .setTitle(news.headline)
    .setDescription(news.summary)
    .setUrl(\`https://example.com/news/\${news.id}\`)
    .setImage(news.thumbnail)
    .setSite('@mynews')
}

// Для видео
const setupVideo = (video) => {
  twitter
    .setCard(MetaTwitterCard.player)
    .setTitle(video.title)
    .setDescription(video.description)
    .setUrl(\`https://example.com/videos/\${video.id}\`)
    .setImage(video.thumbnail)
    .setSite('@myvideos')
}

// Для главной страницы
const setupHomePage = () => {
  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle('Добро пожаловать на наш сайт')
    .setDescription('Лучший контент о веб-разработке и технологиях')
    .setUrl('https://example.com')
    .setImage('https://example.com/images/home-twitter.jpg')
    .setSite('@mywebsite')
}
`})}),`
`,e.jsx(t.h3,{id:"генерация-html-для-ssr",children:"Генерация HTML для SSR"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

// Express.js сервер
app.get('/article/:id', async (req, res) => {
  const article = await getArticle(req.params.id)

  const twitter = new MetaTwitter()
  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(article.title)
    .setDescription(article.excerpt)
    .setUrl(\`https://example.com/article/\${article.id}\`)
    .setImage(article.coverImage)
    .setSite('@mywebsite')
    .setCreator(article.author.twitter)

  const html = \`
    <!DOCTYPE html>
    <html>
      <head>
        <title>\${article.title}</title>
        \${twitter.html()}
      </head>
      <body>
        \${article.content}
      </body>
    </html>
  \`

  res.send(html)
})

// Результат в HTML:
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:title" content="Заголовок статьи">
// <meta property="twitter:description" content="Описание...">
// <meta property="twitter:url" content="https://example.com/article/123">
// <meta property="twitter:image" content="https://example.com/images/cover.jpg">
// <meta property="twitter:site" content="@mywebsite">
// <meta property="twitter:creator" content="@author">
`})}),`
`,e.jsx(t.h3,{id:"комбинирование-с-open-graph",children:"Комбинирование с Open Graph"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaOg, MetaTwitterCard, MetaOpenGraphType } from '@dxtmisha/functional'

const twitter = new MetaTwitter()
const og = new MetaOg()

// Общая функция обновления
const updateSocialMeta = (data) => {
  // Twitter Cards
  twitter
    .setCard(MetaTwitterCard.summaryLargeImage)
    .setTitle(data.title)
    .setDescription(data.description)
    .setUrl(data.url)
    .setImage(data.image)
    .setSite(data.twitterSite)
    .setCreator(data.twitterCreator)

  // Open Graph
  og
    .setType(MetaOpenGraphType.article)
    .setTitle(data.title)
    .setDescription(data.description)
    .setUrl(data.url)
    .setImage(data.image)
    .setSiteName(data.siteName)
    .setLocale('ru_RU')
}

// Использование
updateSocialMeta({
  title: 'Заголовок статьи',
  description: 'Описание статьи',
  url: 'https://example.com/article/123',
  image: 'https://example.com/images/cover.jpg',
  twitterSite: '@mywebsite',
  twitterCreator: '@author',
  siteName: 'Мой Сайт'
})

// Для SSR - объединенный HTML
const allSocialMetaHTML = twitter.html() + og.html()
`})}),`
`,e.jsx(t.h3,{id:"интеграция-с-cms",children:"Интеграция с CMS"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter, MetaTwitterCard } from '@dxtmisha/functional'

// Функция обновления Twitter Card из CMS данных
const updateTwitterFromCMS = (pageData) => {
  const twitter = new MetaTwitter()

  // Определение типа карточки
  const cardMap = {
    'post': MetaTwitterCard.summaryLargeImage,
    'news': MetaTwitterCard.summary,
    'video': MetaTwitterCard.player
  }

  twitter
    .setCard(cardMap[pageData.contentType] || MetaTwitterCard.summaryLargeImage)
    .setTitle(pageData.seo?.twitterTitle || pageData.title)
    .setDescription(pageData.seo?.twitterDescription || pageData.excerpt)
    .setUrl(pageData.canonicalUrl)
    .setImage(pageData.seo?.twitterImage || pageData.featuredImage)
    .setSite(pageData.site.twitterHandle)

  // Добавление автора если есть
  if (pageData.author?.twitter) {
    twitter.setCreator(pageData.author.twitter)
  }

  return twitter
}

// Использование
const page = await cms.getPage(pageId)
updateTwitterFromCMS(page)
`})}),`
`,e.jsx(t.h3,{id:"валидация-и-отладка",children:"Валидация и отладка"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional'

const twitter = new MetaTwitter()

// Проверка обязательных полей
const validateTwitterCard = () => {
  const errors = []

  if (!twitter.getCard()) errors.push('Отсутствует twitter:card')
  if (!twitter.getTitle()) errors.push('Отсутствует twitter:title')
  if (!twitter.getDescription()) errors.push('Отсутствует twitter:description')
  if (!twitter.getImage()) errors.push('Отсутствует twitter:image')

  // Проверка длины
  if (twitter.getTitle().length > 70) {
    errors.push('twitter:title слишком длинный (>70 символов)')
  }

  if (twitter.getDescription().length > 200) {
    errors.push('twitter:description слишком длинное (>200 символов)')
  }

  if (errors.length > 0) {
    console.error('Twitter Card ошибки:', errors)
  }

  return errors.length === 0
}

// Вывод всех Twitter Card тегов для отладки
const debugTwitterCard = () => {
  console.group('Twitter Card Tags')
  console.log('Card Type:', twitter.getCard())
  console.log('Title:', twitter.getTitle())
  console.log('Description:', twitter.getDescription())
  console.log('Image:', twitter.getImage())
  console.log('URL:', twitter.getUrl())
  console.log('Site:', twitter.getSite())
  console.log('Creator:', twitter.getCreator())
  console.groupEnd()
}

// Экспорт для тестирования
const exportTwitterData = () => {
  return twitter.getItems()
}

// Проверка перед публикацией
const checkBeforePublish = () => {
  const isValid = validateTwitterCard()

  if (isValid) {
    console.log('✓ Twitter Card настроен правильно')
  } else {
    console.warn('⚠ Twitter Card требует внимания')
    debugTwitterCard()
  }

  return isValid
}
`})}),`
`,e.jsx(t.h2,{id:"рекомендации-по-использованию",children:"Рекомендации по использованию"}),`
`,e.jsx(t.h3,{id:"обязательные-теги",children:"Обязательные теги"}),`
`,e.jsx(t.p,{children:"Для корректного отображения Twitter Card необходимо установить минимум:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"twitter:card"})," — тип карточки"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"twitter:title"})," — заголовок"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"twitter:description"})," — описание"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"twitter:image"})," — изображение"]}),`
`]}),`
`,e.jsx(t.h3,{id:"размеры-изображений",children:"Размеры изображений"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"summary карточка:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Рекомендуемый размер:"})," 120×120 px (минимум)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Оптимальный размер:"})," 280×150 px"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Соотношение сторон:"})," 1:1 (квадратное)"]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"summary_large_image карточка:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Минимальный размер:"})," 300×157 px"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Оптимальный размер:"})," 1200×628 px (как Open Graph)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Соотношение сторон:"})," 2:1 или 1.91:1"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Максимальный размер файла:"})," 5 MB"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Форматы:"})," JPG, PNG, WebP, GIF"]}),`
`]}),`
`,e.jsx(t.h3,{id:"длина-текста",children:"Длина текста"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:title:"})," до 70 символов"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:description:"})," до 200 символов"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:site:"})," @username формат"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:creator:"})," @username формат"]}),`
`]}),`
`,e.jsx(t.h3,{id:"атрибуты-username",children:"Атрибуты @username"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:site"})," — официальный Twitter аккаунт сайта/бренда",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:'Показывается как "via @username"'}),`
`,e.jsx(t.li,{children:"Используется для атрибуции сайта"}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"twitter:creator"})," — Twitter аккаунт автора контента",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:'Показывается как "by @username"'}),`
`,e.jsx(t.li,{children:"Используется для атрибуции автора"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.h3,{id:"тестирование",children:"Тестирование"}),`
`,e.jsx(t.p,{children:"Проверяйте Twitter Card теги с помощью:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://cards-dev.twitter.com/validator",rel:"nofollow",children:"Twitter Card Validator"})," (старая версия)"]}),`
`,e.jsx(t.li,{children:"Тестируйте, публикуя тестовую ссылку в Twitter"}),`
`,e.jsx(t.li,{children:"Используйте режим предпросмотра при создании твита"}),`
`]}),`
`,e.jsx(t.h3,{id:"различия-с-open-graph",children:"Различия с Open Graph"}),`
`,e.jsx(t.p,{children:"Twitter Cards может использовать Open Graph теги как fallback:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Если ",e.jsx(t.code,{children:"twitter:title"})," отсутствует, используется ",e.jsx(t.code,{children:"og:title"})]}),`
`,e.jsxs(t.li,{children:["Если ",e.jsx(t.code,{children:"twitter:description"})," отсутствует, используется ",e.jsx(t.code,{children:"og:description"})]}),`
`,e.jsxs(t.li,{children:["Если ",e.jsx(t.code,{children:"twitter:image"})," отсутствует, используется ",e.jsx(t.code,{children:"og:image"})]}),`
`]}),`
`,e.jsx(t.p,{children:"Однако рекомендуется устанавливать Twitter Card теги явно для лучшего контроля."}),`
`,e.jsx(t.h2,{id:"примечания",children:"Примечания"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Класс наследует все методы от ",e.jsx(t.code,{children:"MetaManager"}),", включая ",e.jsx(t.code,{children:"html()"}),", ",e.jsx(t.code,{children:"getItems()"}),", ",e.jsx(t.code,{children:"setByList()"})]}),`
`,e.jsxs(t.li,{children:["Автоматически использует атрибут ",e.jsx(t.code,{children:"property"})," (как и Open Graph)"]}),`
`,e.jsx(t.li,{children:"Все изменения немедленно отражаются в DOM дереве"}),`
`,e.jsx(t.li,{children:"При создании экземпляра автоматически считываются существующие Twitter Card теги из страницы"}),`
`,e.jsxs(t.li,{children:["Для SSR используйте метод ",e.jsx(t.code,{children:"html()"})," для генерации мета-тегов в серверном шаблоне"]}),`
`,e.jsx(t.li,{children:"Содержимое автоматически экранируется для предотвращения XSS"}),`
`,e.jsx(t.li,{children:"Twitter может кэшировать карточки, используйте Card Validator для сброса кэша"}),`
`,e.jsx(t.li,{children:"Поддерживаются все официальные типы Twitter Cards"}),`
`]})]})}function w(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{w as default};
