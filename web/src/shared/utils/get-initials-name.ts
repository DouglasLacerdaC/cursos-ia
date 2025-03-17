export function getInitialsName(fullName: string) {
  const trimmedName = fullName.trim()

  if (trimmedName === '') {
    return '??'
  }

  const nameParts = trimmedName.split(/\s+/)

  if (nameParts.length === 1) {
    const firstPart = nameParts[0]
    return (firstPart[0] + (firstPart[1] || firstPart[0])).toUpperCase()
  } else {
    return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
  }
}
