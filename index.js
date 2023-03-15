//  let num=
// console.log(num);
// localStorage.getItem("name",JSON.stringify(rem))
let gen = document.getElementById("genera");
let network = document.getElementById("networkk");
let amount = document.getElementById("amountt");
let rem = [];
let arry = [];
let rech = document.getElementById("rechhbox");
let show = document.getElementById("sho");
let providers = { Mtn: "*555*", Glo: "*123*",Airtel:"*121*",etisalat:"*999*" };
let stat;
let date = new Date()
 //if(localStorage.getItem("local")){
 // rem = JSON.parse(localStorage.getItem("local"));
 //} else{
  //rem=[]
// }
// let local;

function generate() {
  gen.value = Math.floor(Math.random() * 1000000000000);
  rech.value="";
}
function add() {
  let arr = {
    Network: network.value,
    dateprinted: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
    Amount: amount.value,
    pinn: gen.value,
    printref: `${providers[network.value]}${gen.value}#`,
    stat: false,
  };

  rem.push(arr);
  displayy();
}

function displayy() {
  document.getElementById("row").innerHTML = "";

  rem.forEach(function (element, i) {
    // console.log(element);
    // printref = `${providers[element.Network]}${gen.value}#`;
    document.getElementById("row").innerHTML += `<tr>
        <td>${i + 1}</td>
        <td>${element.Network}</td>
        <td>${element.dateprinted}</td>
        <td>${element.Amount}</td>
        <td>${element.pinn}</td>
        <td>${element.printref}</td>
        <td>${element.stat ? "used" : "unused"}</td>
        
        <td><button class="btn-btn-danger btn-lg" onclick="del(${i})">Delete</button></td>
        </tr>`;
  });
}
function save() {
  // gen.value=""
  add();
  gen.value=""
  //  displayy();
  //localStorage.setItem("local",JSON.stringify(rem));
  // JSON.parse(localStorage.getItem("local"))
   //arry.push(printref);
}
function del(i) {
  rem.splice(i, 1);
  // sharp();
  displayy();
}
// function hmm() {
//   rem.forEach(function (element) {
//     if (show.innerHTML == "Recharge sucessful") {
//       element.stat = true;
//     } else {
//       element.stat = false;
//     }
//   });
// }

//  { Network:network.value, dateprinted:"2/14/2023",Amount:amount.value,pin:gen.value, stat:false}
  // function recharge(){
  //   rech.value=""
  //   let index;
  //   let pin=rech.value.slice(5,rech.valu)
  // }
function recharge(){
  let index;
  let pin=rech.value.slice(5,rech.value.length-1);
  let card= rem.find(function(card,i){
    index=i
    return card.pinn==pin;
  });
  if(card){
    if(card.stat){
      alert("card has already being used")
    } else{
      alert(`You have successfully recharged ${card.Network} ${card.Amount}`)
      rem[index].stat=true;
    }
     
  } else{
    alert("invalid pin")
  }
  displayy();
}


// function recharge() {
//   rech.value=""
//   let index;
//   let pin = rech.value.slice(5, rech.value.length - 1);
//   let card=rem.find(function(card ,i){
//     index=i
//     console.log(card.pinn, pin);
//     return card.pinn==pin
//   })
//   if (card) {
//     if (card.stat) {
//       alert("Card has already been used");
//     } else {
      // alert(`You have successfully recharged ${card.Network} ${card.Amount}`);
//       rem[index].stat = true;
//     }
//   } else {
//     alert("Invlid pin");
//   }
//   displayy();
// }
//   let card = rem.find(function (card, i) {
//     index = i;
//     console.log(card.pin, pin);
//     return card.pin == pin;
//   });
// // console.log(rem, card);

