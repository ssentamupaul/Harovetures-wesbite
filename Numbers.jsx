// import React from "react";
// export default function Numbers() {
//   const number = {
//     // id: 1,
//     // No: "",
//     // title: "MARKET",
//     description:
//       "We examine the market size, the need for your offerings, and your positioning on the competitive landscape.",

//     // id: 1,
//     // No: "",
//     // title: "PRODUCT",
//     description:
//       "We want to see a good product-market fit, customer discovery, and to understand your product roadmap.",

//     // id: 1,
//     // No: "",
//     // title: "TEAM",
//     description:
//       "We listen for expertise, determination, and drive. We want a team who is ready to take over the world.",

//     // id: 1,
//     // No: "",
//     // title: "TRACTION",
//     description:
//       "We need a measure for early customers to understand your projections and viability of your business.",

//     // id: 1,
//     // No: "",
//     // title: "SECRET SAU",
//     description:
//       "Some things can't be said in words or recorded in a due diligence list, but simply stands out from the crowd. ",
//   };
//   return <div>{number}</div>;
// }
import { Card, CardTitle, CardBody, CardText } from "reactstrap"; // import bootstrap components

const cards = [
  {
    id: 1,
    No: "01",
    title: "MARKET",
    description:
      "We want to see a good product-market fit, customer discovery, and to understand your product roadmap.",
  },
  {
    id: 2,
    No: "02",
    title: "MARKETPLACES",
    description:
      "We want to see a good product-market fit, customer discovery, and to understand your product roadmap.",
  },
  {
    id: 3,
    No: "03",
    title: "PRODUCT",
    description:
      "We need a measure for early customers to understand your projections and viability of your business.",
  },
  {
    id: 4,
    No: "04",
    description:
      "Some things can't be said in words or recorded in a due diligence list, but simply stands out from the crowd. ",
    title: "TEAM",
  },
  {
    id: 5,
    No: "05",
    title: "SECRET SAU",
    description:
      "We need a measure for early customers to understand your projections and viability of your business.",
  },
];

export default function Numbers() {
  const styles = {
    border: "5px",
    borderTop: " 5px solid #ffffff",
    margin: "1px 0",
  };
  // const style = {
  //   width: "100%",
  //   backGroundColor: "rgba(45, 159, 247, 0.99)",
  // };
  return (
    <div className="row  d-flex justify-content-center align-items-center pb-5 ">
      {cards.map((card) => (
        <div className="col-sm-6 col-md-6 col-lg-2 " key={card.id}>
          <Card className="border border-0 " style={{ width: "100%" }}>
            <CardBody className="numberz">
              <CardTitle style={{ fontSize: "100px", fontWeight: "bold" }}>
                {card.No}
              </CardTitle>
              <CardTitle tag="h5">{card.title}</CardTitle>
              <hr style={styles} />
              <CardText>{card.description}</CardText>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
