import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Page from "./components/Page";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Product1 from "./images/image-product-1.jpg";
import Product2 from "./images/image-product-2.jpg";
import Product3 from "./images/image-product-3.jpg";
import Product4 from "./images/image-product-4.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";

function App() {
  const [cart, setCart] = useState("none");
  const [select, setSelect] = useState([]);
  const [selectView, setSelectView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const images = [Product1, Product2, Product3, Product4];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleThumbnailClick = (imageIndex, index) => {
    setCurrentIndex(imageIndex);
    setSelectedThumbnail(index);
  };

  return (
    <div className="App">
      <Header cart={cart} setCart={setCart} select={select} />
      <Routes>
        <Route
          path="/"
          element={
            <Content
              cart={cart}
              select={select}
              setSelect={setSelect}
              Product1={Product1}
              Product2={Product2}
              Product3={Product3}
              Product4={Product4}
              thumbnail1={thumbnail1}
              thumbnail2={thumbnail2}
              thumbnail3={thumbnail3}
              thumbnail4={thumbnail4}
              selectView={selectView}
              setSelectView={setSelectView}
              images={images}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              selectedThumbnail={selectedThumbnail}
              setSelectedThumbnail={setSelectedThumbnail}
              handleThumbnailClick={handleThumbnailClick}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          }
        />
      </Routes>
      <Footer />
      <Page
        selectView={selectView}
        setSelectView={setSelectView}
        Product1={Product1}
        Product2={Product2}
        Product3={Product3}
        Product4={Product4}
        thumbnail1={thumbnail1}
        thumbnail2={thumbnail2}
        thumbnail3={thumbnail3}
        thumbnail4={thumbnail4}
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        selectedThumbnail={selectedThumbnail}
        setSelectedThumbnail={setSelectedThumbnail}
        handleThumbnailClick={handleThumbnailClick}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
}

export default App;
