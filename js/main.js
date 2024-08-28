// 드롭다운 메뉴1
$('#sub-one').mouseenter(function () {
    $('.submenu').stop().show();
})
$('#sub-one').mouseleave(function () {
    $('.submenu').stop().hide();
})

// 드롭다운 메뉴2
$('#sub-two').mouseenter(function () {
    $('.submenu1').stop().show();
});
$('#sub-two').mouseleave(function () {
    $('.submenu1').stop().hide();
});

// 드롭다운 메뉴3
$('#sub-three').mouseenter(function () {
    $('.submenu2').stop().show();
});
$('#sub-three').mouseleave(function () {
    $('.submenu2').stop().hide();
});







// 슬라이드
$(document).ready(function () {
    function prev() {
        $('.slidelist li:last').prependTo('.slidelist');
        $('.slidelist').css('margin-left', -1140);
        $('.slidelist').stop().animate({ marginLeft: 0 }, 1000);
    }

    function next() {
        $('.slidelist').stop().animate({ marginLeft: -1140 }, function () {
            $('.slidelist li:first').appendTo('.slidelist');
            $('.slidelist').css({ marginLeft: 0 });
        });
    }

    function slide() {
        $('.slidelist').stop().animate({ marginLeft: -1140 }, function () {
            $('.slidelist li:first').appendTo('.slidelist');
            $('.slidelist').css({ marginLeft: 0 });
        });
    }
    setInterval(slide, 3000);

    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });
});










    // 새로등록된 도서 초기 값
    $.ajax({
        method: 'GET',
        url: 'https://dapi.kakao.com/v3/search/book',
        data: { query: '소설', size: 7 },
        headers: { Authorization: 'KakaoAK a0034027d1997e62fd41ed4c765ddb1a' },
    }).done(function (msg) {
        for (let i = 0; i < 7; i++) {
            var str = msg.documents[i].title;
            $('.new_thumbnail0').eq(i).append(
                `<a href="sub.html">
                <img src="${msg.documents[i].thumbnail}" class="thumbnail_img">
                <br>
                <div class="card">
                    <div class="card_title">${msg.documents[i].title}</div>
                    <div class="price">${msg.documents[i].sale_price}</div>
                </div>
                <a>`
            );
        }
    });


$(".new_book_title").click(function () {
    $(".new_thumbnail0").stop().empty();
});




// 새로 등록된 도서 소설 API
function novel() {
    $("#novel").css({
        "background": "linear-gradient(to top, #FFFF92 40%, #FFFFFF 60%)",
        "color": "#202020"
    });
    $('.new_thumbnail').empty().show();

    // AJAX 호출
    $.ajax({
        method: 'GET',
        url: 'https://dapi.kakao.com/v3/search/book',
        data: { query: '소설', size: 7 },
        headers: { Authorization: 'KakaoAK a0034027d1997e62fd41ed4c765ddb1a' },
    }).done(function (msg) {
        for (let a = 0; a < 7; a++) {
            var str = msg.documents[a].title;
            $('.new_thumbnail').eq(a).append(
                `<a href="sub.html">
                <img src="${msg.documents[a].thumbnail}" class="thumbnail_img">
                <br>
                <div class="card">
                    <div class="card_title">${msg.documents[a].title}</div>
                    <div class="price">${msg.documents[a].sale_price}</div>
                </div>
                <a>`
            );
        }
    });


// #novel 형제 요소를 클릭했을 때 #novel 숨김
$('#novel').siblings().click(function () {
    $(".new_thumbnail").stop().hide();
    $("#novel").css({
        "background": "",
        "color": ""
    });
});
}

$('#novel').click(function () {
    novel();
});





