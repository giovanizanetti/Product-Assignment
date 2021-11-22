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

export function findComomElements(arr1, arr2, array) {
  // arr1.some((item, index) => {
  //   if (!arr2.includes(item)) {
  //     // console.log(array[index])
  //     filteredArray.push(array[index])
  //   }
  // })

  return arr1.filter((item, index) => !arr2.includes(item))
}
