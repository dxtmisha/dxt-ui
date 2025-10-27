import { ref, watch } from 'vue'
import { Meta, MetaRobots } from '@dxtmisha/functional-basic'

import { executeUse } from '../../functions/executeUse'

/**
 * Singleton instance for meta tags management.
 *
 * Singleton экземпляр для управления мета-тегами.
 */
const item = executeUse(() => {
  const meta: Meta = new Meta()

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

  watch(title, () => {
    meta.setTitle(title.value)
  })
  watch(keyword, () => {
    meta.setKeywords(keyword.value)
  })
  watch(description, () => {
    meta.setDescription(description.value)
  })
  watch(image, () => {
    meta.setImage(image.value)
  })
  watch(canonical, () => {
    meta.setCanonical(canonical.value)
  })
  watch(robots, () => {
    meta.setRobots(robots.value)
  })
  watch(author, () => {
    meta.setAuthor(author.value)
  })
  watch(siteName, () => {
    meta.setSiteName(siteName.value)
  })

  return {
    meta,

    title,
    keyword,
    description,
    author,
    image,
    canonical,
    robots,
    siteName,

    getHtmlMeta
  }
}, false, true)

/**
 * Vue composable for reactive meta tags management with automatic DOM synchronization.
 * Uses singleton pattern - all components share the same meta state.
 *
 * Vue композабл для реактивного управления мета-тегами с автоматической синхронизацией DOM.
 * Использует паттерн singleton - все компоненты используют одно состояние мета-тегов.
 */
export const useMeta = () => item()
