/*
 * @Description:
 * @version:
 * @Author: Jayhrn
 * @Date: 2022-07-20 21:51:50
 * @LastEditors: Jayhrn
 * @LastEditTime: 2022-07-22 23:15:20
 */

//  document.addEventListener("scroll", function() {
// 	var e, t = window.scrollY + document.documentElement.clientHeight,
// 		o = window.scrollY,
// 		n = document.getElementById("pagination"),
// 		r = document.getElementById("post-tools");
// 	r && n && (e = r.offsetTop + r.offsetHeight / 2, 1300 < document.body.clientWidth && (n.style.bottom = o < e && e < t ? "0" : "-100px"))
// })

const str_1 = '<div style="background: #121212;height:100vh;text-align: center;"><img src="https://i.loli.net/2020/05/19/aKOcLiyPl2JQdFD.png" style="margin:12em auto 0; height: 16em;"><div style="color: rgba(255, 255, 255, .7);width: 100%;font-size: 1.7em;text-align: center;font-weight: bold;padding: 30px auto;margin-top: 15px;">这个网站炸了，<a href="/" style="color:#99a9bf;background-color: #1f1f1f;padding: .4em .5em;text-decoration: none;border-radius:4px">点击返回试试吧~</a></div></div>';

document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("你真坏，不能打开控制台喔!"), event.keyCode = 0, event.returnValue = !1, !1
    if ((e.ctrlKey || e.metaKey) && 67 == e.keyCode && "" != selectTextNow) return btf.snackbarShow("复制成功"), rightmenuCopyText(selectTextNow), !1
};
(function () {
    function e() {
        var e = new Date;
        if (new Date - e > 0) {
            try {
                document.getElementsByTagName("html")[0].innerHTML = str_1
            } catch (e) {
            }
            return document.body.innerHTML = str_1, !0
        }
        return !1
    }

    function t() {
        for (; e();) e()
    }

    e() ? t() : window.onblur = function () {
        setTimeout(function () {
            t()
        }, 500)
    }
}, function () {
    var e = /x/;
    e.toString = function () {
        try {
            return document.body.innerHTML = str_1
        } catch (e) {
        }
        return document.body.innerHTML = str_1
    }
}, function () {
    var e = document.createElement("div");
    Object.defineProperty(e, "id", {
        get: function () {
            try {
                return document.body.innerHTML = str_1
            } catch (e) {
            }
            return document.body.innerHTML = str_1
        }
    }), console.log(e)
})();

let rm = {};

rm.showRightMenu = function (isTrue, x = 0, y = 0) {
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top', x + 'px').css('left', y + 'px');

    if (isTrue) {
        stopMaskScroll()
        $rightMenu.show();
    } else {
        $rightMenu.hide();
    }
};

let rmWidth = $('#rightMenu').width();
let rmHeight = $('#rightMenu').height();

rm.reloadrmSize = function () {
    rmWidth = $("#rightMenu").width();
    rmHeight = $("#rightMenu").height()
};

let domhref = "";
let domImgSrc = "";

let selectTextNow = "";
document.onmouseup = document.ondbclick = selceText;

function selceText() {
    let txt;
    if (document.selection) {
        txt = document.selection.createRange().text;
    } else {
        txt = window.getSelection() + "";
    }
    if (txt) {
        selectTextNow = txt;
    } else {
        selectTextNow = ""
    }
}

window.oncontextmenu = function (event) {
    if (document.body.clientWidth > 768) {
        let pageX = event.clientX + 10;	/* 加10是为了防止显示时鼠标遮在菜单上 */
        let pageY = event.clientY;

        let $rightMenuNormal = $(".rightMenuNormal");
        let $rightMenuOther = $(".rightMenuOther");
        let $rightMenuPlugin = $(".rightMenuPlugin");
        let $rightMenuCopyText = $("#menu-copytext");
        let $rightMenuCommentText = $("#menu-commenttext");
        let $rightMenuNewWindow = $("#menu-newwindow");
        let $rightMenuCopyLink = $("#menu-copylink");
        let $rightMenuCopyImg = $("#menu-copyimg");
        let $rightMenuDownloadImg = $("#menu-downloadimg");
        let $rightMenuSearch = $("#menu-search");
        let $rightMenuSearchBaidu = $("#menu-searchBaidu");
        let $rightMenuReadmode = $("#menu-readmode");
        let href = event.target.href;
        let imgsrc = event.target.currentSrc;
        let is_article = location.href.includes('posts')
        let pluginMode = false;
        $rightMenuNormal.show();
        $rightMenuOther.show();
        if (selectTextNow && window.getSelection()) {
            pluginMode = true;
            $rightMenuCopyText.show();
            $rightMenuCommentText.show();
            $rightMenuSearch.show();
            $rightMenuSearchBaidu.show();
            $rightMenuOther.hide()
        } else {
            $rightMenuCopyText.hide();
            $rightMenuCommentText.hide();
            $rightMenuSearchBaidu.hide();
            $rightMenuSearch.hide()
        }
        if (href || imgsrc) {
            pluginMode = true;
            $rightMenuNewWindow.show();
            $rightMenuCopyLink.show();
            $rightMenuOther.hide();
            if (href) {
                domhref = href;
            }
            if (imgsrc) {
                domImgSrc = imgsrc;
                domhref = imgsrc;
                $rightMenuCopyImg.show();
                $rightMenuDownloadImg.show();
            } else {
                $rightMenuCopyImg.hide();
                $rightMenuDownloadImg.hide();
            }
        } else {
            $rightMenuCopyImg.hide();
            $rightMenuDownloadImg.hide()
            $rightMenuNewWindow.hide();
            $rightMenuCopyLink.hide()
        }
        if (is_article) {
            $rightMenuReadmode.show();
        } else {
            $rightMenuReadmode.hide();
        }
        if (pluginMode) {
            $rightMenuPlugin.show();
        } else {
            $rightMenuPlugin.hide();
        }
        rm.reloadrmSize();
        if (pageX + rmWidth > window.innerWidth) {
            pageX -= rmWidth;
        }
        if (pageY + rmHeight > window.innerHeight) {
            pageY -= rmHeight;
        }
        rm.showRightMenu(true, pageY, pageX);
        $('#rightmenu-mask').attr('style', 'display: flex');
        return false;
    }
};

