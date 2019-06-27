export function compareNumbers (a, b) {
  return a - b
}

export function compareStrings (a, b) {
  const upperA = a.toUpperCase()
  const upperB = b.toUpperCase()

  if (upperA < upperB) {
    return -1
  }
  if (upperA > upperB) {
    return 1
  }

  return 0
}

export function sortScansBy (sorter, scans, users) {
  switch (sorter) {
    case 'name':
      return scans.sort((a, b) => compareStrings(a[sorter], b[sorter]))

    case 'username':
      return scans.sort((a, b) => compareStrings(
        users.find(user => user.id === a.scannedByUserId).name,
        users.find(user => user.id === b.scannedByUserId).name
      ))

    case 'elevationMin':
      return scans.sort((a, b) => compareNumbers(a[sorter], b[sorter]))

    case 'elevationMax':
      return scans.sort((a, b) => compareNumbers(a[sorter], b[sorter]))

    default:
      break
  }
}
