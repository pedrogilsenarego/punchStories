import UpScroller from "../presentational/UpScroller";
import Header from "../presentational/Menu";




const HomepageLayout = (props: any) => {


  return (
    <div style={{ minHeight: window.innerHeight }}>
      <UpScroller />
      <Header />
      <div style={{ marginTop: "150px" }}>
        {props.children}
      </div>

    </div>
  );
};

export default HomepageLayout;
