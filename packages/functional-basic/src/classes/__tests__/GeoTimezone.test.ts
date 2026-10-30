/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest'
import { GeoTimezone } from '../GeoTimezone'

describe('GeoTimezone', () => {
  describe('constructor', () => {
    it('initializes with system timezone offset by default', () => {
      const systemOffset = new Date().getTimezoneOffset()
      const timezone = new GeoTimezone()
      expect(timezone.get()).toBe(systemOffset)
    })

    it('initializes with an explicit timezone offset in minutes', () => {
      const timezone = new GeoTimezone(-180)
      expect(timezone.get()).toBe(-180)
    })

    it('normalizes float offsets to truncated integers', () => {
      const timezone = new GeoTimezone(-180.7)
      expect(timezone.get()).toBe(-180)

      const timezonePositive = new GeoTimezone(300.9)
      expect(timezonePositive.get()).toBe(300)
    })

    it('falls back to 0 when initialized with NaN', () => {
      const timezone = new GeoTimezone(Number.NaN)
      expect(timezone.get()).toBe(0)
    })

    it('falls back to 0 when initialized with Infinity or -Infinity', () => {
      expect(new GeoTimezone(Number.POSITIVE_INFINITY).get()).toBe(0)
      expect(new GeoTimezone(Number.NEGATIVE_INFINITY).get()).toBe(0)
    })

    it('normalizes negative zero (-0) to positive zero (0)', () => {
      const timezone = new GeoTimezone(-0)
      expect(Object.is(timezone.get(), 0)).toBe(true)
    })
  })

  describe('get and set', () => {
    it('returns the current numeric offset in minutes via get()', () => {
      const timezone = new GeoTimezone(120)
      expect(timezone.get()).toBe(120)
    })

    it('updates offset and returns this for fluent chaining in set()', () => {
      const timezone = new GeoTimezone(0)
      const instance = timezone.set(300)
      expect(instance).toBe(timezone)
      expect(timezone.get()).toBe(300)
    })

    it('normalizes values passed into set()', () => {
      const timezone = new GeoTimezone(0)
      timezone.set(120.4)
      expect(timezone.get()).toBe(120)

      timezone.set(Number.NaN)
      expect(timezone.get()).toBe(0)

      timezone.set(Number.POSITIVE_INFINITY)
      expect(timezone.get()).toBe(0)
    })
  })

  describe('getFormat', () => {
    it('formats UTC (offset 0) as "+00:00"', () => {
      const timezone = new GeoTimezone(0)
      expect(timezone.getFormat()).toBe('+00:00')
    })

    it('formats zones east of UTC (negative offset) with leading "+"', () => {
      // UTC+3 (Europe/Moscow) -> offset -180
      const moscow = new GeoTimezone(-180)
      expect(moscow.getFormat()).toBe('+03:00')

      // UTC+1 (Europe/Berlin, Europe/Paris) -> offset -60
      const berlin = new GeoTimezone(-60)
      expect(berlin.getFormat()).toBe('+01:00')

      // UTC+14 (Line Islands / Kiritimati) -> offset -840
      const kiritimati = new GeoTimezone(-840)
      expect(kiritimati.getFormat()).toBe('+14:00')
    })

    it('formats zones west of UTC (positive offset) with leading "-"', () => {
      // UTC-5 (America/New_York) -> offset +300
      const newYork = new GeoTimezone(300)
      expect(newYork.getFormat()).toBe('-05:00')

      // UTC-8 (America/Los_Angeles) -> offset +480
      const losAngeles = new GeoTimezone(480)
      expect(losAngeles.getFormat()).toBe('-08:00')

      // UTC-12 (Baker Island) -> offset +720
      const baker = new GeoTimezone(720)
      expect(baker.getFormat()).toBe('-12:00')
    })

    it('formats non-integer hour time zones (30-minute and 45-minute offsets)', () => {
      // UTC+5:30 (India Standard Time) -> offset -330
      const ist = new GeoTimezone(-330)
      expect(ist.getFormat()).toBe('+05:30')

      // UTC+5:45 (Nepal Time) -> offset -345
      const npt = new GeoTimezone(-345)
      expect(npt.getFormat()).toBe('+05:45')

      // UTC+9:30 (Australian Central Standard Time) -> offset -570
      const acst = new GeoTimezone(-570)
      expect(acst.getFormat()).toBe('+09:30')

      // UTC-3:30 (Newfoundland Standard Time) -> offset +210
      const nst = new GeoTimezone(210)
      expect(nst.getFormat()).toBe('-03:30')

      // UTC+12:45 (Chatham Islands) -> offset -765
      const chatham = new GeoTimezone(-765)
      expect(chatham.getFormat()).toBe('+12:45')
    })

    it('correctly pads single-digit hours and minutes', () => {
      // UTC+5:05 -> offset -305
      const customEast = new GeoTimezone(-305)
      expect(customEast.getFormat()).toBe('+05:05')

      // UTC-4:08 -> offset +248
      const customWest = new GeoTimezone(248)
      expect(customWest.getFormat()).toBe('-04:08')
    })

    it('handles negative zero and non-finite numbers safely in getFormat()', () => {
      const timezone = new GeoTimezone(-0)
      expect(timezone.getFormat()).toBe('+00:00')

      timezone.set(Number.NaN)
      expect(timezone.getFormat()).toBe('+00:00')

      timezone.set(Number.POSITIVE_INFINITY)
      expect(timezone.getFormat()).toBe('+00:00')
    })
  })

  describe('Isolation and statefulness', () => {
    it('maintains independent state between different instances', () => {
      const timezone1 = new GeoTimezone(-180)
      const timezone2 = new GeoTimezone(300)

      expect(timezone1.get()).toBe(-180)
      expect(timezone1.getFormat()).toBe('+03:00')

      expect(timezone2.get()).toBe(300)
      expect(timezone2.getFormat()).toBe('-05:00')

      timezone1.set(-60)
      expect(timezone1.get()).toBe(-60)
      expect(timezone2.get()).toBe(300)
    })
  })
})
