let myId = document.getElementById("my_id");
let myButton = document.getElementById("my_button");
myButton.addEventListener("click", ()=>{

        let value = "#";
        let characters = "0123456789abcdef";
        const charactersLength = characters.length;
        let total;

        setInterval(()=>{
        for (let a = 0; a <= (Math.floor(Math.random() * charactersLength) + 1); a++) {
        
        for (let b = 0; b <= (Math.floor(Math.random() * charactersLength) + 1); b++) {
                
        for(let c = 0; c <= (Math.floor(Math.random() * charactersLength) + 1); c++){
        
        
        for(let d = 0; d <= (Math.floor(Math.random() * charactersLength) + 1); d++){
        
        for(let e = 0; e <= (Math.floor(Math.random() * charactersLength) + 1); e++){   
        
        for(let f = 0; f <= (Math.floor(Math.random() * charactersLength) + 1); f++){

        total = value + characters[a] + characters[b] + characters[c] 
        + characters[d] + characters[e] + characters[f] ;
         }
        }
         }
         }
         }
        
        }
        console.log(total);
                myId.style.backgroundColor=total;

        },1000);
   
});




