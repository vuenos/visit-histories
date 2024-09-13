// App.js
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Aside from './components/Common/Aside';
import Tabs from './components/TabNavigation';
import {Main, Page1, Page2} from './pages';

const App = () => {
    return (
        <div style={{display: 'flex'}}>
            <Aside/>
            <div style={{flex: 1}}>
                <Tabs/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/page1" element={<Page1/>}/>
                    <Route path="/page2" element={<Page2/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
