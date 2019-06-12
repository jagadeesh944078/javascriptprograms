var show = require('util');
class Stack {
    constructor() {
        this.stk = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }
    stack(capacity) {
        this.capacity = capacity;
        var stk = new stk[capacity];
    }
    push(ele) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++;
        this.stk[++this.top] = ele;

    }
    pop() {
        if (this.top == -1) {
            console.log("Stack underFlow");
            return;
        }
        this.size--;
        return this.stk[this.top--];
    }
    peek() {
        if (this.top == -1) {
            console.log("No elements Found");
            return;
        }
        console.log(this.stk[this.top]);
    }
    getsize() {
        return this.size;
    }

    isEmpty() {
        if (this.top == -1) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack is not empty");
    }
    /**
     * @description Display the stack
     */
    display() {
        if (this.top == null) {
            console.log("Stack Underflowed");
            return;
        }
        else {
            var temp = this.top;
            var show = "";
            while (temp != null) {

                show = show + temp.data;
                if (temp.next != null) {
                    show = show + " - "
                }
                temp = temp.next;
            }
            console.log(show);
        }



    }
    /**
        * @description Displays the stack in reverse order using linkedlist
        * @param {Number} top(topmost item in stack) 
        */
    displayReverse(top) {

        if (top == null)
            return;

        this.displayReverse(top.next);
        show.print(top.data);
        if (top.next != top)
            show.print(" - ");

    }
    /**
     * @description get the top most item of the stack
     * @returns top most item
     */
    getHead() {
        return this.top;
    }
}
module.exports = {
    Stack
}