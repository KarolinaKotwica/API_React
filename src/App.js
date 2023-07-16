import { useState } from 'react';
import Search_bar from './components/Search_bar';
import Image_List from './components/Image_list';
import searchImages from './api';
import "./App.css"

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  }

  return ( <div>
      <h1>What kind of images do you want to display?</h1>
      <Search_bar onSubmit={handleSubmit} />
      <Image_List images={images} />
    </div>
  );
}

export default App;
