export function compareNumbers(a, b) {
  return b - a;
}

export function compareStrings(a, b) {
  const upperA = a.toUpperCase();
  const upperB = b.toUpperCase();

  if (upperA < upperB) {
    return -1;
  }

  return 1;
}

export function getUsername(scan, users) {
  return users.find(user => user.id === scan.scannedByUserId).name;
}

export function sortScansBy(sorter, scans, users, inverted = false) {
  switch (sorter) {
    case "name":
      return scans.sort((a, b) =>
        inverted ? compareStrings(b[sorter], a[sorter]) : compareStrings(a[sorter], b[sorter])
      );

    case "username":
      return scans.sort((a, b) =>
        inverted
          ? compareStrings(getUsername(a, users), getUsername(b, users))
          : compareStrings(getUsername(b, users), getUsername(a, users))
      );

    case "elevationMin":
      return scans.sort((a, b) =>
        inverted ? compareNumbers(b[sorter], a[sorter]) : compareNumbers(a[sorter], b[sorter])
      );

    case "elevationMax":
      return scans.sort((a, b) =>
        inverted ? compareNumbers(b[sorter], a[sorter]) : compareNumbers(a[sorter], b[sorter])
      );

    default:
      break;
  }
}
