import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/ru/Composables/useLazyRef"}),`
`,e.jsx(n.h1,{id:"композабл-uselazyref",children:"Композабл useLazyRef"}),`
`,e.jsx(n.p,{children:"Композабл для отслеживания появления элементов на экране с использованием Intersection Observer API. Обеспечивает эффективную ленивую загрузку и рендеринг компонентов только когда они становятся видимыми в области просмотра. Идеально подходит для оптимизации производительности при работе с длинными списками, изображениями и тяжёлыми компонентами."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Отслеживание видимости"})," — автоматическое определение когда элемент появляется в области просмотра"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Intersection Observer API"})," — использует нативный браузерный API для эффективного отслеживания"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическая очистка"})," — удаление наблюдателей при размонтировании компонентов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивный статус"})," — возвращает реактивную переменную с состоянием видимости"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Настраиваемые границы"})," — поддержка rootMargin для предзагрузки контента"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Множественные элементы"})," — управление отслеживанием нескольких элементов одновременно"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Graceful degradation"})," — работает без IntersectionObserver в старых браузерах"]}),`
`]}),`
`,e.jsx(n.h2,{id:"функция",children:"Функция"}),`
`,e.jsx(n.h3,{id:"uselazyref",children:e.jsx(n.code,{children:"useLazyRef"})}),`
`,e.jsx(n.p,{children:"Создаёт экземпляр для отслеживания видимости элементов на экране."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Параметры:"})," нет"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," объект с методами:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"intersectionObserver: IntersectionObserver | undefined"})," — экземпляр наблюдателя"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addLazyItem: (element: Ref<HTMLElement>) => ShallowRef<boolean>"})," — добавить элемент для отслеживания"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeLazyItem: (element?: HTMLElement) => void"})," — удалить элемент из отслеживания"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disconnectLazy: () => void"})," — отключить все наблюдатели"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useLazyRef } from '@dxtmisha/functional'

// Создание экземпляра
const lazy = useLazyRef()

// Доступ к методам
const isVisible = lazy.addLazyItem(elementRef)
lazy.removeLazyItem(element)
lazy.disconnectLazy()
`})}),`
`,e.jsx(n.h2,{id:"основное-использование",children:"Основное использование"}),`
`,e.jsx(n.h3,{id:"addlazyitem",children:e.jsx(n.code,{children:"addLazyItem"})}),`
`,e.jsx(n.p,{children:"Добавляет элемент для отслеживания его видимости на экране."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: Ref<HTMLElement>"})," — реактивная ссылка на HTML элемент"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ShallowRef<boolean>"})," — реактивная переменная со статусом видимости"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const lazy = useLazyRef()
const imageRef = ref(null)

// Добавление элемента для отслеживания
const isVisible = lazy.addLazyItem(imageRef)

// isVisible.value === true когда элемент видим
// isVisible.value === false когда элемент невидим

// В старых браузерах без IntersectionObserver
// isVisible.value === true сразу (fallback)
`})}),`
`,e.jsx(n.h3,{id:"removelazyitem",children:e.jsx(n.code,{children:"removeLazyItem"})}),`
`,e.jsx(n.p,{children:"Удаляет элемент из отслеживания и очищает ресурсы."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: HTMLElement"})," — HTML элемент для удаления"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const element = document.getElementById('my-element')

// Удаление элемента из отслеживания
lazy.removeLazyItem(element)
`})}),`
`,e.jsx(n.h3,{id:"disconnectlazy",children:e.jsx(n.code,{children:"disconnectLazy"})}),`
`,e.jsx(n.p,{children:"Отключает все наблюдатели и прекращает отслеживание всех элементов."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Параметры:"})," нет"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Полная очистка при размонтировании
onBeforeUnmount(() => {
  lazy.disconnectLazy()
})
`})}),`
`,e.jsx(n.h2,{id:"использование-в-компонентах",children:"Использование в компонентах"}),`
`,e.jsx(n.h3,{id:"ленивая-загрузка-изображений",children:"Ленивая загрузка изображений"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const imageRef = ref(null)
    const imageLoaded = ref(false)

    const isVisible = lazy.addLazyItem(imageRef)

    watch(isVisible, (visible) => {
      if (visible && !imageLoaded.value) {
        imageLoaded.value = true
      }
    })

    return { imageRef, imageLoaded }
  }
}

// Template:
// <div ref="imageRef">
//   <img v-if="imageLoaded" src="/path/to/image.jpg" />
//   <div v-else class="placeholder">Загрузка...</div>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"бесконечная-прокрутка",children:"Бесконечная прокрутка"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const items = ref([1, 2, 3, 4, 5])
    const sentinelRef = ref(null)
    const loading = ref(false)

    const isSentinelVisible = lazy.addLazyItem(sentinelRef)

    watch(isSentinelVisible, async (visible) => {
      if (visible && !loading.value) {
        loading.value = true
        await new Promise(resolve => setTimeout(resolve, 1000))
        items.value.push(items.value.length + 1)
        loading.value = false
      }
    })

    return { items, sentinelRef, loading }
  }
}

// Template:
// <div>
//   <div v-for="item in items" :key="item">Элемент {{ item }}</div>
//   <div ref="sentinelRef" class="sentinel">
//     <div v-if="loading">Загрузка...</div>
//   </div>
// </div>
`})}),`
`,e.jsx(n.h2,{id:"продвинутое-использование",children:"Продвинутое использование"}),`
`,e.jsx(n.h3,{id:"отслеживание-множества-элементов",children:"Отслеживание множества элементов"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref, onBeforeUnmount } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const items = ref([
      { id: 1, ref: ref(null), visible: null },
      { id: 2, ref: ref(null), visible: null },
      { id: 3, ref: ref(null), visible: null }
    ])

    // Добавление каждого элемента для отслеживания
    items.value.forEach(item => {
      item.visible = lazy.addLazyItem(item.ref)
    })

    onBeforeUnmount(() => {
      lazy.disconnectLazy()
    })

    return { items }
  }
}

