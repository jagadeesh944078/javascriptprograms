/******************************************************************************
 *  Execution       :   1. default node         cmd> node Utility.js 
 *                      
 * 
 *  Purpose         : TO deploy all the busness logic.
 * 
 *  @description    
 * 
 *  @file           : utility.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : jagadeesh
 *  @version        : 10.0
 *  @since          : 19-01-2019
 *
 ******************************************************************************/
var filestream = require('fs');
var readline = require('readline-sync');
module.exports = {
     /**
     * @ purpose :to play gambler.
     * @description: This method is used to play the gambler game..
     * @param {goal amount} goal 
     */
    inventory(object) {
        var rice = object.rice;
        var wheat = object.wheat;
        var pulses = object.pulses;
        for (var key in rice) {
            console.log('\n');
            console.log("The total price of ", rice[key].rice_name, " is ", rice[key].weight * rice[key].price);
        }
        for (var key in wheat) {
            console.log('\n');
            console.log("The total price of ", wheat[key].wheat_name, " is ", wheat[key].weight * wheat[key].price);
        }
        for (var key in pulses) {
            console.log('\n');
            console.log("the total price of ", pulses[key].pulse_name, " is ", pulses[key].weight * pulses[key].price);
        }
    },
     /**
     * @ purpose :to replace the words.
     * @description: This method is used to replace the selected words by using replace function..
     * @return:returns the replaced data
     */
    regExp(name, fullname, phoneno, answer) {
        var content = "Hello <<name>>, we have your full name as <<fullname>>, in our system your contact number is 91xxxxxxxxxx, please, let us known that incase of any clarification Thank you BridgeLab xx/xx/xxxx"
        content = content.replace('<<name>>', name);
        content = content.replace("<<fullname>>", fullname);
        content = content.replace("xxxxxxxxxx", phoneno);
        content = content.replace("xx/xx/xxxx", answer);
        console.log(content);
    },
     /**
     * @ purpose :to print sharevalues.
     * @description: This method is used to print the stockdetails separately and prints the complete share value..
     * @return:return the stockdetails
     */
    shares(data) {
        var stock = data.stock;
        var stock1 = data.stock1;
        var stock2 = data.stock2;
        console.log('\n');
        for (var key in stock) {
            console.log("The no of shares in " + stock[key].stock_name, " comapany  " + stock[key].no_of_shares, " the share value is " + stock[key].total_price)
        }
        for (var key in stock1) {
            console.log("The no of shares in " + stock1[key].stock_name, " comapany  " + stock1[key].no_of_shares, " the share value is " + stock1[key].total_price)
        }
        for (var key in stock2) {
            console.log("The no of shares in " + stock2[key].stock_name, " comapany  " + stock2[key].no_of_shares, " the share value is " + stock2[key].total_price)
        }
        var totalTCSshares = 0;
        for (var key in stock) {
            totalTCSshares = parseInt(totalTCSshares) + parseInt(stock[key].no_of_shares * stock[key].total_price)
        }
        console.log("total price of all tcs shares:" + totalTCSshares)
        for (var key in stock) {
            var totalMahendarashres = parseInt(stock1[key].no_of_shares * stock1[key].total_price)
        }
        console.log("total price of all mahendra shares:" + totalMahendarashres)
        for (var key in stock) {
            var totaljioshares = parseInt(stock2[key].no_of_shares * stock2[key].total_price)
        }
        console.log("total price of all jio shares:" + totaljioshares)
        var total_price_of_allshares = totalTCSshares + totalMahendarashres + totaljioshares;
        console.log("total price of all shares:" + total_price_of_allshares)
    },
     /**
     * @ purpose :to print the companyshares.
     * @description: This method is used to add the stocks and we can also remove the stocks form the file..
     * @returns:returns the stock details
     */
    inventManagement(data) {
        var ans = Number(readline.question("1.to add\n 2.to delete 3.to print 4.to show"));
        if (ans == 1) {
            this.add(data)
        }
        else if (ans == 2) {
            this.remove(data)
        }
        else if (ans == 3) {
            this.print(data)
        }
        else if (ans == 4) {
            this.show(data)
        }
        else {
            console.log("invalid key/input");
        }
    },
    add(data) {
        var name = readline.question("enter the name of the share ")
        var number = readline.question("enter the no of shares ")
        var price = readline.question("enter the value of share")
        data.stock.push({
            stockname: name,
            no_of_shares: number,
            sharevalue: price
        })
        filestream.writeFileSync('inventManagement.json', JSON.stringify(data));
        this.inventManagement(data);

    },
    remove(data) {
        // var stock=readline.question("1.choose stockname\n 2.choose stockprice")
        // if(stock==1){
        var answer = readline.question("enter stockname Do you want delete")
        for (let i = 0; i < data.stock.length; i++) {
            if (data.stock[i].stock_name == answer) {
                var index = data.stock.indexOf(data.stock[i]);
                data.stock.splice(index, 1);
            }
        }
        filestream.writeFileSync('inventManagement.json', JSON.stringify(data));
        this.inventManagement(data);
    },
    print(data) {
        var stock = data.stock;
        for (var key in stock) {
            console.log(stock[key].stockname, stock[key].no_of_shares, stock[key].sharevalue)

        }
    },
    show(data) {
        console.log(data);
        this.inventManagement(data);
    },
     /**
     * @ purpose :to print the clienquedata.
     * @description: This method is used to manage the patient and doctor details..
     * @return:returns the clienque data
     */
    clienqueManagement(data) {
        var Doctor = data.Doctor;
        var patient = data.patient;
        var res = readline.question("1.serach Doctor details\n 2.search patient details")
        {
            if (res == 1) {
                let inf = readline.question("Press \n 1. to search Doctor by his name \n 2. by ID ,\n 3.by Specialization ");
                if (res == 1) {
                    var name = readline.question("enter the Doctor name:")
                    for (var key in Doctor) {
                        if (Doctor[key].name == name) {
                            console.log(Doctor[key].name, Doctor[key].Id, Doctor[key].specialization);

                        }
                    }
                }
                else if (res == 2) {
                    var id = readline.question("enter the Doctor id:")
                    for (var key in Doctor) {
                        if (Doctor[key].id == id) {
                            console.log(Doctor[key].name, Doctor[key].Id, Doctor[key].specialization);
                        }
                    }
                }
                else if (res == 3) {
                    var id = readline.question("enter the specilization:")
                    for (var key in Doctor) {
                        if (Doctor[key].id == id) {
                            console.log(Doctor[key].name, Doctor[key].Id, Doctor[key].specialization);
                        }
                    }
                }
                else {
                    console.log("Enter valid input");
                    this.clinicManagement(data);
                }
            }
            else if (res == 2) {
                let inf = readline.question("Press \n 1. to search patient by his name \n 2. by ID ,\n 3.by Mobile number ");
                if (inf == 1) {
                    var nam = readline.question("Enter the name of Patient ");
                    for (var key in patient) {
                        if (patient[key].name == nam) {
                            console.log("your Patient information----");
                            console.log(patient[key].name, patient[key].Id, patient[key].Contact_number, patient[key].Age);
                        }
                    }
                }
                else if (inf == 2) {
                    var idn = readline.question("Enter the Id of Patient ");
                    for (var key in patient) {
                        if (patient[key].Id == idn) {
                            console.log("your Patient information");
                            console.log(patient[key].name, patient[key].Id, patient[key].Contact_number, patient[key].Age);
                        }
                    }
                }
                else if (inf == 3) {
                    var mob = readline.question("Enter the mobile number of Patient "); deck2D
                    for (var key in patient) {
                        if (patient[key].Contact_number == mob) {
                            console.log("your Patient information");
                            console.log(patient[key].name, patient[key].Id, patient[key].Contact_number, patient[key].Age);
                        }
                    }
                }
                else if (inf == 4) {
                    return;
                }
                else {
                    console.log("Enter the valid input")
                }
            }
            else {
                console.log("Enter valid input")
            }
        }
    },
     /**
     * @ purpose :to print the data.
     * @description: This method is used to print the complete details of the person..
     * @return:returns data of book
     */
    addressbook(data) {
        var answer = readline.question("  Press \n 1.To add Person \n 2. To update Person \n 3. To delete Person \n 4. To sort the file by Zip \n 5. To sort the file by name \n 6. To display \n 7. To exit ");
        switch (answer) {
            case '1': this.addPerson(data);
                break;
            case '2': this.update(data);
                break;
            case '3': this.deleted(data);
                break;
            case '4': this.sortingZip(data);
                break;
            case '5': this.sortingName(data);
                break;
            case '6': this.displ(data);
                break;
            case '7': console.log("  Thank you  ");
                break;
            default: console.log("------wrong input------ ");
                this.addressbook(data);
        }

    },
    addPerson(data) {
        var firstname = readline.question(" Enter First name of person  ");
        var lastname = readline.question(" Enter Last name of person   ");
        var contact = readline.question(" Enter contact number of person ");
        var address = readline.question(" Enter address of person ");
        var state = readline.question(" Enter state of person ");
        var zip = readline.question(" Enter zip code of person ");

        data.person.push({
            First_name: firstname,
            Last_name: lastname,
            Contact: contact,
            Address: address,
            State: state,
            Zip: zip
        })
        filestream.writeFileSync('address.json', JSON.stringify(data));
        this.addressbook(data);

    },
    displ(data) {
        console.log(data);
        this.addressbook(data);
    },

    deleted(data) {
        var ans = readline.question("press \n1.choose name \n 2. choose contact number  ");
        if (ans == 1) {
            let res = readline.question("Enter first name of the person ")
            for (let i = 0; i < data.person.length; i++) {
                if (data.person[i].First_name == res) {
                    var index = data.person.indexOf(data.person[i]);

                    data.person.splice(index, 1);
                }
            }
            filestream.writeFileSync('address.json', JSON.stringify(data));
            this.addressbook(data);
        }
        else if (ans == 2) {
            let res = readline.question("Enter the mobile number of the person")
            for (let i = 0; i < data.person.length; i++) {
                if (data.person[i].Contact == res) {
                    var index = data.person.indexOf(data.person[i]);
                    data.person.splice(index, 1);
                }
            }
            filestream.writeFileSync('address.json', JSON.stringify(data));
            this.addressbook(data);
        }
    },
    sortingZip(data) {
        let refer = data.person;
        function sortbyzip(a, b) {
            return (a.Zip - b.Zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);
        this.addressbook(data);
    },

    sortingName(data) {
        let refer = data.person;
        function sortbyname(a, b) {
            if (a.First_name == b.First_name) {
                return 0;
            }
            else if (a.First_name > b.First_name) {
                return 1;
            }
            else if (a.First_name < b.First_name) {
                return -1;
            }
        }
        let res = refer.sort(sortbyname);
        console.log(res);
        this.addressbook(data);
    },
    update(data) {
        let ans = readline.question("Enter the  name of the exsting person ");

        for (let i = 0; i < data.person.length; i++) {
            filestream.writeFileSync('address.json', JSON.stringify(data));
            if (data.person[i].First_name == ans || data.person[i].Contact == anss) {
                var que = readline.question("\nPrees \n 1. To update First name \n 2. To update Last name \n 3. To update contact \n 4.To update state \n 5. To update Address \n 6. To update zip \n 7. To Exit  ");
                if (que == 1) {
                    let res = readline.question("Enter the new  First name of person ");
                    data.person[i].First_name = res;
                    return res;
                }
                else if (que == 2) {
                    let res1 = readline.question("Enter the new Last name of the person  ");
                    data.person[i].Last_name = res1;
                    this.save(data);
                }
                else if (que == 3) {
                    let res2 = readline.question("Enter the new contact number  ");
                    data.person[i].Contact = res2;
                    this.save(data);
                    filestream.writeFileSync('address.json', JSON.stringify(data));
                }
                else if (que == 4) {
                    let res3 = readline.question("Enter the new state name ");
                    data.person[i].State = res3;
                    this.save(data);
                }
                else if (que == 5) {
                    let res4 = readline.question(" Enter the new address ");
                    data.person[i].Address = res4;
                    this.save(data);;
                }
                else if (que == 6) {
                    let res5 = readline.question("Enter the new zip ");
                    data.person[i].Zip = res5;
                    this.save(data);
                }
                else if (que == 7) {
                    return;;
                }


            }
        }
    },
    save(data) {
        filestream.writeFileSync('address.json', JSON.stringify(data));
        this.update(data);
    },
 /**
     * @ purpose :to print the customer and companydata.
     * @description: This method is used to print the data of company and user information..
     * @return:it returns the data of user and company
     */
    Commercial(data, data1, data2) {
        var answer = readline.question("Press.. \n 1. create \n 2. open \n 3. edit \n 4. exit  ");
        if (answer == 1) {
            this.create(data, data1, data2);
        }
        else if (answer == 2) {
            this.open(data, data1, data2);
        }
        else if (answer == 3) {
            this.edit(data);
        }
        else if (answer == 4) {
            console.log("  Thanks for your transaction ");
            return;
        }
        else {

            console.log(" Invalid input ");
        }
    },

    create(data, data1, data2) {
        var ask = readline.question(" Are you a exsting user \n if yes press 1. \n if No press 2.  ");
        if (ask == 1) {
            if (data1.user.length == 0) {
                console.log(" No users available  ");
                return;
            }
            else {
                var que = readline.question(" Enter your existing id ");

                for (let i = 0; i < data1.user.length; i++) {
                    if (data1.user[i].id == que) {
                        console.log(data1.user[i]);
                        this.purchase(data, data1, data2);

                    }
                }

            }
        }
        else if (ask == 2) {
            let nam = readline.question(" Enter your name ");
            let idn = readline.question(" Enter the user id ");
            let amo = readline.question(" Enter your amount ");
            let shar = readline.question(" Enter your shares ");
            data1.user.push({
                name: nam,
                id: idn,
                symbol: "",
                amount: amo,
                shares: shar
            })
            var read = readline.question(" To save information Enter 1.");
            if (read == 1) {
                filestream.writeFileSync("customer.json", JSON.stringify(data1));
                console.log(" Your information added ");
            }
            else {
                console.log(" Invalid input ");
            }

        }
    },
    open(data, data1, data2) {
        let read = readline.question(" Enter your customer ID ");
        var flag = true;
        if (flag)
            for (let i = 0; i < data1.user.length; i++) {
                if (data1.user[i].id == read) {

                    console.log(data1.user[i]);
                    flag = true;
                    this.purchase(data, data1, data2);
                }
                else {
                    flag = false
                    //     } for (let i = 0; i < data1.user.length; i++) {
                    //         if (data1.user[i].id == read) {

                    // }
                    if (flag == false) {
                        console.log(" No users found ");
                    }
                }
            }
    },
    purchase(data, data1, data2) {
        let ask = readline.question(" press \n 1. buy shares \n 2. sell shares \n 3. add money \n 4. display  \n 5. exit ");
        if (ask == 1) {
            for (var key in data.company) {
                console.log(" Company details ")
                console.log(data.company[key]);
            }
            let que = readline.question(" Please, Enter your id ");
            var flag = false;;
            for (let i = 0; i < data1.user.length; i++) {
                if (data1.user[i].id == que) {
                    data1.user[i].amount += que;
                    var cmpshare = data.company[i].shares;
                    var found = data1.user[i];
                    flag = true;
                    //console.log(data1.user[i]);
                }
                else {
                    flag = false;
                    //console.log("No such id found ");
                }
            }
            if (flag == false) {
                console.log(found);
            }
            else {
                console.log("No such id found ");
            }
            let read = readline.question(" Enter the company symbol ");
            for (let i = 0; i < data.company.length; i++) {
                if (data.company[i].symbol == read) {
                    var compamt = data.company[i].share_per_price;
                    var cmpshare = data.company[i].shares;
                    var get = data.company[i];
                }
            }

            let buy = readline.question(" Enter how many shares do you want to buy from this company ");
            for (let i = 0; i < buy; i++) {
                let que = readline.question(" Please, Enter your id ");
                var flag = false;;
                for (let i = 0; i < data1.user.length; i++) {
                    if (data1.user[i].id == que) {
                        var shares = data1.user[i].shares += buy;
                        var n2 = data1.user[i].name;
                        var n3 = data1.user[i].id;
                        var n4 = data1.user[i].symbol;
                        var n5 = data1.user[i].amount;
                        console.log(shares, +n2, +n3, +n4, +n5);
                        var cmpshare = data.company[i].shares;
                        var found = data1.user[i];

                    }

                }
            }
        }
        else if (ask == 3) {
            let que = readline.question(" Please, Enter your id ");
            var flag;;
            for (let i = 0; i < data1.user.length; i++) {
                if (data1.user[i].id == que) {
                    var found = data1.user[i];
                    flag = true;
                }
                else {
                    flag = false;
                }
            }
            if (flag == true) {
                var amoun = readline.question(" Enter your amount do you want to add in account ")
                for (let i = 0; i < data1.user.length; i++) {
                    if (data1.user[i].id == que) {
                        data1.user.amount = amoun;
                    }
                }
                filestream.writeFileSync("customer.json", JSON.stringify(data1));
                console.log(" Your amount is  added ");
            }
            else {
                console.log(" No user found");
            }
        }

    },
     /**
     * @ purpose :to print the deckofcards.
     * @description: This method is used to display the cards of four players..
     * @return:print the playercards 
     */
    Deck2D() {
        var deck = new Array();
        /**
         * @description declaring an empty array
         */
        var suit = ["♣", "♦", "♥", "♠"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        for (var i = 0; i < suit.length; i++) {
            for (j = 0; j < rank.length; j++) {
                var temp = " ";
                deck.push(temp + suit[i] + rank[j]);
                /**
                 * @description To concatenate the rank & suit elements
                 */
            }
        }
        /**
         * @description For loop & the temeperaray variable is used to shuffle the cards
         */
        for (var i = 0; i < deck.length; i++) {
            var index = parseInt((Math.random() * deck.length));
            /**
             * @description Math.random() is used to get the random elements
             */
            var temp = deck[i];
            deck[i] = deck[index];
            deck[index] = temp;
        }
        var x = 0; var y = 9;
        var newArr = [];
        console.log("The cards received by the 4 players using 2-D array : \n");
        for (var i = 0; i < 4; i++) {
            var array = [];
            /**
             * @description Reinitializing the array to get a new 1-D array 
             */
            for (var j = x; j < y; j++) {
                array.push(deck[j]);
                /**
                 * @description pushing the shuffled deck into the array
                 */
            }
            x = x + 9;
            y = y + 9;
            while (array.length)
                newArr.push(array.splice(0, 10));
            /**
             * @description Always checking the array length pushing into the new array 
             *              because the array is reinitialized always
             */
        }
        for (var i = 1; i <= 4; i++) {
            console.log(i + " Player's cards: " + newArr[i - 1] + "\n");
        }
    }
}
  
    
