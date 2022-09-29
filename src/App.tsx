import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemDetailScreen } from './screens/ItemDetailScreen';
import { ListItemScreen } from './screens/ListItemScreen';
import { SearchBoxScreen } from "./screens/SearchBoxScreen"
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBoxScreen />} />
        <Route path="/items" element={<ListItemScreen />} />
        <Route path="/items/:id" element={<ItemDetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
