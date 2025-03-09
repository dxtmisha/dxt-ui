import { expect, test } from 'vitest'
import { copyObject } from '../../functions/copyObject.ts'

test(
  'Copying an object/ Копирование объекта',
  () => expect(copyObject([1, 2, 3])).toStrictEqual([1, 2, 3])
)
