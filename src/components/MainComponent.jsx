import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ColorExtractor } from "react-color-extractor";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Button } from "./styles/Button.styled";
import { MainContainer } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Input } from "./styles/Input.styled";
import action from "../actions";
import { Image } from "./styles/Image.styled";
const MainComponent = (props) => {
  const [colors, setColors] = useState([]);
  const { image, loader } = useSelector(
    ({ UnsplashReducer }) => UnsplashReducer
  );

  const getImage = () => {
    action.getImages(InputRef.current.value);
  };
  let InputRef = useRef(null);
  return (
    <MainContainer>
      <Flex alignItem="space-between">
        <div>
          <Input ref={InputRef} placeholder="Keyword" />
        </div>
        <div>
          <Button onClick={() => getImage()} color={"#fff"} bg={"#f6f"}>
            Search
          </Button>
          <ColorExtractor
            src={image?.urls?.full}
            getColors={(colors) => setColors(colors)}
          />
        </div>
      </Flex>
      {loader ? (
        <h6>Loading....</h6>
      ) : (
        <div>
          <Image src={image?.urls?.full} />
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          >
            <Masonry>
              {colors.map((item, id) => (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    backgroundColor: item,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 200,
                  }}
                >
                  <h6>{item}</h6>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </MainContainer>
  );
};

export default MainComponent;
