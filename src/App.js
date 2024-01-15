import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage';
import SignatureFooter from './components/SignatureFooter/SignatureFooter';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/search/:searchTerm"
                        element={
                            <div className="app__page">
                                <Sidebar />
                                <SearchPage />
                            </div>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <div className="app__page">
                                <Sidebar />
                                <SearchPage />
                            </div>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <div className="app__page">
                                <Sidebar />
                                <RecommendedVideos />
                            </div>
                        }
                    />
                </Routes>
                <SignatureFooter />
            </Router>
        </div>
    );
}

export default App;
