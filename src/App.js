import './App.css';
import React, { Suspense } from "react";
import Navbar from './componets/Navbar/Navbar';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./componets/common/Preloader/Preloader";
import store from "./redux/redux-store";

// import DialogsContainer from "./componets/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter basename="/">
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<div><Preloader/></div>}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/profile" />} />
                                <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                                <Route path="/dialogs" element={<DialogsContainer/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/login" element={<LoginPage/>}/>
                                <Route path="*" element={<div>404 not found</div>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>
        )
            ;
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp})(App));

const SamuraiJSApp = (props) => {
    return <React.StrictMode>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </React.StrictMode>
}

export default SamuraiJSApp;