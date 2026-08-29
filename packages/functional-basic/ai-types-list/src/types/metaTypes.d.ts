// md5:9bd29ee7d6803ff83ff2c6366c22f51f true
/** Standard HTML meta tags. @keywords meta, html, seo */
export declare enum MetaTag {
    title = "title",
    description = "description",
    keywords = "keywords",
    canonical = "canonical",
    robots = "robots",
    author = "author"
}
/** Search engine robot directives for indexing and link following. @keywords robots, seo, indexing */
export declare enum MetaRobots {
    indexFollow = "index, follow",
    noIndexFollow = "noindex, follow",
    indexNoFollow = "index, nofollow",
    noIndexNoFollow = "noindex, nofollow",
    noArchive = "noarchive",
    noSnippet = "nosnippet",
    noImageIndex = "noimageindex",
    images = "images",
    noTranslate = "notranslate",
    noPreview = "nopreview",
    textOnly = "textonly",
    noIndexSubpages = "noindex, noarchive",
    none = "none"
}
/** Open Graph metadata property tags. @keywords opengraph, og, metadata, social */
export declare enum MetaOpenGraphTag {
    title = "og:title",
    type = "og:type",
    url = "og:url",
    image = "og:image",
    description = "og:description",
    locale = "og:locale",
    siteName = "og:site_name",
    localeAlternate = "og:locale:alternate",
    imageUrl = "og:image:url",
    imageSecureUrl = "og:image:secure_url",
    imageType = "og:image:type",
    imageWidth = "og:image:width",
    imageHeight = "og:image:height",
    imageAlt = "og:image:alt",
    video = "og:video",
    videoUrl = "og:video:url",
    videoSecureUrl = "og:video:secure_url",
    videoType = "og:video:type",
    videoWidth = "og:video:width",
    videoHeight = "og:video:height",
    audio = "og:audio",
    audioSecureUrl = "og:audio:secure_url",
    audioType = "og:audio:type",
    articlePublishedTime = "article:published_time",
    articleModifiedTime = "article:modified_time",
    articleExpirationTime = "article:expiration_time",
    articleAuthor = "article:author",
    articleSection = "article:section",
    articleTag = "article:tag",
    bookAuthor = "book:author",
    bookIsbn = "book:isbn",
    bookReleaseDate = "book:release_date",
    bookTag = "book:tag",
    musicDuration = "music:duration",
    musicAlbum = "music:album",
    musicAlbumDisc = "music:album:disc",
    musicAlbumTrack = "music:album:track",
    musicMusician = "music:musician",
    musicSong = "music:song",
    musicSongDisc = "music:song:disc",
    musicSongTrack = "music:song:track",
    musicReleaseDate = "music:release_date",
    musicCreator = "music:creator",
    videoActor = "video:actor",
    videoActorRole = "video:actor:role",
    videoDirector = "video:director",
    videoWriter = "video:writer",
    videoDuration = "video:duration",
    videoReleaseDate = "video:release_date",
    videoTag = "video:tag",
    videoSeries = "video:series",
    profileFirstName = "profile:first_name",
    profileLastName = "profile:last_name",
    profileUsername = "profile:username",
    profileGender = "profile:gender",
    productBrand = "product:brand",
    productAvailability = "product:availability",
    productCondition = "product:condition",
    productPriceAmount = "product:price:amount",
    productPriceCurrency = "product:price:currency",
    productRetailerItemId = "product:retailer_item_id",
    productCategory = "product:category",
    productEan = "product:ean",
    productIsbn = "product:isbn",
    productMfrPartNo = "product:mfr_part_no",
    productUpc = "product:upc",
    productWeightValue = "product:weight:value",
    productWeightUnits = "product:weight:units",
    productColor = "product:color",
    productMaterial = "product:material",
    productPattern = "product:pattern",
    productAgeGroup = "product:age_group",
    productGender = "product:gender"
}
/** Open Graph content types for og:type. @keywords opengraph, og, content-type */
export declare enum MetaOpenGraphType {
    website = "website",
    article = "article",
    video = "video.other",
    videoTvShow = "video.tv_show",
    videoEpisode = "video.episode",
    videoMovie = "video.movie",
    musicAlbum = "music.album",
    musicPlaylist = "music.playlist",
    musicSong = "music.song",
    musicRadioStation = "music.radio_station",
    app = "app",
    product = "product",
    business = "business.business",
    place = "place",
    event = "event",
    profile = "profile",
    book = "book"
}
/** Open Graph product availability states. @keywords opengraph, product, availability, ecommerce */
export declare enum MetaOpenGraphAvailability {
    inStock = "in stock",
    outOfStock = "out of stock",
    preorder = "preorder",
    backorder = "backorder",
    discontinued = "discontinued",
    pending = "pending"
}
/** Open Graph product condition states. @keywords opengraph, product, condition, ecommerce */
export declare enum MetaOpenGraphCondition {
    new = "new",
    used = "used",
    refurbished = "refurbished"
}
/** Open Graph target age groups for products. @keywords opengraph, product, age-group */
export declare enum MetaOpenGraphAge {
    newborn = "newborn",
    infant = "infant",
    toddler = "toddler",
    kids = "kids",
    adult = "adult"
}
/** Open Graph target gender categories for products. @keywords opengraph, product, gender */
export declare enum MetaOpenGraphGender {
    female = "female",
    male = "male",
    unisex = "unisex"
}
/** Twitter Card metadata property tags. @keywords twitter, twitter-card, metadata */
export declare enum MetaTwitterTag {
    card = "twitter:card",
    site = "twitter:site",
    creator = "twitter:creator",
    url = "twitter:url",
    title = "twitter:title",
    description = "twitter:description",
    image = "twitter:image",
    imageAlt = "twitter:image:alt",
    imageSrc = "twitter:image:src",
    imageWidth = "twitter:image:width",
    imageHeight = "twitter:image:height",
    label1 = "twitter:label1",
    data1 = "twitter:data1",
    label2 = "twitter:label2",
    data2 = "twitter:data2",
    appNameIphone = "twitter:app:name:iphone",
    appIdIphone = "twitter:app:id:iphone",
    appUrlIphone = "twitter:app:url:iphone",
    appNameIpad = "twitter:app:name:ipad",
    appIdIpad = "twitter:app:id:ipad",
    appUrlIpad = "twitter:app:url:ipad",
    appNameGooglePlay = "twitter:app:name:googleplay",
    appIdGooglePlay = "twitter:app:id:googleplay",
    appUrlGooglePlay = "twitter:app:url:googleplay",
    player = "twitter:player",
    playerWidth = "twitter:player:width",
    playerHeight = "twitter:player:height",
    playerStream = "twitter:player:stream",
    playerStreamContentType = "twitter:player:stream:content_type"
}
/** Twitter Card display formats and types. @keywords twitter, twitter-card, card-type */
export declare enum MetaTwitterCard {
    summary = "summary",
    summaryLargeImage = "summary_large_image",
    app = "app",
    player = "player",
    product = "product",
    gallery = "gallery",
    photo = "photo",
    leadGeneration = "lead_generation",
    audio = "audio",
    poll = "poll"
}