import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transections,
  Loader,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transections />
      <Footer />
    </div>
  );
};

export default App;
