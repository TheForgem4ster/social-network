import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage}
                                                                 updateNewPostText={props.updateNewPostText}
                                                                 addPost={props.addPost}/>}/>
                        <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
