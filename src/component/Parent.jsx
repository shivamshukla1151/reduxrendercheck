import React from 'react';
import Child from './Child';
const Parent = () => {
    React.useEffect(() => {
        console.log('%c Parent Component Rendered', 'color: #f1f10e');
    });
    return (
        <div>
            <h3>Parent</h3>
            <Child />
        </div>
    );
};

export default Parent;
