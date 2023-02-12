import { useState } from "react";

function Jeopardy() {
    const [count,setCount] = useState(0)
    return(
        <div className="jeopardy">
            <h2>
                <a href="https://jeopardy.gg" target="_blank">Jeopardy.gg</a>
            </h2>
            <p>My girlfriend loves Jeopardy, and we've watched a ton of episodes over the last year together. When struggling with a particular category, she'll often say something like "Ahh lakes and rivers, big knowledge gap for me". Sometime around May 2022, I started writing these down, with the vague idea that I could help her bridge these gaps somehow.

So now, I'm working on this project as a Christmas present to my girlfriend-- in hopes that it will help her sharpen her Jeopardy skills. This is a tool that crawls J-Archive pages for categories matching a regex of her knowledge gaps, and then pulls those into a separate game instance daily. I don't know if this will actually be helpful at all, but it's been a fun project and I've learned a lot along the way.</p>
        </div>
    )
}
    
export default Jeopardy