import styled from "styled-components";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import svg1 from "./images/icon-plus.svg";
import svg2 from "./images/icon-minus.svg";
import Table from "./components/Table";
import next from "./images/icon-next.svg";
import previous from "./images/icon-previous.svg";

const Content = ({
  images,
  currentIndex,
  selectedThumbnail,
  handleThumbnailClick,
  handleNext,
  handlePrevious,
  cart,
  select,
  setSelect,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  selectView,
  setSelectView,
}) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const plus = count + 1;
    setCount(plus);
  };

  const handleDecrement = () => {
    const plus = count - 1;
    setCount(plus);
  };

  const handleClick = () => {
    const id = select.length ? select[select.length - 1].id + 1 : 1;
    const image = images[currentIndex];
    const newSelect = [...select, { image, id, count }];
    setSelect(newSelect);
  };

  const handleDelete = (id) => {
    const remove = select.filter((item) => item.id !== id);
    setSelect(remove);
  };

  return (
    <Main>
      <Cart style={{ display: `${cart}`, color: "hsl(219, 9%, 45%)" }}>
        <p>Cart</p>
        <Table select={select} handleDelete={handleDelete} />
        <button>Checkout</button>
      </Cart>
      <Article>
        <Next onClick={handleNext}>
          <img src={next} alt="next" />
        </Next>
        <Previous onClick={handlePrevious}>
          <img src={previous} alt="previous" />
        </Previous>
        <Figure onClick={() => setSelectView(!selectView)}>
          <img src={images[currentIndex]} alt="image" />
        </Figure>
        <Section>
          <figure>
            <img src={thumbnail1} alt="thumbnail1" />
            <div
              onClick={() => handleThumbnailClick(0, 1)}
              className={selectedThumbnail === 1 ? "selected" : ""}
            ></div>
          </figure>
          <figure>
            <img src={thumbnail2} alt="thumbnail2" />
            <div
              onClick={() => handleThumbnailClick(1, 2)}
              className={selectedThumbnail === 2 ? "selected" : ""}
            ></div>
          </figure>
          <figure>
            <img src={thumbnail3} alt="thumbnail3" />
            <div
              onClick={() => handleThumbnailClick(2, 3)}
              className={selectedThumbnail === 3 ? "selected" : ""}
            ></div>
          </figure>
          <figure>
            <img src={thumbnail4} alt="thumbnail4" />
            <div
              onClick={() => handleThumbnailClick(3, 4)}
              className={selectedThumbnail === 4 ? "selected" : ""}
            ></div>
          </figure>
        </Section>
      </Article>
      <Detail>
        <P>SNEAKER COMPANY</P>
        <h1>
          Fall Limited Edition <br /> Sneakers
        </h1>
        <Para>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Para>
        <div>
          <h2>
            $125.00 <span>50%</span>
          </h2>
          <Discount>$250.00</Discount>
        </div>
        <Choice>
          <Amount>
            <figure>
              <img src={svg2} alt="minus" />
              <div onClick={handleDecrement}></div>
            </figure>
            <div>{count}</div>
            <figure>
              <img src={svg1} alt="plus" />
              <div onClick={handleIncrement}></div>
            </figure>
          </Amount>
          <button onClick={handleClick}>
            <AiOutlineShoppingCart />
            Add to cart
          </button>
        </Choice>
      </Detail>
    </Main>
  );
};

const Main = styled.main`
  min-height: 75vh;
  width: 75%;
  margin: 0 auto;
  display: flex;
  gap: 3.5rem;

  @media screen and (max-width: 855px) {
    flex-flow: column nowrap;
    gap: 1rem;
    width: 100%;
  }
`;

const Article = styled.article`
  margin: 4em 2em 0 1em;

  @media screen and (max-width: 855px) {
    margin: 0;
    position: relative;
  }
`;

