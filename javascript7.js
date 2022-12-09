//Promise จะเหมาะกับการครอบคำสั่ง asynchronous
//Promise Chaining *2
function inputPromise(title,delay){//inputPromise(parameter1,parameter2)//*2
    //Promise(resolve,reject) *resolve = คำสั่งที่เราจะเรียก ถ้าผลลัพธ์ที่ได้มาเป็นที่พอใจ ,reject = คำสั่งที่เราจะเรียก ถ้ามีบางอย่างผิดพลาด (เหมือนเป็น if=resolve , else=reject ของ Promise)
    // return Promise objuect จาก function เพื่อให้เราสามารถเรียกใช้ Methods ของ Promise ต่อไปได้
    return new Promise((resolve,reject)=>{ //การเรียกใช้งานคำสั่ง new Promise คือการสร้าง และ เรียกใช้โค้ดข้างใน ณ โมเมนนั้นเลย
        setTimeout(() => {//setTimeout กำหนดการแสดง หรือ delay ตามเวลาที่เรากำหนด
            const numberInput = Number(prompt(title)) //*1 Number(prompt('ความกว้าง'))//กำหนด numberInput เป็นตัวเลข และ ข้อความ
            //alert(numberInput)//alert เป็นค่า numberInput
            if(isNaN(numberInput)){//isNaN เป็ยคำสั่งตรวจสอบข้อมูลของ numberInput มีค่าเป็นตัวเลขหรือไม ถ้าไม่ก็เข้าเงือนไง
                reject(new Error('error404'))
                return//return เพื่อไม่ให้ code ด้านล่างทำงาน
            }
            resolve(numberInput)//resolve = คำสั่งที่เราจะเรียก ถ้าผลลัพธ์ที่ได้มาเป็นที่พอใจ 
        },delay /*2000*/);//เวลา 1000 = 1วิ //*2 delay
    })//คำสั่ง new Promise จะทำงานทันที่ จึงจำเป็นต้องมี function ครอบไว้
}
let width = 0//*2
let length = 0//*2
let height = 0//*2
inputPromise('width',10000).then((result)=>{ //การใช้งาน function *then(parameter)จะรับค่ามา  //*2 inputPromise(title(ข้อความ),delay)
    //alert(result)//then สามารถ return ค่ากลับมาได้และเอาค่านี้ไปใช้กับ then ตัวอื่นได้
    //return result+1//*1.5 นำค่าที่กำหนด+1 และสามารถนำไปใช้ต่อได้
    width = result //*2 width = แสดงค่าที่ใส่และ ค่าที่ใส่ = width
    return inputPromise('length',1000)//*2 inputPromise(title(ข้อความ),delay) คือ return ที่จะให้ใส่ข้อมูลถัดไปคือ length
})
.then((result)=>{//*1.5 then ตัวนี้กับตัวด้านบนคนละตัวกันแต่ชื่อเหมือนกัน
    //alert(result)
    //return result+10
    length = result //*2 length = แสดงค่าที่ใส่และ ค่าที่ใส่ = length
    return inputPromise('height',10000)//*2 inputPromise(title(ข้อความ),delay) คือ return ที่จะให้ใส่ข้อมูลถัดไปคือ height
})
.then((result)=>{//*1.5 then ตัวนี้กับตัวด้านบนคนละตัวกันแต่ชื่อเหมือนกันแต่มันจะทำการเรียงการทำงานคือ then1 แสดงและ+1 =>then2 แสดงค่าของthen1+1 และ+10 =>then3 แสดงค่าของthen2ที่+10
    //alert(result)
    height = result //*2 length = แสดงค่าที่ใส่และ ค่าที่ใส่ = height
    setTimeout(()=>{
        const x = width*length*height
        alert('x = '+ x)
    },15000)
})
.catch((error)=>{//การแสดง reject โดยใช้ catch(error)
    alert(error.message)
})



//Promise Example
let lyricBox = document.querySelector('.lyric-box')
function lyricPromise(lyric){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const lyricElement = document.createElement('h3')
            lyricElement.innerHTML = lyric
            lyricBox.append(lyricElement)
            resolve();
        },3000)
    })
}

lyricPromise('test404')
.then(()=>{
    return lyricPromise('test2')
})
.then(()=>{
    return lyricPromise('test3')
})
.then(()=>{
    lyricPromise('test4')
})




////Fetch    api = ช่องทางรับส่งข้อมูล, wed api = ช่องทางรับส่งข้อมูลผ่านทางลิ้งก์เว็บ
// Fetch แสดงข้อมูล user คนเดียว
const avatarImg = document.querySelector('.avatar')
const fullname = document.querySelector('.fullname')
const email = document.querySelector('.email')
//https://reqres.in/ Api example single user
fetch('https://reqres.in/api/users/5')//เพื่อทำการยิง Api เพื่อทำการติดต่อไปยัง Api *fetch ก็คือ Promise
.then((response)=>{//response(การตอบสนอง) = parameter จาก fetch
    return response.json();//แปลงข้อมูลที่ได้มาเป็นไฟล์ json *json() คือ Promise แปลงข้อมูลดิบ เพราะมีขนาดใหญ่ อาจจะใช้เวลาทำงานนาน
})
.then((json)=>{//json เป็น parameter จากการแปลงข้อมูลด้านบน
    const user = json.data //json.data คือข้อมูลทั้งหมดของ api = user
    avatarImg.src = user.avatar//ดึงรูปใน json.data = avatarImg.src
    fullname.innerHTML = user.first_name +' '+ user.last_name //first_name,last_name ต้องดูใน api
    email.innerHTML = user.email
})
.catch((error)=>{//แสดง error.message เมื่อเกิดปัญหา
    console.log(error.message)
})


