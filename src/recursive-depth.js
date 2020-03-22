module.exports = class DepthCalculator {
    calculateDepth(arr, Depth = 1, count = []) {
        count.push(Depth);
        for (let i = 0; i<arr.length; i ++ ){
             if (Array.isArray(arr[i])) {
                this.calculateDepth(arr[i], Depth + 1, count);
            }
        } 
        return Math.max.apply(null, count);
    }  
};
