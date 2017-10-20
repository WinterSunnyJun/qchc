$(function () {
//    首页
    $("#index-box").fullpage({
        anchors:['page1','page2','page3','page4','page5'],
        menu: '#menu'
    });
//NAV
    $(".nav li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    //服务项目
    $(".fwxm-btn li").click(function () {
        var fwNow = $(this).index();
        $(".fwxm-btn li").eq(fwNow).addClass('active').siblings().removeClass('active');
        $(".fwxm-box > li").eq(fwNow).show().siblings().hide();
    })
//  案例详情
    var axNow = 0;
    $(".alxq-left").click(function () {
        axNow--;
        if(axNow < 0 ){
            axNow = $(".alxq-item-picbg ul li").length-1;
        }
        $(".alxq-item-picbg ul li").eq(axNow).show().siblings().hide();
    })
    $(".alxq-right").click(function () {
        axNow++;
        if(axNow > $(".alxq-item-picbg ul li").length-1){
            axNow = 0;
        }
        $(".alxq-item-picbg ul li").eq(axNow).show().siblings().hide();
    })
//    关于我们
    var auNow = 0;
    $(".gywm-left").click(function () {
        auNow--;
        if(auNow < 0 ){
            auNow = $(".gywm-list li").length-1;
        }
        $(".gywm-list li").eq(auNow).show().siblings().hide();
    })
    $(".gywm-right").click(function () {
        auNow++;
        if(auNow > $(".gywm-list li").length-1){
            auNow = 0;
        }
        $(".gywm-list li").eq(auNow).show().siblings().hide();
    })
})
