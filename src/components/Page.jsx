import styled from "styled-components";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";

const Page = ({
  images,
  currentIndex,
  selectedThumbnail,
  handleThumbnailClick,
  handleNext,
  handlePrevious,
  selectView,
  setSelectView,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
}) => {
  return (
    <Container style={{ display: selectView === true ? "block" : "none" }}>
      <Section>
        <h1 onClick={() => setSelectView(!selectView)}>X</h1>
        <Next onClick={handleNext}>
          <img src={next} alt="next" />
        </Next>
        <Previous onClick={handlePrevious}>
          <img src={previous} alt="previous" />
        </Previous>
        <Figure>
          <img src={images[currentIndex]} alt="image" />
        </Figure>
        <Article>
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
        </Article>
      </Section>
    </Container>
  );
};

const Container = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.752);
`;

const Section = styled.section`
  width: 55%;
  margin: 5rem auto;
  display: grid;
  position: relative;
  h1 {
    margin-left: 75%;
    font-size: clamp(1rem, 2.56vh, 1.6rem);
    color: white;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: hsl(25, 100%, 94%);
    }
  }
  @media screen and (max-width: 855px) {
    width: 100%;
  }
`;

const Figure = styled.figure`
  width: 55%;
  justify-self: center;
  position: relative;
  img {
    border-radius: 1rem;
    cursor: pointer;
  }
`;

const Next = styled.figure`
  position: absolute;
  top: 50%;
  right: 18.5%;
  width: 7%;
  height: 9%;
  display: grid;
  place-content: center;
  background-color: white;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;

const Previous = styled.figure`
  position: absolute;
  top: 50%;
  left: 18.5%;
  width: 7%;
  height: 9%;
  display: grid;
  place-content: center;
  background-color: white;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;

const Article = styled.article`
  justify-self: center;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
        border: 2px solid hsl(26, 100%, 55%);
        border-radius: 0.5rem;
      }
    }
    &:hover div {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 855px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export default Page;
