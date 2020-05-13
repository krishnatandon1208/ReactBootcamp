import React from 'react';
import ReactDOM from 'react-dom';

function helpful() {
    // return(<p>I am a Helper function.</p>);
    alert("Inside helpful()");
}

function sort() {
    alert("Everything sorted");
}

function sing() {
    alert("LA LA LA");
}

//export default helpful;
export { helpful, sort, sing };