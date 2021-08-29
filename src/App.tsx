import CardAuthors from "./components/CardAuthors";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <PostList/>
          </div>
          <div className="col-lg-4">
            <CardAuthors/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;