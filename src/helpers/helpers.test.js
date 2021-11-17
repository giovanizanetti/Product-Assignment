import { capitalize } from './index'

test('Should capitilize text', () => {
  const lowerCasedString = 'print.com'
  const capitilizedString = 'Print.com'

  expect(capitalize(lowerCasedString)).toEqual(capitilizedString)
})
