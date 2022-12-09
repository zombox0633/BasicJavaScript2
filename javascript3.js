//controls
let c1 = document.getElementById('ct1');
let text1 = '<b>test1</b>';
text1 += '<i>test2</i>'//+= จะทำการบวกข้อความต่อหลัง
c1.innerHTML = text1; //innerHTML จะทำการเปลียนข้อมูลและข้อความของhtml

let c2 = document.getElementById('ct2');
c2.innerText = text1; //innerText จะทำการปลียนแค่ text เท่าแม้จะใส่คำสั่งเข้ามาก็ตามและทำการแสดงเป็นข้อความทั้งหมด


//events
let b = document.getElementById('bt');
let h = document.getElementById('hm');
function showH(){
    h.innerHTML='visible'
}
b.addEventListener('click',showH); //addEventListener(เหตุการณ์,คำสั่ง) *showH() ถ้าใส่วงเล็บหลัง function ที่ต้องการใช้งานในส่วน addEventListener(,*คำสั่ง)จะเป็นการเริ่มคำสั่งเลย


//สูตรคูณ
let inputN = document.getElementById('input-n');
let s = document.getElementById('bt-sm');
let outputN = document.getElementById('output-n');

function multiply1(){ //อย่าลืมตรวจสอบ inputN หรือค่าที่เอามาเป็น Number หรือป่าว
    let n1 = Number(inputN.value); //.value การดึงค่ามาใช้ต้องมี.valueต่อท้าย
    let outputHTML = '';

    if(n1===0){
        outputN.innerHTML = '<p>error0</p>';
        return; // return จะทำหน้าที่คืนค่าเมื่อเสร็จเงื่อนไขนี้แล้ว และเมื่อคำสั่งรันเข้าไปเจอ return จะไม่ทำการทำงานโค้ดด้านล่างต่อ
    }
    for(let i=1 ; i<=12 ; i++){
        outputHTML += '<p>';
        outputHTML += n1 + 'x' + i + '=' + (n1*i);
        outputHTML += '</p>';
    }
    outputN.innerHTML = outputHTML;
}
s.addEventListener('click',multiply1);