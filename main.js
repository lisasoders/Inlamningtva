
// Gör att "button" lägger till 
document.querySelector("button").addEventListener("click", count);

const inkomstLista = [];
const kostnadsLista = [];
const tabell = [];



function count(e) {
    e.preventDefault();  // Förhindrar att värdet efter man klickat på knappen försvinner

    let utgiftSumma = 0;
    let inkomstSumma = 0;
    

    const select = document.querySelector("select");

    console.log(select.value);

    const beskrivning = document.querySelector(".besk").value
    console.log(beskrivning);

    const nummer = document.querySelector(".num").value
    
    console.log(nummer);

    // När man skriver i "beskrivning" och "nummer" samt väljer "+" kommer värdena pushas till inkomstLista

    if(select.value == "+") {

        document.querySelector(".inkomster").innerHTML +=`<li class="punktBesk"> ${beskrivning} </li>`
        document.querySelector(".inkomster").innerHTML +=`<li class="punktNum"> ${nummer} Kr</li>`
        document.querySelector(".inkomster").style.animation = "para 1s"; // Animationen kopplad till inkomstrutan
       
        inkomstLista.push(nummer);
        
    }
    
    // // När man skriver i "beskrivning" och "nummer" samt väljer "-" kommer värdena pushas till kostnadsLista

   else if(select.value == "-") {
        document.querySelector(".utgifter").innerHTML +=`<li class="punktBesk"> ${beskrivning}</li>`
        document.querySelector(".utgifter").innerHTML +=`<li class="punktNum"> ${nummer} Kr</li>`
        document.querySelector(".utgifter").style.animation = "nopara 2s"; // Animation kopplad till utgiftslistan

        kostnadsLista.push(nummer);
        
    }

    // Tar in värden från inkomstLista och ger värden till inkomstSumma
    inkomstLista.map( (e)=> {
 
        console.log(parseFloat(e))
        inkomstSumma += parseFloat(e)
    })
    
    // Tar in värden från kostnadsLista och ger värden till utgiftSumma
    kostnadsLista.map( (e)=> {
 
        console.log(parseFloat(e))
        utgiftSumma += parseFloat(e)
    })
   

    document.querySelector(".summa").textContent = inkomstSumma - utgiftSumma + ' Kr'; 
    document.querySelector(".besk").value = ""; // Nollställer inputfält "beskrivning" efter man klickat på knappen
    document.querySelector(".num").value = ""; // Nollställer inputfält "kr" efter man klickat på knappen

}





