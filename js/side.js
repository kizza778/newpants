// 控制右侧悬浮目录的显示
// 通过获取页面像素距离，在一定范围内显示

var sidenav = document.getElementsByClassName('side-catalog')[0];

setInterval(function() {
    var y = window.pageYOffset;
    if (y < 2300 || y > 5800) {
        sidenav.style.visibility = "hidden";
    } else {
        sidenav.style.visibility = "visible";
    }
}, 1);