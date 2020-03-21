
module.exports = function createDreamTeam(arr) {
  let NameTeam = new Array();
  if (Array.isArray(arr)) {
      arr.forEach(el => {
          if (typeof(el) === "string") {
              el = el.trim().toUpperCase();
              NameTeam.push(el[0]);
          }
      });
      return NameTeam.sort().join('');
  } else {
    return false;
  }
};