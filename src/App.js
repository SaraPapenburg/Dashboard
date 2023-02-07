
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GraphContainer from './Components/GraphContainer';
import StudentOverview from './Components/StudentOverview';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<GraphContainer />}
          />
          <Route
            path="/student/:studentName"
            element={<StudentOverview />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;