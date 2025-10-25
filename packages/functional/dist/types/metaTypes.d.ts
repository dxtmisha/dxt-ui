/**
 * Standard HTML meta tags/
 * Стандартные HTML мета-теги
 * @enum {string}
 */
export declare enum MetaTag {
    /** Page description/ Описание страницы */
    description = "description",
    /** Keywords/ Ключевые слова */
    keywords = "keywords",
    /** Canonical URL/ Канонический URL */
    canonical = "canonical",
    /** Search engine instructions/ Инструкции для поисковиков */
    robots = "robots",
    /** Content author/ Автор контента */
    author = "author"
}
export declare enum MetaRobots {
    /**
     * Allow indexing and following links (default)/
     * Разрешает индексировать страницу и переходить по ссылкам (по умолчанию)
     */
    indexFollow = "index, follow",
    /**
     * Do not index the page, but follow its links/
     * Не индексировать страницу, но переходить по ссылкам
     */
    noIndexFollow = "noindex, follow",
    /**
     * Index the page, but do not follow its links/
     * Индексировать страницу, но не переходить по ссылкам
     */
    indexNoFollow = "index, nofollow",
    /**
     * Do not index the page and do not follow its links/
     * Не индексировать страницу и не переходить по ссылкам
     */
    noIndexNoFollow = "noindex, nofollow",
    /** Prevent caching of the page/ Запрещает кэширование страницы */
    noArchive = "noarchive",
    /**
     * Do not show a snippet or description in search results/
     * Не показывать сниппет (описание) в результатах поиска
     */
    noSnippet = "nosnippet",
    /**
     * Do not display image preview in search results/
     * Не показывать превью изображений в результатах поиска
     */
    noImageIndex = "noimageindex",
    /** Allow indexing images only/ Разрешить индексировать только изображения */
    images = "images",
    /**
     * Do not show cached version or translation link/
     * Не показывать кэш и ссылку "Перевести" в результатах
     */
    noTranslate = "notranslate",
    /**
     * Prevent page being shown in "Preview" (Instant Preview)/
     * Не показывать страницу в предпросмотре (Instant Preview)
     */
    noPreview = "nopreview",
    /**
     * Allow only text content indexing (no media)/
     * Разрешить индексировать только текст, без медиа
     */
    textOnly = "textonly",
    /**
     * Do not index subpages or parameters/
     * Не индексировать подстраницы или страницы с параметрами
     */
    noIndexSubpages = "noindex, noarchive",
    /**
     * Use meta directives from HTTP headers (advanced)/
     * Использовать директивы из HTTP-заголовков (расширенная настройка)
     */
    none = "none"
}
/**
 * Enumeration of Open Graph tags for metadata/
 * Перечисление Open Graph тegов для мета-данных
 * @enum {string}
 */