//Fetch แสดงข้อมูล user หลายคน
const userList = document.querySelector('.user-list')
fetch('https://reqres.in/api/users')
.then((response)=>{
    return response.json();//แปรข้อมูลเป็น json
})
.then((json)=>{
    const users = json.data
    users.forEach((user)=>{
        const userItem =document.createElement('div')
        userItem.classList.add('user-item')

        const avatar =document.createElement('img')
        avatar.classList.add('avatar')
        avatar.src = user.avatar

        const fullnameText = document.createElement('p')
        fullnameText.classList.add('fullname')
        fullnameText.innerHTML = user.first_name +' '+ user.last_name

        const email =document.createElement('p')
        email.classList.add('email')
        email.innerHTML = user.email

        userItem.append(avatar,fullnameText,email)
        userList.append(userItem)
    })
})
.catch((error)=>{
    console.log(error.message)
})


//HTTP metthod คือรูปแบบการรับ/ส่งข้อมูลกับลิ้งก์
//get จะเหลาะกับการดึงข้อมูลมาใช้แบบตรงๆ
//post จะเหมาะกับการส่งข้อมูลที่ไม่ควรเอาไว้ในลิ้งก์ เช่น login Reegister

let registerForm = document.querySelector('.register-form')
let emailInput = document.querySelector('#email-input')
let passwordInput = document.querySelector('#password-input')


function registerSubmit(event){
    event.preventDefault()
    const user = { //ดึงข้อมูลจาก from มาใส่ในตัวแปร user แบบ Objects
        email : emailInput.value,
        password : passwordInput.value
    }
    fetch('https://reqres.in/api/register',{
        method:'POST',//กำหนดประเภท method ที่จะทำการส่ง
        headers:{//headers จะบอกว่าข้อมูลในส่วนของ body เป็นแบบ JSON
            'Content-Type': 'application/json;charset=utf-8'
        },//คือการกำหนด content-type ต่อไปนี้เป็นแบบ json
        body: JSON.stringify(user) //คือการแปรข้อมูล user ที่เป็น Objects ให้เป็น string หรือให้กลายเป็นข้อความ
    })
    .then((response)=>{
        return response.json()
    })
    .then((json)=>{
        alert('id = '+ json.id + 'completed')//เมื่อ login สำเร็จจะขึ้นข้อความ
    })
    .catch((error)=>{
        console.log(error.message)
    })

}
registerForm.addEventListener('submit', registerSubmit);



//async await   //โค้ดนี้เหมือนบรรทัดที่ 76
//แบบปกติ ไม่มี catch
let avatarAA =document.querySelector('.avatar_await')
let fullnameAA =document.querySelector('.fullname_await')
let emailAA =document.querySelector('.email_await')
async function getUser(){ //async function คือการกำหนด function เป็นแบบ asynchronous 
    const response = await fetch('https://reqres.in/api/users/2')//หน้าที่ของ await ใช้บอกว่าบรรทัดนี้ที่ใส่ await ตรงนี้คือโค้ด Promise ที่อาจจะมีการทำงานนานได้ *โค้ดตรงนี้จะทำงานจนเสร็จถึงจะไปทำโค้ดบรรทัดต่อไป
    //โค้ด await จะทำเสร็จบรรทัดเดียวไม่ต้องใช้ then และสามารถคืนค่ากับมาในบรรทัดเดียวกับ await ได้โดยการสร้างตัวแปรมารับค่า
    const json = await response.json()
    const user = json.data
    avatarAA.src = user.avatar
    fullnameAA.innerHTML = user.first_name+' '+user.last_name
    emailAA.innerHTML = user.email
}
getUser()//ใช้ function

//มี try catch
let avatarBB =document.querySelector('.avatar_await2')
let fullnameBB =document.querySelector('.fullname_await2')
let emailBB =document.querySelector('.email_await2')
async function getUser2(){ //async function คือการกำหนด function เป็นแบบ asynchronous 
    try{
        const response = await fetch('https://reqres.in/api/users/3')//หน้าที่ของ await ใช้บอกว่าบรรทัดนี้ที่ใส่ await ตรงนี้คือโค้ด Promise ที่อาจจะมีการทำงานนานได้ *โค้ดตรงนี้จะทำงานจนเสร็จถึงจะไปทำโค้ดบรรทัดต่อไป
        //โค้ด await จะทำเสร็จบรรทัดเดียวไม่ต้องใช้ then และสามารถคืนค่ากับมาในบรรทัดเดียวกับ await ได้โดยการสร้างตัวแปรมารับค่า
        const json = await response.json()
        const user = json.data
        avatarBB.src = user.avatar
        fullnameBB.innerHTML = user.first_name+' '+user.last_name
        emailBB.innerHTML = user.email
    }catch(error){
        console.log(error.message)
    }
}
getUser2()