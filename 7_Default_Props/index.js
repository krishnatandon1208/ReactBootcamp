class App extends React.Component {
    render() {
        return(
            <div>
                <Employee 
                    firstName="Alice" 
                    lastName="Chan" 
                    company="Google"
                    country="South Africa"
                />
                <Employee 
                    firstName="Cindy" 
                    lastName="Linton" 
                    company="Microsoft"
                />
                <Employee 
                    firstName="Mark" 
                    lastName="Hennings"
                    country="India"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));