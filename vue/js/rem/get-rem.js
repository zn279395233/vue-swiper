/**
 * Created by Administrator on 2017/3/11.
 */
(function (doc,win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth ) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            console.log(
                docEl.style.fontSize
            )
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false)

})(document,window)