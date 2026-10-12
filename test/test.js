const test = require('node:test');
const assert = require('node:assert');
const {mealTypesForHour, labelForHour} = require('../src/engine.js')

test('7am is breakfast', ()=> {
  assert.deepStrictEqual(mealTypesForHour(7), ["breakfast"]);
});

test('12pm is lunch', ()=> {
  assert.deepStrictEqual(mealTypesForHour(12), ["lunch"]);
});

test('check 7pm is supper', ()=> {
  assert.deepStrictEqual(mealTypesForHour(19), ["supper"]);
});

test('7am is called breakfast time', ()=> {
  assert.deepStrictEqual(labelForHour(7), ["breakfast time"]);
});

test('12pm is called lunch time', ()=> {
  assert.deepStrictEqual(labelForHour(12), ["lunch time"]);
});

test('7pm is called supper time', ()=> {
  assert.deepStrictEqual(labelForHour(19), ["supper time"]);
});