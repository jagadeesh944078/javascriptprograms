class Node {
    /**
     * 
     * @param {data} data 
     */

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Mylinkedlist {

    add(data) {
//created a node
        var n = new Node(data);
//it will check the head element
        if (this.head == null) {
            this.head = n;
            this.cap++;
            return;
        }

        var t = this.head;
        while (t.next != null) {

            t = t.next;
        }
        t.next = n;
        this.cap++;
        return;

    }
    //its for display the elements
    display() {
        var t = this.head;
        var show = "";

        while (t != null) {


            show = show + t.data;
            if (t.next != null) {
                show = show + " ";
            }
            t = t.next;
        }
        console.log(show);
    }
    //its for searching the elements in the linkedlist
    search(element) {
        var temp = this.head;
        
        while (temp != null) {
          
            if (element == temp.data.trim()) {

                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    //its going to be deleted from linkedlist
    remove(element) {
        var temp = this.head;
        var prev = this.head;
       //trim means it wil remove the extra spaces
        if (temp.data.trim() == element) {
            this.head = temp.next;
            return true;
        }
        
        while (temp.data.trim() != element) {
            prev = temp;
            temp = temp.next;
        }

        prev.next = temp.next;
        return;
    }
    //for getting data form linkedlist
    getdata() {
        var t = this.head;
        var disp = "";


        while (t != null) {
            disp = disp + t.data;
            if (t != null) {

                disp = disp + " ";
            }

            t = t.next;
        }
        return disp;
    }
    //it will arrange in ascendingorder
    sort() {
       
        do {
            var swapped = 0;
            var t = this.head;
            while (t.next != null) {
//data will be converted into interger format
                if (parseInt(t.next.data) < parseInt(t.data)) {

                    var neww = t.next.data;
                    t.next.data = t.data;
                    t.data = neww;
                    swapped = 1
                }
                t = t.next;
            }

        } while (swapped)
    }
    //element will be added in sequence
    addInSequence2(item) {
        //created one variable
        var current;
        //created a node
        var node = new Node(item);

        /* Special case for head node */
        if (this.head == null || this.head.data >= item) {
            node.next = this.head;
            this.head = node;
            return;
        }
        else {

            /* Locate the node before point of insertion. */
            current = this.head;

            while (current.next != null && current.next.data < item)
                current = current.next;

            node.next = current.next;
            current.next = node;
        }
    }
 //it will check whether the strng is empty or not
    isEmpty() {
        if (this.head == null) {
            return true;
        }
    }
    /**
     * @description find the present size of linkedlist
     * @returns {Number} size of linkedlist
     */
    size() {
        return this.capacity;
    }
}
module.exports = {
    //its for calling function
    Mylinkedlist
}