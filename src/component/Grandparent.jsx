import React from 'react';
import Parent from './Parent';
import { useSelector } from 'react-redux';
const Grandparent = () => {
    const value = useSelector((state) => state.child);
    React.useEffect(() => {
        console.log('%c GrandParent Component Rendered', 'color: #d47352');
    });
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <h3>Grandparent:</h3>
                <h4 style={{ color: '#6f6868', marginLeft: '10px' }}>
                    {value}
                </h4>
            </div>
            <Parent />
        </div>
    );
};

export default Grandparent;