export declare enum MetaOpenGraphTag {
    /** Page title/ Заголовок страницы */
    title = "og:title",
    /**
     * Content type (website, article, product, video, profile, etc.)/
     * Тип контента (website, article, product, video, profile и т.д.)
     */
    type = "og:type",
    /** Canonical URL of the page/ Канонический URL страницы */
    url = "og:url",
    /** Preview image URL/ Ссылка на изображение для предпросмотра */
    image = "og:image",
    /**
     * Brief page description (up to ~200 characters)/
     * Краткое описание страницы (до ~200 символов)
     */
    description = "og:description",
    /**
     * Page language (e.g., ru_RU, en_US)/
     * Язык страницы (например: ru_RU, en_US)
     */
    locale = "og:locale",
    /** Site name/ Название сайта */
    siteName = "og:site_name",
    /**
     * Alternative language versions (for multilingual sites)/
     * Альтернативные языковые версии (для мультиязычных сайтов)
     */
    localeAlternate = "og:locale:alternate",
    /**
     * Alternative form of og:image/
     * Альтернативная форма записи og:image
     */
    imageUrl = "og:image:url",
    /** HTTPS version of the image/ HTTPS-версия изображения */
    imageSecureUrl = "og:image:secure_url",
    /**
     * Image MIME type (image/jpeg, image/png)/
     * MIME-тип изображения (image/jpeg, image/png)
     */
    imageType = "og:image:type",
    /** Image width in pixels/ Ширина изображения в пикселях */
    imageWidth = "og:image:width",
    /** Image height in pixels/ Высота изображения в пикселях */
    imageHeight = "og:image:height",
    /**
     * Alternative image text (for accessibility)/
     * Альтернативный текст изображения (для доступности)
     */
    imageAlt = "og:image:alt",
    /** Video URL/ Ссылка на видео */
    video = "og:video",
    /** Alternative video URL/ Альтернативная ссылка на видео */
    videoUrl = "og:video:url",
    /** HTTPS version of video/ HTTPS-версия видео */
    videoSecureUrl = "og:video:secure_url",
    /**
     * Video MIME type (video/mp4, video/webm)/
     * MIME-тип видео (video/mp4, video/webm)
     */
    videoType = "og:video:type",
    /** Video width/ Ширина видео */
    videoWidth = "og:video:width",
    /** Video height/ Высота видео */
    videoHeight = "og:video:height",
    /** Audio file URL/ Ссылка на аудиофайл */
    audio = "og:audio",
    /** HTTPS version of audio/ HTTPS-версия аудио */
    audioSecureUrl = "og:audio:secure_url",
    /** Audio MIME type (audio/mpeg)/ MIME-тип аудио (audio/mpeg) */
    audioType = "og:audio:type",
    /** Publication date/ Дата публикации */
    articlePublishedTime = "article:published_time",
    /** Last update date/ Дата последнего обновления */
    articleModifiedTime = "article:modified_time",
    /** Expiration date (if any)/ Дата устаревания (если есть) */
    articleExpirationTime = "article:expiration_time",
    /** Author (URL or name)/ Автор (URL или имя) */
    articleAuthor = "article:author",
    /** Article category/ Категория статьи */
    articleSection = "article:section",
    /** Tags / keywords/ Теги / ключевые слова */
    articleTag = "article:tag",
    /** Book author/ Автор книги */
    bookAuthor = "book:author",
    /** Book ISBN/ ISBN книги */
    bookIsbn = "book:isbn",
    /** Book publication date/ Дата публикации книги */
    bookReleaseDate = "book:release_date",
    /** Topics / tags/ Темы / теги */
    bookTag = "book:tag",
    /**
     * Track duration (in seconds)/
     * Длительность трека (в секундах)
     */
    musicDuration = "music:duration",
    /** Album URL/ Ссылка на альбом */
    musicAlbum = "music:album",
    /** Disc number/ Номер диска */
    musicAlbumDisc = "music:album:disc",
    /** Track number in album/ Номер трека в альбоме */
    musicAlbumTrack = "music:album:track",
    /** Musician/ Исполнитель */
    musicMusician = "music:musician",
    /** Song URL/ Ссылка на песню */
    musicSong = "music:song",
    /**
     * Disc number where the song is/
     * Номер диска, на котором песня
     */
    musicSongDisc = "music:song:disc",
    /** Track number in song/ Номер трека в песне */
    musicSongTrack = "music:song:track",
    /** Release date/ Дата релиза */
    musicReleaseDate = "music:release_date",
    /** Content creator/ Создатель контента */
    musicCreator = "music:creator",
    /** Actor/ Актёр */
    videoActor = "video:actor",
    /** Actor's role/ Роль актёра */
    videoActorRole = "video:actor:role",
    /** Director/ Режиссёр */
    videoDirector = "video:director",
    /** Screenwriter/ Сценарист */
    videoWriter = "video:writer",
    /**
     * Video duration (in seconds)/
     * Длительность видео (в секундах)
     */
    videoDuration = "video:duration",
    /** Video release date/ Дата выхода видео */
    videoReleaseDate = "video:release_date",
    /** Tags / topics/ Теги / темы видео */
    videoTag = "video:tag",
    /**
     * Series to which the episode belongs/
     * Сериал, к которому относится эпизод
     */
    videoSeries = "video:series",
    /** First name/ Имя */
    profileFirstName = "profile:first_name",
    /** Last name/ Фамилия */
    profileLastName = "profile:last_name",
    /** Username / login/ Имя пользователя / логин */
    profileUsername = "profile:username",
    /** Gender (male / female)/ Пол (male / female) */
    profileGender = "profile:gender",
    /** Brand name/ Название бренда */
    productBrand = "product:brand",
    /**
     * Product availability (in stock / out of stock / preorder)/
     * Наличие товара (in stock / out of stock / preorder)
     */
    productAvailability = "product:availability",
    /**
     * Product condition (new / used / refurbished)/
     * Состояние товара (new / used / refurbished)
     */
    productCondition = "product:condition",
    /** Price/ Цена */
    productPriceAmount = "product:price:amount",
    /**
     * Currency (USD, RUB, EUR, etc.)/
     * Валюта (USD, RUB, EUR и т.д.)
     */
    productPriceCurrency = "product:price:currency",
    /** Internal product ID/ Внутренний ID товара */
    productRetailerItemId = "product:retailer_item_id",
    /** Product category/ Категория товара */
    productCategory = "product:category",
    /** EAN code/ EAN код */
    productEan = "product:ean",
    /** ISBN (if product is a book)/ ISBN (если товар — книга) */
    productIsbn = "product:isbn",
    /** Manufacturer part number/ Номер производителя */
    productMfrPartNo = "product:mfr_part_no",
    /** UPC code/ UPC код */
    productUpc = "product:upc",
    /** Weight (value)/ Вес (значение) */
    productWeightValue = "product:weight:value",
    /**
     * Weight (units, e.g., kg)/
     * Вес (единицы измерения, например: kg)
     */
    productWeightUnits = "product:weight:units",
    /** Product color/ Цвет товара */
    productColor = "product:color",
    /** Product material/ Материал товара */
    productMaterial = "product:material",
    /** Pattern / design/ Узор / дизайн */
    productPattern = "product:pattern",
    /**
     * Age group (adult, kids, baby)/
     * Возрастная группа (adult, kids, baby)
     */
    productAgeGroup = "product:age_group",
    /**
     * Gender (for whom — male, female, unisex)/
     * Пол (для кого — male, female, unisex)
     */
    productGender = "product:gender"
}
/**
 * Possible content types for Open Graph (og:type)/
 * Возможные типы контента для Open Graph (og:type)
 */
