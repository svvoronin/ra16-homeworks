import Banner from "../Components/Banner/Banner";
import NewsBlock from "../Components/NewsBlock/NewsBlock";
import Search from "../Components/Search/Search";
import OtherBlock from "../Components/OtherBlock/OtherBlock";
import OtherBlockContent from "../Components/OtherBlockContent/OtherBlockContent";

export const WebPage = () => {
  return (
    <>
      <NewsBlock />
      <Banner
        urlBanner={"https://google.com/"}
        urlImage={
          "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
        }
      />
      <Search />
      <OtherBlock>
        <OtherBlockContent title={"New Offer 1"}></OtherBlockContent>
        <OtherBlockContent title={"New Offer 2"}></OtherBlockContent>
        <OtherBlockContent title={"New Offer 3"}></OtherBlockContent>
      </OtherBlock>
    </>
  );
};

export default WebPage;
