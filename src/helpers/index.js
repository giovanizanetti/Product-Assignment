export const capitalize = (string) => string[0].toUpperCase() + string.slice(1)

export const removeSpaceBetween = (string) => string.split(' ').join('')

export const stringShorten = (string) => `${string.substring(0, 20)}...`

export const removeStringUnderline = (string) => string.split('_').join(' ')

export const getItemsFromLocalStorage = (key, defaultValue) => {
  const saved = localStorage.getItem(key)
  const initial = JSON.parse(saved)
  return initial || defaultValue
}

export const addItemsToLocalStorage = (key, items) => localStorage.setItem('Cart', JSON.stringify(items))
