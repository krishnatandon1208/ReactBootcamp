function SlotItems(s1, s2, s3) {
    if ((s1 === s2) && (s2 === s3)) {
        return "Winner";
    } else {
        return "Loser";
    }
}

class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props; 
        let getSlotItems = SlotItems(s1, s2, s3);

        return(
            <div>
                <h1>{s1} {s2} {s3}</h1>
                <h2>{getSlotItems}</h2>
            </div>
        );
    }
}

        
// Method 1 - to extract values in individual variables
/**let s1 = this.props.s1;
let s2 = this.props.s2;
let s3 = this.props.s3; */

/** Method 2 - to extract values in individual variables
 * Object Destructuring (ES6 new feature)
 * 
 * const {s1, s2, s3} = this.props;
 * where s1, s2 and s3 will get individual values
 * as props is an object hence, follow this 
 * 
 * props = {
 *      s1 : "🍊" =====> Matches with LHS first variable
        s2 : "🍇" =====> Matches with LHS second variable
        s3 : "🍒" =====> Matches with LHS third variable
    * }
    * 
    */

// const obj = {
//     "fN" : "Krishna",
//     "lN" : "Tandon", 
//     "age" : 28
// };

// const {fN, lN, age} = obj;


/** 
 * 
 * Approach

let arr = [
    {this.props.s1},
    {this.props.s2},
    {this.props.s3}
];

let slotMachineResult = arr.map( item => 
    (Math.floor(Math.random * arr.length + 1))
)
*/