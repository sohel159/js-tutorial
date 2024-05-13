function sumnumbers(number){
    
        let sum = 0;
        for(let i = 1; i <= 9; i++){
        sum = sum + i;
        console.log(i, sum);
        }
        return sum;
}


const result  = sumnumbers(9);

console.log(result);
