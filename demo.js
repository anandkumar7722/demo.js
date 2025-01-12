var price=55000
var product = "ceh"
var tax=18
console.log(product)
var total=price+tax
console.log(total)
//next
var frui_tname="apple"
var count=18
var price =20
var total=count*price
console.log(frui_tname)
console.log("the total price:"+total)
//operator
var inc=11
inc=inc++
console.log(inc)
inc=++inc
console.log(inc)
var dec=11
dec=--dec
console.log(dec)
dec=dec--
console.log(dec)
//data type
console.log(typeof(11))
console.log(typeof(dec))
console.log(typeof(fruitname))
console.log(typeof(true))
//function
function abc(){
    console.log("working")
}

function ceh(){
    console.log("you hacker")
}

function leet(){
    console.log("you promblem solve")
}

function leetdev(){
    console.log("you promblem solve+dev")
}

function leetdevhacker(){
    console.log("you promblem solve+dev+hacker")
}
leetdevhacker()
leetdev()
leet()
abc()
ceh()
abc()
function sum (a,b){
    var tt=a+b
    console.log("the add:"+tt)
    var tt=a-b
    console.log("the sub:"+tt)
    var tt=a*b
    console.log("the multi:"+tt)
    var tt=a/b
    console.log("the div:"+tt)

}
var i=0
var j=0
/* fun part 
while(1){
    console.log("the count of loop"+i)
    i++
    j++
    sum(i,j)
}
    */
function area(l,b){
    console.log(l*b)

}
area(10,10000)
function larea(){
    //console.log("looood")
    return "ok"

}
 result=larea()
 console.log(result)
 
 /*var state=200
 var req=200
 var res=200
 var port=true
 var ftp=true
 */

 /*function check(state, req, res, ftp, port) {
    if ((state == 200 && req == 200) || port == true || ftp != false) {
        console.log("the server is working");
    } else {
        console.log("the server is not working");
    }
}

check(404, 404, true, true, false);


 */
var leave=1
if (leave==1){
    console.log("joy")
}
else{
    console.log("!joy")
}
console.log(false&& true && true)
console.log(true && true && true)
console.log(true || true ||true)

console.log(!true)

//for(var i=0;i<=10;i++){
//var cheeck=22
/*if(i%2==0){
    console.log("even"+i)
}else{
    console.log("odd"+i)
}*/

/*for(i=10;i>=0;i--){
    console.log(i)
    
}*/
const weekday=7
const yearday=365
const timeday=24


function sumtwo(a,b){
    return(a+b)
}
a=sumtwo(7,3)
console.log(a)

function velocity(d,t){
    var vel=d/t
    //console.log(vel)
}
velocity(986,55)
 function acce(vo,a,t){
    var vo
    v=vo+a*t
    console.log(v)
 }
acce(33,465,45)
var rain=true
if(rain==true){
    console.log("rain")
}
else{
    console.log("!rain")
}
var hw="done"
if(hw=="done"){
    console.log("good")
}else{
    console.log("bad")
}
console.log(false && true)
console.log(false || true)
console.log(!true)

var state=200
 var req=200
 var res=200
 var port=true
 var ftp=true

function check(state, req, port, ftp){
    if ((state == 200 && req == 200) && port == true && ftp ==true) {
    console.log("the server is working");
    } else {
    console.log("the server is not working");
    }
 }
 check(200,200,true,false);
 check(200,200,true,true);
function voew(a){
    if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u"){
        console.log("vowel")
    }
    else{
    console.log("!vowel")
    }
}
voew("e")

function scorech(score){
    if(score<50){
        console.log("bad")
    }
    else if(score<=50){
        console.log("need to improve")
    }
    else if(score>80){
        console.log(" very good")
    }
    else if(score>60){
        console.log("good")
    }
    else if(score>50){
        console.log(" good")
    }
    else{
        console.log("no match")
    }

}
scorech(81)
var i=0,j=0
//for (i=0;i<=30;i++){
   // console.log("value i:"+i)
   // for(j=0;j<=30;j++){
       // console.log("value :j"+j)
        
        
   // }
    
//}
function table(tables){
    for(i=0;i<=16;i++){
        var tt=i*tables
        console.log(tables+"x"+i+":"+tt)
    }
}
table(4)
/* dom
alert("Xss alert world");
back must comple js 
*/ 
let author="thomas",
    bname="richdad",
    earn="$12";
    console.log(author,"\n", bname, "\n" ,earn); 
    let name="hello";
    console.log(name);
