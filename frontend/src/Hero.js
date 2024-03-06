import React from "react";
import "./Hero.css";
import HorizontalShortDetailCard from "./components/HorizontalShortDetailCard";
import LargeCard from "./components/LargeCard";
import SmallCard from "./components/SmallCard";
import AskForHelp from "./components/AskForHelp";
import Seperator from "./components/Seperator";
import LeftUser from "./components/LeftUser";
import RightUser from "./components/RightUser";
import GoToShop from "./components/GoToShop";

const Hero = () => {
  return (
    <div>
      <div className="horizontalDescription">
        <HorizontalShortDetailCard
          logoImage={<i className="fa-solid fa-spa"></i>}
          heading="Plants Collection"
          para="Any plants for your space"
        />
        <HorizontalShortDetailCard
          logoImage={<i className="fa-solid fa-box"></i>}
          heading="Free Shipping"
          para="Free shipping on order"
        />
        <HorizontalShortDetailCard
          logoImage={<i className="fa-solid fa-sync"></i>}
          heading="Plants Collection"
          para="Any plants for your space"
        />
      </div>
      <div className="largeCards">
        <LargeCard
          images="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg"
          heading="Beautiful Plant Varieties"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit Porro vel"
          link="/"
        />
        <LargeCard
          images="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg"
          heading="Trendy Cactus Varieties"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit Porro vel"
          link="/"
        />
        <LargeCard
          images="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg"
          heading="Gardening Accessories"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit Porro vel"
          link="/"
        />
      </div>
      <div className="featuredPlants">
        <h2 className="featuresHeading">Featured Plants</h2>
        <p className="featuresPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="smallCardItems">
          <SmallCard
            itemLink="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg"
            itemDetailLink="/"
            type="plants"
            name="Boncellensis Secullant"
            stars={0}
            price={34}
            currPrice={34}
            sale="false"
          />
          <SmallCard
            itemLink="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg"
            itemDetailLink="/"
            type="cactus"
            name="cleistocactus"
            stars={0}
            price={28}
            currPrice={25}
            sale="true"
          />
          <SmallCard
            itemLink="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg"
            itemDetailLink="/"
            type="plants"
            name="green soil lotus"
            stars={0}
            price={54}
            currPrice={34}
            sale="true"
          />
          <SmallCard
            itemLink="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg"
            itemDetailLink="/"
            type="plants"
            name="money plant"
            stars={0}
            price={23}
            currPrice={20}
            sale="true"
          />
          <SmallCard
            itemLink="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg"
            itemDetailLink="/"
            type="cactus"
            name="old lady cactus"
            stars={0}
            price={34}
            currPrice={34}
            sale="true"
          />
          <SmallCard
            itemLink="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg"
            itemDetailLink="/"
            type="plants"
            name="pioro quisquam"
            stars={0}
            price={32}
            currPrice={32}
            sale="false"
          />
          <SmallCard
            itemLink="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg"
            itemDetailLink="/"
            type="plants"
            name="rattle snake tail"
            stars={0}
            price={45}
            currPrice={45}
            sale="false"
          />
          <SmallCard
            itemLink="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg"
            itemDetailLink="/"
            type="cactus"
            name="star cactus"
            stars={0}
            price={34}
            currPrice={30}
            sale="true"
          />
        </div>
      </div>
      <div className="askForHelp">
        <AskForHelp />
      </div>
      <Seperator />
      <div className="testimonial">
        <p className="testimonialHeading">Testimonials</p>
        <p className="testimonialPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="allUserTestimonial">
          {/* Alternatively use RightUser and LeftUser for adding new testimonial data*/}
          <div className="leftView">
            <LeftUser
              userImage="/images/user2.jpg"
              name="name"
              jobTitle="Student"
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quam, nihil illo consequatur odio accusantium!"
            />
          </div>
          <div className="rightView">
            <RightUser
              userImage="/images/user1.jpg"
              name="name"
              jobTitle="Student"
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quam, nihil illo consequatur odio accusantium!"
            />
            <RightUser
              userImage="/images/user3.jpg"
              name="name"
              jobTitle="Student"
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quam, nihil illo consequatur odio accusantium!"
            />
          </div>
        </div>
      </div>
      <div className="goToShop">
        <GoToShop />
      </div>
    </div>
  );
};

export default Hero;
