import { useState } from 'react';
import Search_bar from './components/Search_bar';
import Image_List from './components/Image_list';
import Image_show from './components/Image_show';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  }

  return ( <div>
      <Search_bar onSubmit={handleSubmit} />
      <Image_List images={images} />
    </div>
  );
}

export default App;
