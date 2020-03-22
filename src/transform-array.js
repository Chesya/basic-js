module.exports = function transform(arr) {
    if(!Array.isArray(arr)) {
        throw new Error();
    } 
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === '--discard-next'){
            if(i === arr.length - 1) {
                arr.splice(i, 1);
            }
            else {
                if (arr[i+2] !== '--double-prev'){
                    arr.splice(i, 2);
                    i = i-1 ;
                }
            }  
        }
        if (arr[i] ===  '--discard-prev') {
            if(i === 0){
                arr.splice(i, 1);
                i = i-1;
            } else {
                arr.splice(i - 1, 2);
                i = i-2;
            } 
        }
        if (arr[i] === '--double-next' ) {
            if(i === arr.length - 1) {
                arr.splice(i, 1);
            }
            else {
                arr.splice(i, 1, arr[i + 1]);
            }
        }
        if ( arr[i] === '--double-prev') {
            if(i === 0){
                arr.splice(i, 1);
                i= i -1;
            } else {
                if(arr[i - 2] === '--discard-next'){
                    arr.splice(i - 2, 3, arr[i - 1]);
                    i = i - 3;
                }else {
                    arr.splice(i, 1, arr[i - 1]);
                }
            }
        }
    }
    return arr;
};