console.log(typeof name)
console.log(1/0)
//big int
//2^53-1
let limit=900719925470991n;
console.log(limit+1n)
let big=12345678910n;
console.log(big+2025n)
//string data type 
let into="hi im anand ";
console.log(into);
let quote='he said "i am bat man"';
console.log(quote);
//embed
let emmd=`1+2=${into}`;
console.log(emmd)
//boolean 0,1
let ismale=true;
let con=5<7
console.log(con)
let age=undefined;
let myn_ame="same"
console.log(myn_ame)
let agee=23
//agee=String(agee)
console.log(typeof agee)
agee=Number(agee)
console.log(agee+3)
//fun
let test=1;
let test1=0;
let nn=44;
nn=Boolean(nn);
test=Boolean(test);
test1=Boolean(test1);
console.log(nn,test,test1)
//unary
let x=-1;
x=-x
console.log(x)
//
let varl="software"
console.log(8**8)
let elon="skill is very"
console.log(elon)
let arith="hello",
    add=2+8,
    sub=3-8,
    mul=5*5,
    div=6/2,
    mol=99%2
    pov=3**3;
console.log(arith,"\n",add,"\n",sub,"\n",mul,"\n",div,"\n",mol,"\n",pov)
let timer="3:17:00";
console.log(timer)
let git=2;
//concation
let aa="hi";
let bb="hello"
let sumA=(aa+bb);
console.log(sumA)
let al="9";
let bl="6"
let suml=Number(al)+Number(bl);
let sum2=+al + +bl
console.log(suml)
console.log(sum2)
let ch=bc=ac=12;
console.log(ch,bc,ac)
//modify in place
let xx=12;
xx+=5;
//inc,dec
console.log(xx)
xx++;
console.log(xx)
x--;
console.log(xx)
--x;
console.log(xx)
++x;
console.log(xx)
//compare
//<>
let a8='0';
a8=Boolean(a8);
let b8=0
b8=Boolean(b8)
console.log('0'==0)
//null and undefined
console.log(null>0)
console.log(null>=0)
console.log(null<=0)
console.log(null==undefined)
console.log(null==0)
//conditional
let isboy;
let ageisboy =1;
if(ageisboy>18){
    isboy=true;
}else{
    isboy=false;
}
console.log(isboy)
 var person=(age>18)?'adult':'child';
 //
 let xzz=10;
 if(xzz<0){
    console.log("the negative")
 }
 else if(xzz==0){
    console.log("the equal")
 }
 else if(xzz>0){
    console.log("the postive")
 }else{
    console.log("nan")
 }
 let years=2016;
 //div by4
 ///div by100
 //div by 400
 if(years %4 ==0){
    if(years % 100==0 ){
        if(years % 400 ==0){
            console.log("leap year")
        }
        else{
            console.log(" not leap year")
        }}

     else{
        console.log("leap year")
     }
    }
else{
    console.log("not a leap year")
}
    
let numb=334
if(numb>0){
    if(numb%2==0){
        console.log("the even"+numb);
    }else{
        console.log("the odd"+numb);
    }
}
else{
    console.log("not postive" +numb);
}
//logical ops  in 
//or,and,!,-nullcolescing
//----------------------------
// A  B  C
// 1  1  1
// 1  0  1
// 0 1   1
// 0 0   0
// not
//1 0
//0 1
console.log(0||1)
console.log( 1&&0)
console.log(!1)
// null
let asge;
let set =asge ?? 22;
console.log(set)
//loop
//while,do,for
let nnum=1
while(nnum<=5){
    console.log("hello ")
    nnum++;
}
let nums=11;
do{
    console.log(nums);
    nums++;   
}while(nums<=10)
    console.log("the out ");
for(i=0;i<=5;i++){
     console.log("the hello world"+i);
}
//factorial
let ns=5;
let ans=1
for(let x=1; x<=ns;x++){
    ans=ans*i;
    
}
console.log(ans);
let swi=2;
switch(swi){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    default:
        console.log("lastb case");
}
///function
let fo
function getset(var1=8,var2=9){
   return fo=console.log((var1+var2*var2/var1)*var2 );

}
console.log(fo);
getset(3,5);
getset(333,58765);
getset();
// let iseve=2;
// let oddoreven;
// oddoreven=function isevevn(n){
//     if(n%2==0){
//         return "even";
//     }
//     else{
//         return "odd ";
//     }
// }
// isevevn(2);
let testmo=(a,b)=>a+b;
console.log(testmo(2,5));
function operator(op,a,b){
    return op(a,b);
}
function dub(a,b){
    return a-b;
}
console.log(operator(dub,88,99));
let fivex=(n)=>5*n;
console.log(fivex(44));
//object
let xcv={

}
console.log(typeof(xcv));
let car={
    name:'R8',
    brand:'audio',
    driven:'ev,petrol,diesel',
    price:'40'+nnum,
    ondr(price){
        return this.price+3;

    }
};
console.log(car.price);
delete car.price;
console.log(car.price);
car['price']=40;
console.log(car.price);
console.log(car);
car['price']='55';
console.log(car);
console.log(car.ondr(33));