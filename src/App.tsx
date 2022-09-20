import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ListItemScreen } from './screens/ListItemScreen';
import { SearchBoxScreen } from "./screens/SearchBoxScreen"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBoxScreen />} />
        <Route path="/items" element={<ListItemScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
