class Hello extends React.Component {
    render() {
        let thisPropsContent = this.props;
        //let bangs = this.props.bangs;
        //The above line will give us a number.

        let bangs = "!".repeat(this.props.bangs);

        return (
            <div>
                <h1>Greetings {this.props.to} from {this.props.from} {bangs}</h1>
                <img src={this.props.img} alt={this.props.alt} />
            </div>
        );
    }
}