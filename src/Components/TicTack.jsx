import React from 'react'
import './TicTack.css'
import acha_bhen from "./acha_bhen.mp3"
import carry from "./carry.mp3"
import {Howl} from "howler"
import { useState,useRef } from 'react'
import circle from "./circle.png"
import cross from "./cross.png"

let data = ["", "", "", "","", "", "", "",""];

const TicTack = () =>{



    
    const titleRef = useRef(null);
    const box0 = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const box7 = useRef(null);
    const box8 = useRef(null);

    const bhen = new Howl({
        src: [acha_bhen],
        volume: 2,
    });

    const carry = new Howl({
        src: [acha_bhen],
        volume: 2,
    });

    

    let box_array = [box0, box1, box2, box3, box4,box5,box6,box7,box8];
const checkWin = () =>{
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[0]); // First row
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[3]); // Second row
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[6]); // Third row
        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[0]); // First column
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[1]); // Second column
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[2]); // Third column
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[0]); // Main diagonal
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[2]); // Anti-diagonal
        }
    
    
}

const won = (winner)=>{
    console.log(winner);
    setLock(true);
    if (winner === "x") {
        titleRef.current.innerHTML = `Congratulations Winner is <img src="${cross}" />`
    }
    else {
        titleRef.current.innerHTML = `Congratulations Winner is <img src="${circle}" />`
    }
}

const reset = () => {
    setLock(false);
   data = ["", "", "", "","", "", "", "",""];
   titleRef.current.innerHTML = "Tic Tack Toe" 
   box_array.forEach(item => {
    item.current.innerHTML = ""
   })
}

let [lock,setLock] = useState(false)
let [count,setCount] = useState(0);
    
const toggle = (e,num) => {

    if(lock || data[num] !== "") {
        // bhen.play();
        // alert("Acha Bhen ke Laund 😡")
        return 0;
    }

    if(count%2===0) {
        setCount(++count);
        e.target.innerHTML = `<img src='${cross}'/>`
        // console.log(count)
        data[num]='x';
        // console.log(data[num])
        console.log(num);
    }

    else{
        e.target.innerHTML = `<img src='${circle}'/>`
        // console.log(count)
        setCount(++count);
        data[num]='o';
        console.log(num);
        // console.log(data[num])
    }
    checkWin();
}


    return(
        <div className="container">
            <h1 ref={titleRef}>Tic Tack Toe</h1>
            <div className="card">
                <div className="row">
                    <div ref={box0}  onClick={(e)=>{toggle(e,0)}} className="box"></div>
                    <div ref={box1} onClick={(e)=>{toggle(e,1)}} className="box"></div>
                    <div ref={box2} onClick={(e)=>{toggle(e,2)}} className="box"></div>
                </div>
                <div className="row">
                    <div ref={box3} onClick={(e)=>{toggle(e,3)}} className="box"></div>
                    <div ref={box4} onClick={(e)=>{toggle(e,4)}} className="box"></div>
                    <div ref={box5} onClick={(e)=>{toggle(e,5)}} className="box"></div>
                </div>
                <div className="row">
                    <div ref={box6} onClick={(e)=>{toggle(e,6)}} className="box"></div>
                    <div ref={box7} onClick={(e)=>{toggle(e,7)}} className="box"></div>
                    <div ref={box8} onClick={(e)=>{toggle(e,8)}} className="box"></div>
                </div>
            </div>
            <button id='btn' onClick={()=>{reset()}}>Reset</button>
        </div>
    )
    
}

export default TicTack;