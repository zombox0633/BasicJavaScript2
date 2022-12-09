//if ,else if ,else
let x = 80;
if(x>=80){
    console.log('A');
}else if(x>=75){
    console.log('B+');
}else if(x>=70){
    console.log('B');
}else if(x>=65){
    console.log('C+');
}else if(x>=60){
    console.log('C');
}else if(x>=55){
    console.log('D+');
}else if(x>=50){
    console.log('D');
}else if(x<50){
    console.log('F');
}else{
    console.log('error');
}

//Loop ,for(ค่าเริ่มต้น;เงื่อนไขในการทำงาน;การเปลี่ยนแปลง){คำสั่งต่างๆ}
for(let i=1; i<=10;i++){
    if(i%2===0){//ถ้า i หาร2แล้วเศษเป็น0จะเข้าเงื่อนไขifนี้
        continue; //จะทำการข้ามเงือนไขที่อยู่ใน loop(for) ที่ทำการดำเนินอยู่ไปที่ loop ถนัดไป*ไม่ได้หยุดloopนะ (คำสั่ง continue ใช้ได้ใน for เท่านั้น)
    }
    console.log('i loop',i);
}

for(let i=1; i<=10;i++){
    if(i%5===0){
        break; //จะทำหยุด loop(for) ทันทีและจะไม่ทำต่อ (คำสั่ง break ใช้ได้ใน for เท่านั้น)
    }
    console.log('รอ break',i);
}


//function ชื่อฟังก์(){คำสั่งต่างๆ}]

function pyramidArea(length,width,height){ // ชื่อฟังก์ชั่น(parameter1,...){คำสั่งต่างๆ} 
    //คำนวณหาพื้นที่3เหลี่ยม
    //let length =2; //ความยาว
    //let width =3; //ความกว้าง
    //let height =3; //ความสูง
    let baseArea = length*width;
    let pyramidVolume = 1/3 *baseArea*height;
    //console.log('คำนวณหาพื้นที่3เหลี่ยม = ',pyramidVolume);
    return pyramidVolume; //การใช้งาน return เพื่อจะนำค่าจาก function ไปทำการใช้งานกับตัวแปรอื่นต่อไป เงื่อนไขในการใช้ต้องสร้างตัวแปรมารับค่าตาม area1
}
//การเรียกใช้งาน function ในjs
//pyramidArea(5,4,3);

let area1 = pyramidArea(5,4,3);
let area2 = pyramidArea(10,9,5);
console.log('area1 = '+area1+', '+'area1 = '+area2)


//Arrow Functions
function normalF(){
    console.log('normalfunction');
}
normalF();

let arrowF = () =>{ //รูปแบบการสร้าง Arrow Functions
    console.log('Arrow Functions');
}
arrowF();

 //กรณีที่ใช้งาน Arrow Functions

let bn = document.getElementById('b2n');
function cb2(){
    console.log('normalfunction(เขียนยาว)');
}
bn.addEventListener('click',cb2);


let bn2 = document.getElementById('b2n2'); //ย่อการเขียน  Functions code
bn2.addEventListener('click',function(){
    console.log(' normalfunction(สั้น)');
})

let ba = document.getElementById('b2a'); //ย่อการเขียน  Functions code
ba.addEventListener('click',()=> {
    console.log(' Arrow Functions(สั้นกว่า)');
})



