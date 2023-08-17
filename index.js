const words = ["Public Forum", "Debate", "Speech", "Congress", "\"website\"", "Carolineg Song", "Water"]
const wordCount = window.innerWidth / 40
window.addEventListener('load',()=>{
    const header = document.querySelector("header")
    for(let i = 0; i < wordCount; i++){
        let p = document.createElement("p")
        p.innerHTML = words[Math.floor(Math.random()*words.length)]
        let depth = Math.random()*15-3
        p.style.transform = `translateZ(${-depth}px)`
        p.style.translate = `${(Math.random()-0.5)*100*(depth+4)/4}vw ${(Math.random()*1.3-0.5)*400*(depth+4)/4}px`
        p.style.filter = `blur(${Math.abs(depth)}px)`
        header.appendChild(p)
    }
})