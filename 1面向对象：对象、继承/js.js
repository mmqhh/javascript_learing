//工厂模式
/*
function createObject(name,age) {
    var obj = new Object();
    obj.name=name;
    obj.age=age;
    obj.run=function () {
        return this.name + this.age;
    };
    return obj;
}
var box1= createObject('Lee',100);
var box2 = createObject('Jack',200);
alert(box1.run());
alert(box2.run());*/

//构造函数模式
/*function Box(user,age) {
    Box.prototype.user='Lee';
    Box.prototype.age=100;
    Box.prototype.run=function () {
        return this.user + this.age;
    };
}
var box1 = new Box();
box1.user='Jack';
alert('user' in box1);*/

/*
function  Box2() {};
Box2.prototype={
    constructor:Box2,
    name:'Bob',
    age:120,
    run:function () {
        alert( this.name + this.age);
    }
};
var bb = new Box2();
bb.run();

*/

/*//组合模式
function Box(name,age) {
    this.name=name;
    this.age=age;
    this.family=['哥哥','姐姐'];
}
Box.prototype={
    run:function () {
        alert(this.name+this.age);
    }
};
var box1=new Box('lee',100);
box1.family.push('弟弟');
var box2=new Box('Kim',50);
alert(box1.family);
alert(box2.family);
*/

/*
//动态原型模式
function Box(name,age) {
    this.name=name;
    this.age=age;
    this.family=['哥哥','姐姐'];
    if(typeof this.run != 'function') {      //如果run方法已经存在，就不再创建原型run方法
        Box.prototype.run = function () {
            return this.name + this.age;
        };
    }
}
var box1=new Box('Lee',100);
var box2=new Box('Jack',200);
*/

/*
//原型链继承
function Box() {
    this.name ='Lee';
    Box.prototype="jack";
}
function Desk() {
    this.age = 100;
}
Desk.prototype=new Box(); //原型链继承 子类的原型对象=父类的构造函数实例
var desk1= new Desk();
alert(desk1.name+ desk1.age);
*/

/*
//构造函数继承(或者称为对象冒充)
function Box(name,age) {
    this.name=name;
    this.age=age;
    this.family=['哥哥','姐姐'];
}
function Desk(name,age) {
    Box.call(this,name,age);     //构造函数继承
}
var desk1 = new Desk('Bob',150);
alert(desk1.name+desk1.age+desk1.family);
*/


//组合继承  (原型链继承+构造函数继承)
function Box(name,age) {
    this.name=name;
    this.age=age;
    this.family=['哥哥','姐姐'];
}
Box.prototype.run=function () {
    return this.name +this.age + this.family;
};

function Desk(name,age) {             //构造函数继承      解决传参问题
    Box.call(this,name,age);
}

Desk.prototype = new Box();         //原型链继承         解决共享问题

var desk1 = new  Desk('Brohua',23);
alert(desk1.run());