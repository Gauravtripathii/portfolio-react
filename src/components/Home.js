import "./component_style/home.css";

const Home = () => {
  const openResume = () => {
    window.open("https://drive.google.com/file/d/1Gs2Byoq-DSccmuyTK5Pb-f6qlCI112hM/view", "_blank");
  }
  return (
    <div className="home">
      <div className="intro">
        <h3>Hello, I am</h3>
        <h1><span>gaurav kumar</span>tripathi</h1>
        <h3 style={{"text-align": "center"}}>And I love building things!</h3>
      </div>
      <div className="button" onClick={openResume}>View Resume &rarr;</div>
    </div>
  );
};

export default Home;
