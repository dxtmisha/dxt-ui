export type DesignUiConfig = {
  /**
   * Project name
   *
   * Название проекта
   */
  project: string

  /**
   * Design system name
   *
   * Название дизайн-системы
   */
  name: string

  /**
   * Abbreviation symbol, this key will be used to separate into sub-branches
   *
   * Символ сокращения, такой ключ будет разделять на под-ветки
   */
  separator?: string

  /**
   * Name that will be removed when splitting into branches
   *
   * Название, которое будет удаляться при разделении на ветки
   */
  separatorBasicName?: string

  /**
   * Limit of key splitting into sub-branches
   *
   * Лимит разделения ключа на под-ветки
   */
  separatorLimit?: number

  /**
   * Wiki language
   *
   * Язык wiki
   */
  wikiLanguage?: string
}
