/*alert(navigator.appName);
document.write(navigator.userAgent+'<br>');
document.write(navigator.platform+'<br>');*/

/*
for(var i=0;i<navigator.plugins.length;i++){
    document.write(navigator.plugins[i].name+'<br>');
}

function hasFlash() {                                    //检测是否有Flash
    for(var i=0;i<navigator.plugins.length;i++){
        if(navigator.plugins[i].name.toUpperCase().indexOf('flash'))
            return true;
        return false;
    }
}
alert(hasFlash());*/

document.write(navigator.userAgent);
function broswerdetect() {                            //浏览器版本检测
    var broswer={
        name:'',
        version:'',
        saybrowser:function () {
            alert(this.name+ ' '+ this.version);
        }
    };
    var ua = navigator.userAgent;
    if(/Chrome\/(\S+)/.test(ua)){
        broswer.name='Chrome';
        broswer.version=RegExp.$1;
        broswer.saybrowser();
    }
    else if(/Firefox\/(\S+)/.test(ua)){
        broswer.name='Firefox';
        broswer.version=RegExp.$1;
        broswer.saybrowser();
    }
    else if(/rv:(.+)\)/.test(ua)){
        broswer.name='Internet Explorer';
        broswer.version=RegExp.$1;
        broswer.saybrowser();
    }
    else alert('Unknown broswer');
}
broswerdetect();