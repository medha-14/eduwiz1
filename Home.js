"use client"
import React, { useEffect, useRef, useState } from 'react'
import '../style/s1.css';

const Home = () => {

    const [score, setScore] = useState(0);


const changeQuestion=(val)=>{
    if(val){
    setScore(50)
            
        }
        
    setTimeout((val)=>{
        
        const currQues = document.getElementById("1ques");
        const nextQues = document.getElementById("2ques");
        currQues.style.display = "none";
        nextQues.style.display = "block";
        
        
    },1000)
}
const finalRes=(val)=>{
    
    const currQues = document.getElementById("2ques");
    const finalScore = document.getElementById("finalscore");
    
    currQues.style.display = "none";
    finalScore.style.display = "block";
    
    if(val){
        if(score===0){
            setScore(50);
        }
        else{
            setScore(100)
        }
    }

    
}
  return (
   <>
     <div class="qa_box">
        <div class="qa_header">
            <span >Score: <span id="score" >{score}</span></span>

        </div>
        <div class="qa_body">
            <div class="qa_set active" id="1ques">
                <h4>Que1: What is html stands for ?</h4>

                <div class="qa_ans_row" onClick={()=>changeQuestion(false)}>
                    <input type="radio" name="a1"/>
                    <span>hypertool markup language</span>
                </div>

                <div class="qa_ans_row" onClick={()=>changeQuestion(true)}>
                    <input type="radio" name="a1" valid="valid"/>
                    <span>hypertext markup language</span>
                </div>

                <div class="qa_ans_row" onClick={()=>changeQuestion(false)}>
                    <input type="radio" name="a1"/>
                    <span>home text markup language</span>
                </div>

                <div class="qa_ans_row" onClick={()=>changeQuestion(false)}>
                    <input type="radio" name="a1"/>
                    <span>cascading style sheet</span>
                </div>

            </div>

            <div class="qa_set active2" id="2ques">
                <h4>Ques2: What is www ?</h4>

                <div class="qa_ans_row" onClick={()=>finalRes(false)}>
                    <input type="radio" name="a1"/>
                    <span>world wind web</span>
                </div>

                <div class="qa_ans_row" onClick={()=>finalRes(true)}>
                    <input type="radio" name="a1" valid="valid"/>
                    <span>world wide web</span>
                </div>

                <div class="qa_ans_row" onClick={()=>finalRes(false)}>
                    <input type="radio" name="a1"/>
                    <span>world w web</span>
                </div>

                <div class="qa_ans_row" onClick={()=>finalRes(false)}>
                    <input type="radio" name="a1"/>
                    <span>cascading style sheet</span>
                </div>

            </div>

            <div class="qa_set active1" id="finalscore">
                <h4 >Your Total Score<span id="totalScore"> {score}</span> out of 100</h4>
            </div>


        </div>
        <div class="qa_footer">
            <a href="s.html" class="btn1">Start</a>
        </div>
    </div>

   
   </>
  )
}

export default Home
