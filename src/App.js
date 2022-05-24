
import './App.css';
import image2 from "./image2.jpg"
// import attack1 from "./videos/attack1.mp4"
function App() {
  return (
    <>
    <div>
      <h1 class="title">EREN YEAGER</h1>
    </div>
    <div>
<img className='img2'  src={image2} alt="image2"/>
    </div>
    <div>
<img className='img1' src="/image1.jpg" alt="image1"/>
    </div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/1q2_A7y4QDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  );
}

export default App;