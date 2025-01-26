export type IProduct = {
  title: string;
  price: string;
  id: number;
  rating?: string; 
  old_price?: string; 
  img_url: string;
  img1?: string; 
  img2?: string;
  img3?: string;
  img4?: string;
  name: string;
  description: string;
  size?: string[]; 
  color?: string[]; 
  qty?: number; 
  unitPrice: number; 
}


  export type Cart = {
    title: string;
    price: number; 
    id: number;
    size: string[];
    color?: string[];
    image?: string[];
    unitPrice: number;
    qty:number;
    uuid:string | number | undefined
  }
  

  