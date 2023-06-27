import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom"
import Profile from "../pages/Profile"
import Dashbord from "../pages/Dashboard"

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashbord />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Dashbord