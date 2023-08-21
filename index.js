const words = ["MSDL", "Hydrate!", "Words Matter", "Speak Now", "Resolved", "Affirm", "Negate"]
const wordCount = window.innerWidth / 40
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
    window.addEventListener('scroll', (e)=>{
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
    
            // word.style.rotate = `${Math.round((Math.random()-0.5)*5)*2*Math.PI}rad`
        }
    })
})

