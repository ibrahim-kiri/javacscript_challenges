let deepComp = function(src, trg) {
    let retVal = Object.keys(src).length === Object.keys(trg).length;
    if (retVal) {
        for(property in src) {
            if(typeof(src[property]) === typeof(trg[property])) {
                retVal = typeof(src[property]) === 'object' ? deepComp(src[property], trg[property]) : src[property] === trg[property];
            } else {
                retVal = false;
            }
            if(!retVal) break
        }
    }
    return retVal;
}

let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false