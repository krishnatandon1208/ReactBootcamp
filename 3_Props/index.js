class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Paul" from="Adam" bangs={5}  img="img1.png" alt="img1"/>
                <Hello to="Jenny" from="Dave" bangs={10} img="img2.png" alt="img2"/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));