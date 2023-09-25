import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/ChildSlice';

const Child = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState('');
    React.useEffect(() => {
        console.log('%c Child Component Rendered', 'color: #9e9e64');
    });
    function handleInputChange(e) {
        setInputValue(e.target.value);
    }
    function submitHandler(e) {
        e.preventDefault();
        dispatch(add(inputValue));
    }
    return (
        <div>
            <h3>Child</h3>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="GrandParent Name..."
                    value={inputValue}
                    onChange={handleInputChange}
                />

                <button className="btn btn-secondary ms-4">Submit</button>
            </form>
        </div>
    );
};

export default Child;
