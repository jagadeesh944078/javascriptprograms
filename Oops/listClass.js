class Node 
{
    constructor(element) 
    {
        this.element = element;
        this.next = null
    }
}
  
class listClass
{
    constructor() 
    {
        this.head = null;
        this.size = 0;
    }

    add(element) 
    {
        var node = new Node(element);
        var current;
        if (this.head == null)
            this.head = node;
        else 
        {
            current = this.head;
            while (current.next) 
            {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) 
    {
        if (index > 0 && index > this.size)
            return false;
        else 
        {
            var node = new Node(element);
            var curr, prev;
            curr = this.head;
            if (index == 0) 
            {
                node.next = head;
                this.head = node;
            } 
            else 
            {
                curr = this.head;
                var it = 0;
                while (it < index) 
                {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) 
    {
        if (index > 0 && index > this.size)
            return -1;
        else 
        {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

                   // deleting first element
            if (index == 0) 
            {
                this.head = curr.next;
            }
            else 
            {
                while (it < index) 
                {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.element;
        }
    }
               
    removeElement(element) 
    {
        var current = this.head;
        var prev = null;
        while (current != null) 
        {
            if (current.element === element) 
            {
                if (prev == null) 
                {
                    this.head = current.next;
                } 
                else 
                {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    indexOf(element) 
    {
        var count = 0;
        var current = this.head;
        while (current != null) 
        {
            if (current.element == element)
                return count;
            count++;
            current = current.next;
        }
        return -1;
    }

    isEmpty()
    {                   
        return this.size == 0;
    }

    size_of_list() 
    {                 
        return this.size;
    }

    printList() 
    {                     
        var curr = this.head;
        var str = "";
        while (curr) 
        {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    printList1() 
    {
        var curr = this.head;
        var str = "";
        while (curr) 
        {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }

    GetElement(index) 
    {                  
        var current = this.head;
        var count = 0;                     
        while (current != null) 
        {
            if (count == index)
                return current.element;
            count++;
            current = current.next;
        }
        /* if we get to this line, the caller was asking 
        for a non-existent element so we assert fail */
        return 0;
    } 

    insertSort(element)
    {
        var node = new Node(element);
        /* Special case for head node */
        if (this.head == null || this.head.element >= node.element) 
        {
            node.next = this.head;
            this.head = node;
        }
        else 
        {
        /* Locate the node before point of insertion. */
            var current = this.head;
            while (current.next != null &&current.next.element < node.element)
                current = current.next;
            node.next = current.next;
            current.next = node;
        }
    }

    containsObj(value)
    {
        var current=this.head;

        while(current!=null){
        if(current.element.companyname==value){
            return true;
        }
        current=current.next;
    }
    return false;
    }

}


module.exports = listClass
