import { useState } from "react";

function Home() {
    const [count,setCount] = useState(0)
    return(
        <div className="home">
            <h2>Professional Summary</h2>
            <p>Adtech professional with several years of experience in both client facing roles and engineering roles. Special focus in web development and related technologies. Areas of expertise include Adtech, JavaScript, API development, client relations, and communicating high context technical concepts. </p>
            <h3>Cell: 516-581-4606</h3>
            <h3>Email: Bradsha0802@gmail.com</h3>
        </div>
    )
}
    
export default Home