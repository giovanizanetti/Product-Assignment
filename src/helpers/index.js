export const capitalize = (string) => string[0].toUpperCase() + string.slice(1)

export const removeSpaceBetween = (string) => string.split(' ').join('')

export const stringShorten = (string) => `${string.substring(0, 20)}...`

export const removeStringUnderline = (string) => string.split('_').join(' ')
