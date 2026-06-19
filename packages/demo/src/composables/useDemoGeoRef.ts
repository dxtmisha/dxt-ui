import { computed, onMounted, ref, watch } from 'vue'
import { Geo, GeoIntl, GeoRef } from '@dxtmisha/functional'

/**
 * Composable for managing and interacting with GeoRef reactive geographic state.
 *
 * Composable для управления и работы с реактивным географическим состоянием GeoRef.
 * @returns object containing reactive state, actions and formatted values / объект, содержащий реактивное состояние, действия и отформатированные значения
 */
export const useDemoGeoRef = () => {
  /** Full geographical data of the active location / Полные географические данные текущего местоположения */
  const geoFull = GeoRef.get()

  /** Active country code / Код текущей страны */
  const country = GeoRef.getCountry()

  /** Active language code / Код текущего языка */
  const language = GeoRef.getLanguage()

  /** Active standard locale code / Код текущей стандартной локали */
  const standard = GeoRef.getStandard()

  /** Reactive representation of the first day of the week / Реактивное представление первого дня недели */
  const firstDay = GeoRef.getFirstDay()

  /** Computed standard GeoIntl instance matching the active locale / Вычисляемый экземпляр стандартного класса GeoIntl для текущей локали */
  const intl = computed(() => new GeoIntl(standard.value))

  /** Selection model bound to the country picker select component / Модель выбора, привязанная к компоненту выбора страны */
  const standardSelect = ref(standard.value)

  const location = ref(GeoRef.getLocation().value)

  /** List of country options formatted for the selector dropdown / Список стран, отформатированный для выпадающего списка выбора */
  const countryOptions = computed(() => {
    const list = Geo.getList()
    return list.map((item) => {
      const code = item.country
      const standardCode = `${item.language}-${code}`

      return {
        label: intl.value.countryName(code),
        caption: standardCode,
        value: standardCode
      }
    })
  })

  /** Current date formatted according to the active locale / Текущая дата, отформатированная согласно текущей локали */
  const formattedDate = computed(() => {
    return intl.value.date(new Date(), 'full')
  })

  /** Test number (1234567.89) formatted according to the active locale / Тестовое число (1234567.89), отформатированное согласно текущей локали */
  const formattedNumber = computed(() => {
    return intl.value.number(1234567.89)
  })

  /** Test currency value formatted in USD according to the active locale / Тестовое валютное значение в USD, отформатированное согласно текущей локали */
  const formattedCurrency = computed(() => {
    return intl.value.currency(1234567.89, 'USD')
  })

  /** List of long weekday names formatted according to the active locale / Список полных названий дней недели, отформатированных согласно текущей локали */
  const weekdays = computed(() => {
    return intl.value.weekdays('long')
      .filter(day => day.label)
      .map(day => String(day.label))
  })

  /** List of long month names formatted according to the active locale / Список полных названий месяцев, отформатированных согласно текущей локали */
  const months = computed(() => {
    return intl.value.months('long')
      .filter(month => month.label)
      .map(month => String(month.label))
  })

  /** Past and future relative times (5 days) formatted according to the active locale / Прошедшее и будущее относительное время (5 дней), отформатированное согласно текущей локали */
  const relativeTime = computed(() => {
    const now = new Date()
    const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000)
    const fiveDaysFromNow = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000)

    return {
      past: intl.value.relative(fiveDaysAgo),
      future: intl.value.relative(fiveDaysFromNow)
    }
  })

  onMounted(() => {
    watch(standard, (newVal) => {
      standardSelect.value = newVal
      location.value = GeoRef.getLocation().value
    })

    watch(location, (newVal) => {
      GeoRef.set(newVal)
    })

    watch(standardSelect, (newVal) => {
      if (newVal && newVal !== standard.value) {
        GeoRef.set(newVal)
      }
    })
  })

  return {
    geoFull,
    country,
    language,
    standard,
    firstDay,

    /**
     * Triggered when custom locale input value changes.
     *
     * Вызывается при изменении значения ввода пользовательской локали.
     * @param options event data container / контейнер данных события
     * @param options.value new locale code / новый код локали
     */
    onChange: ({ value }: { value: string }) => {
      GeoRef.set(value)
    },

    countryOptions,
    standardSelect,
    location,

    formattedDate,
    formattedNumber,
    formattedCurrency,

    weekdays,
    months,
    relativeTime
  }
}
