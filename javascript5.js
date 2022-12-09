//object
let rabbit ={
    name: 'Mimi',
    breed: 'Lion Head',
    color:'white',
    weight:1.2
};
console.log(rabbit);
console.log(rabbit.name); //การเลือกแสดง name

rabbit.name = 'd1512'; //เปลี่ยนค่าใน name
console.log(rabbit.name);


//การใช้งาน object x array
let rabbits = [
    {
        name: 'Mimi',
        breed: 'Lion Head',
        color:'white',
        weight:1.2
    },
    {
        name: 'Momi',
        breed: 'Netherland dwarf',
        color:'white',
        weight:1.2
    },
    {
        name: 'Mumu',
        breed: 'Mimi lop',
        color:'white',
        weight:1.2
    }
];
rabbits.forEach((rabbit)=>{
    console.log(rabbit.name+' , '+rabbit.breed)
})



//Object Method ,this
let name = 'test'
let rabbitM ={
    name: 'Mimi',
    breed: 'Lion Head',
    color:'white',
    weight:1.2,
    //talk:function(){} //การสร้าง function() ใน Object หรือ Method
    talk1(){ //การสร้าง function() ใน Object แบบสั้น หรือ Method
        console.log('Oung Oung');
    },
    talk2(){
        console.log(name+'Oung Oung');
    },
    talk3(){
        console.log(this.name+' '+'Oung Oung');//การใช้ this จะทำให้สามารถใช้ข้อมูลใน Object ได้
    },
    weightDeail(){
        if(this.weight<1){
            return 'น้อยยยยเกิน'
        }else if(this.weight>2){
            return 'มากกเกิน'
        }
        return 'ปกติ'
    }

};
rabbitM.talk1();
rabbitM.talk2();//test Oung Oung มันจะไม่ดึง name ใน Object แต่มันจะไปดึง name ด้านนอก  *แม้จะไม่ name ด้านนอกมันก็จะไม่ดึง name ด้านใน
rabbitM.talk3();
console.log(rabbitM.weightDeail()); //ต้องพิม console.log เพราะใช้ return ด้านบน



// Object Constructor function = function ที่ใช้สร้าง Object
let rabbit1 = {
    name: 'Mimi',
    breed: 'Lion Head',
    color:'white',
    weight:1.2
}
let rabbit2 = {
name: 'Momi',
breed: 'Netherland dwarf',
color:'white',
weight:1.2
} // การสร้างObject แบบ copyวางจำนวนมากๆจะทำในcodeเราบวมได้ จึงต้องมี Constructor function ในการสร้างให้

function Rabbit(name,breed,color,weight){//การทำ Constructor function จะพิมอักษรตัวแรกเป็นตัวใหญ่
    this.name = name; //this.nameซ้าย กับ nameขวา ไม่เท่ากัน *nameขวาคือข้อมูลที่รับมา, this.nameซ้าย คือข้อมูลที่จะสร้างให้กระต่ายตัวนี้
    this.breed = breed;
    this.color = color;
    this.weight = weight;
    this.talk = function(){//ไม่สามารถแบบสั้นได้ this.talk(){} 
        console.log(this.name+' '+'Oung Oung');
    }//การสร้าง Method ใน Constructor function
};
let rabbit3 = new Rabbit('eas','asd','sss',1.5); //new ใช้รับ Object ใหม่ที่ถูกสร้างขึ้น
let rabbit4 = Rabbit('eas','asd','sss',1.5); //ในกรณีทีไม่มี new ค่าทีได้จะเป็น undefined *new คือตัวที่รับค่า Constructor function จึงจำเป็นต้องใส่ new
console.log(rabbit3);
console.log(rabbit4);
rabbit3.talk();//การใช้งาน Method ใน Constructor function



// var let const    scope = ขอบเขตของโค้ด
// let สามารถเปลี่ยนแปลงได้
//const ค่าคงที่เปลี่ยนไม่ได้
//var เป็นตัวแปรเหมือน let แต่ไม่สนใจ block scope({})



//setTimeout ,setInterval  เป็นการทำงานแบบ Asynchronous

//settimeout(()=>{},1000) *settimeout ประกอบไปด้วย function และเวลาเป็นหน่วยมิลิวินาที 1000 = 1วิ *settimeout จะคล้าย delay 
let n1=[1,8,6,100,88,56,33,47,10];
console.log(n1.length)
let randomB = document.getElementById('random-js5');
let stopO = document.getElementById('stop-js5');
let output = document.getElementById('output-js5');

let setTimeout_ID = 0; // ทำตัวแปรมารับค่า id ของ setTimeout *setTimeout มีid มาให้เพื่อหยุดการทำงานของมันแต่มันไม่ได้แสดง จึงต้องมีตัวแปรมารับ id ตัว

randomB.addEventListener('click',()=>{ //การสร้าง arrow function + html button click
    console.log('check setTimeout 1') 
    setTimeout_ID = setTimeout(()=>{ //การสร้าง setTimeout ส่วน function + การรับ id setTimeout
        console.log('check setTimeout 2') 
        let n = n1.length;//length =จำนวนตัวที่อยู่ใน array
        let index = Math.floor(Math.random()*n); // ไม่รู้
        let n1b = n1[index]; 
        output.innerHTML = n1b; 
    },1000);//การสร้าง setTimeout ส่วน เวลา 1000 = 1วิ
    console.log('check setTimeout 3')// ผลที่ได้คือ 1 3 2 สองจะทำอันสุดท้ายเพราะต้องรอ 1 และ 3 ทำก่อนถึง setTimeout จะเริ่มนับเวลา
});
//clearTimeout คือการหยุดทำงานของ setTimeout และหยุดการทำงาน function
stopO.addEventListener('click',()=>{
    clearTimeout(setTimeout_ID);//เอาตัวแปรที่รับ id setTimeout มาใส่ใน clearInterval ก็จะหยุดทำงานของตัว setTimeout
})



//setInterval(()=>{},1000) จะทำงานไปเรือยๆไม่มีสิ้นสุด *setInterval ประกอบไปด้วย function และเวลาเป็นหน่วยมิลิวินาที 1000 = 1วิ เวลาที่จะ delay และเมื่อ delay เสร็จก็จะทำต่อ
let randomB2 = document.getElementById('random2-js5');
let stopI = document.getElementById('stop2-js5');
let output2 = document.getElementById('output2-js5');

let setInterval_ID = 0; // ทำตัวแปรมารับค่า id ของ setInterval *setInterval มีid มาให้เพื่อหยุดการทำงานของมันแต่มันไม่ได้แสดง จึงต้องมีตัวแปรมารับ id ตัว

randomB2.addEventListener('click',()=>{ //การสร้าง arrow function + html button click 
    setInterval_ID = setInterval(()=>{ //การสร้าง setTimeout ส่วน function    + การรับ id setInterval
        let n = n1.length;//length =จำนวนตัวที่อยู่ใน array
        let index = Math.floor(Math.random()*n); // ไม่รู้
        let n1b = n1[index]; 
        output2.innerHTML = n1b; 
    },1000);//การสร้าง setTimeout ส่วน เวลา 1000 = 1วิ
});
//clearInterval คือการหยุดทำงานของ setInterval
stopI.addEventListener('click',()=>{
    clearInterval(setInterval_ID);//เอาตัวแปรที่รับ id setInterval มาใส่ใน clearInterval ก็จะหยุดทำงานของตัว setInterval
})




