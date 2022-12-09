//copy array
let p = [100,1000,10]
let q = p
q[2] = 20
//ผลลัพที่มันผิดเพราะ การ copy array ของ q นั้นมัน copy ชี้ตำแหน่งไม่ใช้การ clone มันจึงแก้ไขที่ตำแหน่ง 2 ของ p ไปด้วย
console.log('p = '+p)//ผลลัพที่ได้ 100,1000,20 *ผิดที่จริงจะต้องได้ 100,1000,10
console.log('q = '+q)//ผลลัพที่ได้ 100,1000,20

//copy array ที่ถูก
let p2 = [100,1000,50]
let q2 = [...p2]//การทำแบบนี้เพื่อทำการแยก array กันและไม่ให้ชี้ตำแหน่งเดียวกัน
q2[0] = 200
console.log('p2 = '+p2)//ผลลัพที่ได้ 100,1000,50
console.log('q2 = '+q2)//ผลลัพที่ได้ 200,1000,50

//copy Object
let a1 = {
    id: 123,
    color: '#333'
} 
let a2 = a1
a2.id = 321
//ผลลัพที่มันผิดเพราะ การ copy Object ของ a2 นั้นมัน copy ชี้ตำแหน่งไม่ใช้การ clone มันจึงแก้ไขที่ Object ของ a1 ไปด้วย
console.log('a1 =',a1)//{id: 321, color: '#333'} *ผิดที่จริงจะต้องได้ {id: 123, color: '#333'}
console.log('a2 =',a2)//{id: 321, color: '#333'}

//copy Object ที่ถูก
let b1 = {
    id: 111,
    color: '#333'
} 
let b2 = {...b1}
b2.id = 222
console.log('b1 =',b1)//{id: 111, color: '#333'}
console.log('b1 =',b2)//{id: 222, color: '#333'}


//extract array
const scores = [51,44,33,85]
console.log('scores[0] = '+scores[0])//การ เรียกใช้งานปกติ
console.log('scores[3] = '+scores[3])

const [firstScores,seconScores,...othersScores] = scores //การเปลี่ยนชื่อสำหรับเรัยงใช้งานของ Array
console.log('scores = '+scores)
console.log('scores[0] = '+firstScores)
console.log('scores[1] = '+seconScores)
console.log('othersScores = '+othersScores)//...array สำหรับแสดงค่าตัวแปรที่เหลือของ array ที่ไม่ได้กำหนดค่าใหม่


//extract object
const name = 'abc';
const rabbit = {
    name:'Mimi',
    color:'white',
    number:'123'
}

const {name:rname , breed='123',...others} = rabbit //ทำการเปลี่ยนสำหรับใช้งานด้านนอก
//.กรณีที่ object ไม่มีค่า breed แต่กำหนด default ไว้
console.log(name)
console.log(rabbit)//{name: 'Mimi', color: 'white'} *ซึ่ง name ด้านในไม่ได้เปลียนแค่สำหรับเรียกใช้งาน
console.log(rname)
console.log(others)//...others สำหรับแสดงค่าตัวแปรที่เหลือของ object ที่ไม่ได้กำหนดค่าใหม่



//Add Edit Delete Array  *โดยการเพิ่ม แก้ไข ลบข้อมูลนั้นจะทำใน Array ตัวใหม่โดยไม่ให้กระทบ Array ตัว original 

//Add
const character = [
    {nameC:'e',range:'M'},
    {nameC:'a',range:'R'},
    {nameC:'i',range:'M'}
]
const newCharacter = {nameC:'o',range:'R'} //สร้างตัวแปรมารับค่าใหม่ที่จะทำการเพิ่ม
const newCharacters = [...character,newCharacter]//ทำการคัดลอกตัวแปรใน character และใส่ newCharacter เพื่อทำการเพิ่มตัวแปรใน Array
console.log(character)
console.log(newCharacters)

//Edit ใช้ character ด้านบน
const charactersE = [
    {nameC:'e',range:'M'},
    {nameC:'a',range:'R'},
    {nameC:'i',range:'M'}
]
const editIndex = 1//ตำแหน่งที่จะแก้ไข
const newName = 'o'
const newcharactersE = charactersE.map((characterE,index)=>{//map จะเอา array มาแปลงเป็น array ตัวใหม่
    if(index !== editIndex){//index ถ้าไม่เท่ากับ editIndex
        return characterE //จะ return ค่าเก่าไป
    }
    const editCharacter = {...characterE}
    editCharacter.nameC = newName
    return editCharacter
})
console.log(charactersE)
console.log(newcharactersE)

//delete ใช้ character ด้านบน
const charactersD = [
    {nameC:'e',range:'M'},
    {nameC:'a',range:'R'},
    {nameC:'i',range:'M'}
]
const deleteIndex = 1//ตำแหน่งที่จะลบ
const newCharactersD = charactersD.filter((character,index)=>{
    return index !== deleteIndex //index ถ้าไม่เท่ากับ editIndex
})
console.log(charactersD)
console.log(newCharactersD)



//Sort หรือ การเรียงลำดับใน Array
let scoresS = [73,53,68,80]
let sortScores = [...scoresS].sort();//เรียงจากน้อยไปมาก *[...ตัวแปลที่ต้องการจะคัดลอก] ถ้าไม่ทำตามนี้จะทำให้ตัว scoresS เปลียนไปด้วย
console.log(scoresS)
console.log(sortScores)


let s1 = [73,53,68,80]
let s2 = [...s1].sort((s01,s02)=>{
    if(s01>s02){
        return -1
    }else if(s01<s02){
        return 1
    }
    return 0
});
console.log(s1)
console.log(s2)