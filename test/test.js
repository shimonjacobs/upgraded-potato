const test = require('node:test');
const assert = require('node:assert');
const {mealTypesForHour} = require('../src/engine.js')

test('7am is breakfast', ()=> {
  assert.deepStrictEqual(mealTypesForHour(7), ["breakfast"]);
});

test('12pm is lunch', ()=> {
  assert.deepStrictEqual(mealTypesForHour(12), ["lunch"]);
});

test('check 7pm is supper', ()=> {
  assert.deepStrictEqual(mealTypesForHour(19), ["supper"]);
});
