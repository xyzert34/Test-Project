import './App.css';
import Card1 from './components/Card1';
import ResponsiveAppBar from './components/Appbar';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Footer from './components/Footer';
import Image1 from './components/Image1';
import Image3 from './components/Image3';
import Image2 from './components/Image2';
import Image4 from './components/Image4';

function App() {
  return (
    <div className="App1">
      <ResponsiveAppBar/>
      <Image3/>
      <Image1/>
      <Image2/>
      {/* <div> */}
      <div style={{display:"flex",
          marginLeft: 85,}}>
      <div>
      <Card1/>
      <Card2/>
      </div>
      <div>
      <Card3/>
      <Card4/>
      <Image4/>
      </div>
      </div>
      <Footer/>
      {/* </div> */}
    </div>
  );
}

export default App;
