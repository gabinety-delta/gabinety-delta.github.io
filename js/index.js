const s1 = 'ABBA'
const s2 = 'SABBBDA'

function f(s1, s2) {
    let i1 = 0;
    let i2 = 0;
    
    while(i1 < s1.length){
        if (s1[i1] === s2[i2]){
            console.log(s1[i1])
        } else {
            i1++;
        }
    }

    
    return s1;
}

var greeting = 'Hello 🌍'
console.log(greeting);

var earlyHello = 'dd'
if(true){
    console.log(earlyHello)
    var earlyHello = 'Good morning'
}