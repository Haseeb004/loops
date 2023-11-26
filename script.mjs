// let usernames =[];
// for(let a=0;a<5;a++){
//     let username = prompt("Entera username")
//     if (username  !="admin "&& username!="Admin" && username!="ADMIN"){
//         if(username.length >=5 && username.length <=20){
//             usernames.push(username)
//             console.log("username added")
//         }
//         else{
//             console.log("invalid username")
//         }
//     }
//     else{
//         console.log("invalid username")
//     }

// }
// let arr = ["A","B","C","D","E"]
// let char = prompt("Enter a char").toUpperCase()
// for(let a=0; a<arr.length;a++){
//     if (arr[a]== char){
//         console.log('present')
//         console.log('not added')
//     }
//     else{
//        arr.push(char)
//     }
    
// }

let userlist = []
for(let a=0;a<5;a++)
{
 let username = prompt("Create a username")
 if (username!="admin"&& username!="Admin"&&username !="ADMIN")

 {
   if (userlist.includes(username))
   {
    alert("user name not avalible")
   }
   else
   {
    if (username.length>=5 && username.length<=20)
    {
        userlist.push(username)
        alert("username created")
    }
    else
    {
        alert("inalid user name length error")
    }
   }
 }
 else
 {
    alert("invalid username admin")
 }
}




























