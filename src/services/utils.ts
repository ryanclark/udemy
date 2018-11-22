import { InputParams, stringify } from 'query-string';

export const API_URL = 'https://gateway.marvel.com/v1/public';
export const API_KEY = '69b7e7afbbf5c89ce57b182461a97881';

export interface ApiResult<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T;
  };
}

// wrap the given URL with the Marvel hostname and the API key
export function createApiUrl(path: string, query: InputParams = {}) {
  const queryString = stringify({...query, apikey: API_KEY});

  return `${API_URL}${path}?${queryString}`;
}

// reusable method to attach the correct headers for requests and wrap the result type
export async function fetchRequest<T>(url: string): Promise<ApiResult<T>> {
  const res = await fetch(
    url,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  return res.json();
}
