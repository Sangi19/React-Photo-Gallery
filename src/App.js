import './App.css';
import Gallery from './components/Gallery';

function App() {
const galleryImages=[
  {
    img:"https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img:"https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img:"https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    img:"https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    img:"https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }

]

  return (
    <div className="App">
      <div>
        <strong>responsive Photo Gallery</strong> 
      </div>
      <br />
      <br />
      <div>
        <Gallery  galleryImages={galleryImages} />
      </div>
    </div>
  );
}

export default App;
