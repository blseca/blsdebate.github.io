const words = ["MSDL", "Words Matter", "Speak Now", "Resolved", "Affirm", "Negate", "Rebutt", "Turn", "Framework", "Value", "Philosophy", "Observation", "Contention", "Case", "Card"]
const wordCount = window.innerWidth / 40
function setup(){
    const header = document.querySelector("header")
    for(let i = 0; i < wordCount; i++){
        let p = document.createElement("p")
        p.className = "banner-word"
        p.innerHTML = words[Math.floor(Math.random()*words.length)]
        let depth = Math.random()*15 - 3
        let size = 3/(depth/3+2);
        let left = (Math.random()-0.5)*100/size + 50
        let top = (Math.random()-0.5)*400/size + 200
        p.style.left = `${left}vw`
        p.style.top = `${top}px`
        p.style.filter = `blur(${Math.abs(depth/2)}px)`
        p.style.transform = `translate(-50%, -50%)`
        p.style.transformOrigin = `${-left+50}vw ${-top+250}px`
        p.style.scale = size
        p.setAttribute("depth", depth)
        header.appendChild(p)
    }
    window.addEventListener('scroll', (e)=>{
        const words = document.querySelectorAll('.banner-word')
        for(let word of words){
            depth = parseFloat(word.getAttribute("depth"))
            word.style.translate = `0px ${-window.scrollY/((depth+3)/3)}px`
        }
    })

    document.querySelector("#join").addEventListener('mouseover',()=>{
        const words = document.querySelectorAll('.banner-word')
        for(let word of words){
            let depth = parseFloat(word.getAttribute("depth"))
            depth = (Math.random() *15 -3 + depth)/2
            let size = 3/(depth/3+2);
            word.style.filter = `blur(${Math.min(Math.abs(depth/2), 10)}px)`
            word.style.scale = size
            word.setAttribute("depth", depth)
            depth = parseFloat(word.getAttribute("depth"))
        }
    })
    let imageContainer = document.querySelector("#images")
    imageContainer.appendChild(imageContainer.querySelector("div").cloneNode(true))
}
