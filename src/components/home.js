import Header from "./header";
import Background from "./background";

const Home = (props) => {
  return (
    <div className="home">
      <Header villains={props.villains}></Header>
      <Background
        eliminateVillain={props.eliminateVillain}
        villains={props.villains}
        setStart={props.setStart}
      ></Background>
    </div>
  );
};

export default Home;
