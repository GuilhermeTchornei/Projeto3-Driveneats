let selectedFood, selectedDrink, selectedDessert;
const button = document.querySelector("button");


function setItem(item) {
    let selectedItem;

    if (item.classList.contains("food"))
    {
        selectedItem = document.querySelector(".food-container .selected");
        selectedFood = item;
    }
    else if (item.classList.contains("drink"))
    {
        selectedItem = document.querySelector(".drink-container .selected");
        selectedDrink = item;
    }
    else
    {
        selectedItem = document.querySelector(".dessert-container .selected");
        selectedDessert = item;
    }


    if (selectedItem != null)
    {
        selectedItem.classList.remove("selected");
    }

    item.classList.add("selected");

    setButton();
}


function setButton() {
    if (document.querySelectorAll(".selected").length == 3)
    {
        button.classList.add("finished");
        button.innerHTML = "Fechar pedido";
        button.addEventListener("click", finishOrder);
    }
}

function finishOrder() {
    let foodName = selectedFood.querySelector(".item-name").innerHTML;
    let foodPrice = Number(selectedFood.querySelector(".value").innerHTML.replace(',', '.'));

    let drinkName = selectedDrink.querySelector(".item-name").innerHTML;
    let drinkPrice = Number(selectedDrink.querySelector(".value").innerHTML.replace(',', '.'));

    let dessertName = selectedDessert.querySelector(".item-name").innerHTML;
    let dessertPrice = Number(selectedDessert.querySelector(".value").innerHTML.replace(',', '.'));

    let totalPrice = (foodPrice + drinkPrice + dessertPrice).toFixed(2);

    let message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${foodName}
- Bebida: ${drinkName}
- Sobremesa: ${dessertName}
Total: R$ ${totalPrice}`);

    let url = "http://wa.me/554796924639?text=" + message;


    window.open(url, '_brank');
}
