// md5:9bd29ee7d6803ff83ff2c6366c22f51f true
/** Standard HTML meta tags @keywords meta_tag title description keywords robots author */
export declare enum MetaTag {
    /** Page title */
    title = "title",
    /** Page description */
    description = "description",
    /** Keywords */
    keywords = "keywords",
    /** Canonical URL */
    canonical = "canonical",
    /** Search engine instructions */
    robots = "robots",
    /** Content author */
    author = "author"
}

/** Search engine crawler directives @keywords robots_directive index follow archive snippet */
export declare enum MetaRobots {
    /** Allow indexing and following links */
    indexFollow = "index, follow",
    /** Do not index the page, but follow its links */
    noIndexFollow = "noindex, follow",
    /** Index the page, but do not follow its links */
    indexNoFollow = "index, nofollow",
    /** Do not index the page and do not follow its links */
    noIndexNoFollow = "noindex, nofollow",
    /** Prevent caching of the page */
    noArchive = "noarchive",
    /** Do not show a snippet or description in search results */
    noSnippet = "nosnippet",
    /** Do not display image preview in search results */
    noImageIndex = "noimageindex",
    /** Allow indexing images only */
    images = "images",
    /** Do not show cached version or translation link */
    noTranslate = "notranslate",
    /** Prevent page being shown in preview */
    noPreview = "nopreview",
    /** Allow only text content indexing */
    textOnly = "textonly",
    /** Do not index subpages or parameters */
    noIndexSubpages = "noindex, noarchive",
    /** Use meta directives from HTTP headers */
    none = "none"
}

/** Open Graph metadata tags @keywords open_graph og_tag social_meta */
export declare enum MetaOpenGraphTag {
    /** Page title */
    title = "og:title",
    /** Content type */
    type = "og:type",
    /** Canonical URL of the page */
    url = "og:url",
    /** Preview image URL */
    image = "og:image",
    /** Brief page description */
    description = "og:description",
    /** Page language */
    locale = "og:locale",
    /** Site name */
    siteName = "og:site_name",
    /** Alternative language versions */
    localeAlternate = "og:locale:alternate",
    /** Alternative form of image */
    imageUrl = "og:image:url",
    /** HTTPS version of the image */
    imageSecureUrl = "og:image:secure_url",
    /** Image MIME type */
    imageType = "og:image:type",
    /** Image width in pixels */
    imageWidth = "og:image:width",
    /** Image height in pixels */
    imageHeight = "og:image:height",
    /** Alternative image text */
    imageAlt = "og:image:alt",
    /** Video URL */
    video = "og:video",
    /** Alternative video URL */
    videoUrl = "og:video:url",
    /** HTTPS version of video */
    videoSecureUrl = "og:video:secure_url",
    /** Video MIME type */
    videoType = "og:video:type",
    /** Video width */
    videoWidth = "og:video:width",
    /** Video height */
    videoHeight = "og:video:height",
    /** Audio file URL */
    audio = "og:audio",
    /** HTTPS version of audio */
    audioSecureUrl = "og:audio:secure_url",
    /** Audio MIME type */
    audioType = "og:audio:type",
    /** Publication date */
    articlePublishedTime = "article:published_time",
    /** Last update date */
    articleModifiedTime = "article:modified_time",
    /** Expiration date */
    articleExpirationTime = "article:expiration_time",
    /** Author */
    articleAuthor = "article:author",
    /** Article category */
    articleSection = "article:section",
    /** Tags or keywords */
    articleTag = "article:tag",
    /** Book author */
    bookAuthor = "book:author",
    /** Book ISBN */
    bookIsbn = "book:isbn",
    /** Book publication date */
    bookReleaseDate = "book:release_date",
    /** Topics or tags */
    bookTag = "book:tag",
    /** Track duration in seconds */
    musicDuration = "music:duration",
    /** Album URL */
    musicAlbum = "music:album",
    /** Disc number */
    musicAlbumDisc = "music:album:disc",
    /** Track number in album */
    musicAlbumTrack = "music:album:track",
    /** Musician */
    musicMusician = "music:musician",
    /** Song URL */
    musicSong = "music:song",
    /** Disc number where the song is */
    musicSongDisc = "music:song:disc",
    /** Track number in song */
    musicSongTrack = "music:song:track",
    /** Release date */
    musicReleaseDate = "music:release_date",
    /** Content creator */
    musicCreator = "music:creator",
    /** Actor */
    videoActor = "video:actor",
    /** Actor's role */
    videoActorRole = "video:actor:role",
    /** Director */
    videoDirector = "video:director",
    /** Screenwriter */
    videoWriter = "video:writer",
    /** Video duration in seconds */
    videoDuration = "video:duration",
    /** Video release date */
    videoReleaseDate = "video:release_date",
    /** Tags or topics */
    videoTag = "video:tag",
    /** Series to which the episode belongs */
    videoSeries = "video:series",
    /** First name */
    profileFirstName = "profile:first_name",
    /** Last name */
    profileLastName = "profile:last_name",
    /** Username or login */
    profileUsername = "profile:username",
    /** Gender */
    profileGender = "profile:gender",
    /** Brand name */
    productBrand = "product:brand",
    /** Product availability */
    productAvailability = "product:availability",
    /** Product condition */
    productCondition = "product:condition",
    /** Price amount */
    productPriceAmount = "product:price:amount",
    /** Currency code */
    productPriceCurrency = "product:price:currency",
    /** Internal product ID */
    productRetailerItemId = "product:retailer_item_id",
    /** Product category */
    productCategory = "product:category",
    /** EAN code */
    productEan = "product:ean",
    /** ISBN if product is a book */
    productIsbn = "product:isbn",
    /** Manufacturer part number */
    productMfrPartNo = "product:mfr_part_no",
    /** UPC code */
    productUpc = "product:upc",
    /** Weight value */
    productWeightValue = "product:weight:value",
    /** Weight units */
    productWeightUnits = "product:weight:units",
    /** Product color */
    productColor = "product:color",
    /** Product material */
    productMaterial = "product:material",
    /** Pattern or design */
    productPattern = "product:pattern",
    /** Age group */
    productAgeGroup = "product:age_group",
    /** Gender target */
    productGender = "product:gender"
}

