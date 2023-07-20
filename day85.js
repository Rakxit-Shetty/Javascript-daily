//735. Asteroid Collision
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack=[];
    for(i=0;i<asteroids.length;i++){
        if(stack.length==0) {
            stack.push(asteroids[i])
            }
        else{
            if(stack[stack.length-1]>0 && asteroids[i]<0){
                if(Math.abs(stack[stack.length-1])==Math.abs( asteroids[i])){
                    stack.pop();
                }else if(Math.abs(stack[stack.length-1])<Math.abs(asteroids[i])){    
                        stack.pop();
                            i--;
                        }
            }
            else{
                stack.push(asteroids[i])
            }
        }
    }
    return stack;
    };