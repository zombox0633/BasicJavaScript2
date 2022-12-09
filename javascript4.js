//*Array
let fruits = ['apple','banana','carrot']; //การสร้าง Array = []
console.log(fruits);
console.log(fruits[0]);//การเรียกใช้งานแต่ละตัว Array จะเริ่มต้นด้วยตัวที่0
console.log(fruits.length);//.length การนับจำนวนข้อมูลใน array

fruits[1]='wartermelon'//ทำการเปลี่ยนArray[1]ที่เป็น banana เป็น wartermelon
console.log(fruits[1]);


let num = [1,2,3,4];
console.log(num);
//push ใส่ข้อมูลเป็นตัวสุดท้ายของ Array 4=>[1,2,3] = [1,2,3,4]
num.push(5);
console.log(num);
//pop ทำการลบตัวสุดท้ายของ Array
num.pop();
console.log(num);
//unshift ใส่ข้อมูลเป็นตัวแรกของ Array 4=>[1,2,3] = [4,1,2,3]
num.unshift(6);
console.log(num);
//shift ทำการลบตัวแรกของ Array
num.shift();
console.log(num);


//splice(ตำแหน่ง,จำนวนตัวที่จะลบ,ข้อมูลที่จะใส่เพิ่ม) สามารถเพิ่ม,ลบข้อมูลแบบระบุตําแหน่ง
let textA = ['a','b','c','d'];
console.log(textA);

textA.splice(2,0,'e');//ตำแหน่งที่2,จำนวนตัวที่จะลบ0,ข้อมูลที่จะใส่เพิ่มคือ'e'
console.log(textA);

textA.splice(0,1);//ตำแหน่งที่2,จำนวนตัวที่จะลบ1ตัว,
console.log(textA);


//Array x Loop
let scores1 = [50,86,23,77,56,63,72,99];
let pass1 = 0;

for(let i=0;i<scores1.length;i++){ //iมีค่าน้อยกว่าscores.length(จำนวนของArray)
    if(scores1[i] >= 50){ //i เป็น index ในการอ้างถึง
        pass1++;
    }
}
console.log(pass1);

//forEach เป็นคำสั่งที่ใช้กลับ Array
let scores2 = [51,16,23,71,56,63,2,99];
let pass2 = 0;

scores2.forEach((score)=>{
    if(score >= 50){
        pass2++;
    }
})
console.log(pass2);



//Array map นั้นจะคล้ายกับ ForEach คือค่าใน Array แต่ละตัวไปกระทำผ่าน Function ที่เรากำหนดไว้ แต่ Map นั้น สามารถ return ค่าออกมาได้โดยค่าที่ return ออกมาจะเป็น Array ซึ่งสามารถนำไปทำใน Method อื่นได้
let scoreM = [82,54,66,12,49,63,44,73,20,39];
let passfail = scoreM.map((scoreM)=>{
    if(scoreM>=50){
        return 'passed';
    }
    return 'failed';
});
console.log(scoreM);
console.log(passfail);

//Array filter คือการคัดเลือกข้อมูลตามที่กำหนดโดยใช้ Function โดยการreturn *filter จะโดยการ return เป็น true/false เท่านั้น 
let scoreF = [82,54,66,12,49,63,44,73,20,39];
let passS = scoreF.filter((scoreF)=>{
    return scoreF>=50; //return เฉพาะค่าที่มากกวาหรือเท่ากับ 50
})
console.log(scoreF);
console.log(passS);

//Array reduce คือการเอาค่าทั้งหมดมารวมกัน
const numbers = [10, 20, 30, 40];
const result = numbers.reduce((sum,number) => {
  return sum+number;
})
console.log(numbers);
console.log(result);



//Array find ใช้ในการค้นหาข้อมูลจากเงือนไขที่กำหนด เมื่อfind เจอข้อมูลที่ต้องการมันจะคืนกลับมาให้และหยุดการทำงานทันที ถ้าหาไม่เจอมันจะส่งค่า undefined
let sco = [5,10,35,44,50,80,100,4,89];
let scofail = sco.find((sco1)=>{
    return sco1<50; //เมื่อมันหาเจอตัวแรกและตัวเดี่ยว มันจะหยุดทำงานและคืนค่ากลับ
})
console.log(scofail); //ans 5

//Array findIndex เหมือน Array find แต่จะบอกตำแหน่งindexแทน
let scoindexF = sco.findIndex((sco1)=>{
    return sco1<50;//เมื่อมันหาเจอตัวแรกและตัวเดี่ยว มันจะหยุดทำงานและคืนค่ากลับ
})
console.log(scoindexF); // ตำแหน่งที่ 0


//Array every ใช้ตรวจสอบข้อมูลใน Array ว่าข้อมูลทุกข้อมูลผ่านเงือนไขที่กำหนดหรือป่าว ถ้าผ่านเงือนไขทั้งหมด return ให้มาเป็น true  ถ้าไม่ผ่านแม้เงือนไขเดียวจะเป็น false
let everyonePass = sco.every((sco1)=>{
    return sco1>50;
})
console.log(everyonePass); //false เพราะใน Array sco มีเลขที่ต่ำกว่า 50 อยู่ใน Array sco

//Array some ใช้ตรวจสอบข้อมูลใน Array ว่าข้อมูลทุกข้อมูลผ่านเงือนไขที่กำหนดหรือป่าว ถ้าผ่านเงือนไขแค่ตัวเดียว คำตอบที่ได้ก็จะเป็น true
let someonePass = sco.some((sco1)=>{
    return sco1>50;
})
console.log(someonePass); //true