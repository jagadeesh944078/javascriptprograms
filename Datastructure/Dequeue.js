class Dequeue
{
    constructor()
    {
        this.front=-1;
        this.rear=0;
        this.size=30;
        this.arr=new Array(30);
    }
//it will check whether string is full or not
    isFull()
    {
        if((this.front==0 &&this.rear==this.size-1 )||(this.rear+1==this.front))
        {
            return true;
        }
        return false;
    }
//it will check whether the string is empty or not
    isEmpty()
    {
      return this.front==-1;
    }
//the element will be added into the front position
    addFront(item)
    {//its is checkng the dequeue is full or not
        if(this.isFull())
        {
            console.log("Queue overflow");
            return;
        }
       //if the dequeue is empty it will enter into this condition  
     if(this.front==-1)
        {
            this.front=0;
            this.rear=0;
        }
        else if(this.front==0)
        {
            this.front=this.arr.length-1;
        }
        else{
            this.front--;
        }
        this.arr[this.front]=item;
    }
    //element will be added into the last position
    addRear(item)
    {
        if(this.isFull())
        {
            console.log("Queue overflow");
            return;
        }
        if(this.front==-1)
        {
            this.front=0;
            this.rear=0;
        }
        else if(this.front==this.arr.length-1)
        {
            this.rear=0;
        }
        else
        {
            this.rear++;
        }
        this.arr[this.rear]=item;
    }
    //remove the last postion of the element in the dequeue
    removeRear()
    {
        // it will check whether the string is empty or not
        if(this.isEmpty())
        {
            console.log("Queue underflow");
            return;
        }
        var item;
        //it will compare last position with first postion 
         if(this.rear==this.front)
        {
        item=this.arr[this.rear];
          this.rear=-1;
          this.front=-1;
        }
        //if the position becomes zero it will enter into this condition
        else if(this.rear==0)
        {
            item=this.arr[this.rear];
            this.rear=this.arr.length-1;
        }
        else{
            item=this.arr[this.rear]
            this.rear=this.rear--;
        }
        return item;
    }
    //it will remove the front element from the queue
    removeFront()
    {
        if(this.isEmpty())
        {
            console.log("Queue underflow");
            return;
        }
        var item;
        if(this.front==this.rear)
        {
            item=this.arr[this.front];
            this.front=-1;
            this.rear=-1;
        }
        else if(this.front==this.arr.length-1)
        {
          item=this.arr[this.front];
          this.front--;
        }
        else
        {
            item=this.arr[this.front];
            this.front++;
        }
        return item;
    }
    //we will get the front element
    getFront()
    {
        if(this.isEmpty())
        {
            return -1;
        }
        return this.arr[this.front];
    }
    //we will get the last element
    getRear()
    {
        if(this.isEmpty())
        {
            return -1;
        }
        return this.arr[this.rear];
    }
    //it will check the string its palindrome or not
    PalindromeChecker(str)
    {
        for(let i=0;i<str.length;i++)
        {
            this.addRear(str.charAt(i));
        }
        console.log(this.front);
        console.log(this.rear);
        while(this.front!=this.rear && this.front<this.rear)
        {
            
            if(this.getFront()!=this.getRear())
            {
                return false;
            }
            this.front++;
            this.rear--;
        }
       return true;
    }
}

module.exports={
    Dequeue
}