class Employee extends React.Component {
    static defaultProps = {
        company : "TCS",
        country : "USA"
    };

    render() {
        const { firstName, lastName, company, country } = this.props;

        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <h2> {firstName} works in {company}, {country}</h2>
            </div>
        );
    }
}