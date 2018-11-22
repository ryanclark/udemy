import { createApiUrl, fetchRequest } from '../utils';
import { Character } from '../../models/Character';

export const RESULTS_PER_PAGE = 20;

export function getCharacters(offset: number, nameStartsWith?: string) {
  const url = createApiUrl('/characters', { offset, nameStartsWith });

  return fetchRequest<Character[]>(url);
}
