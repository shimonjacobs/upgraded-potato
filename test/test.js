const test = require('node:test');
const assert = require('node:assert');
const {mealTypesForHour, labelForHour, kosherAllows } = require('../src/engine.js')

//Test mealTypesForHour Function
test('7am is breakfast', ()=> {
  assert.deepStrictEqual(mealTypesForHour(7), ["breakfast"]);
});

test('11am is [breakfast, brunch, lunch]', ()=> {
  assert.deepStrictEqual(mealTypesForHour(11), ["breakfast", "brunch", "lunch"]);
});

test('12pm is lunch', ()=> {
  assert.deepStrictEqual(mealTypesForHour(12), ["lunch"]);
});

test('check 7pm is supper', ()=> {
  assert.deepStrictEqual(mealTypesForHour(19), ["supper"]);
});

//Test LabelForHour Function
test('7am is called breakfast time', ()=> {
  assert.deepStrictEqual(labelForHour(7), "breakfast time");
});

test('12pm is called lunch time', ()=> {
  assert.deepStrictEqual(labelForHour(12), "lunchtime");
});

test('7pm is called supper time', ()=> {
  assert.deepStrictEqual(labelForHour(19), "suppertime");
});

test ("1am is middle of the night", ()=>{
  assert.deepStrictEqual(labelForHour(1), "the middle of the night");
});

//Test kosherAllows function

//milky dish not allowed when user meaty
test ("milky dish not allowed when user meaty", ()=>{
  assert.strictEqual(kosherAllows("milky", "meaty"), false);
});

test ('milky dish allowed if user not meaty', ()=>{
  for (const wanted of ["milky", "pareve", null]) {
    assert.strictEqual(kosherAllows("milky", wanted), true);
  }
});

//meaty always allowed
test ('meaty dish always allowed', ()=>{
  for (const wanted of ["milky", "meaty", "pareve", null]) {
    assert.strictEqual(kosherAllows("meaty", wanted), true);
  }
});


//pareve always allowed
test ('pareve dish always allowed', ()=>{
  for (const wanted of ["milky", "meaty", "pareve", null]) {
    assert.strictEqual(kosherAllows("pareve", wanted), true);
  }
});