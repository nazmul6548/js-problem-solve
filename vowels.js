let arr = [
  ["a", "b", "g"],
  ["b","i","o"],
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0;j < arr[i].length;j++) {
        if(arr[i][j] === "a" || arr[i][j] === "e" || arr[i][j] === "i" || arr[i][j] === "o" || arr[i][j] === "u")
        console.log(arr[i][j]);
        
    }
    
}