// 새로 등록된 도서 인물 API
function person() {
    $("#person").css({
        "background": "linear-gradient(to top, #FFFF92 40%, #FFFFFF 60%)",
        "color": "#202020"
    });
    $('.new_thumbnail1').empty().show();

    // AJAX 호출
    $.ajax({
        method: 'GET',
        url: 'https://dapi.kakao.com/v3/search/book',
        data: { query: '인물', size: 7 },
        headers: { Authorization: 'KakaoAK a0034027d1997e62fd41ed4c765ddb1a' },
    }).done(function (msg) {
        for (let b = 0; b < 7; b++) {
            var str = msg.documents[b].title;
            $('.new_thumbnail1').eq(b).append(
                `<a href="sub.html">
                <img src="${msg.documents[b].thumbnail}" class="thumbnail_img">
                <br>
                <div class="card">
                    <div class="card_title">${msg.documents[b].title}</div>
                    <div class="price">${msg.documents[b].sale_price}</div>
                </div>
                <a>`
            );
        }
    });


// #person 형제 요소를 클릭했을 때 #person 숨김
$('#person').siblings().click(function () {
    $(".new_thumbnail1").stop().hide();
    $("#person").css({
        "background": "",
        "color": ""
    });
});
}

$('#person').click(function () {
    person();
});



// 새로 등록된 도서 만화 API
function comic() {
    $("#comic").css({
        "background": "linear-gradient(to top, #FFFF92 40%, #FFFFFF 60%)",
        "color": "#202020"
    });
    $('.new_thumbnail2').empty().show();

    // AJAX 호출
    $.ajax({
        method: 'GET',
        url: 'https://dapi.kakao.com/v3/search/book',
        data: { query: '만화', size: 7 },
        headers: { Authorization: 'KakaoAK a0034027d1997e62fd41ed4c765ddb1a' },
    }).done(function (msg) {
        for (let c = 0; c < 7; c++) {
            var str = msg.documents[c].title;
            $('.new_thumbnail2').eq(c).append(
                `<a href="sub.html">
                <img src="${msg.documents[c].thumbnail}" class="thumbnail_img">
                <br>
                <div class="card">
                    <div class="card_title">${msg.documents[c].title}</div>
                    <div class="price">${msg.documents[c].sale_price}</div>
                </div>
                <a>
                `
            );
        }
    });


// #comic 형제 요소를 클릭했을 때 #comic 숨김
$('#comic').siblings().click(function () {
    $(".new_thumbnail2").stop().hide();
    $("#comic").css({
        "background": "",
        "color": ""
    });
});
}

$('#comic').click(function () {
    comic();
});



// 새로 등록된 도서 종교 API
function religion() {
    $("#religion").css({
        "background": "linear-gradient(to top, #FFFF92 40%, #FFFFFF 60%)",
        "color": "#202020"
    });
    $('.new_thumbnail3').empty().show();

    // AJAX 호출
    $.ajax({
        method: 'GET',
        url: 'https://dapi.kakao.com/v3/search/book',
        data: { query: '종교', size: 7 },
        headers: { Authorization: 'KakaoAK a0034027d1997e62fd41ed4c765ddb1a' },
    }).done(function (msg) {
        for (let d = 0; d < 7; d++) {
            var str = msg.documents[d].title;
            $('.new_thumbnail3').eq(d).append(
                `<a href="sub.html">
                <img src="${msg.documents[d].thumbnail}" class="thumbnail_img">
                <br>
                <div class="card">
                    <div class="card_title">${msg.documents[d].title}</div>
                    <div class="price">${msg.documents[d].sale_price}</div>
                </div>
                <a>`
            );
        }
    });


// #religion 형제 요소를 클릭했을 때 #religion 숨김
$('#religion').siblings().click(function () {
    $(".new_thumbnail3").stop().hide();
    $("#religion").css({
        "background": "",
        "color": ""
    });
});
}

$('#religion').click(function () {
    religion();
});



// 새로 등록된 도서 고서 API
function old() {
    $("#old").css({
        "background": "linear-gradient(to top, #FFFF92 40%, #FFFFFF 60%)",
        "color": "#202020"
    });
    $('.new_thumbnail4').empty().show();

    // AJAX 호출
    $.ajax({
        method: 'GET',
        url: 'https://dapi.kakao.com/v3/search/book',
        data: { query: '고서', size: 7 },
        headers: { Authorization: 'KakaoAK a0034027d1997e62fd41ed4c765ddb1a' },
    }).done(function (msg) {
        for (let e = 0; e < 7; e++) {
            var str = msg.documents[e].title;
            $('.new_thumbnail4').eq(e).append(
                `<a href="sub.html">
                <img src="${msg.documents[e].thumbnail}" class="thumbnail_img">
                <br>
                <div class="card">
                    <div class="card_title">${msg.documents[e].title}</div>
                    <div class="price">${msg.documents[e].sale_price}</div>
                </div>
                <a>`
            );
        }
    });


// #old 형제 요소를 클릭했을 때 #old 숨김
$('#old').siblings().click(function () {
    $(".new_thumbnail4").stop().hide();
    $("#old").css({
        "background": "",
        "color": ""
    });
});
}

