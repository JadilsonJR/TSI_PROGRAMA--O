let temp_F=0;
let res=(5/9);
for(let i=-50; i<=50; i+=5){
    let temp_F=i;
    console.log( `TEMP. EM F: ${i}  TEMP. EM C: ${res*(temp_F-32)}` );
}