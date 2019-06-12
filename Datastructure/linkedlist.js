/**
 * @description class Node
 * 
 * @class Node
 * @purpose Creates a new node with two blocks , data & item
 */
class Node {
    /**
         * @description constructor initializes item and next
         * @param {String} item 
         */
    constructor(item) {

        this.item = item;
        this.next = null;
    }
}
/**
 * @description class LinkedList
 * 
 * @class LinkedLink
 * @purpose Creates  LInkedlist contains various manipulation functions
 */
class linkedlist {
    /**
         * @description constructor initializes head and capacity
         */
    constructor() {

        this.head = null;
        this.capacity = 0;
    }
    remove(element) {

        var temp = this.head;
        var prev = this.head;
        if (temp.item == element) {
            this.head = temp.next;
            return true;
        }

        while (temp.item != element) {
            prev = temp;
            temp = temp.next;
        }

        prev.next = temp.next;
        return;
    }//i will get the data from the linkedlist
    getData() {
        var temp = this.head;
        var show = "";
        while (temp != null) {

            show = show + temp.item;
            if (temp.next != null) {
                show = show + " ";
            }
            temp = temp.next;
        }
        return show;
    }//it will search the element from the list
    search(element) {

        var temp = this.head;

        while (temp != null) {
            if (temp.item == element) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    //element will added into the last position
    addLast(item) {

        var node = new Node(item);

        if (this.head == null) {
            this.head = node;
            this.capacity++;
            return;
        }
        var temp = this.head;

        while (temp.next != null) {

            temp = temp.next;
        }

        temp.next = node;
        this.capacity++;
        return;
    }
    display() {
        var temp = this.head;
        var show = "";
        while (temp != null) {

            show = show + temp.item;

            if (temp.next != null) {
                show = show + " --> ";
            }

            temp = temp.next;
        }
        console.log(show);
    }
}