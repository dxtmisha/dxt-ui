type SearchItem = Record<string, any>

type SearchColumnPath<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never

type SearchColumn<T extends SearchItem> = {
  [K in keyof T]-?: NonNullable<T[K]> extends object 
    ? K | SearchColumnPath<K, keyof NonNullable<T[K]>> 
    : K
}[keyof T]

type MockUser = {
  id: number
  name: string
  role: string
  address?: {
    city: string
  }
}

const c1: SearchColumn<MockUser> = 'address.city';
console.log(c1);
