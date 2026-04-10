/** Client storage messenger data/ Данные сообщения клиентского хранилища */
export type ClientStorageMessengerData<T = any> = {
  name: string
  value: T
}

/** Storage messenger data/ Данные сообщения хранилища */
export type StorageMessengerData<T = any> = {
  id?: string
  name: string
  value: T
}
