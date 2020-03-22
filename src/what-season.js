module.exports = function getSeason(date) {
    if(!date) return "Unable to determine the time of year!";
    if(!date.getTime()) throw new Error();
    let mon = date.getMonth();
    if(mon === 11 || mon < 2)
      return "winter";
    if(mon >= 2 && mon < 5)
      return "spring";
    if(mon >= 5 && mon < 8)
      return "summer";
    if(mon >= 8 && mon < 11)
      return "autumn";
};