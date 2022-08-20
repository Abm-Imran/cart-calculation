
    function getCountItemOne(vall){
        const numberOne = document.getElementById('totalItemOne')
         const numberOneString = numberOne.value;
        const itemNumberOne = parseInt(numberOneString);

        
        let currentItemNumberOne;

        if(vall === true){
            currentItemNumberOne = itemNumberOne + 1
        }
        else{
            currentItemNumberOne = itemNumberOne - 1
        }
        
        numberOne.value = currentItemNumberOne;
        return currentItemNumberOne;
    }


    const netPriceOne = document.getElementById("totalItemPriceOne");
    const netPriceString = netPriceOne.innerText;
    const itemOnePrice = parseInt(netPriceString);

    function updatePriceOne(item){

        const totalPriceOne = item * itemOnePrice;
        document.getElementById("totalItemPriceOne").innerText = totalPriceOne;

    }





    document.getElementById('increaseItemOne').addEventListener('click', function(){
        const countItemOne = getCountItemOne(true);
        updatePriceOne(countItemOne);
        // console.log(countItemOne);
    })


    document.getElementById('decreaseItemOne').addEventListener('click', function(){
        const countItemOne = getCountItemOne(false);
        updatePriceOne(countItemOne);
        // console.log(countItemOne);
    })

