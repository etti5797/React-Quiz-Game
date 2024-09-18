import React, {useState, useEffect} from 'react';
import CategoryGame from './CategoryGame.jsx';

function QuizGame(){

    useEffect(() => {document.title = 'Quiz Game 😎'}, []);

    const categories = ["Music", "Capitals", "Currencies"];
    const questions = {
        Capitals : [
            {q: "What is the capital of France?", a: ["Paris", "Rome", "Berlin", "Madrid"], correct: "Paris"},
            {q: "What is the capital of Germany?", a: ["Paris", "London", "Berlin", "Madrid"], correct: "Berlin"},
            {q: "What is the capital of Canada?", a: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: "Ottawa"},
            {q: "What is the capital of Japan?", a: ["Tokyo", "Osaka", "Kyoto", "Nagoya"], correct: "Tokyo"},
            {q: "What is the capital of India?", a: ["Mumbai", "Delhi", "Kolkata", "New Delhi"], correct: "New Delhi"},
            {q: "What is the capital of Brazil?", a: ["Rio de Janeiro", "São Paulo", "Brasilia", "Salvador"], correct: "Brasilia"}],
        Music : [
            {q: "Who is known as the 'King of Pop'?", a: ["Michael Jackson", "Elvis Presley", "Prince", "Madonna"], correct: "Michael Jackson"},
            {q: "Which artist released the hit single 'As It Was' in 2023?", a: ["Ed Sheeran", "The Weeknd", "Harry Styles", "Dua Lipa"], correct: "Harry Styles"},
            {q: "In 2023, which K-pop group became the first to have a song reach No. 1 on the Billboard Hot 100?", a: ["BTS", "BLACKPINK", "TWICE", "EXO"], correct: "BTS"},
            {q: "What was the title of the 2024 album released by Ariana Grande?", a: ["Sweetener", "Thank U, Next", "Positions", "Danger"], correct: "Positions"},
            {q: "Which artist released the hit single 'Bad Habits' in 2021?", a: ["Ed Sheeran", "The Weeknd", "Harry Styles", "Dua Lipa"], correct: "Ed Sheeran"},
            {q: "Which artist released the hit single 'Blinding Lights' in 2019?", a: ["Ed Sheeran", "Harry Styles", "Dua Lipa", "The Weeknd"], correct: "The Weeknd"}],
        Currencies : [
            {q: "What is the currency of Japan?", a: ["Yen", "Dollar", "Euro", "Pound"], correct: "Yen"},
            {q: "What is the currency of Russia?", a: ["Ruble", "Dollar", "Euro", "Pound"], correct: "Ruble"},
            {q: "What is the currency of South Korea?", a: ["Dollar", "Euro", "Won", "Pound"], correct: "Won"},
            {q: "What is the currency of Australia?", a: ["Yen", "Dollar", "Euro", "Pound"], correct: "Dollar"},
            {q: "What is the currency of Brazil?", a: ["Dollar", "Euro", "Pound", "Real"], correct: "Real"},
            {q: "What is the currency of India?", a: ["Euro", "Rupee", "Dollar", "Pound"], correct: "Rupee"}
        ]
    }
    const [category, setCategory] = useState('None');

    function handleCategoryPick(category){
        setCategory(category);
    };
    
    return(
        category === 'None'?
        <div className='pick-category-container'>
            <h1>Pick a category ╰(*°▽°*)╯</h1>
            <div>
                {categories.map((category, index) => <button className='category-button' key = {index} 
                                            onClick={()=>handleCategoryPick(category)}>
                                            {category}</button>)}
            </div>
        </div>
        :
        <div>
            <CategoryGame categoryQuestions = {questions[category]} category = {category} />
        </div>
    );
 

};
export default QuizGame;