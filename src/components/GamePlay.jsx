import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./totalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/button";
import Rules from "./Rules";

const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1);
    const [score,setScore] = useState(0)
    const [error,setError] = useState("")
    const [showRules, setShowRules] = useState(false)
    const generateRandomNumber = ( min, max ) => {
        console.log(Math.floor(min + (max-min)*Math.random()));
        return Math.floor(min + (max-min)*Math.random())
    };
  
    const roleDice = () => {
        if(!selectedNumber){
            setError("You have not selected any number")
            return
        }
        setError("")
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber)
        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber)
        }else{
            setScore((prev) => prev-2)
        }
        setSelectedNumber(undefined)
    };

    const resetScore = () => {
        setScore(0);
    };
    return (
        <MainContainer>
            <div className="top_section">
            <TotalScore score={score}/>
            <NumberSelector error={error} setError = {setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} roleDice={roleDice}/>
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}/>
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={() => setShowRules(prev => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
            </div>
            {showRules && <Rules/>}
        </MainContainer>
    )
};

export default GamePlay;

const MainContainer = styled.main`
    padding: 70px;
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    padding-top: 70px;
    .btns {
        margin-top: 40px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
  }
`