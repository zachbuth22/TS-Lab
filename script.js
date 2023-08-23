"use strict";
//Tallest Mountain
Object.defineProperty(exports, "__esModule", { value: true });
var Mountains = [
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
function FindNameOfTallestMountain(allMountains) {
    var tallestmountain = allMountains.reduce(function (prev, current) { return (current.height > prev.height) ? current : prev; });
    return tallestmountain.name;
}
var Mountainname = FindNameOfTallestMountain(Mountains);
console.log(Mountainname);
var Products = [
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
function calcAverageProductPrice(allProducts) {
    var result = 0;
    var count = 0;
    allProducts.forEach(function (p) {
        result += p.price;
        count++;
    });
    return result / count;
}
var avgProduct = calcAverageProductPrice(Products);
console.log(avgProduct);
var Inventory = [
    {
        quantity: 10,
        product: {
            name: "motor",
            price: 10.00
        }
    },
    {
        quantity: 4,
        product: {
            name: "sensor",
            price: 12.50
        }
    },
    {
        quantity: 20,
        product: {
            name: "LED",
            price: 1.00
        }
    }
];
function calcInventoryValue(allInventoryItems) {
    var result = 0;
    allInventoryItems.forEach(function (i) {
        result += i.product.price * i.quantity;
    });
    return result;
}
console.log(calcInventoryValue(Inventory));
