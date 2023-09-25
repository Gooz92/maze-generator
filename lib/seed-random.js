// https://en.wikipedia.org/wiki/Linear_congruential_generator
const m = 2 ** 32;
const a = 1664525;
const c = 1013904223;

export const getRandomInt = max => Math.floor(max * Math.random());

export const createSeedRandom = (seed = getRandomInt(m)) => max => {
  seed = (a * seed + c) % m;
  return Math.floor(max * seed / m);
};
