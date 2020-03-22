module.exports = function repeater(str, options) {
    if(options.separator === undefined){
        options.separator = '+';
    }
    if(options.additionSeparator === undefined){
        options.additionSeparator = '|';
    }
    if(options.repeatTimes === undefined){
        options.repeatTimes = 1;
    }
    if(options.additionRepeatTimes === undefined){
        options.additionRepeatTimes = 1;
    }
    if(options.addition === undefined){
        options.additionRepeatTimes = '';
    }
    let newStr = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        newStr = newStr + str;
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            newStr = newStr + options.addition;
            if (j < (options.additionRepeatTimes -1)) {
                newStr = newStr + options.additionSeparator;
            }
        }
        if (i < (options.repeatTimes -1) ) {
            newStr = newStr + options.separator;
        }
    }
    return newStr;
};
  