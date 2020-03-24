function yHandler() {
    var wrap = document.getElementByID('wrap');
    var contentHeight = wrap.offsetHeight;
    var yOffset = window.pageYOffset;
    var y = yOffset + window.innerHeight;
    if (y >= contentHeight) {
        wrap.innerHTML += '<div class = "newData"></div>';
        //Ajax call to get more dynamic data goes here
    }
    var status = document.getElementById('status');
    status.innerHTML = contentHeight + " | " + y;
}
window.onscroll = yHandler;