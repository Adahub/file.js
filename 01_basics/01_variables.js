const  accountId = 144756
let accountEmail = "ada@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2// not allowed
accountEmail = "adc@ab.com"
accountPassword = "123456"
accountCity = "bengaluru"

console.log(accountId);
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

//SECOND METHOD//
console.log([accountId, accountEmail, accountPassword, accountCity, accountState])
