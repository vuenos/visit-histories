// SideMenu.js
import React from 'react';
import {Menu} from 'antd';
import {useNavigate, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addTab} from '../../store';

const SideMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const items = [
        {
            key: 'menu1',
            label: <Link to="/">Main</Link>,
            title: 'main',
            path: '/',
        },
        {
            key: 'menu2',
            label: <Link to="/page1">Page1</Link>,
            title: 'page1',
            path: '/page1',
        },
        {
            key: 'menu3',
            label: <Link to="/page2">Page2</Link>,
            title: 'page2',
            path: '/page2',
        },
    ]
    const handleMenuClick = (e) => {
        const selectedItem = items.find(item => item.key === e.key);
        if (selectedItem) {
            console.log(selectedItem.title);
            const url = selectedItem.path;
            const name = selectedItem.title;

            dispatch(addTab({name, url}));
            navigate(url);
        }
    };

    return (
        <Menu mode="vertical" onClick={handleMenuClick} items={items}/>
    );
};

export default SideMenu;
