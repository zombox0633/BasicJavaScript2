//การย่อ finction Arrow
//ปกติ
const cuteMessage = (message)=>{
    return '-*- '+ message
}
console.log(cuteMessage('abc'))//cuteMessage(message)

//แบบย่อ
const cuteMessage2 = (message)=>'-*- '+ message;//จากการย่อคำสั่งนี้ จะถูก return กลับไปด้วยโดยไม่ต้องเขียน return
//การใช้แบบนี้เงื่อนไขคือ ต้องมี parameter แค่ตัวเดียว
console.log(cuteMessage2('abc'))//cuteMessage(message)


//การย่อ finction Arrow แบบใช้คำสั่ง map
//ปกติ
const numbers = [1,2,3,4]
const doubleNumber = numbers.map((number)=>{
    return number * 2
})
console.log(numbers)
console.log(doubleNumber)

//
const numbers2 = [1,2,3,4]
const doubleNumber2 = numbers2.map((number)=>number * 2)
console.log(numbers2)
console.log(doubleNumber2)


//Function การกำหนดค่า default parameter
function showMessage(message = 'asd',count= 3){
    for(let i=1;i<=count;i++){
        console.log(i+'. '+message)
    }
}
showMessage()



//string

//Search string  การค้นหาข้อความโดยใช้คำใบ้(ต้องใส่ตัวพิมเล็กพิมใหญ่ให้ถูก)
const word = 'Black Earring' //ข้อความหลัก *เงือนไขการหาต้องใส่ตัวพิมเล็กพิมใหญ่ให้ถูก
const searchWord = 'Ear' //ข้อความย่อยที่เป็นคำใบ้สำหรับหา
const isFound = word.includes(searchWord)//ตัวทีจะค้นหา.includes(ข้อความย่อยที่เป็นคำใบ้สำหรับหา)
//isFound ตัวแปรนี้เป็น boolean ให้สำหรับเช็คว่าเราหาเจอหรือเป่ลา 
console.log(isFound);//เช็คว่าเจอหรือเปล่าถ้าเจอคำตอบจะเป็น true

//Search string  การค้นหาข้อความโดยใช้คำใบ้(ไม่ต้องสนใจพิมเล็กพิมใหญ่ให้ถูก)
//เพราะจะเปลียนเป็นพิมเล็ก
const word2 = 'Black Earring'
const searchWord2 = 'ear'
const isFound2 = word2.toLowerCase().includes(searchWord.toLowerCase())//เปลียนตัวแปร word2 และ searchWord เป็นตัวพิมเล็กยังไงก็หาเจอ
console.log(isFound2);


//Slice string การตัดแบ่งข้อความ
const productCode = 'th-926405'
const country = productCode.slice(0,2)//slice(ตำแหน่งแรกที่จะตัด,ตำแหน่งสุดท้าย) คำสั่งตัดข้อความ 
//คำสั่งslice(,)ตัวแรกเริ่มต้นเป็น0 เช่น th-926405 = t(0)h(1)-(2)
const productId = productCode.slice(3)//ค่าต้องการตัดจุดที่กำหนดถึงตำแหน่งสุดท้ายไม่ต้องใส่ตำแหน่งสุดท้ายไป
console.log(country);
console.log(productId);


//Template string
console.log('country = '+country+', productId = '+productId);//แบบปกติ
console.log(`country = ${country}, productId = ${productId}`);




//date
const dateNow = new Date()//การประกาศการใช้ date
console.log(dateNow)

const birthday = new Date(1998,0,19,6,30,1)//เดือนจะเริ่มต้นด้วย 0 = มกราคม
console.log(birthday)

const setEgg = new Date('1999-02-14')//การใส่ค่าเดือนแบบ String
console.log(setEgg);

if(birthday<setEgg){//การใช้ข้อมูล Date กับการตรวจสอบ 
    console.log('true');
}



//undefined null
let username;
console.log(username)//undefined

let username2 = null
console.log(username2)//null *null มีค่ามากกว่า undefined 

if(!!username2){//!!ตัวแปร ถ้ามีค่าจะเป็น true
    console.log('true');
}else{
    console.log('false');
}


const displayName = username ?? 'test'//username ไม่มีค่าแต่ ?? ทำการระบุว่าถ้า username ไม่มีค่าให้ใช้ค่า test(หรือค่าที่กำหนด)
console.log(displayName);
