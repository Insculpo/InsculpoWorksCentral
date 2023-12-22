var starCount = 40
var docScreen = document.createElement("canvas")
function buildStar(starro) {
    for(i = 0; i < starro; i = i+1){
        var xPick = Range(0,docScreen.width)
        var yPick = Range(0,docScreen.height)
        console.log(xPick + "," + yPick)
    }
}

buildStar(starCount)


customElements.define('starry-bg',StarryBG)