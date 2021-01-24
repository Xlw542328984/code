// If we list all the natural numbers below 10 that are multiples
//  of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// 如果我们列出所有低于10的自然数，它们是3或5的倍数，则得到3、5、6和9。这些倍数的总和为23。
// 完成解决方案，以便它返回传入的数字以下3或5的所有倍数的总和。

function solution(number){
    let temp = 0; 
    for(let i = 0; i < number; i++){
        if(i % 3 ==0 || i % 5 ==0 )
            temp = temp + i;
    }
    return temp;
}
console.log(solution(10));