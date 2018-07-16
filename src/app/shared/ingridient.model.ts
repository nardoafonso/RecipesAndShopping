export class Ingridient{
    public name:string;
    public amount:number;

    constructor(name:string, amount:number){
        this.name=name;
        this.amount=amount;
    }
    // We can use constructor like this
    // constructor(public name:string, public amount:number){}
}