function mealTypesForHour(hour) {
  if (hour >= 5 && hour < 10) return ["breakfast"];
  if (hour >= 10 && hour < 12) return ["breakfast", "brunch", "lunch"];
  if (hour >= 12 && hour < 15) return ["lunch"];
  if (hour >= 15 && hour < 17) return ["snack"];
  if (hour >= 17 && hour < 21) return ["supper"];
  return ["snack", "dessert"]; // 21:00 - 05:00
}

function labelForHour(hour) {
  if (hour >= 5 && hour < 10) return "breakfast time";
  if (hour >= 10 && hour < 12) return "late morning";
  if (hour >= 12 && hour < 15) return "lunchtime";
  if (hour >= 15 && hour < 17) return "mid-afternoon";
  if (hour >= 17 && hour < 21) return "suppertime";
  if (hour >= 21 && hour < 24) return "late evening";
  return "the middle of the night";
}

function kosherAllows(dishKosher, userKosher){
    if (dishKosher === "milky" && userKosher === "meaty"){
        return false;
    }
    return true;
}


/* selectPool(dishes, options)
filters a given list of dishes by removing not suitable options
dish = {id, name, tags}
options = {hour, kosher}
*/
function selectPool(dishes, options) {
  const filtered_list = dishes.filter(dish => kosherAllows(dish.tags.kosher, options.kosher));
    return filtered_list;
}

if (typeof module !== 'undefined') module.exports = { mealTypesForHour, labelForHour, kosherAllows, selectPool};