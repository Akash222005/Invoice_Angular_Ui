export type PoStatus =
  | 'Draft'
  | 'Approved'
  | 'PartiallyReceived'
  | 'Received'
  | 'Cancelled';
 
export const PO_STATUSES: PoStatus[] = [
  'Draft',
  'Approved',
  'PartiallyReceived',
  'Received',
  'Cancelled',
];
 

export interface PurchaseOrderDetail {
  id: number;
  purchaseOrderId: number;
  itemmasterId: number;
  quantity: number;
  rate: number;
  discountAmount: number;
  taxPercent: number;
  taxAmount: number;
  lineTotal: number;
  receivedQuantity: number;
}
 

export interface PurchaseOrder {
  id: number;
  poNumber: string;
  poDate: string;
  vendorId: number;
  status: PoStatus | string;
  notes?: string | null;
  subTotal: number;
  taxAmount: number;
  totalAmount: number;
  createdBy?: string | null;
  createdDate?: string | null;
  updatedBy?: string | null;
  updatedDate?: string | null;
  details: PurchaseOrderDetail[];
}
 

export interface PurchaseOrderLineRequest {
  itemmasterId: number;
  quantity: number;
  rate: number;
  discountAmount: number;
  taxPercent: number;
}
 

export interface PurchaseOrderRequest {
  poNumber: string;
  poDate: string;
  vendorId: number;
  notes: string;
  details: PurchaseOrderLineRequest[];
}
 
export interface PurchaseOrderFilter {
  poNumber?: string;
  vendorId?: number | null;
  status?: string | null;
  pageNumber: number;
  pageSize: number;
}