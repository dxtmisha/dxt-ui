import type { CollageItemProps } from '@dxtmisha/constructor/CollageItem'

/**
 * Standard variant images with uniform 1:1 aspect ratio.
 *
 * Изображения стандартного варианта с единым соотношением сторон 1:1.
 */
export const dataCollageStandard: CollageItemProps[] = [
  {
    image: 'https://picsum.photos/600/600?random=1',
    label: 'Standard 1',
    description: '1:1 ratio square image',
    value: 'std-1'
  },
  {
    image: 'https://picsum.photos/600/600?random=2',
    label: 'Standard 2',
    description: '1:1 ratio square image',
    value: 'std-2'
  },
  {
    image: 'https://picsum.photos/600/600?random=3',
    label: 'Standard 3',
    description: '1:1 ratio square image',
    value: 'std-3'
  },
  {
    image: 'https://picsum.photos/600/600?random=4',
    label: 'Standard 4',
    description: '1:1 ratio square image',
    value: 'std-4'
  },
  {
    image: 'https://picsum.photos/600/600?random=5',
    label: 'Standard 5',
    description: '1:1 ratio square image',
    value: 'std-5'
  },
  {
    image: 'https://picsum.photos/600/600?random=6',
    label: 'Standard 6',
    description: '1:1 ratio square image',
    value: 'std-6'
  },
  {
    image: 'https://picsum.photos/600/600?random=7',
    label: 'Standard 7',
    description: '1:1 ratio square image',
    value: 'std-7'
  },
  {
    image: 'https://picsum.photos/600/600?random=8',
    label: 'Standard 8',
    description: '1:1 ratio square image',
    value: 'std-8'
  }
]

/**
 * Quilted variant images demonstrating different tile span multipliers (large, tall, wide, standard).
 *
 * Изображения лоскутного варианта (quilted), демонстрирующие различные коэффициенты охвата (large, tall, wide, standard).
 */
export const dataCollageQuilted: CollageItemProps[] = [
  {
    image: 'https://picsum.photos/800/800?random=11',
    span: 'large',
    label: 'Large (2x2)',
    description: 'Prominent hero item',
    value: 'quilted-1'
  },
  {
    image: 'https://picsum.photos/600/600?random=12',
    span: 'standard',
    label: 'Standard 1',
    value: 'quilted-2'
  },
  {
    image: 'https://picsum.photos/600/1200?random=13',
    span: 'tall',
    label: 'Tall (1x2)',
    description: 'Vertical accent card',
    value: 'quilted-3'
  },
  {
    image: 'https://picsum.photos/600/600?random=14',
    span: 'standard',
    label: 'Standard 2',
    value: 'quilted-4'
  },
  {
    image: 'https://picsum.photos/1200/600?random=15',
    span: 'wide',
    label: 'Wide (2x1)',
    description: 'Landscape card',
    value: 'quilted-5'
  },
  {
    image: 'https://picsum.photos/600/600?random=16',
    span: 'standard',
    label: 'Standard 3',
    value: 'quilted-6'
  },
  {
    image: 'https://picsum.photos/600/600?random=17',
    span: 'standard',
    label: 'Standard 4',
    value: 'quilted-7'
  }
]

/**
 * Woven variant images with alternating aspect ratios.
 *
 * Изображения плетеного варианта (woven) с чередующимися соотношениями сторон.
 */
export const dataCollageWoven: CollageItemProps[] = [
  { image: 'https://picsum.photos/600/800?random=21', label: 'Woven 1', value: 'woven-1' },
  { image: 'https://picsum.photos/600/800?random=22', label: 'Woven 2', value: 'woven-2' },
  { image: 'https://picsum.photos/600/800?random=23', label: 'Woven 3', value: 'woven-3' },
  { image: 'https://picsum.photos/600/800?random=24', label: 'Woven 4', value: 'woven-4' },
  { image: 'https://picsum.photos/600/800?random=25', label: 'Woven 5', value: 'woven-5' },
  { image: 'https://picsum.photos/600/800?random=26', label: 'Woven 6', value: 'woven-6' }
]

/**
 * Masonry horizontal variant images with diverse landscape and portrait aspect ratios.
 *
 * Изображения горизонтальной кладки (masonry horizontal) с разнообразными соотношениями сторон.
 */
export const dataCollageMasonryHorizontal: CollageItemProps[] = [
  { image: 'https://picsum.photos/960/540?random=31', label: 'Landscape 16:9', value: 'mh-1' },
  { image: 'https://picsum.photos/600/600?random=32', label: 'Square 1:1', value: 'mh-2' },
  { image: 'https://picsum.photos/1000/500?random=33', label: 'Panoramic 2:1', value: 'mh-3' },
  { image: 'https://picsum.photos/600/800?random=34', label: 'Portrait 3:4', value: 'mh-4' },
  { image: 'https://picsum.photos/800/500?random=35', label: 'Wide 16:10', value: 'mh-5' },
  { image: 'https://picsum.photos/800/600?random=36', label: 'Standard 4:3', value: 'mh-6' }
]

/**
 * Masonry vertical variant images organized into columns with varying item heights.
 *
 * Изображения вертикальной кладки (masonry vertical) с варьирующейся высотой элементов.
 */
export const dataCollageMasonryVertical: CollageItemProps[] = [
  { image: 'https://picsum.photos/540/960?random=41', label: 'Tall Pin', value: 'mv-1' },
  { image: 'https://picsum.photos/600/600?random=42', label: 'Square', value: 'mv-2' },
  { image: 'https://picsum.photos/600/800?random=43', label: 'Portrait', value: 'mv-3' },
  { image: 'https://picsum.photos/800/500?random=44', label: 'Landscape', value: 'mv-4' },
  { image: 'https://picsum.photos/800/600?random=45', label: 'Standard', value: 'mv-5' },
  { image: 'https://picsum.photos/600/900?random=46', label: 'Tall Portrait', value: 'mv-6' }
]

/**
 * Control / selectable mode images with checkboxes.
 *
 * Изображения для режима управления и множественного выбора (control mode).
 */
export const dataCollageControl: CollageItemProps[] = [
  { image: 'https://picsum.photos/600/600?random=51', label: 'Selectable 1', value: 'select-1' },
  { image: 'https://picsum.photos/600/600?random=52', label: 'Selectable 2', value: 'select-2' },
  { image: 'https://picsum.photos/600/600?random=53', label: 'Selectable 3', value: 'select-3' },
  { image: 'https://picsum.photos/600/600?random=54', label: 'Selectable 4', value: 'select-4' }
]

/**
 * Event-handling demo images for click interaction.
 *
 * Демонстрационные изображения для обработки событий клика.
 */
export const dataCollageEvent: CollageItemProps[] = [
  { image: 'https://picsum.photos/600/600?random=61', label: 'Click Item A', value: 'item-a' },
  { image: 'https://picsum.photos/600/600?random=62', label: 'Click Item B', value: 'item-b' },
  { image: 'https://picsum.photos/600/600?random=63', label: 'Click Item C', value: 'item-c' },
  { image: 'https://picsum.photos/600/600?random=64', label: 'Click Item D', value: 'item-d' }
]

// Convenient aliases
export const standardImages = dataCollageStandard
export const quiltedImages = dataCollageQuilted
export const wovenImages = dataCollageWoven
export const masonryHorizontalImages = dataCollageMasonryHorizontal
export const masonryVerticalImages = dataCollageMasonryVertical
export const controlImages = dataCollageControl
export const eventImages = dataCollageEvent
