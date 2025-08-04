import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '97vh' }}>
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Body />
      </div>      
      <Footer />
    </div>
  );
}
