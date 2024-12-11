import Header from "@/components/header/Header";
import Navbar from "../src/components/navbar/Navbar";
import Body from "@/components/body/Body";
import Footer from "@/components/footer/Footer";

const products = [
  {
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet",
    image: "/images/product1.jpg",
  },
  {
    name: "Product 2",
    description: "Consectetur adipiscing elit",
    image: "/images/product2.jpg",
  },
];

const Home = () => (
  <div>
    <Navbar />
    <Header />
    <Body />
    <Footer />
  </div>
);

export default Home;
