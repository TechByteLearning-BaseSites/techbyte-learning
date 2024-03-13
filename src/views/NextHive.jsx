import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button";
import price_point from "../assets/images/price_point.jpg"
import calendar from "../assets/images/calendar.jpg"

const NextHive = () => {

  const web_dev_date = "Mid-June 2024"
  const game_dev_date = "Mid-June 2024"

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Next Hive - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Next Cohorts
            </h2>
            <p>
              <span>O</span>ur program is designed to equip you with the knowledge and skills needed to thrive in the fast-paced world of web and game development. Whether you're a beginner looking to break into the industry or an experienced programmer seeking to expand your skillset, our courses have something for everyone. Our next available cohort, affectionately known as a "hive," are:
            </p>
            <h5>Web Development Start Date: { web_dev_date }</h5>
            <h5>2D Game Development Start Date: { game_dev_date }</h5>
          </div>
          <div className="box_right_img">
            <img src={ calendar } alt="Calandar" />
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <img src="https://www.weikfitness.com/wp-content/uploads/2023/01/lowering-your-price.jpg" alt="price point" />
          </div>
          <div className="box_right_text">
            <h2>
              What Sets TechByte Apart?
            </h2>
            <p>
              <span>O</span>ur dedication to affordability. We understand that investing in education can be a significant financial commitment. We believe that high-quality education should be accessible to all, and we're proud to offer competitive pricing without compromising the curriculum's integrity.
            </p>
          </div>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Apply Today
            </h2>
            <p>
              <span>W</span>hether you're passionate about creating stunning user interfaces, diving into data-driven backend development, building engaging gameplay experiences, TechByte Learning's development programs will be your gateway to a thriving career in the tech industry.
            </p>
            <p>
              Join us at TechByte Learning and let's build a brighter future together! Click To see available courses.
            </p>
          </div>
          <div className="box_right_text">
            <Button to="/services" text="See Openings" />
          </div>
        </div>
        {/* END SECTION 3 */}
        </div>
    </main>
  );
};

export default NextHive;