//225. Implement Stack using Queues

var MyStack = function() {
    this.stack=[]
};

MyStack.prototype.push = function(x) {
    return this.stack[this.stack.length]=x;
};

MyStack.prototype.pop = function() {
    return this.stack.pop()
};

MyStack.prototype.top = function() {
   return this.stack.slice(-1);
};

MyStack.prototype.empty = function() {
   return this.stack.length==0 
};

