const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
  num = sampleActivity;
  if (typeof num == 'string' ) {
    num = Number(parseFloat(sampleActivity));
    if (num > 15 || num <= 0 || isNaN(num)) {
      return false
    }
    years = Math.log(MODERN_ACTIVITY/num)*(HALF_LIFE_PERIOD/0.693);
    return Math.ceil(years);
  } else {
    return false;
  } 
};
