/**
 * Git file status codes
 * Коды статусов файлов Git
 */
export enum GitStatus {
  // Basic statuses
  /** File has been modified / Файл был изменен */
  MODIFIED = 'M',
  /** File has been added / Файл был добавлен */
  ADDED = 'A',
  /** File has been deleted / Файл был удален */
  DELETED = 'D',
  /** File has been renamed / Файл был переименован */
  RENAMED = 'R',
  /** File has been copied / Файл был скопирован */
  COPIED = 'C',
  /** File has been updated / Файл был обновлен */
  UPDATED = 'U',
  /** File is untracked / Файл не отслеживается */
  UNTRACKED = '??',
  /** File is ignored / Файл игнорируется */
  IGNORED = '!!',
  // Merge conflict statuses
  /** File modified by both sides / Файл изменен с обеих сторон */
  BOTH_MODIFIED = 'UU',
  /** File added by us / Файл добавлен нами */
  ADDED_BY_US = 'AU',
  /** File deleted by us / Файл удален нами */
  DELETED_BY_US = 'DU',
  /** File added by them / Файл добавлен ими */
  ADDED_BY_THEM = 'UA',
  /** File deleted by them / Файл удален ими */
  DELETED_BY_THEM = 'UD',
  /** File added by both sides / Файл добавлен с обеих сторон */
  BOTH_ADDED = 'AA',
  /** File deleted by both sides / Файл удален с обеих сторон */
  BOTH_DELETED = 'DD',
  // Index and work tree statuses
  /** File modified in index / Файл изменен в индексе */
  MODIFIED_IN_INDEX = 'MM',
  /** File added in index / Файл добавлен в индексе */
  ADDED_IN_INDEX = 'AM',
  /** File deleted in index / Файл удален в индексе */
  DELETED_IN_INDEX = 'DM',
  /** File renamed in index / Файл переименован в индексе */
  RENAMED_IN_INDEX = 'RM',
  /** File copied in index / Файл скопирован в индексе */
  COPIED_IN_INDEX = 'CM'
}
