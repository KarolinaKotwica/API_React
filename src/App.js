import Search_bar from './components/Search_bar';
import Image_List from './components/Image_list';
import Image_show from './components/Image_show';
import searchImages from './api';

function App() {

  const handleSubmit = (term) => {
      
    // searchImages(term)
  }

  return ( <div>
      <Search_bar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