function removeRightMenu() {
    rm.showRightMenu(false);
    $('#rightmenu-mask').attr('style', 'display: none');
}

function stopMaskScroll() {
    if (document.getElementById("rightmenu-mask")) {
        let xscroll = document.getElementById("rightmenu-mask");
        xscroll.addEventListener("mousewheel", function (e) {
            removeRightMenu();
        }, false);
    }
    ;
    if (document.getElementById("rightMenu")) {
        let xscroll = document.getElementById("rightMenu");
        xscroll.addEventListener("mousewheel", function (e) {
            removeRightMenu();
        }, false);
    }
}

/**
 * @name:  切換模式
 */
function switchDarkMode() {
    removeRightMenu();
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode();
        saveToLocal.set('theme', 'dark', 2);
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
    } else {
        activateLightMode();
        saveToLocal.set('theme', 'light', 2);
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
    }
    typeof utterancesTheme === 'function' && utterancesTheme();
    typeof FB === 'object' && window.loadFBComment();
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200);
};

$('#menu-backward').on('click', function () {
    window.history.back();
});
$('#menu-forward').on('click', function () {
    window.history.forward();
});
$('#menu-refresh').on('click', function () {
    window.location.reload();
});

$('#menu-darkmode').on('click', function () {
    switchNightMode()
});

$('#menu-home').on('click', function () {
    window.location.href = window.location.origin;
});

$(".menu-link").on("click", function () {
    removeRightMenu()
});

function copyUrl(url) {
    $("body").after("<input id='copyVal'></input>");
    var text = url;
    var input = document.getElementById("copyVal");
    input.value = text;
    input.select();
    input.setSelectionRange(0, input.value.length);
    document.execCommand("copy");
    $("#copyVal").remove()
};

function copyPageUrl() {
    var url = window.location.href;
    copyUrl(url);
    btf.snackbarShow("复制本页链接地址成功");
    removeRightMenu()
};

/**
 * @name: 复制文本 || 链接
 * @description:
 * @param { String } text
 * @param { String } type
 * @return {*}
 */
function rightmenuCopyText(text, type = "no-add") {
    const copyright = GLOBAL_CONFIG.copyright;
    var textFont;
    if (type == "add-copyright") {
        /**
         * 复制时加上版权信息
         */
        if (text.length > copyright.limitCount) {
            textFont = text + '\n' + '\n' + '\n' +
                copyright.languages.author + '\n' +
                copyright.languages.link + window.location.href + '\n' +
                copyright.languages.source + '\n' +
                copyright.languages.info
        } else {
            textFont = text
        }
    } else {
        textFont = text
    }
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textFont)
    }
    removeRightMenu()
};

rm.downloadimging = false;

function imageToBlob(imageURL) {
    console.log(imageURL);
    const img = new Image;
    image.crossOrigin = "Anonymous";
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    img.crossOrigin = "";
    img.src = imageURL;
    return new Promise(resolve => {
        img.onload = function () {
            c.width = this.naturalWidth;
            c.height = this.naturalHeight;
            ctx.drawImage(this, 0, 0);
            c.toBlob(blob => {
                resolve(blob)
            }, "image/png", .75)
        }
    })
}

async function copyImage(imageURL) {
    const blob = await imageToBlob(imageURL);
    const item = new ClipboardItem({
        "image/png": blob
    });
    navigator.clipboard.write([item])
}

