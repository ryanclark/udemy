import { createApiUrl } from '../utils';

describe('Service Utils', () => {
  it('should create an API url correctly', async () => {
    const url = createApiUrl('/test', { param: 'testvalue' });

    const expected = 'https://gateway.marvel.com/v1/public/test?apikey=69b7e7afbbf5c89ce57b182461a97881&param=testvalue';

    expect(url).toBe(expected);

    expect(url).toMatchSnapshot();
  });
});
