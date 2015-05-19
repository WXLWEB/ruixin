/**
 * Created by pursuer on 15-2-9.
 */
$(function(){
    //购买说明弹出框
    if($('#buy-explanation')){
        $('#buy-explanation').leanModal({
            top:110,
            overlay:0.45,
            closeButton:".hidemodal"
        });
    }

    ////购物车数量加减
    //$("#ticket1").Spinner();
    //$("#ticket2").Spinner();
    //$("#ticket3").Spinner();
    //$("#ticket4").Spinner();
    //个人中心用户资料更改
    $('.user-img img').on({mouseover:function(){
        $('.user-name').text("编辑资料");
    },mouseout:function(){
        $('.user-name').text("agdsag");
    }});
    /*个人中心侧边栏高度*/
    $('.user-cont').change(function(){
        var $userCenterSlideHeight = $(this).outerHeight();
        console.log($userCenterSlideHeight);
        $('.userCenter-slide').height($userCenterSlideHeight);
    }).change();
    //个人中心手机的导航弹出框
    if($('#phoneNav-radius')){
        $('#phoneNav-radius').leanModal({
            top:110,
            overlay:0.45,
            closeButton:".hidemodal"
        });
    }
    //个人中心我的帐户切换
    $('.info-Nav ul li').click(function(){
        //给当前元素添加active样式
        $(this).addClass('active').siblings().removeClass('active');
        //当前元素索引
        var index =$('.info-Nav ul li').index(this);
        //给当前元素添加active样式，并且隐藏其他元素
        $('.userInfoCont>li').removeClass('active').eq(index).addClass('active');

        /*个人中心侧边栏高度*/
        $('.user-cont').change(function(){
            var $userCenterSlideHeight = $(this).outerHeight();
            console.log($userCenterSlideHeight);
            $('.userCenter-slide').height($userCenterSlideHeight);
        }).change();
        $('.art-describle').rowsControlText();
        $('.art-title').rowsControlTitle();
        $('.features-title').rowsControlTitle();
        $('.text').rowsControlText();
    });
    //购物车中课程删除
    $('.cou-delete').click(function(){
        $(this).parent().css('display','none');
    });
    $('#scroll').owlCarousel({
        items: 4,
        autoPlay: true,
        navigation: true,
        navigationText: ["",""],
        scrollPerPage: true
    });
    $('#scroll2').owlCarousel({
        items: 1,
        autoPlay: true,
        navigation: true,
        navigationText: ["",""],
        scrollPerPage: true,
        responsive : false
    });
    $('#scroll3').owlCarousel({
        items: 1,
        autoPlay: true,
        navigation: true,
        navigationText: ["",""],
        scrollPerPage: true,
        responsive : false
    });
    $('.art-describle').rowsControlText();
    $('.art-title').rowsControlTitle();
    $('.features-title').rowsControlTitle();
    $('.text').rowsControlText();
});
