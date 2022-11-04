let a=parseInt(process.argv[2]);
let b=parseInt(process.argv[3]);
let c=parseInt(process.argv[4]);


if((a>b)&&(a>c)){
    console.log("A é maior");
}else if((b>c)&&(b>a)){
    console.log("B é maior");
}else{
    console.log("C é maior");
}