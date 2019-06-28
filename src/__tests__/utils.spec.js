import { sortScansBy } from '../utils'

const users = [{ id: 0, name: 'Jean' }, { id: 1, name: 'Smaug' }]
const scans = [
  {
    name: 'A',
    elevationMax: 5,
    elevationMin: 0.1,
    scannedByUserId: 1
  },
  {
    name: 'B',
    elevationMax: 4,
    elevationMin: 0.3,
    scannedByUserId: 0
  },
  {
    name: 'C',
    elevationMax: 6,
    elevationMin: 0.2,
    scannedByUserId: 0
  },
  {
    name: 'D',
    elevationMax: 7,
    elevationMin: 0.2,
    scannedByUserId: 1
  }
]

describe('utils', () => {
  it('should sort by username', () => {
    expect(sortScansBy('username', scans, users)).toMatchInlineSnapshot(`
Array [
  Object {
    "elevationMax": 5,
    "elevationMin": 0.1,
    "name": "A",
    "scannedByUserId": 1,
  },
  Object {
    "elevationMax": 7,
    "elevationMin": 0.2,
    "name": "D",
    "scannedByUserId": 1,
  },
  Object {
    "elevationMax": 4,
    "elevationMin": 0.3,
    "name": "B",
    "scannedByUserId": 0,
  },
  Object {
    "elevationMax": 6,
    "elevationMin": 0.2,
    "name": "C",
    "scannedByUserId": 0,
  },
]
`)
  })

  it('should sort by name', () => {
    expect(sortScansBy('name', scans, users)).toMatchInlineSnapshot(`
Array [
  Object {
    "elevationMax": 5,
    "elevationMin": 0.1,
    "name": "A",
    "scannedByUserId": 1,
  },
  Object {
    "elevationMax": 4,
    "elevationMin": 0.3,
    "name": "B",
    "scannedByUserId": 0,
  },
  Object {
    "elevationMax": 6,
    "elevationMin": 0.2,
    "name": "C",
    "scannedByUserId": 0,
  },
  Object {
    "elevationMax": 7,
    "elevationMin": 0.2,
    "name": "D",
    "scannedByUserId": 1,
  },
]
`)
  })

  it('should sort by elevationMin', () => {
    expect(sortScansBy('elevationMin', scans, users)).toMatchInlineSnapshot(`
Array [
  Object {
    "elevationMax": 4,
    "elevationMin": 0.3,
    "name": "B",
    "scannedByUserId": 0,
  },
  Object {
    "elevationMax": 6,
    "elevationMin": 0.2,
    "name": "C",
    "scannedByUserId": 0,
  },
  Object {
    "elevationMax": 7,
    "elevationMin": 0.2,
    "name": "D",
    "scannedByUserId": 1,
  },
  Object {
    "elevationMax": 5,
    "elevationMin": 0.1,
    "name": "A",
    "scannedByUserId": 1,
  },
]
`)
  })

  it('should sort by elevationMax', () => {
    expect(sortScansBy('elevationMin', scans, users)).toMatchInlineSnapshot(`
Array [
  Object {
    "elevationMax": 4,
    "elevationMin": 0.3,
    "name": "B",
    "scannedByUserId": 0,
  },
  Object {
    "elevationMax": 6,
    "elevationMin": 0.2,
    "name": "C",
    "scannedByUserId": 0,
  },
  Object {
    "elevationMax": 7,
    "elevationMin": 0.2,
    "name": "D",
    "scannedByUserId": 1,
  },
  Object {
    "elevationMax": 5,
    "elevationMin": 0.1,
    "name": "A",
    "scannedByUserId": 1,
  },
]
`)
  })
})
