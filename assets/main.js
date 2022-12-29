document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
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
}