// const array =[1,2,3,4,5];
// const result =array.reduce((prevValue, array) => {
// return prevValue + array} ,0);
// console.log(result);



// what is this?
// (() => {
//     console.log(typeof arguments);
// }) ();
// answer is object ,but how do it work  it s dont know

// const numbers =[1,2,3];
// const method = numbers.reduce((previousvalue,currentvalue) => {
//     return currentvalue -previousvalue;
// },2);
// console.log(method);


const arr = [1,2,7,9,6,7];
arr.reduceRight((acc,cur) => {
    // console.log(acc);
    // console.log(cur);
    
    
});

const userCard = [
    {
    productName : "watch",
    price:100,
    
},
{
    productName : "laptop",
    price:20000,
},
{
    productName : "iphone",
    price:30000,
},
{
    productName : "tv",
    price:40000,
}
];
const totalPrice =userCard.reduce((previousvalue, currentvalue) => {
    return previousvalue + currentvalue.price;
},10);
console.log(totalPrice);