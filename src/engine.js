function mealTypesForHour (hour){
    if (hour >= 5 && hour < 11) return ["breakfast"];
    if (hour >= 11 && hour < 16) return ["lunch"];
    if (hour >= 16 && hour < 21) return ["supper"];
    return ["snack"]; // 11pm-5am late night snack
}



if (typeof module !== 'undefined') module.exports = { mealTypesForHour, };