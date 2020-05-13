// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<h1>Hello there. I am a class based component.</h1>
// 		);
// 	}
// }

function Hello() {
	return (
		<h1>Hey, I am a functional component.</h1>
	);
}

ReactDOM.render(<Hello />, document.getElementById("root"));