/*(function () {       //格式：(匿名函数)()
    alert('Brohua')  //第一个圆括号放匿名函数，第二个圆括号代表执行
})();
(function (age) {      //匿名函数传参
    alert(age);
})(100);*/

/*
function box() {
    var age=100;
    return function () {
        age++;
        return age;
    }
}
var b=box();
b();
b();
b();
alert(b());*/

/*
function box() {
    var arr=[];
    for(var i=0;i<=5;i++)
    {
        arr[i]=(function (num) {
            return function () {
                return num
            };
        })(i);
    }
    return arr;
}
var b= box();
alert(b);
alert(b[0]);*/

/*
var user='Window';
var box = {
    user:'Box',
    getUser:function () {
        return function () {
            return this.user;
        }
    }
};
alert(box.getUser()());*/

/*
function f1() {                    //这种写法和下面f3的写法相同
    var n=9999;
    function f2() {           //f2可以访问f1中的变量
        alert(n);             //通过return f2就可以在外面访问f1的变量
    }
    return f2;
}
f1()();

function f3(){
    var n=999;
    return function () {
        alert(n);
    }
}
f3()();

var name = "The Window";
var object = {
    name : "My Object",
    getName : function(){
        var that=this;        //把object作用域赋给that
        return (function(){        //这里立刻执行了闭包函数,return的是闭包函数执行后的结果
            return that.name;         //这里的name就是object的name，而不是全局的name
        })();                         //如果没有var that=this ,闭包里的作用域就是window,返回的this.name就是The Window
    }
};

*/

/*
alert(object.getName());       //My Object

var name = "The Window";
var object = {
    name : "My Object",
    getName : function(){
        var that=this;
        return function(){            //这里返回了闭包函数，没有立刻执行
            return that.name;
        };
    }
};
alert(object.getName()());          //My Object 这里有2个圆括号，第2个圆括号执行了闭包函数
*/
