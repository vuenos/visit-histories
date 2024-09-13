import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {resetTabs} from '../store';

const Tabs = () => {
    const tabs = useSelector((state) => state.app.tabs);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleTabClick = (url) => {
        navigate(url);
    };

    const handleLogout = () => {
        dispatch(resetTabs());
        navigate('/');
    };

    return (
        <div>
            {tabs.map((tab, index) => (
                <button key={index} onClick={() => handleTabClick(tab.url)}>
                    {tab.name}
                </button>
            ))}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Tabs;
