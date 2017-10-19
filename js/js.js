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

    $(".fwxm-btn li").click(function () {
        var fwNow = $(this).index();
        $(".fwxm-btn li").eq(fwNow).addClass('active').siblings().removeClass('active');
        $(".fwxm-box > li").eq(fwNow).show().siblings().hide();
    })
})
