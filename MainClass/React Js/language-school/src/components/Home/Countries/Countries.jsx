import "./Countries.css";
import Japan from "../../../assets/svg/japan.svg";
import France from "../../../assets/svg/france.svg";
import Spain from "../../../assets/svg/spain.svg";
import Mexico from "../../../assets/svg/mexico.svg";
import China from "../../../assets/svg/china.svg";
import Italy from "../../../assets/svg/italy.svg";

const Countries = () => {
  const allCountries = [
    {
      countryImage: `${Japan}`,
      countryName: "Japan",
      countryCourses: 12,
    },
    {
      countryImage: `${France}`,
      countryName: "France",
      countryCourses: 32,
    },
    {
      countryImage: `${Spain}`,
      countryName: "Spain",
      countryCourses: 53,
    },
    {
      countryImage: `${Mexico}`,
      countryName: "Mexico",
      countryCourses: 7,
    },
    {
      countryImage: `${China}`,
      countryName: "China",
      countryCourses: 17,
    },
    {
      countryImage: `${Italy}`,
      countryName: "Italy",
      countryCourses: 27,
    },
  ];

  return (
    <div className="generalContainer">
      <div className="contaryWrapper">
        {allCountries.map((contData, index) => (
          <div key={index} className="countryCard">
            <img src={contData.countryImage} alt="" />
            <h3> {contData.countryName} </h3>
            <p> {contData.countryCourses} Courses</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
