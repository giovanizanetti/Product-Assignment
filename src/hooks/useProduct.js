import { businesscards } from '../data/businesscards'
import { useHistory } from 'react-router-dom'
import { flyers } from '../data/flyers'
import { posters } from '../data/posters'

export const useProduct = (productName) => {
  const history = useHistory()
  // if (!productName)
  if (!productName) return
  switch (productName) {
    case 'businesscards':
      return businesscards
    case 'posters':
      return posters
    case 'flyers':
      return flyers
    default:
      return history.push('/')
  }
}
