class App extends React.Component {
    render() {
        return(
            <div>
                <Employee 
                    firstName="Alice" 
                    lastName="Chan" 
                    age="32" 
                    skills={
                            ["Digital Marketing", 
                            "Google Analytics",
                            "Facebook Analytics"]
                        } 
                />
                <Employee 
                    firstName="Cindy" 
                    lastName="Linton" 
                    age="28" 
                    skills={["ReactJS", "NodeJS", "MongoDB", "GatsbyJS"]} 
                />
                <Employee 
                    firstName="Mark" 
                    lastName="Hennings" 
                    age="40" 
                    skills={["Project Management"]} 
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));