export declare enum MetaOpenGraphType {
    /**
     * Regular web page or article/
     * Обычная веб-страница или статья
     */
    website = "website",
    /**
     * News article, blog post, or other text material/
     * Новостная статья, блог-пост или другой текстовый материал
     */
    article = "article",
    /**
     * Video (e.g., clip, film, series, music video)/
     * Видео (например, ролик, фильм, сериал, клип)
     */
    video = "video.other",
    /** Entire TV series/ Сериал целиком */
    videoTvShow = "video.tv_show",
    /**
     * Specific TV series episode/
     * Конкретный эпизод сериала
     */
    videoEpisode = "video.episode",
    /** Movie/ Фильм */
    videoMovie = "video.movie",
    /** Music album/ Музыкальный альбом */
    musicAlbum = "music.album",
    /** Music playlist/ Музыкальный плейлист */
    musicPlaylist = "music.playlist",
    /** Individual track (song)/ Отдельный трек (песня) */
    musicSong = "music.song",
    /**
     * Radio station or audio stream/
     * Радиостанция или стрим аудио
     */
    musicRadioStation = "music.radio_station",
    /**
     * Application (web, mobile, or desktop)/
     * Приложение (веб-, мобильное или десктопное)
     */
    app = "app",
    /**
     * Product or item (e.g., in a store)/
     * Продукт или товар (например, в магазине)
     */
    product = "product",
    /**
     * Brand, company, organization/
     * Бренд, компания, организация
     */
    business = "business.business",
    /**
     * Place (geolocation, point on a map)/
     * Место (геолокация, точка на карте)
     */
    place = "place",
    /**
     * Event (event, meeting, concert, etc.)/
     * Событие (ивент, встреча, концерт и т.п.)
     */
    event = "event",
    /**
     * User profile (personal page, author, etc.)/
     * Профиль пользователя (личная страница, автор и т.д.)
     */
    profile = "profile",
    /** Book page/ Страница книги */
    book = "book"
}
/**
 * Product availability states/
 * Состояния доступности товара
 */
