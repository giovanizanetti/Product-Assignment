import { businesscards } from '../data/businesscards'
import { flyers } from '../data/flyers'
import { posters } from '../data/posters'

export const useProduct = (productName) => {
  switch (productName) {
    case 'businesscards':
      return businesscards
    case 'posters':
      return posters
    case 'flyers':
      return flyers
    default:
      return {}
  }
}