$('#old').click(function () {
    old();
});



// 가격대별 코너 API
$.ajax({
    method: 'GET',
    url: 'https://dapi.kakao.com/v3/search/book',
    data: { query: '경제', size: 12 },
    headers: { Authorization: 'KakaoAK a0034027d1997e62fd41ed4c765ddb1a' },
}).done(function (msg) {
    for (var j = 0; j < 12; j++) {
        var str = msg.documents[j].title;
        $('.new_thumbnail_price').eq(j).append(
            `<a href="sub.html">
            <img src="${msg.documents[j].thumbnail}" class="thumbnail_img">
            <div class="card">
            <div class="card_title">${msg.documents[j].title}</div>
            <div class="price">${msg.documents[j].sale_price}</div>
            </div>
            <a>`
            );
    }
});

$(".mid_left_top").click(function () {
    $(".new_thumbnail_price").stop().empty();
});


// 서브 js 코드
//sub.html api
$.ajax({
    method: 'GET',
    url: 'https://dapi.kakao.com/v3/search/book',
    data: { query: '자기계발', size: 5 },
    headers: { Authorization: 'KakaoAK a0034027d1997e62fd41ed4c765ddb1a' },
}).done(function (msg) {
    for (let i = 0; i < 5; i++) {
        var str = msg.documents[i].title;
        $('.shop-book-card-inner').eq(i).append(
            `<a href="sub.html">
            <div class="card-inner-thumbnail">
                <div class="card-thumbnail">
                    <img src="${msg.documents[i].thumbnail}" class="card-thumbnail-img">
                </div>
            </div>
            <div class="card-contants">
                <div class="card-title">${msg.documents[i].title}</div>
                <div class="card-price">
                    <div class="shop-price">${msg.documents[i].sale_price}</div>
                </div>
            </div>
            <a>`
        );
    }
});



// 북코아 추천도서 api
$.ajax({
    method: 'GET',
    url: 'https://dapi.kakao.com/v3/search/book',
    data: { query: '베스트셀러', size: 6 },
    headers: { Authorization: 'KakaoAK a0034027d1997e62fd41ed4c765ddb1a' },
}).done(function (msg) {
    for (let j = 0; j < 6; j++) {
        var str = msg.documents[j].title;
        $('.card-container').eq(j).append(
            `<a href="sub.html">
            <div class="card-layout">
                <div class="card-thumbnail-box">
                    <img src="${msg.documents[j].thumbnail}" alt="" class="card-thumbnail-box-img">
                </div>
                <div class="card-layout-contents">
                    <div class="book-name">${msg.documents[j].title}</div>
                    <div class="book-writer">${msg.documents[j].authors}</div>
                </div>
            </div>
            <a>`
        );
    }
});


/*
// 인증서점
// 아래 점을 누를때마다 6개씩 나와야 함
$(document).ready(function () {
    $.ajax({
        url: 'json/certification.json',
        dataType: 'json',
        success: function (data) {
            console.log(
                'Number of .right_sub_inner elements:',
                $('.right_sub_inner').length
            );
            console.log('Data length:', data.length);

            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    if (i < $('.right_sub_inner').length) {
                        $('.right_sub_inner').eq(i).prepend(`
                            <div class="circle_img">
                                <img src="${data[i].url}" class="imgbox">
                                    <div class="right_sub_contents">
                                        <div class="contents_title">${data[i].title}</div>
                                        <div class="contents_sub_title">${data[i].sub_title}</div>
                                        <div class="contents">${data[i].contents}</div>
                                    </div>
                            </div>
                        `);
                    } else {
                        console.warn(
                            `No .right_sub_inner element available for index ${i}`
                        );
                    }
                }
            }
        },
    });
});
*/