const Next = styled.figure`
  display: none;

  @media screen and (max-width: 855px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 85%;
    width: 12%;
    height: 11%;
    display: grid;
    place-content: center;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Previous = styled.figure`
  display: none;

  @media screen and (max-width: 855px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 85%;
    width: 12%;
    height: 11%;
    display: grid;
    place-content: center;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Figure = styled.figure`
  img {
    border-radius: 1rem;
    cursor: pointer;
  }

  @media screen and (max-width: 855px) {
    width: 100%;
    img {
      border-radius: 0;
    }
  }
`;

const Section = styled.section`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.7rem;
  figure {
    position: relative;
    cursor: pointer;
    img {
      border-radius: 0.5rem;
    }
    div {
      position: absolute;
      background-color: white;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.3s;
      &.selected {
        border: 3px solid hsl(26, 100%, 55%);
        border-radius: 0.5rem;
      }
    }
    &:hover div {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 855px) {
    display: none;
  }
`;

const Detail = styled.article`
  margin: 7em 1em 0 1em;
  h1 {
    font-size: clamp(1rem, 2.5vw, 2.5rem);
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 0.5rem;
    font-size: clamp(0.8rem, 2vw, 1.7rem);
    span {
      font-size: clamp(0.65rem, 1vw, 1rem);
      background-color: hsl(25, 100%, 94%);
      color: hsl(26, 100%, 55%);
      padding: 0.2rem;
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 855px) {
    margin: 1em 1em 0 1em;
    h1 {
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.7rem;
      span {
        font-size: 1rem;
      }
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Para = styled.p`
  font-size: clamp(0.65rem, 1vw, 1rem);
  margin-bottom: 1.5rem;
  color: hsl(220, 14%, 75%);
  padding-right: 0.5rem;

  @media screen and (max-width: 855px) {
    font-size: 1rem;
  }
`;

const P = styled.p`
  font-size: clamp(0.65rem, 1vw, 1rem);
  font-weight: 600;
  color: hsl(26, 100%, 55%);
  margin-bottom: 1rem;

  @media screen and (max-width: 855px) {
    font-size: 1rem;
  }
`;

const Discount = styled.p`
  font-size: clamp(0.65rem, 1vw, 1rem);
  text-decoration: line-through;
  color: hsl(220, 14%, 75%);
  margin-bottom: 1rem;

  @media screen and (max-width: 855px) {
    font-size: 1rem;
  }
`;

const Choice = styled.section`
  font-size: clamp(0.65rem, 1vw, 1rem);
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1rem;
  padding: 1rem 0;
  img {
    cursor: pointer;
  }
  button {
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: white;
    border: none;
    background-color: hsl(26, 100%, 55%);
    font-size: inherit;
    transition: all 0.3s;
    &:hover {
      background-color: hsla(
        25.93886462882096,
        100%,
        55.09803921568628%,
        0.553
      );
    }
  }

  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    font-size: 1rem;
  }
`;

const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: hsl(223, 64%, 98%);
  padding: 1rem;
  border-radius: 0.4rem;
  figure {
    position: relative;
    div {
      position: absolute;
      background-color: white;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.3s;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

const Cart = styled.article`
  font-size: clamp(0.65rem, 1vw, 1rem);
  position: absolute;
  width: 30%;
  height: 14rem;
  left: 63.5%;
  top: 13%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2), 0px 20px 30px rgba(0, 0, 0, 0.2);
  background-color: white;
  border: none;
  border-radius: 1rem;
  overflow: auto;
  padding: 1rem;
  p {
    font-weight: 600;
    margin-bottom: 1rem;
    border-bottom: 2px solid hsl(223, 64%, 98%);
    padding-bottom: 1rem;
  }
  button {
    width: 100%;
    height: 3rem;
    background-color: hsl(26, 100%, 55%);
    color: white;
    border-radius: 0.5rem;
    font-size: inherit;
    padding: 1rem;
    display: grid;
    place-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: hsla(
        25.93886462882096,
        100%,
        55.09803921568628%,
        0.553
      );
    }
  }

  @media screen and (max-width: 855px) {
    font-size: 1rem;
    width: 75%;
    height: 40%;
    left: 12.5%;
    top: 5.5rem;
    z-index: 1;
  }
`;

export default Content;
