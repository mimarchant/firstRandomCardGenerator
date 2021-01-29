window.onload = () => {
    document.querySelector(".numero").innerHTML = cardNumber();
    document.querySelector(".card").classList.add(cardType());
    if (document.querySelector(".numero")=== "10"){
        document.querySelector("span").style.left = "80px"
    }
}

const cardNumber = () =>{
    let cardNumbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    let num = Math.floor(Math.random()*cardNumbers.length)
    return cardNumbers[num]
}

const cardType = () =>{
    let cardTypes = ["hearts", "spades", "diamonds", "clubs"]
    let num = Math.floor(Math.random()*cardTypes.length)
    return cardTypes[num]
}