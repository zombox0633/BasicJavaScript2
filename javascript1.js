let number1 = 5; //int
let number2 = 10;
let  an = number1+number2
console.log('answer =',an);
console.log(typeof an);

let float1 = 5.5; //float b
let float2 = 4.6;
let af = float1+float2;
console.log('answer =',af);
console.log(typeof af);

let string1 = '5'; //string
let string2 = '2';
let as = string1+' '+string2;
console.log('answer =',as);
console.log(typeof as);

let bt = true; //boolean
let bf = false; //boolean
console.log(bt);
console.log(bf);
let ab = bt+bf;
console.log('answer =',ab);
console.log(typeof ab);


//การแปรงข้อมูล
let xn1 = 12;
let ys1 = '16';
ys = Number('16'); //แปรงเป็น number
console.log('แปรงเป็น number =',xn1+ys1);

let xn2 = 1;
let ys2 = '9';
xn2 = String(1); //แปรงเป็น String
console.log('แปรงเป็น String =',xn2+ys2);

let xn3 = 1;
let xn4 = 0;
xn3 = Boolean(1);
xn4 = Boolean(0);
console.log(xn3);
console.log(typeof xn3);
console.log(xn4);
console.log(typeof xn4);


//operators
let opPlus = 2+1; 
console.log('Plus =',opPlus);

let opMinus = 2-1; 
console.log('Minus =',opMinus);

let opMultiply = 2*1; 
console.log('Multiply =',opMultiply);

let opDivide = 2/1; 
console.log('Divide =',opDivide);

let opExponent = 2**2; 
console.log('Exponen =',opExponent);

let opDivide2 = 3%2; 
console.log('หาเศษของการหาร =',opDivide2);

//การย่อcode
let xt1 = 5;
xt1 = 5+1; //เริ่มต้น
console.log('xt1',xt1); 


let xt2 = 5;
xt2 = xt2+1; //เริ่มต้นที่มีคือ5 แต่ใช้ xt2 แทน
console.log('xt2',xt2); 

let xt3 = 5;
xt3++ ; //ทำการบวกตัวเองขึ้น1
console.log('xt3',xt3);

let xt4 = 5;
xt4-- ; //xt4-- ก็คือการลบค่าไป1
console.log('xt4',xt4); 

let xt5 = 8;
xt5 += 5 ;
console.log('8+=5',xt5);
xt5=8; 

xt5 -= 5 ;
console.log('8-=5',xt5); 
xt5=8; 

xt5 *= 5 ;
console.log('8*=5',xt5); 
xt5=8; 

xt5 /= 5 ;
console.log('8/=5',xt5); 
xt5=8; 

xt5 %= 5 ;
console.log('8%=5',xt5); 


//เปรียบเทียบ
let xb1 = 2;
let yb1 = 3;

ansB = xb1>yb1;
console.log('2>3',ansB); //เมื่อทำการเปรียบเทียบคำตอยจะเป็น boolean เสมอ

ansB = xb1>=yb1;
console.log('2>=3',ansB);


ansB = xb1<yb1;
console.log('2<3',ansB);

ansB = xb1<=yb1;
console.log('2<=3',ansB);

ansB = xb1===yb1;
console.log('2===3',ansB);

ansB = xb1!==yb1;
console.log('2!==3',ansB); //ไม่เท่ากับ


//ตรรกศาสตร์ logic
let xlog1 = true;
let xlog2 = false;

ansL = xlog1&&xlog2; //&&,and,และ ต้องเป็นจริงทั้ง2 ถึงจะเป็นจริง
console.log('true&&false',ansL); 

ansL = xlog1||xlog2; //||,all,หรือ ตัวใดตัวหนึงใน2ตัวนี้เป็นจริงก็จะเป็นจริง
console.log('true||false',ansL); 

ansL = !xlog1; //!,not จะทำการสลับจากจริงเป็นเท็จ,เท็จเป็นจริง
console.log('!true',ansL); 

ansL = !xlog2; //!,not จะทำการสลับจากจริงเป็นเท็จ,เท็จเป็นจริง
console.log('!false',ansL); 
