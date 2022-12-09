//DOM Element = Document Object Model
let message1 = document.getElementById('message1'); //การดึงข้อมูล id จาก ้html
message1.innerHTML = 'test'; //innerHTML การเปลียนค่าข้อมูล และ style ได้

let messages = document.getElementsByClassName('messageC'); //การดึงข้อมูล class จาก ้html *getElementsByClassName ไม่สามารถใช้ for Each ได้
for(let i = 0 ; i<messages.length; i++){ 
    messages[i].innerHTML = 'for me'; 
}//messages.innerHTML อย่างเดียวเหมือนด้านบน ปกติ getElementsByClassName จะใช้ได้แต่เพราะตัวแรกที่เจอ หรือใช้กับหลายตัวไม่ได้

let messagesQ = document.querySelectorAll('.messageQ'); //การดึงข้อมูลมาแต่ต้องกำหนด ว่าเป็น # ID, . class *querySelectorAll สามารถใช้ for Each ได้
messagesQ.forEach((message)=>{
    message.innerHTML = 'easy'
})//เหมือน for แต่ง่ายกว่า

let messagesQ2 = document.querySelector('#message3');
messagesQ2.innerHTML = 'querySelectorAll#';


//DOM style
let sm = document.querySelector('.sm');
sm.style.color = 'red';
sm.style.backgroundColor = 'black'
sm.style.fontSize = '2rem'

let bth = document.querySelector('#bth');
let mh = document.querySelector('.mh');
bth.addEventListener('click',()=>{
    if(mh.style.display === 'none'){
        mh.style.display = 'block';
    }else{
        mh.style.display = 'none';
    }
})


//DOM Class classList เป็นตัวอ่านข้อมูลข้อ class หรือ ตัวดำเนินการเพื่อ add remove rplace toggle
let blockT = document.querySelector('.block--text');
/*blockT.classList.add('orangeB');*/ //add('class') *การทำงาน div มีแค่ class="block--text" แต่ classList.add('orangeB') คือการเพิ่ม class เป็น class="block--text orangeB"
/* blockT.classList.remove('orangeB'); */ // คือการเอาค่าที่กำหนดออกไป  class="block--text orangeB" => class="block--text"
blockT.classList.replace('wheatB','greenB'); //replace('classA ที่ต้องการจะเปลี่ยน','เปลี่ยนเป็นclassB') คือการเปลี่ยนจาก class A => class B

let body = document.body; //การเรียกใช้งาน body
let toggleB = document.querySelector('#toggleB');
toggleB.addEventListener('click',()=>{
    body.classList.toggle('dark-theme')//toggle(class)คือการสลับ class เก่ากับ class ที่ต้องการ
});



//DOM Mouse Event มี click , mouseover , mouseout
let Image1s = document.querySelectorAll('.Image1');
let Image2 = document.querySelector('.Image2');

/*function ci(){
    Image2.src = Image1.src; //คือ ทำให้ img class="Image2" src="" ให้มีค่า src เท่ากับ Image1
}
Image1.addEventListener('mouseover',ci)//.addEventListener('Mouse Event',function)
*/

function changeImage(Event){ //function(Event = ชื่ออะไรก็ได้) Event คือ object ที่เก็บข้อมูลต่างๆ ของเหตุการณ์ที่เกิดขึ้น
    Image2.src = Event.target.src;//*2 Event.target จะทำการระบุ Image1
}//*1 Image2.src = Image1.src; จะไม่สามารถทำได้เพราะเป็น parameter ของ forEach จำเป็นต้องใช้ตัวช่วย

function changeOut(){
    Image2.src = '';//ทำให้ src ของ Image2 ว่าง
}

Image1s.forEach((Image1)=>{ //forEach((parameter)=>{})
    Image1.addEventListener('mouseout',changeOut);//mouseoutคือการเอา mouseout ออกจากรูปหรือวัดถุ
    Image1.addEventListener('mouseover',changeImage); //addEventListener('Mouse Event',function)
});



//DOM Form Event
let inputDom  = document.querySelectorAll('.inputDom');
let divF  = document.querySelector('#divF');
let errorM  = document.querySelector('.edM');

function checkAnswers(Event){//*3 Event=parameter
    let toolong = false; //*1-2 ตัวแปร toolong เอามาเช็คจำนวนตัวอักษร
    inputDom.forEach((answer)=>{
        if(answer.value.length>10){//*1-2 การดึกข้อมูลข้อความต้องใช้ parameter.value ในการดึง *length มานับจำนวนตัวอักษร
            toolong =true;
        }       
    });
    if(toolong){//*1-2 ถ้า toolong เป็น true 
        errorM.style.display = 'block';
        Event.preventDefault();//parameter.preventDefault() จะเป็นคำสั่งไม่ให้ from ส่งข้อมูลไปหา server *ถ้าไม่ใส่ผิดหรือไม่ผิดมันจะส่งไปหมด
    }else{//*3 อันนี้ไม่ต้องใช้ก็ได้อันที่3
        errorM.style.display = 'none';
    }
}

