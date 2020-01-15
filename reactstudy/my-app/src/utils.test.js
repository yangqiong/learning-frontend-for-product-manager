import { sum, fetchWeather } from './utils';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('fetch weather api success', async () => {
  const data = await fetchWeather('Singapore');
  expect(data.cod).toBe(200);
});