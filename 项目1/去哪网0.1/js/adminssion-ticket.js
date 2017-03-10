/**
 * Created by Administrator on 2017/3/10.
 */

$(document).ready(function () {


//点击导航事件
$(".z-nav li").click(function () {
//        debugger
    console.log($(this))
    $(".z-scroll-bar").animate({
        left:$(this)[0].offsetLeft

    }).css({
        width:$(this).width()
    })
})
$(".z-first").trigger("click")
// 监视屏幕缩小事件
$(window).resize(function () {
    changeResize()

})

function changeResize() {

    if($(this).width() <= 768 ){
        $(".z-nav").addClass("z-ul-active")
        $(".z-scroll-bar").hide()
        $(".z-first").addClass("z-li-active")
    }else{
        $(".z-nav").removeClass("z-ul-active")
        $(".z-scroll-bar").show()
        $(".z-first").removeClass("z-li-active")
    }

}
changeResize()

//手风琴逻辑
var $card = $('.card');
for (var i = 0; i < 2; i++) {
    $card.clone().appendTo('.card-list'); // clone some examples!
}

$('.card').click(function() {

    $('.card').removeClass('active ');
    $(this).addClass('active');
});

})