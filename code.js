function qadrator(a,b,c){
    let D = b*b-4*a*c;
    let x1 = (-b + Math.sqrt(D))/2;
    let x2 = (-b - Math.sqrt(D))/2;
    // if(a !== "1" && b !== "1" && a !== "0" && b !== "0" && a !== "-1" && b !== "-1"){
    //     console.log(`${a}x^2${b}x${c}`);
    // } 
    // else if(a === "1" && b !== "1" && b != "-1"){
    //     console.log(`x^2${b}x${c}`);
    // }
    //   else if(b === "+1" && a !== "1" && a !== "-1"){
    //     console.log(`${a}x^2+x${c}`);
    // } 
    //   else if(a === "1" && b === "1"){
    //     console.log(`x^2+x${c}`);
    // }
    //   else if(a === "-1" && b === "-1"){
    //     console.log(`-x^2-x${c}`);
    // }
    //   else if(a === "-1" && b === "+1"){
    //     console.log(`-x^2+x${c}`);
    // }
    //   else if(a === "1" && b === "-1"){
    //     console.log(`x^2-x${c}`);
    // }
    //   else if(a === "-1"){
    //     console.log(`-x^2${b}x${c}`);
    // } 
    //   else if(b === "-1"){
    //     console.log(`${a}x^2-x${c}`);
    // } 
    if(a > 0 && b > 0 && c > 0 && a !== 1 && b !== 1 && c !== 1){
      console.log()
    } else if(a < 0 && b > 0 && c > 0 && a !== 1 && b !== 1 && c !== 1){
      console.log(`${a}(x^2)+${b}x+${c}`)
    } else if(a < 0 && b < 0 && c > 0 && a !== 1 && b !== 1 && c !== 1){
      console.log(`${a}(x^2)${b}x+${c}`)
    } else if(a < 0 && b < 0 && c < 0 && a !== 1 && b !== 1 && c !== 1){
      console.log(`${a}(x^2)${b}x${c}`)
    } else if(a > 0 && b < 0 && c < 0 && a !== 1 && b !== 1 && c !== 1){
      console.log(`${a}(x^2)${b}x${c}`)
    } else if(a > 0 && b < 0 && c > 0 && a !== 1 && b !== 1 && c !== 1){
      console.log(`${a}(x^2)${b}x+${c}`)
    } else if(a > 0 && b > 0 && c < 0 && a !== 1 && b !== 1 && c !== 1){
      console.log(`${a}(x^2)+${b}x${c}`)
    } else if(a < 0 && b > 0 && c < 0 && a !== 1 && b !== 1 && c !== 1){
      console.log(`${a}(x^2)+${b}x${c}`)
    }
    if(D > 0){
        console.log(`D = ${D}`);
        console.log(`x1 = ${x1}`);
        console.log(`x2 = ${x2}`);
    } else if( D === 0){
        console.log(x1 = -b / 2 * a);

    } else{
        console.log("The equation has no roots");
    }


    
    

  }
console.log(qadrator(-3,5,-6))