function writeClipImg(imgsrc) {
    removeRightMenu();
    if (imgsrc.indexOf(location.host) == -1) {
        btf.snackbarShow("图片不同源，由于CORS限制，将无法提取位图！");
        return
    }
    btf.snackbarShow("正在下载中，请稍后", false, 1e4);
    if (rm.downloadimging == false) {
        rm.downloadimging = true;
        setTimeout(function () {
            copyImage(imgsrc);
            btf.snackbarShow("复制成功！图片已添加盲水印，请遵守版权协议");
            rm.downloadimging = false
        }, "10000")
    }
}

/**
 * @name: 下载图片
 * @description:
 * @param { String } imgsrc
 * @param { String } name
 */
function downloadImage(imgsrc, name) {
    removeRightMenu();
    /** if (imgsrc.indexOf(location.host) == -1) {
        btf.snackbarShow("图片不同源，由于CORS限制，将无法提取位图！");
        return
    }
     if (rm.downloadimging == false) {
        rm.downloadimging = true;
        btf.snackbarShow("正在下载中，请稍后", false, 1e4);
        setTimeout(function () {
            let image = new Image;
            image.setAttribute('crossorigin', 'anonymous');
            image.onload = function () {
                let canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                let context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, image.width, image.height);
                let url = canvas.toDataURL("image/png");
                let a = document.createElement("a");
                let event = new MouseEvent("click");
                a.download = name || "photo";
                a.href = url;
                a.dispatchEvent(event)
            };
            image.src = imgsrc;
            btf.snackbarShow("图片已添加盲水印，请遵守版权协议");
            rm.downloadimging = false
        }, "10000")
    } else {
        btf.snackbarShow("有正在进行中的下载，请稍后再试")
    }
     */
    setTimeout(function () {
        let a = document.createElement("a");
        let event = new MouseEvent("click");
        a.download = name || "photo";
        a.href = imgsrc;
        a.click();
        a.dispatchEvent(event);
        rm.downloadimging = false;
    }, 2000)
}

/**
 百度搜索
 */
function searchBaidu() {
    btf.snackbarShow("即将跳转到百度搜索");
    setTimeout(function () {
        window.open("https://www.baidu.com/s?wd=" + selectTextNow)
    }, "2000");
    removeRightMenu();
};

/**
 * 粘贴文本到剪切板
 * description : 暂时不考虑接入
 * @param {*} elemt
 * @param {*} value
 */
insertAtCaret: (elemt, value) => {
    const startPos = elemt.selectionStart;
    const endPos = elemt.selectionEnd;
    if (document.selection) {
        elemt.focus();
        var sel = document.selection.createRange();
        sel.text = value;
        elemt.focus();
    } else {
        if (startPos || startPos == '0') {
            var scrollTop = elemt.scrollTop;
            elemt.value = elemt.value.substring(0, startPos) + value + elemt.value.substring(endPos, elemt.value.length);
            elemt.focus();
            elemt.selectionStart = startPos + value.length;
            elemt.selectionEnd = startPos + value.length;
            elemt.scrollTop = scrollTop;
        } else {
            elemt.value += value;
            elemt.focus();
        }
    }
}

/**
 * 阅读模式 read-mode
 */
function switchReadMode(len) {
    const $body = document.body
    let newEle;

    function clickFn() {
        $body.classList.remove('read-mode');
        newEle.remove();
        newEle.removeEventListener('click', clickFn);
    }

    if (len == 0) {
        $body.classList.add('read-mode');
        newEle = document.createElement('button');
        newEle.type = 'button';
        newEle.className = 'fas fa-sign-out-alt exit-readmode';
        $body.appendChild(newEle);
        newEle.addEventListener('click', clickFn);
    } else {
        clickFn();
    }
    removeRightMenu();
}

$('#menu-copy').on('click', function () {
    copyPageUrl();
});

$("#menu-newwindow").on("click", function () {
    window.open(domhref);
    removeRightMenu();
});

$("#menu-copylink").on("click", function () {
    rightmenuCopyText(domhref);
    btf.snackbarShow("已复制链接地址");
});

$("#menu-copyimg").on("click", function () {
    writeClipImg(domImgSrc)
});
$("#menu-downloadimg").on("click", function () {
    downloadImage(domImgSrc, "tzy1997")
});

$("#menu-copytext").on("click", function () {
    rightmenuCopyText(selectTextNow, 'add-copyright');
    btf.snackbarShow("复制成功");
    removeRightMenu();
});

$("#menu-searchBaidu").on("click", function () {
    searchBaidu();
});
$("#menu-print").on("click", function () {
    removeRightMenu();
    window.print();
});
$("#menu-readmode").on("click", function () {
    const is_readmode = document.body.classList.length;
    switchReadMode(is_readmode);
});

$("#rightmenu-mask").on("click", function () {
    removeRightMenu()
});
$("#rightmenu-mask").contextmenu(function () {
    removeRightMenu();
    return false;
});