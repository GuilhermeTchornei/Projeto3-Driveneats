let selectedFood, selectedDrink, selectedDessert;
const foodList = document.querySelectorAll(".food");
const drinkList = document.querySelectorAll(".drink");
const dessertList = document.querySelectorAll(".dessert");
const button = document.querySelector("button");


function setFood(item) {
    for (let i = 0; i < foodList.length; i++)
    {
        if (foodList[i] === item)
        {
            foodList[i].classList.add("selected");
            selectedFood = i;
        }
        else
        {
            foodList[i].classList.remove("selected");
        }
    }
    setButton();
}
function setDrink(item) {
    for (let i = 0; i < drinkList.length; i++)
    {
        if (drinkList[i] === item)
        {
            drinkList[i].classList.add("selected");
            selectedDrink = i;
        }
        else
        {
            drinkList[i].classList.remove("selected");
        }
    }
    setButton();
}
function setDessert(item) {
    for (let i = 0; i < dessertList.length; i++)
    {
        if (dessertList[i] === item)
        {
            dessertList[i].classList.add("selected");
            selectedDessert = i;
        }
        else
        {
            dessertList[i].classList.remove("selected");
        }
    }
    setButton();
}

function setButton() {
    if (!isNaN(selectedDessert && selectedDrink && selectedFood))
    {
        button.classList.add("finished");
        button.innerHTML = "Fechar pedido";
        button.addEventListener("click", finishOrder);
    }
}

function finishOrder() {
    let foodName = foodList[selectedFood].querySelector(".item-name").innerHTML;
    let foodPrice = Number(foodList[selectedFood].querySelector(".value").innerHTML.replace(',', '.'));

    let drinkName = drinkList[selectedDrink].querySelector(".item-name").innerHTML;
    let drinkPrice = Number(drinkList[selectedDrink].querySelector(".value").innerHTML.replace(',', '.'));

    let dessertName = dessertList[selectedDessert].querySelector(".item-name").innerHTML;
    let dessertPrice = Number(dessertList[selectedDessert].querySelector(".value").innerHTML.replace(',', '.'));

    let totalPrice = (foodPrice + drinkPrice + dessertPrice).toFixed(2);

    let message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${foodName}
- Bebida: ${drinkName}
- Sobremesa: ${dessertName}
Total: R$ ${totalPrice}`);

    let url = "http://wa.me/554799043538?text=" + message;
    //console.log(message);


    window.open(url, '_brank');
}
