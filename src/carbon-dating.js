const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity) {return false};
  sampleActivity = Number(parseFloat(sampleActivity));
  if (sampleActivity > 15 || sampleActivity <= 0 || isNaN(sampleActivity)) {return false};
  years = Math.log(MODERN_ACTIVITY/sampleActivity)*(HALF_LIFE_PERIOD/0.693);
  return Math.ceil(years);
};
