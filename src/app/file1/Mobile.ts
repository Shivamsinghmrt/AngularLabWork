
export class MObile{

    mobileID:number;
    mobileName:string;
    mobileCost:number;

    constructor(mobileID:number,
        mobileName:string,
        mobileCost:number){
            this.mobileID=mobileID;
            this.mobileCost=mobileCost;
            this.mobileName=mobileName;
        }



    printMobileDetail(mobileType:string){
        console.log(this.mobileID);
        console.log(this.mobileName);
        console.log(this.mobileCost);
        console.log(mobileType);




    }
}