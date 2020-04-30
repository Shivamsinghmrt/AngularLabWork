import { MObile } from "../file1/Mobile";

class BasicPhone extends MObile{

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


let basicphone:BasicPhone=new BasicPhone(101,'Nokia',1950,'basicphone');
basicphone.printMobileDetail(basicphone.mobileType);
