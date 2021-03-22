"use strict";
/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2){
    
        let copy=[];
        for (let elem of arr1){
            copy.push(elem);
        }
        for(let i=0;i<arr2.length;i++){
            if(arr2.shift()!==copy.pop()){
                return false;
            }
            return true;    
        }
    }
    console.log(isArrayEqual([1,2,3,4],[1,2,3,4]));


/**
 * 
 * @param {array} arr 
 * @returns {number} result of addition of first and last elements of the array 
 */
function addend(arr){
    return 0;
}

module.exports= {isArrayEqual, addend}