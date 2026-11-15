export interface Itemmaster
{
    id:number;
    CategoryId:number;
    itemBarCode:string;
    itemCode:string;
    itemName:string;
    description?:string;
    Uom:string;
    rate?:number;
    MinimumStock:number;
    MaximumStock:number;
    isActive:boolean;
 
}