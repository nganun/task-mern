function fn1(){
    return new Promise(resolve=>{
        setTimeout(function(){
            msg='wait me 3000';
            resolve(msg)
        },3000);
    });
}
async function asyncCall(){
    console.log(1)
    var result=await fn1();
    console.log(2)
    console.log(result); 
    console.log(3);
}
asyncCall();
console.log('end')