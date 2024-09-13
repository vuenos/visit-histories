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
            label: <Link to="/main">Main</Link>,
            title: 'main',
            path: '/main',
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
    const handleMenuClick = ({item}) => {
        const url = item.props.path;
        const name = item.props.title;

        // 탭 정보 추가
        dispatch(addTab({name, url}));
        navigate(url);
    };

    return (
        <Menu mode="vertical" onClick={handleMenuClick} items={items}/>
    );
};

export default SideMenu;
