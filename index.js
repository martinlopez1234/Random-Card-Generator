window.onload =() =>{
   
 
    let aux =document.querySelectorAll(".logos");
    let suit = genPintas();
    for( var i=0; i<aux.length; i++){
        aux[i].innerHTML = suit;
        if(suit=== "&hearts;" || suit=== "&diams;" ){
          aux[i].classList.toggle("red");
  
        }    
       
    }
    document.querySelector('.number').innerHTML = genNumeros();
    
  };
  let genNumeros = () =>{
          let numbers =["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
          let indexNumbers = Math.floor(Math.random()*numbers.length);
          return numbers[indexNumbers];
  }    
  let genPintas = () =>{    
          let suit = ["&spades;", "&clubs;","&hearts;","&diams;"]
          let indexSuit = Math.floor(Math.random()*suit.length);
          return suit[indexSuit];
  }