export declare enum MetaOpenGraphAvailability {
    /** In stock, available for purchase/ В наличии, доступен для покупки */
    inStock = "in stock",
    /** Out of stock, currently unavailable/ Нет в наличии, в настоящее время недоступен */
    outOfStock = "out of stock",
    /** Available for pre-order/ Доступен для предзаказа */
    preorder = "preorder",
    /**
     * Backordered, temporarily out of stock/
     * В ожидании поставки, временно отсутствует на складе
     */
    backorder = "backorder",
    /** Discontinued, no longer available/ Снят с производства, больше не доступен */
    discontinued = "discontinued",
    /**
     * Pending availability status/
     * Ожидается информация о доступности
     */
    pending = "pending"
}
/**
 * Product condition states/
 * Состояния товара
 */
export declare enum MetaOpenGraphCondition {
    /** Brand new product, never used/ Новый товар, не использовался */
    new = "new",
    /** Used product, previously owned/ Подержанный, бывший в употреблении */
    used = "used",
    /**
     * Refurbished / restored product/
     * Восстановленный (ремонтированный, refurbished)
     */
    refurbished = "refurbished"
}
/**
 * Age groups for products/
 * Возрастные группы для товаров
 */
export declare enum MetaOpenGraphAge {
    /** For newborns (0–12 months)/ Для новорожденных (0–12 месяцев) */
    newborn = "newborn",
    /** For infants (0–24 months)/ Для младенцев (0–24 месяцев) */
    infant = "infant",
    /** For toddlers (approximately 2–4 years)/ Для малышей (примерно 2–4 года) */
    toddler = "toddler",
    /** For kids (approximately 4–12 years)/ Для детей (примерно 4–12 лет) */
    kids = "kids",
    /** For adults/ Для взрослых */
    adult = "adult"
}
/**
 * Gender categories for products/
 * Гендерные категории для товаров
 */
export declare enum MetaOpenGraphGender {
    /** For women/ Для женщин */
    female = "female",
    /** For men/ Для мужчин */
    male = "male",
    /** Universal / suitable for everyone/ Универсальное / подходит всем */
    unisex = "unisex"
}
/**
 * Twitter Card meta-properties/
 * Мета теги Twitter Card
 */
