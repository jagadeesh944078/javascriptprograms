var show = require('util');
/**
 * @description class Node
 * 
 * @class Node
 * @purpose Creates a new node with two blocks , data & item
 */
class Node {
    /**
     * @description constructor initializes data and next
     * @param {Number} data 
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * @description class StackedLink
 * 
 * @class StackLink
 * @purpose Creates a new Stack using LInkedlist contains various manipulation functions
 */
class StackedLink {
/**
     * @description constructor initializes top
     */
    constructor() {
        this.top = null;
    }
    /**
     * @description stores items to stack
     * @param {item(value to be stored in stack)} 
     */
    push(item) {
        var temp = new Node();
        temp.data = item;
        temp.next = this.top;
        this.top = temp;
    }
    /**
     * @description pops out items from the stack 
     */
    pop() {

        if (this.top == null) {
            console.log("Stack Underflowed");
            return;
        }
        this.top = this.top.next;

    }
    /**
     * @description checks if stack is empty
     */
    isEmpty() {
        return this.top == null;
    }
    /**
     * @description to check top most item in the stack
     * @returns {Number} returns item at the top
     */
    peek() {
        if (!this.isEmpty()) {
            return this.top.data;
        } else {
            console.log("stack is empty");
            return -1;
        }
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
                    show = show + " --> "
                }
                temp = temp.next;
            }
            console.log(show);
        }
    }
    /**
     * @description display possible days in a week
     */
    displayDays() {

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
                    show = show + "  "
                }
                temp = temp.next;
            }
            console.log(show);
        }

    }
    /**
     * @description Displays calender 
     * @param {Number} d  
     */
    displayCalender(d) {

        var t = this.top;


        var count = 0;

        while (t.data == " ") {
            show.print("   ");

            t = t.next;
        }
        while (t != null) {
            count++;
            show.print(" ", t.data);
            if (t.data < 10) {
                show.print(" ");
            }


            if (((count + d) % 7 == 0)) {
                console.log("");
            }
            t = t.next;
        }
        count = 0;
    }
    /**
     * @description Reverse the stack using linked list
     */
    reverse() {
        var prev = null;
        var current = this.top;
        var next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.top = prev;

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
            show.print(" --> ");

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
    StackedLink
}