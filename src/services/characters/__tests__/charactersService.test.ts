import * as fetchMock from 'fetch-mock';

import { getCharacters } from '../charactersService';

describe('Characters Service', () => {
  it('should call the characters endpoint correctly', async () => {
    fetchMock
      .restore()
      .getOnce(
        'begin:https://gateway.marvel.com/v1/public/characters',
        {
          status: 200,
          body: {
            code: 200,
            status: 'Ok',
            copyright: '',
            data: {
              offset: 0,
              limit: 0,
              results: [
                {
                  id: 1,
                },
                {
                  id: 2,
                }
              ]
            },
          },
        },
      );

    const result = await getCharacters(0);

    expect(result.data.results.length).toBe(2);
    expect(result.data.results[0].id).toBe(1);

    expect(result).toMatchSnapshot();
  });
});
