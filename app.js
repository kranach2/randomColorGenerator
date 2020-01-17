class Cars{
    constructor(name, modal, year){
    this.name = name,
    this.modal = modal,
    this.year = year
    }
}



let hungry = () => {
    console.log("Eat whatever you want....")
}

let doIt = () => {

         function workHard(){
        console.log("Work hard until you get success");
        }
        return workHard;
    }
    
let outerFn = doIt();


const number = 101;

export default Cars;
export {outerFn};
export {doIt};
export {hungry};
export {number};
