var cur = document.querySelector('.circle')
var frames = document.querySelectorAll('.frame')
var span = document.querySelector('.frame span')
const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener('mousemove',function (dets) {
    // cur.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    // cur.style.left = dets.x + "px"
    // cur.style.top = dets.y + "px"
    gsap.to(cur,{
        x:dets.x,
        y:dets.y,
        duration:.2,
        ease: Expo, 
    })
})

frames.forEach(function(frame){
    frame.addEventListener('mousemove',function (det) {
        var dims = frame.getBoundingClientRect();
        var xstart = dims.x
        var xend = dims.x + dims.width
        var ystart = dims.y
        var yend = dims.y + dims.height
    
        var rangex = gsap.utils.mapRange(xstart, xend, 0, 1, det.clientX);
        var rangey = gsap.utils.mapRange(ystart, yend, 0, 1, det.clientY);
        gsap.to(cur,{
            scale:8
        })
        gsap.to(frame.children,{
            color: "white",
            duration:0.3,
            y:"-5vw" 
        })
        gsap.to(frame.children,{
            x: lerp(-47, 47, rangex),
            // y: lerp(-40, 40, rangey),
            duration:0.27
        })
    })
    frame.addEventListener('mouseleave',function (dets) {
        gsap.to(cur,{
            scale:1
        })
        gsap.to(frame.children,{
            color: "black",
            y:0,
        })
        gsap.to(frame.children,{
            x: 0,
            duration:0.27
        })
    })
})
