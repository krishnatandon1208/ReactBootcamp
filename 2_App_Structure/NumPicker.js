function getRandomNumber() {
    return(
        (Math.floor(Math.random() * 10))
    );
}

class NumPicker extends React.Component {
    render() {
        //Match the conditions
        const num = getRandomNumber();
        let newNum;
        if(num === 7){
            newNum = "Congratulations"
            
        } else if (num === 0) {
            newNum = "U got 0"
        } else  {
            newNum = "unlucky"
        }
        return(
            <div>
                <h1>Your random number {num}</h1>
                <h3>
                    {newNum}
                    {/* {
                     num ===7 
                     ?<img src="success.gif" alt="Success" />
                     : null
                    } */}

                    {num ===7  && <img src="success.gif" alt="Success" />}
                </h3>
            </div>
        );
    }
}