//Tallest Mountain

export{}

interface Mountain {
    name: string;
    height: number;
}

let Mountains: Mountain [] = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];

function FindNameOfTallestMountain(allMountains:Mountain[]):string{

    let tallestmountain: Mountain = allMountains.reduce((prev, current)=> (current.height > prev.height)?current : prev)
    return tallestmountain.name;
}

let Mountainname: string = FindNameOfTallestMountain(Mountains);
console.log(Mountainname);

//Products
interface Product {
    name: string
    price: number
}

let Products: Product [] = [
    {
        name: "Very Creepy Lamp",
        price: 10
    },
    {
        name: "Broken Snowboard",
        price: 15
    },
    {
        name: "Skittles",
        price: 1
    }
];

function calcAverageProductPrice(allProducts:Product[]):number{
    let result = 0;
    let count = 0;
    allProducts.forEach((p:Product) => {
        result += p.price;
        count ++;
    })
    return result/count;
}
let avgProduct: number = calcAverageProductPrice(Products);
console.log(avgProduct)

//Inventory

interface InventoryItem {
    product: Product;
    quantity: number;
}
let Inventory: InventoryItem[] = [
    {
        quantity: 10,
        product: {
        name: "motor",
        price: 10.00
        }
    },
    {
        quantity: 4,
        product:{
        name: "sensor",
        price: 12.50
        }
    },
    {
        quantity: 20,
        product:{
        name: "LED",
        price: 1.00
        }
    }
];

function calcInventoryValue(allInventoryItems: InventoryItem[]):number{
    let result = 0
    allInventoryItems.forEach((i:InventoryItem)=> {
        result += i.product.price * i.quantity;
    })
    return result;
}

console.log(calcInventoryValue(Inventory))


