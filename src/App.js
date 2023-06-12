import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Application from "./Landing";


const App = () => {


    return (
<div className="home">
<header> Employee Registration Application</header>
        <Router>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/home" element={<Application />} />
            </Routes>
        </Router>

       
</div>

    )
}

export default App;