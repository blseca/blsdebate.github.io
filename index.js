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
        }
    })
    let imageContainer = document.querySelector("#images")
    let repeat1 = document.querySelector('#second')
    console.log(repeat1.getBoundingClientRect().x)
    let repeat2 = document.querySelector('#third')
    console.log(window.innerWidth)

    imageContainer.scrollLeft = repeat1.getBoundingClientRect().x
    imageContainer.addEventListener('scroll', (e)=>{
        if(repeat2.getBoundingClientRect().x < 0){
            e.target.scrollLeft = -repeat1.getBoundingClientRect().x
        }
        if(repeat1.getBoundingClientRect().x > window.innerWidth){
            e.target.scrollLeft = (repeat2.getBoundingClientRect().x) * 2  - window.innerWidth * 3
        }
    })
}
