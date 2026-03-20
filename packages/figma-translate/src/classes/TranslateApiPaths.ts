import { ref } from 'vue'

export class TranslateApiPaths {
  public static pathLayoutTypes = ref<string>('/api/translate/layout-types')

  static setPathLayoutTypes(path: string) {
    this.pathLayoutTypes.value = path
  }
}
