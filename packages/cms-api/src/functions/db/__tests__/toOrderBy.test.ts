import { describe, expect, it } from 'vitest'
import { asc, desc } from 'drizzle-orm'
import { permissions } from '../../../media/schema/permissions'
import { toOrderBy } from '../toOrderBy'

describe('toOrderBy', () => {
  it('defaults to ascending table ID and normalizes single or array SQL order expressions', () => {
    expect(toOrderBy(permissions)).toEqual([asc(permissions.id)])
    expect(toOrderBy(permissions, [])).toEqual([asc(permissions.id)])

    const singleOrder = desc(permissions.createdAt)
    expect(toOrderBy(permissions, singleOrder)).toEqual([singleOrder])

    const multiOrder = [desc(permissions.createdAt), asc(permissions.code)]
    expect(toOrderBy(permissions, multiOrder)).toEqual(multiOrder)
  })
})
