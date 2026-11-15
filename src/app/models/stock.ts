export interface ItemStock {
  itemmasterId: number;
  itemCode: string;
  itemName: string;
  receivedQuantity: number;
  soldQuantity: number;
  onHandQuantity: number;
}