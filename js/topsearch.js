// 控制顶部悬浮搜索区的显示
// 通过获取页面像素距离，在一定范围内显示

var topsearch = document.getElementsByClassName('top-search')[0];

setInterval(function() {
    var y = window.pageYOffset;
    if (y > 280) {
        topsearch.style.visibility = "visible";
    } else {
        topsearch.style.visibility = "hidden";
    }
}, 1);