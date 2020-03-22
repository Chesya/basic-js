
module.exports = function calculateHanoi(disksNumber,turnsSpeed){
    let turns = Math.pow(2, disksNumber) -1;
    let second = turns/(turnsSpeed/3600);
    return {turns: turns , seconds: second };
}
