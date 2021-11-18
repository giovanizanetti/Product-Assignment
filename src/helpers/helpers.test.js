import { capitalize, removeSpaceBetween, stringShorten, removeStringUnderline } from './index'

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

test('Should long strings be shortened by max 23 chcaracters', () => {
  const lonString = 'This is a very very very very long string'
  const shortenedString = 'This is a very very ...'

  expect(stringShorten(lonString)).toEqual(shortenedString)
})

test('Should underline be removed from string and replaced by a space between', () => {
  const stringWithUnderline = 'string_underline'
  const formatedString = 'string underline'

  expect(removeStringUnderline(stringWithUnderline)).toEqual(formatedString)
})
