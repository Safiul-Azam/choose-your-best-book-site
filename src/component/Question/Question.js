import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className="question">
            <h3>1: props vs states</h3>
            <ul>
                <h4>states:</h4>
                <li>1:states is mutable property </li>
                <li>2:states is own object for component</li>
                <li>3:if we change states's value render component based on value of states</li>
                <li>4:we can not access from child components</li>
                <h4>props:</h4>
                <li>1:props is immutable property</li>
                <li>2:when we call component we send props </li>
                <li>3:We pass data from one component to another component by props</li>
                <li>4:Props configurations Component </li>
            </ul>
             <h3>2:how dose useStates works?</h3>
             <p>ans:ans: react has some hook. one of them useStates , we pass empty array or empty string in useState by initial state and then useState return a array. and first element of array a state and second element of array a function. and in that function we set value. that value for first element . and when we change state value render componant </p>
        </div>
    );
};

export default Question;