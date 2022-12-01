import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout'
import { Home } from './components/Home';
import { Quotes } from './components/Quotes';
import { Characters } from './components/Characters';
import { Episodes } from './components/Episodes';


function App() {

  return (
      <Routes>
        <Route path='breakingbadapp/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='quotes' element={<Quotes />} />
          <Route path='characters' element={<Characters />} />
          <Route path='episodes' element={<Episodes />} />
        </Route>
      </Routes>
  )

};

export default App;
