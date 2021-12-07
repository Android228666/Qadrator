function qadrator(a,b,c){
    let D = b*b-4*a*c;
    let x1 = (-b + Math.sqrt(D))/2;
    let x2 = (-b - Math.sqrt(D))/2;
    console.log(`${a}x^2+${b}x${c}`);
    console.log(D,x1,x2)
}

console.log(qadrator(1,5,-6))
