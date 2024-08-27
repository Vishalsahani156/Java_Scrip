// const user = {
//     username: "vishal",
//     password: "        12345",
//     logincount: 8,
//     sigin: true,
//     getuser: function () {

//         console.log(this.password);
//         console.log(`username: ${this.username}`);
//         console.log(this)

//     }

// };
// console.log(user.username);
// user.getuser();
// constructor and new keyworde in js 

function user(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    return this;
}
const userone = new user("vishal", 140, "java")
console.log(userone);
const usertwo = new user("Raj", 40, "java_script") 
console.log(usertwo);
