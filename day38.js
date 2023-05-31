//70. Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<4)return n;
    let n1=0,n2=1,sum=0;
    for(let i=0;i<n;i++){
        sum=n1+n2;
        n1=n2;
        n2=sum;
    }
    return n2;

// return (n-1)+(n-2)

};