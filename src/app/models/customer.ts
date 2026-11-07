export interface Customer
{
    id:number;
    customerCode:string;
    customerName:string;
    city?:string | null;
    state?:string | null;
    isActive?:boolean | null;

}
export interface CustomerFilter {
  customerCode: string;
  customerName: string;
  city: string;
  isActive: boolean | null;
  pageNumber: number;
  pageSize: number;
}
 
export interface CustomerRequest {
  customerCode: string;
  customerName: string;
  city: string | null;
  state: string | null;
  isActive: boolean;

}

 