// Template:
// <div v-for="item in items" :key="item.id">
//   <div :ref="item.ref">
//     <div v-if="item.visible.value">
//       Контент элемента {{ item.id }}
//     </div>
//     <div v-else class="placeholder">...</div>
//   </div>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"условное-удаление-элементов",children:"Условное удаление элементов"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const elementRef = ref(null)
    const showElement = ref(true)

    const isVisible = lazy.addLazyItem(elementRef)

    // Удаление из отслеживания при скрытии
    watch(showElement, (show) => {
      if (!show && elementRef.value) {
        lazy.removeLazyItem(elementRef.value)
      }
    })

    return {
      elementRef,
      showElement,
      isVisible
    }
  }
}
`})}),`
`,e.jsx(n.h3,{id:"предзагрузка-с-rootmargin",children:"Предзагрузка с rootMargin"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// По умолчанию rootMargin: '128px 0px'
// Элементы начинают отслеживаться за 128px до входа в viewport

const lazy = useLazyRef()
const imageRef = ref(null)

// Изображение начнёт загружаться за 128px до видимости
const isVisible = lazy.addLazyItem(imageRef)

console.log('rootMargin обеспечивает плавную предзагрузку')
`})}),`
`,e.jsx(n.h2,{id:"обработка-отсутствия-intersectionobserver",children:"Обработка отсутствия IntersectionObserver"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useLazyRef } from '@dxtmisha/functional'

const lazy = useLazyRef()

// Проверка доступности API
if (lazy.intersectionObserver) {
  console.log('IntersectionObserver доступен')
  // Используем ленивую загрузку
} else {
  console.log('IntersectionObserver не поддерживается')
  // isVisible всегда будет true (fallback)
}

const elementRef = ref(null)
const isVisible = lazy.addLazyItem(elementRef)

// В старых браузерах isVisible.value === true сразу
// Контент загружается немедленно (graceful degradation)
`})}),`
`,e.jsx(n.h2,{id:"оптимизация-производительности",children:"Оптимизация производительности"}),`
`,e.jsx(n.h3,{id:"ленивая-загрузка-в-списках",children:"Ленивая загрузка в списках"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const products = ref([
      { id: 1, name: 'Товар 1', image: '/img1.jpg' },
      { id: 2, name: 'Товар 2', image: '/img2.jpg' },
      // ... ещё 100 товаров
    ])

    // Создание refs для каждого товара
    const productRefs = ref(products.value.map(() => ({
      element: ref(null),
      visible: null
    })))

    // Отслеживание видимости каждого товара
    productRefs.value.forEach(item => {
      item.visible = lazy.addLazyItem(item.element)
    })

    return {
      products,
      productRefs
    }
  }
}

// Template:
// <div v-for="(product, index) in products" :key="product.id">
//   <div :ref="productRefs[index].element">
//     <template v-if="productRefs[index].visible.value">
//       <img :src="product.image" :alt="product.name" />
//       <h3>{{ product.name }}</h3>
//     </template>
//     <div v-else class="product-skeleton">Загрузка...</div>
//   </div>
// </div>
`})})]})}function h(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{h as default};
