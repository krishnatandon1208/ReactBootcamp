class JSXDemo extends React.Component {
    render() {
        return(
            <div>
                <h1>I love food :) </h1>
                <img src="food.jpg" alt="Food" height="1200" width="1000" />
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));