var imgAutoChange = function(){
    var me = this;
    me.ifload = false;
    me.hasShow = [];
    me.drawware = [];
    me.showing = [];
    me.autochange = setInterval(function() {
        me.changeImgGoNext();
    }, 3000);
    me.getConstant = function() {
        var dom = document.getElementById('draw_show');
        var arrayLi = dom.getElementsByTagName('li');
        for (var i = 0; i < arrayLi.length; i++) {
            if (i == 0) {
                showing.push(arrayLi[i]);
            } else if (i > 1) {
                hasShow.push(arrayLi[i]);
            } else {
                drawware.push(arrayLi[i]);
            }
        }
        hasShow.reverse();
    };

    me.changeImgGoNext = function() {
        clearInterval(autochange);
        if (ifload == false) {
            ifload = true;
            me.getConstant();
        }
        //移走正在显示的img,移动到已经显示过的仓库，并放到最前边。
        var moveShowing = showing.shift();
        $(moveShowing).animate({'right' : '500px'},400);
        hasShow.splice(0, 0, moveShowing);
        //展示需要显示的img,并把需要展示的list里面将已经展示的移除
        var moveToWare = drawware.shift();
        $(moveToWare).animate({'right' : '0px'},400);
        showing.push(moveToWare);
        //准备下次需要显示的img
        var nextImg = hasShow.pop();
        $(nextImg).animate({'right' : '-500px'},0);
        drawware.push(nextImg);
        autochange = setInterval(function() {
            me.changeImgGoNext();
        }, 3000);
    };

    me.changeImgGoLast = function() {
        clearInterval(autochange);
        if (ifload == false) {
            ifload = true;
            me.getConstant();
        }
        //(反向)移走正在显示的img,移动到已经显示过的仓库，并放到最前边。
        var moveShowing = showing.shift();
        $(moveShowing).animate({'right' : '-500px'},400);
        drawware.splice(0, 0, moveShowing);
        //(反向)展示需要显示的img,并把需要展示的list里面将已经展示的移除
        var moveToWare = hasShow.shift();
        $(moveToWare).animate({'right' : '0px'},400);
        showing.push(moveToWare);
        //(反向)准备下次需要显示的img
        var nextImg = drawware.pop();
        $(nextImg).animate({'right' : '500px'},0);
        hasShow.push(nextImg);
        autochange = setInterval(function() {
            me.changeImgGoNext();
        }, 3000);
    };
    return me;
}();