import { capitalize, removeSpaceBetween } from './index'

test('Should capitilize text', () => {
  const lowerCasedString = 'print.com'
  const capitilizedString = 'Print.com'

  expect(capitalize(lowerCasedString)).toEqual(capitilizedString)
})

test('Should remove white space in string', () => {
  const spacedString = 'business cards'
  const unitedString = 'businesscards'

  expect(removeSpaceBetween(spacedString)).toEqual(unitedString)
})
