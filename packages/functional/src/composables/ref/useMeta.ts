import { ref, watch } from 'vue'
import { isDomRuntime, MetaRobots, MetaStatic } from '@dxtmisha/functional-basic'

import { executeUseLocal } from '../../functions/executeUse'

/**
 * Singleton instance for meta tags management.
 *
 * Singleton экземпляр для управления мета-тегами.
 */
const item = executeUseLocal(() => {
  const meta = MetaStatic

  /** Reactive page title (without suffix) / Реактивный заголовок страницы (без суффикса) */
  const title = ref<string>(meta.getTitle())

  /** Reactive keywords meta tag / Реактивный мета-тег keywords */
  const keyword = ref<string>(meta.getKeywords())

  /** Reactive description meta tag / Реактивный мета-тег description */
  const description = ref<string>(meta.getDescription())

  /** Reactive Open Graph / Twitter Card image URL / Реактивный URL изображения для Open Graph / Twitter Card */
  const image = ref<string>(meta.getImage())

  /** Reactive canonical URL / Реактивный канонический URL */
  const canonical = ref<string>(meta.getCanonical())

  /** Reactive robots meta tag directive / Реактивная директива мета-тега robots */
  const robots = ref<MetaRobots>(meta.getRobots())

  /** Reactive author meta tag / Реактивный мета-тег author */
  const author = ref<string>(meta.getAuthor())

  /** Reactive site name for Open Graph and Twitter Card / Реактивное название сайта для Open Graph и Twitter Card */
  const siteName = ref<string>(meta.getSiteName())

  /** Generates HTML string for all meta tags (for SSR) / Генерирует HTML-строку для всех мета-тегов (для SSR) */
  const getHtmlMeta = () => meta.html()

  /**
   * Sets the page title.
   *
   * Устанавливает заголовок страницы.
   * @param value Title to set / Заголовок для установки
   */
  const setTitle = (value: string) => {
    title.value = value
    updateSsr()
  }

  /**
   * Sets the keywords meta tag.
   *
   * Устанавливает мета-тег keywords.
   * @param value Keywords to set / Ключевые слова для установки
   */
  const setKeywords = (value: string) => {
    keyword.value = value
    updateSsr()
  }

  /**
   * Sets the description meta tag.
   *
   * Устанавливает мета-тег description.
   * @param value Description to set / Описание для установки
   */
  const setDescription = (value: string) => {
    description.value = value
    updateSsr()
  }

  /**
   * Sets the Open Graph / Twitter Card image URL.
   *
   * Устанавливает URL изображения для Open Graph / Twitter Card.
   * @param value Image URL to set / URL изображения для установки
   */
  const setImage = (value: string) => {
    image.value = value
    updateSsr()
  }

  /**
   * Sets the canonical URL.
   *
   * Устанавливает канонический URL.
   * @param value Canonical URL to set / Канонический URL для установки
   */
  const setCanonical = (value: string) => {
    canonical.value = value
    updateSsr()
  }

  /**
   * Sets the robots meta tag directive.
   *
   * Устанавливает директиву мета-тега robots.
   * @param value Robots directive to set / Директива robots для установки
   */
  const setRobots = (value: MetaRobots) => {
    robots.value = value
    updateSsr()
  }

  /**
   * Sets the author meta tag.
   *
   * Устанавливает мета-тег author.
   * @param value Author to set / Автор для установки
   */
  const setAuthor = (value: string) => {
    author.value = value
    updateSsr()
  }

  /**
   * Sets the site name for Open Graph and Twitter Card.
   *
   * Устанавливает название сайта для Open Graph и Twitter Card.
   * @param value Site name to set / Название сайта для установки
   */
  const setSiteName = (value: string) => {
    siteName.value = value
    updateSsr()
  }

  /**
   * Synchronizes all reactive values with the current state of MetaStatic.
   *
   * Синхронизирует все реактивные значения с текущим состоянием MetaStatic.
   */
  const sync = () => {
    title.value = meta.getTitle()
    keyword.value = meta.getKeywords()
    description.value = meta.getDescription()
    image.value = meta.getImage()
    canonical.value = meta.getCanonical()
    robots.value = meta.getRobots()
    author.value = meta.getAuthor()
    siteName.value = meta.getSiteName()
  }

  /**
   * Updates the state of MetaStatic using current reactive values.
   *
   * Обновляет состояние MetaStatic, используя текущие реактивные значения.
   */
  const update = () => {
    meta.setTitle(title.value)
    meta.setKeywords(keyword.value)
    meta.setDescription(description.value)
    meta.setImage(image.value)
    meta.setCanonical(canonical.value)
    meta.setRobots(robots.value)
    meta.setAuthor(author.value)
    meta.setSiteName(siteName.value)
  }

  /**
   * Updates MetaStatic values if the current environment is SSR (not a DOM runtime).
   *
   * Обновляет значения MetaStatic, если текущая среда — SSR (не DOM-среда).
   */
  const updateSsr = () => {
    if (!isDomRuntime()) {
      update()
    }
  }

  watch(
    [title, keyword, description, image, canonical, robots, author, siteName],
    () => update()
  )

  return {
    meta,

    /** Reactive page title (without suffix) / Реактивный заголовок страницы (без суффикса) */
    title,
    /** Reactive keywords meta tag / Реактивный мета-тег keywords */
    keyword,
    /** Reactive description meta tag / Реактивный мета-тег description */
    description,
    /** Reactive author meta tag / Реактивный мета-тег author */
    author,
    /** Reactive Open Graph / Twitter Card image URL / Реактивный URL изображения для Open Graph / Twitter Card */
    image,
    /** Reactive canonical URL / Реактивный канонический URL */
    canonical,
    /** Reactive robots meta tag directive / Реактивная директива мета-тега robots */
    robots,
    /** Reactive site name for Open Graph and Twitter Card / Реактивное название сайта для Open Graph и Twitter Card */
    siteName,

    /**
     * Generates HTML string for all meta tags (for SSR).
     *
     * Генерирует HTML-строку для всех мета-тегов (для SSR).
     */
    getHtmlMeta,

    /**
     * Synchronizes all reactive values with the current state of MetaStatic.
     *
     * Синхронизирует все реактивные значения с текущим состоянием MetaStatic.
     */
    sync,

    /**
     * Updates MetaStatic values with current reactive state.
     *
     * Обновляет значения MetaStatic текущим реактивным состоянием.
     */
    update,

    /**
     * Updates MetaStatic values if the current environment is SSR (not a DOM runtime).
     *
     * Обновляет значения MetaStatic, если текущая среда — SSR (не DOM-среда).
     */
    updateSsr,

    /**
     * Sets the page title.
     *
     * Устанавливает заголовок страницы.
     * @param value Title to set / Заголовок для установки
     */
    setTitle,

    /**
     * Sets the keywords meta tag.
     *
     * Устанавливает мета-тег keywords.
     * @param value Keywords to set / Ключевые слова для установки
     */
    setKeywords,

    /**
     * Sets the description meta tag.
     *
     * Устанавливает мета-тег description.
     * @param value Description to set / Описание для установки
     */
    setDescription,

    /**
     * Sets the author meta tag.
     *
     * Устанавливает мета-тег author.
     * @param value Author to set / Автор для установки
     */
    setAuthor,

    /**
     * Sets the Open Graph / Twitter Card image URL.
     *
     * Устанавливает URL изображения для Open Graph / Twitter Card.
     * @param value Image URL to set / URL изображения для установки
     */
    setImage,

    /**
     * Sets the canonical URL.
     *
     * Устанавливает канонический URL.
     * @param value Canonical URL to set / Канонический URL для установки
     */
    setCanonical,

    /**
     * Sets the robots meta tag directive.
     *
     * Устанавливает директиву мета-тега robots.
     * @param value Robots directive to set / Директива robots для установки
     */
    setRobots,

    /**
     * Sets the site name for Open Graph and Twitter Card.
     *
     * Устанавливает название сайта для Open Graph и Twitter Card.
     * @param value Site name to set / Название сайта для установки
     */
    setSiteName,

    /**
     * Sets the suffix for the page title.
     *
     * Устанавливает суффикс для заголовка страницы.
     * @param suffix Suffix to set / Суффикс для установки
     */
    setSuffix: (suffix: string) => meta.setSuffix(suffix)
  }
})

/**
 * Vue composable for reactive meta tags management with automatic DOM synchronization.
 * Uses singleton pattern - all components share the same meta state.
 *
 * Vue композабл для реактивного управления мета-тегами с автоматической синхронизацией DOM.
 * Использует паттерн singleton - все компоненты используют одно состояние мета-тегов.
 */
export const useMeta = () => item()
