
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobSection from "./Pages/JobSection";
import Blog from "./Pages/Blog";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobSection />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter> 

  );
}

export default App;
