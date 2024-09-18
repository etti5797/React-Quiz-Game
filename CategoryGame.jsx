import React, {useState, useRef} from 'react';

function CategoryGame(props){
    const questions = props.categoryQuestions;
    const category = props.category;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [score, setScore] = useState(0);
    const scoreRef = useRef(0);
    const currentQuestionObject = questions[currentQuestionIndex];
    const [isGameOver, setIsGameOver] = useState(false);


    function handleAnswer(answer){
        if(answer == currentQuestionObject.correct){
            // setScore(s => s + 1);
            scoreRef.current += 1;
        }
        if(currentQuestionIndex < questions.length - 1){
            setCurrentQuestionIndex(prevCurrentQuestionIndex => prevCurrentQuestionIndex + 1);
        }
        else{
            setIsGameOver(true);
        }
    };

    return(
        !isGameOver? 
        <div className='quiz-game-container'>
            <h1>{category}</h1>
            <p className='current-quetsion'>{currentQuestionObject.q}</p>
            <div className='answers'>
                <button className='answer-buttom' onClick = {() => handleAnswer(currentQuestionObject.a[0])}>{currentQuestionObject.a[0]}</button>
                <button className='answer-buttom' onClick = {() => handleAnswer(currentQuestionObject.a[1])}>{currentQuestionObject.a[1]}</button>
                <button className='answer-buttom' onClick = {() => handleAnswer(currentQuestionObject.a[2])}>{currentQuestionObject.a[2]}</button>
                <button className='answer-buttom' onClick = {() => handleAnswer(currentQuestionObject.a[3])}>{currentQuestionObject.a[3]}</button>
            </div>        
        </div> :
        <div className='game-over'>
            <h1>Game Over</h1>
            <p>Your score is {scoreRef.current} out of {questions.length}</p>
            {<button className='play-again-button' onClick = {() => window.location.reload()}>Play Again</button> /* trigger a page reload  */}
        </div>
    );
};


export default CategoryGame;