export declare enum MetaTwitterTag {
    /**
     * Type of card (summary, summary_large_image, app, player, product)/
     * Тип карточки (summary, summary_large_image, app, player, product)
     */
    card = "twitter:card",
    /** Website or brand @username/ Аккаунт сайта или бренда (@username) */
    site = "twitter:site",
    /** Content creator @username/ Автор контента (@username) */
    creator = "twitter:creator",
    /** Page URL/ URL страницы */
    url = "twitter:url",
    /** Title of the card/ Заголовок карточки */
    title = "twitter:title",
    /** Short description of the card/ Краткое описание карточки */
    description = "twitter:description",
    /** Main image for the card/ Основное изображение карточки */
    image = "twitter:image",
    /**
     * Alternative text for the image (for accessibility)/
     * Альтернативный текст изображения (для доступности)
     */
    imageAlt = "twitter:image:alt",
    /**
     * Alternative way to define image source/
     * Альтернативный способ указания изображения
     */
    imageSrc = "twitter:image:src",
    /** Image width (optional)/ Ширина изображения (опционально) */
    imageWidth = "twitter:image:width",
    /** Image height (optional)/ Высота изображения (опционально) */
    imageHeight = "twitter:image:height",
    /**
     * Custom label 1 (used in summary/product cards)/
     * Пользовательская метка 1 (используется в summary/product карточках)
     */
    label1 = "twitter:label1",
    /**
     * Custom value 1 (used with label1)/
     * Пользовательское значение 1 (используется с label1)
     */
    data1 = "twitter:data1",
    /**
     * Custom label 2 (used in summary/product cards)/
     * Пользовательская метка 2 (используется в summary/product карточках)
     */
    label2 = "twitter:label2",
    /**
     * Custom value 2 (used with label2)/
     * Пользовательское значение 2 (используется с label2)
     */
    data2 = "twitter:data2",
    /** iPhone app name/ Название приложения для iPhone */
    appNameIphone = "twitter:app:name:iphone",
    /**
     * iPhone app ID (App Store ID)/
     * Идентификатор приложения в App Store (iPhone)
     */
    appIdIphone = "twitter:app:id:iphone",
    /** iPhone app URL (deep link)/ Ссылка на приложение iPhone (deep link) */
    appUrlIphone = "twitter:app:url:iphone",
    /** iPad app name/ Название приложения для iPad */
    appNameIpad = "twitter:app:name:ipad",
    /**
     * iPad app ID (App Store ID)/
     * Идентификатор приложения в App Store (iPad)
     */
    appIdIpad = "twitter:app:id:ipad",
    /** iPad app URL (deep link)/ Ссылка на приложение iPad (deep link) */
    appUrlIpad = "twitter:app:url:ipad",
    /** Google Play app name/ Название приложения в Google Play */
    appNameGooglePlay = "twitter:app:name:googleplay",
    /**
     * Google Play app ID (package name)/
     * Идентификатор приложения в Google Play (package name)
     */
    appIdGooglePlay = "twitter:app:id:googleplay",
    /**
     * Google Play app URL (deep link)/
     * Ссылка на приложение в Google Play (deep link)
     */
    appUrlGooglePlay = "twitter:app:url:googleplay",
    /** Player iframe URL/ URL iframe плеера */
    player = "twitter:player",
    /** Player width/ Ширина плеера */
    playerWidth = "twitter:player:width",
    /** Player height/ Высота плеера */
    playerHeight = "twitter:player:height",
    /**
     * Direct media stream URL (video/audio)/
     * Прямая ссылка на видео- или аудио поток
     */
    playerStream = "twitter:player:stream",
    /**
     * MIME type of the media stream/
     * MIME-тип потока (например, video/mp4)
     */
    playerStreamContentType = "twitter:player:stream:content_type"
}
/**
 * Twitter Card types/
 * Возможные значения для `twitter:card`
 */
export declare enum MetaTwitterCard {
    /**
     * Summary card — small image, short title and description/
     * Карточка-сводка — небольшое изображение, короткий заголовок и описание
     */
    summary = "summary",
    /**
     * Summary card with large image — most popular card type/
     * Карточка с большим изображением — самый распространённый тип
     */
    summaryLargeImage = "summary_large_image",
    /**
     * App card — used for promoting mobile applications (iOS / Android)/
     * Карточка приложения — используется для продвижения мобильных приложений (iOS / Android)
     */
    app = "app",
    /**
     * Player card — for embedding video, audio, or other rich media/
     * Карточка плеера — для встроенного видео, аудио или интерактивного контента
     */
    player = "player",
    /**
     * Product card (deprecated) — used for e-commerce products/
     * Карточка товара (устаревшая) — использовалась для отображения товаров в Twitter
     */
    product = "product",
    /**
     * Gallery card (deprecated) — used for displaying multiple images/
     * Галерея (устаревшая) — использовалась для показа нескольких изображений
     */
    gallery = "gallery",
    /**
     * Photo card (deprecated) — single image card, replaced by summary_large_image/
     * Фото-карточка (устаревшая) — карточка с одним изображением, заменена на summary_large_image
     */
    photo = "photo",
    /**
     * Lead generation card (deprecated) — for collecting user data (via CTA)/
     * Карточка для лидогенерации (устаревшая) — использовалась для сбора данных пользователей через кнопку
     */
    leadGeneration = "lead_generation",
    /**
     * Audio card (experimental) — similar to player, but focused on audio players/
     * Аудио-карточка (экспериментальная) — аналог player, ориентирована на аудио
     */
    audio = "audio",
    /**
     * Poll card (internal/experimental) — used for Twitter polls/
     * Карточка опроса (внутренняя/экспериментальная) — используется для твитов-опросов
     */
    poll = "poll"
}
