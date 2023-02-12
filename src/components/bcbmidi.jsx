import { useState } from "react";

function Bcbmidi() {
    const [count,setCount] = useState(0)
    return(
        <div className="bcbmidi">
            <h2>hello look at midi text blah blah</h2>
            <h3>The B#Cb Midi Suite is a set of browser based tools that enable you to build synthesizers and transcribe sheet music. You can also use this to practice reading sheet music <a href="https://bsharpcb.com/flashnotes" target="_blank">(check out the flashcards)</a>. All you need to do is plug in a MIDI controller.</h3>
            <a href="https://bsharpcb.com/transcribe" target="_blank">
                <h3>Transcribe sheet music</h3>
            </a>
            <a href="https://bsharpcb.com/lesson1" target="_blank">
                <h3>Introductory Music Lesson: Chord Anatomy</h3>
            </a>
            <a href="https://bsharpcb.com/flashnotes" target="_blank">
                <h3>Flashcards: Practice Sight Reading</h3>
            </a>
        </div>

    )
}

export default Bcbmidi