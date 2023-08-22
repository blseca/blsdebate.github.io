const words = ["MSDL", "Words Matter", "Speak Now", "Resolved", "Affirm", "Negate", "Rebutt", "Turn", "Framework", "Value", "Philosophy", "Observation", "Contention", "Case", "Card", "Nuclear War", "USFG", "Voting", "Union", "Rails", "Nuclear Power", "Liberty", "Freedom"]
const wordCount = 25; //window.innerWidth / 40
//turned into 25 because was getting laggy when minimized
window.addEventListener('load',()=>{
    const header = document.querySelector("header")
    for(let i = 0; i < wordCount; i++){
        let p = document.createElement("p")
        p.className = "banner-word"
        p.innerHTML = words[Math.floor(Math.random()*words.length)]
        let depth = Math.random()*15 - 3
        let size = 3/(depth/3+2);
        p.style.left = `${(Math.random())*100}vw`
        p.style.top = `${(Math.random()-0.1)*600}px`
        p.style.filter = `blur(${Math.abs(depth-3)}px)`
        p.style.scale = size
        p.setAttribute("depth", depth)
        header.appendChild(p)
    }

    window.addEventListener('scroll', ()=>{
        const words = document.querySelectorAll('.banner-word')
        for(let word of words){
            depth = parseFloat(word.getAttribute("depth"))
            word.style.translate = `0px ${-window.scrollY/(depth/2 + 1.5)}px`
        }
    })

    document.querySelector("#join").addEventListener('mouseover',()=>{
        const words = document.querySelectorAll('.banner-word')
        for(let word of words){
            let depth = parseFloat(word.getAttribute("depth"))
            depth = (Math.random() *15 -3 + depth)/2
            let size = 3/(depth/3+2);
            word.style.filter = `blur(${Math.min(Math.abs(depth-3), 10)}px)`
            word.style.scale = size
        }
    })
    const track = document.getElementById("images");
    window.onmousedown = e => {

        track.dataset.mouseDownAt = e.clientX;
    }
    window.onmousemove = e => {
        if(track.dataset.mouseDownAt === "0") return;
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;
        const percentage = (mouseDelta / maxDelta) * 40;
        const nextPercentageUncon = parseFloat(track.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUncon, 0), -100);
        track.dataset.percentage = nextPercentage;
        track.animate({
            transform: `translate(${nextPercentage * 4}%, 0%)`
        }, { duration: 1200, fill: "forwards" });
          
        for(const image of track.getElementsByClassName("image")) {
            image.animate({
              objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }
    
    window.onmouseup = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }
})

