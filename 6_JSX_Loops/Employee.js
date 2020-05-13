class Employee extends React.Component {
    render() {
        const { firstName, lastName, age} = this.props;
        // alert(firstName);
        // alert(lastName);
        // alert(age);
        //alert(typeof skills);

        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <p> --{firstName} is {age} years old.</p>
                <ul>
                    <li>
                        {
                        this.props.skills.map(item => <li>{item}</li>)
                        }
                    </li>
                </ul>
            </div>
        );
    }
}

/**
 *  <h1>{this.props.firstName} {this.props.lastName}</h1>
    <p> - {this.props.firstName} is {this.props.age} years old.</p>
    <ul>
        <li>{this.props.skills[0]}</li>
        <li>{this.props.skills[1]}</li>
        <li>{this.props.skills[2]}</li>
    </ul>
*/