/*inputDom.forEach((answer)=>{ //เช็ดที่ล่ะ input 
    answer.addEventListener('change',checkAnswers); //*1 change = แก้ไขข้อมูลเสร็จใช้กับ text input ต้องหาทางกดข้างนอกใช้กับ select,checkbox,radio เลือกปุ๊บเสร็จปั๊บ (ปิดใส่ก่อนใช้บรรดทัดล่าง)
    //*ช้อเสียของ change คือเมือทำเสร็จจะยังไม่มีการเปลี่ยนแปลงต้องกดที่ไหนที่หนึ่งในหน้าwebก่อน
    answer.addEventListener('input',checkAnswers); //*2 input ทุกเวลาที่ข้อมูลเปลี่ยนแปลงจะทำการตรวจสอบ
});*/

divF.addEventListener('submit',checkAnswers);//*3 submit = form ทำการส่งข้อมูลเกิดได้จากการกดปุ่ม Summit ที่อยู่ใน Form หรือ Enter ตอนกรอกข้อความเสร็จ


//DOM Keyboard Event
let imageIndex = 0;
let imgLinks = ['https://images.pexels.com/photos/9420617/pexels-photo-9420617.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
'https://images.pexels.com/photos/13563689/pexels-photo-13563689.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
'https://images.pexels.com/photos/11578092/pexels-photo-11578092.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'];
let imgD = document.querySelector('.imgDom');
let bBi = document.querySelector('.before_imgDom');
let bNi = document.querySelector('.next_imgDom');

function prevImg(){
    if(imageIndex>0){//เงือนไขคือ imageIndex ต้องมากกว่า 0 
        imageIndex--; //เมื่อเข้าเงือนไข imageIndex-1 
        imgD.src = imgLinks[imageIndex]; // imgD.src = Links รูปใน array
    }
}
function nextImage(){
    if(imageIndex<imgLinks.length-1){//การเลือนรูปต้องไม่เกิน imgLinks.length สุดท้ายเลยต้อง length-1
        imageIndex++;//เมื่อเข้าเงือนไข imageIndex+1 
        imgD.src = imgLinks[imageIndex]; // imgD.src = Links รูปใน array
    }
}

function keyup(Event){
    //console.log(Event.key);//Event(parameter) ไปรับ key คือข้อมูลการกดบน keyboard *และ console.log(Event.key) เพื่อตรวจสอบการกดปุ่ม
    if(Event.key === 'ArrowLeft'){
        prevImg();
    }else if(Event.key === 'ArrowRight'){
        nextImage();
    }
}

document.addEventListener('keyup',keyup);//คือการใช้ Keyboard Event มาใช้งาน
bBi.addEventListener('click',prevImg);//addEventListener('Event',function)
bNi.addEventListener('click',nextImage);//addEventListener('Event',function)



//DOM Scroll Event
let scrollInfo = document.querySelector('.flex--Scroll')//*1

let headerT = document.querySelector('.header--js6')//*2
let lastScrollY = 0;//*2 ตัวแปรนี้จะเอาไว้เก็บตำแหน่งล่าสุดในแกนY

window.addEventListener('scroll',()=>{//*1 window เป็นคำสั่งการกระทำของ browser เช่น การ scroll
    let infoText = 'X = '+ window.scrollX;//*1 window.scroll คือคำสั่งการดึงข้อมูลตำแหน่งการ scroll ล่าสุดใน browser *ซึ่งตำแหน่งมี2แกน x = scrollX และ y = scrollY
    infoText += ',Y = '+ window.scrollY;//*1 infoText จะมีข้อมูล X = ข้อมูล(window.scrollX),Y = ข้อมูล(window.scrollY)
    infoText += ' lastScrollY = '+ lastScrollY;//*2
    scrollInfo.innerHTML = infoText;

    if(window.scrollY > lastScrollY){//*2 เมือค่า window.scrollY มีค่ามากว่า lastScrollY
        headerT.classList.add('hide');//*2 เพิ่ม class hide
    }else{
        headerT.classList.remove('hide');//*2 ลบ class hide
    }
    lastScrollY = window.scrollY;
});



//DOM Drag and Drop     *html ใส่ draggable="true" ใช้ในการลากรุป
let imgSlot = document.querySelector('.img--slot');
let slot = document.querySelector('.slot');
let imgSelect = document.querySelectorAll('.imgSelect');

//1.Drag function ลากรุป
function dragImg(Event){
    Event.dataTransfer.setData('text/plain',Event.target.id);//parameter.dataTransfer คือ การลากรุปและข้อมูลข้อรูปจะลอยตามไปด้วย *คำสั่งsetData() ส่งข้อมูลนี้ไปในการลาก
    console.log(Event.target.id)
}
imgSelect.forEach((img)=>{
    img.addEventListener('dragstart',dragImg)
})

