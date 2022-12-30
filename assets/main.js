document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        setSlide();
        setFixedNav();
    }
}

const setSlide = () => {
    var currentPos = 0;
    setInterval(() => {
        if (currentPos > 1040) {
            currentPos = 0
        }
        var wrapper = document.getElementsByClassName("owl-wrapper")[0];
        var currentStyle = wrapper.getAttribute("style")
        currentPos += 208
        console.log(currentStyle)
        wrapper.setAttribute("style", "width: 4872px;left: 0px;display: block;transition: all 800ms ease 0s;transform: translate3d(-" + currentPos + "px, 0px, 0px);")
    
    }, 2000)
}

const setFixedNav = () => {
    setInterval(() => {
        var navdom = document.getElementsByClassName("main-nav")[0]
        if (window.scrollY > 56) {
            navdom.setAttribute("style", "position: fixed; z-index: 1000; top: 0px; margin-left: 0px; width: 100%; left: 0px;");
        } else {
            navdom.setAttribute("style", "")
        }
    }, 1)
}