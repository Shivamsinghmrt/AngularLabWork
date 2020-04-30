import { MObile } from "../file1/Mobile";

class SmartPhone extends MObile{

    mobileType:string;

    constructor(mobileID:number,
        mobileName:string,
        mobileCost:number,mobiletype:string){
            super(mobileID,
                mobileName,
                mobileCost);
                this.mobileType=mobiletype;

        }
}

let smartphone:SmartPhone=new SmartPhone(202,'Samsung',6950,'smartphone');
console.log(smartphone.mobileType);
console.log(smartphone.mobileID);
console.log(smartphone.mobileCost);
console.log(smartphone.mobileName);