//2. Drop
function dragOverImg(Event){
    Event.preventDefault();//parameter.preventDefault() ในที่นี้ ทำให้ดรอปของลงพื้นที่มันจะไม่ยอมให้ html ปล่อยของที่ลากมาตกหายไป
}
function dropImg(Event){
    Event.preventDefault();//*parameter.preventDefault() จะเป็นคำสั่งไม่ให้ from ส่งข้อมูลไปหา server *ถ้าไม่ใส่ผิดหรือไม่ใส่มันจะส่งไปหมด
    const id = Event.dataTransfer.getData('text/plain');
    const image = document.querySelector('#'+id);
    slot.src = image.src
}
slot.addEventListener('dragover',dragOverImg);
slot.addEventListener('drop',dropImg);



//DOM Attribute
let ghostImg = document.querySelector('.imgGhost')
let imgLink = document.querySelector('.imgLink')
let textInput = document.querySelector('.textInput')

console.log(ghostImg.src)//คือการแสดงข้อมูล link(img) ของตัวแปร ghostImg.src
console.log(imgLink.href)//คือการแสดงข้อมูล link(web) ของตัวแปร imgLink.href
console.log(textInput.value)//คือการแสดงข้อมูลที่อยู่ใน input

textInput.value = 'abc';
console.log(textInput.value)

console.log(textInput.hiddenMessage)//จะไม่สามารถดึงข้อมูลออกมาได้ต้องในวิธีดังต่อไปนี้
//1.วิธีแบบ classic
console.log('วิธีที่1 '+textInput.getAttribute('data-hidden-message'))//การแสดงข้อมูลของ Attribute
//setAttribute การแก้ไขข้อมูล
textInput.setAttribute('data-hidden-message','visible')//setAttribute('Attribute','value')
console.log('แสอง setAttribute  '+textInput.getAttribute('data-hidden-message'))

//2.วิธีแบบ modern แต่งวิธีนี้จะต้องมีเงือนไงในการเขียนชื่อในไฟล์ html ขึ้นต้นว่า data- เช่น data-hidden-message
console.log(textInput.dataset.hiddenMessage)//dataset เป็นตัวแทนของ data-  *การแสดงข้อมูล
textInput.dataset.hiddenMessage = 'hide2';//การแก้ไขข้อมูล
console.log(textInput.dataset.hiddenMessage)


const spoilB = document.querySelectorAll('.spoil-button');
function spoilClick(Event){
    const messageId = Event.target.dataset.messageId;
    const message = document.querySelector('#'+messageId)
    message.classList.toggle('show')
}
spoilB.forEach((button)=>{
    button.addEventListener('click',spoilClick)
})



//DOM Modify
const todoTitle = document.querySelector('.todo-title');
const addTodoB = document.querySelector('.add-todo');
const  todoList = document.querySelector('.todo-list');

function removeTodo(Event){
    Event.target.parentNode.remove()//Event.target ใช้ในการอ้างอิง ,parentNode คือการเรียกโหนดแม่,remove() ลบ
    //parentNode.remove() โหนดแม่ของ button remove-todo' ที่จะทำการลบคือ div todo
}   

function addTodo(){
    /*let divHtml = '<div class="todo" style="border: 1px solid #333;">'//สร้างแท็ก div class="todo"
    divHtml += '<h3>'+todoTitle.value+'</h3>'//สร้างแท็ก h3 และนำค่าที่อยู่ใน input มาใส่โดยใช้ todoTitle.value
    divHtml += '<button type="button" class="remove-todo">delete</button>'
    divHtml += '</div>'
    todoList.innerHTML += divHtml;*/ //+=divHtml เพิ่มข้อมูลใช้ todoList โดยนำค่า divHtml ไปใส่
    
    //การสร้าง div +class
    const todo = document.createElement('div')//createElement(สิ่งที่ต้องการจำสร้าง เช่น p ,div)
    todo.classList.add('todo')//เพิ่ม class ให้ todo => class='todo'

    //h3
    const h3 =document.createElement('h3')//การสร้าง h3 ใน html
    h3.innerHTML = todoTitle.value //การทำให้ค่า h3 = ค่าที่อยู่ใน input class todo-title

    //button
    const button = document.createElement('button')//การสร้าง button ใน html
    button.type = 'button'//การกำหนด type
    button.classList.add('remove-todo')//เพิ่ม class remove-todo
    button.innerHTML = 'delete' //<button>delete<button>
    button.addEventListener('click',removeTodo)//ใส่ function ลบ

    //h3,button => div
    todo.append(h3,button)//นำ h3,button ไปใส่ใน div ของตัวแปร todo โดยใช้คำสั่ง append คำสั่งจะใส่กี่ตัวก็ได้

    //div => todo list
    todoList.append(todo)//นำ div ของตัวแปร todo ไปใส่ใน div ของตัวแปร todoList

    //append กับ prepend
    //append จะเรียงลำดับ 1(old),2,3,4(new) 
    //prepend จะเรียงลำดับ 4(new),3,2,1(old)
}

addTodoB.addEventListener('click',addTodo)