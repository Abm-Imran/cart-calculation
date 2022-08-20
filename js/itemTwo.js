
    // Get Selected Item Number Here 
    function getCountItemTwo(v){
        const number = document.getElementById('totalItemTwo')
        const numberString = number.value;
        const itemNumber = parseInt(numberString);

        
        let currentItemNumber;

        if(v === true){
            currentItemNumber = itemNumber + 1
        }
        else{
            currentItemNumber = itemNumber - 1
        }
        
        number.value = currentItemNumber;
        return currentItemNumber;
    }


    // Get Item Amount Here
    const netPriceTwo = document.getElementById("itemPriceTwo");
    const netPriceStringTwo = netPriceTwo.innerText;
    const itemTwoPrice = parseInt(netPriceStringTwo);

    function updatePriceTwo(pr){

        const totalPriceTwo = pr * itemTwoPrice;
        document.getElementById("itemPriceTwo").innerText = totalPriceTwo;

    }





    document.getElementById('increaseItemTwo').addEventListener('click', function(){
        const countItem = getCountItemTwo(true);

        updatePriceTwo(countItem);

        getTotal();
        // console.log(countItem);
    })


    document.getElementById('decreaseItemTwo').addEventListener('click', function(){
        const countItem = getCountItemTwo(false);

        updatePriceTwo(countItem);

        getTotal();
        // console.log(countItem);
    })

