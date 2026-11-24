import { afterEach, describe, expect, it, vi } from 'vitest'
import { cmsSchema } from '../../../media/schema/cmsSchema'

const mockClient = { end: vi.fn() }
const mockDb = { select: vi.fn() }
const mockPostgres = vi.fn(() => mockClient)
const mockDrizzle = vi.fn(() => mockDb)

vi.mock('postgres', () => ({
  default: mockPostgres
}))

vi.mock('drizzle-orm/postgres-js', () => ({
  drizzle: mockDrizzle
}))

describe('createCmsDb', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('creates a postgres client and binds cmsSchema through drizzle', async () => {
    const { createCmsDb } = await import('../createCmsDb')
    const uri = 'postgres://user:password@localhost:5432/cms_db'

    const db = createCmsDb(uri)

    expect(mockPostgres).toHaveBeenCalledTimes(1)
    expect(mockPostgres).toHaveBeenCalledWith(uri)
    expect(mockDrizzle).toHaveBeenCalledTimes(1)
    expect(mockDrizzle).toHaveBeenCalledWith(mockClient, { schema: cmsSchema })
    expect(db).toBe(mockDb)
  })
})
