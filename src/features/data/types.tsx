export interface Computer {
    id: number;
    img: string;
    brand: string;
    model: string;
    price: number;
    specs: string[];
  }
  
  export interface Laptop {
    id: number;
    img: string;
    brand: string;
    model: string;
    price: number;
    specs: string[];
  }
  
  export interface Accessory {
    id: number;
    img: string;
    type: string;
    brand: string;
    model: string;
    price: number;
  }
  
  export interface Data {
    computers?: Computer[];
    laptops?: Laptop[];
    accessories?: Accessory[];
  }
  