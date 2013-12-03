function ytkey(e){
    if (e.keyCode == 89 && e.ctrlKey){
        document.body.id = "YTBig";
    }
    if (e.keyCode == 77 && e.ctrlKey){
        var r = document.getElementById('yt-player');
        if (!r) {
            r = document.getElementById('p');
        }
        rect = r.getBoundingClientRect();
        window.scrollTo(rect.left,rect.top)
    }
}
document.addEventListener('keydown',ytkey)
