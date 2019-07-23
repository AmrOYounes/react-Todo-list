import { useState } from 'react';
export default (initVal) => {

    const [inputVal, setinputVal] = useState(initVal);



    const handleChange = (e) => {
        setinputVal(e.target.value);
    };
    const setValue = (val) => {
        setinputVal(val);
    }


    return [inputVal, handleChange, setValue];
}