/** Open Graph content types @keywords og_type website article video product */
export declare enum MetaOpenGraphType {
    /** Regular web page or article */
    website = "website",
    /** News article or blog post */
    article = "article",
    /** Video content */
    video = "video.other",
    /** Entire TV series */
    videoTvShow = "video.tv_show",
    /** Specific TV series episode */
    videoEpisode = "video.episode",
    /** Movie */
    videoMovie = "video.movie",
    /** Music album */
    musicAlbum = "music.album",
    /** Music playlist */
    musicPlaylist = "music.playlist",
    /** Individual track or song */
    musicSong = "music.song",
    /** Radio station or audio stream */
    musicRadioStation = "music.radio_station",
    /** Application */
    app = "app",
    /** Product or item */
    product = "product",
    /** Brand, company, or organization */
    business = "business.business",
    /** Place or geolocation */
    place = "place",
    /** Event or meeting */
    event = "event",
    /** User profile */
    profile = "profile",
    /** Book page */
    book = "book"
}

/** Product availability states @keywords availability stock preorder */
export declare enum MetaOpenGraphAvailability {
    /** In stock and available */
    inStock = "in stock",
    /** Out of stock */
    outOfStock = "out of stock",
    /** Available for pre-order */
    preorder = "preorder",
    /** Backordered and temporarily out of stock */
    backorder = "backorder",
    /** Discontinued and no longer available */
    discontinued = "discontinued",
    /** Pending availability status */
    pending = "pending"
}

/** Product condition states @keywords condition new used refurbished */
export declare enum MetaOpenGraphCondition {
    /** Brand new product */
    new = "new",
    /** Used product */
    used = "used",
    /** Refurbished product */
    refurbished = "refurbished"
}

/** Product age groups @keywords age_group newborn infant toddler kids adult */
export declare enum MetaOpenGraphAge {
    /** For newborns */
    newborn = "newborn",
    /** For infants */
    infant = "infant",
    /** For toddlers */
    toddler = "toddler",
    /** For kids */
    kids = "kids",
    /** For adults */
    adult = "adult"
}

/** Product gender categories @keywords gender female male unisex */
export declare enum MetaOpenGraphGender {
    /** For women */
    female = "female",
    /** For men */
    male = "male",
    /** Universal for everyone */
    unisex = "unisex"
}

/** Twitter Card meta-properties @keywords twitter_tag card site creator */
export declare enum MetaTwitterTag {
    /** Type of card */
    card = "twitter:card",
    /** Website or brand username */
    site = "twitter:site",
    /** Content creator username */
    creator = "twitter:creator",
    /** Page URL */
    url = "twitter:url",
    /** Title of the card */
    title = "twitter:title",
    /** Short description of the card */
    description = "twitter:description",
    /** Main image for the card */
    image = "twitter:image",
    /** Alternative text for the image */
    imageAlt = "twitter:image:alt",
    /** Alternative image source */
    imageSrc = "twitter:image:src",
    /** Image width */
    imageWidth = "twitter:image:width",
    /** Image height */
    imageHeight = "twitter:image:height",
    /** Custom label 1 */
    label1 = "twitter:label1",
    /** Custom value 1 */
    data1 = "twitter:data1",
    /** Custom label 2 */
    label2 = "twitter:label2",
    /** Custom value 2 */
    data2 = "twitter:data2",
    /** iPhone app name */
    appNameIphone = "twitter:app:name:iphone",
    /** iPhone app ID */
    appIdIphone = "twitter:app:id:iphone",
    /** iPhone app URL */
    appUrlIphone = "twitter:app:url:iphone",
    /** iPad app name */
    appNameIpad = "twitter:app:name:ipad",
    /** iPad app ID */
    appIdIpad = "twitter:app:id:ipad",
    /** iPad app URL */
    appUrlIpad = "twitter:app:url:ipad",
    /** Google Play app name */
    appNameGooglePlay = "twitter:app:name:googleplay",
    /** Google Play app ID */
    appIdGooglePlay = "twitter:app:id:googleplay",
    /** Google Play app URL */
    appUrlGooglePlay = "twitter:app:url:googleplay",
    /** Player iframe URL */
    player = "twitter:player",
    /** Player width */
    playerWidth = "twitter:player:width",
    /** Player height */
    playerHeight = "twitter:player:height",
    /** Direct media stream URL */
    playerStream = "twitter:player:stream",
    /** MIME type of the media stream */
    playerStreamContentType = "twitter:player:stream:content_type"
}

/** Twitter Card types @keywords twitter_card summary large_image app player */
export declare enum MetaTwitterCard {
    /** Summary card with small image */
    summary = "summary",
    /** Summary card with large image */
    summaryLargeImage = "summary_large_image",
    /** App card for mobile applications */
    app = "app",
    /** Player card for rich media */
    player = "player",
    /** Product card for e-commerce */
    product = "product",
    /** Gallery card for multiple images */
    gallery = "gallery",
    /** Photo card */
    photo = "photo",
    /** Lead generation card */
    leadGeneration = "lead_generation",
    /** Audio card */
    audio = "audio",
    /** Poll card */
    poll = "poll"
}