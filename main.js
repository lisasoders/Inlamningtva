
// Gör att "button" lägger till 
document.querySelector("button").addEventListener("click", count);

const inkomstLista = [];
const kostnadsLista = [];

// Gör att det som knappen får fram stannar kvar
function count(e) {
    e.preventDefault();

    let utgiftSumma = 0;
    let inkomstSumma = 0;

    const select = document.querySelector("select");

    console.log(select.value);

    const beskrivning = document.querySelector(".besk").value
    console.log(beskrivning);

    const nummer = document.querySelector(".num").value
    
    console.log(nummer);

    if(select.value == "+") {

        document.querySelector(".inkomster").innerHTML +=`<li class="inkomstLista"> ${beskrivning} ${nummer}  </li>`

        inkomstLista.push(nummer);
        
    }

   else if(select.value == "-") {
        document.querySelector(".utgifter").innerHTML +=`<li class="utgifts-lista"> ${beskrivning} ${nummer}</li>`

        kostnadsLista.push(nummer);
    }

    
    inkomstLista.map( (e)=> {
 
        console.log(parseFloat(e))
        inkomstSumma += parseFloat(e)
    })
    // console.log(inkomstSumma);
    kostnadsLista.map( (e)=> {
 
        console.log(parseFloat(e))
        utgiftSumma += parseFloat(e)
    })
    //console.log(utgiftSumma);

    document.querySelector(".summa").textContent = inkomstSumma - utgiftSumma;

}

