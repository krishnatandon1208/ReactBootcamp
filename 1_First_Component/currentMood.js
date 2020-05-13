function currentMood() {
    const myMood = ["Angry", "Happy", "Hungry", "to Party", "to Sleep"];
    return (myMood[Math.floor(Math.random() * myMood.length)]);
}

class MyMood extends React.Component {
    render() {
        return (
        <h1>My current mood is : {currentMood()}</h1>
        //currentMood - reference to the function
        //currentMood() - Calling the function and executing when required.
        //currentMood(); - Executing immediately and resulting as unexpected token
        );
    }
}

ReactDOM.render(<MyMood />, document.getElementById("root"));