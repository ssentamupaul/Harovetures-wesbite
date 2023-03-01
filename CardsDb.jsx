import { Card, CardImg, CardTitle, CardBody } from "reactstrap"; // import bootstrap components

import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import image5 from "../img/image5.png";
import image6 from "../img/image6.png";
import image7 from "../img/image7.png";
import image8 from "../img/image8.png";
import image9 from "../img/image9.png";

const cards = [
  {
    id: 1,
    image: image1,
    title: "EARLY STAGE TECH",
  },
  {
    id: 2,
    image: image2,
    title: "MARKETPLACES",
  },
  {
    id: 3,
    image: image3,
    title: "SAAS",
  },
  {
    id: 4,
    image: image4,
    title: "CRYPTO & BLOCKCHAIN",
  },
  {
    id: 5,
    image: image5,
    title: "AI & MACHINE LEARNING",
  },
  {
    id: 6,
    image: image6,
    title: "MOBILE APPS",
  },
  {
    id: 7,
    image: image7,
    title: "BC BASED COMPANIES",
  },
  {
    id: 8,
    image: image8,
    title: "SOCIAL & LOCAL",
  },
  {
    id: 9,
    image: image9,
    title: "OTHER TECH FUNDS",
  },
];

export default function CardsDb() {
  return (
    <div className="container">
      <div className="row  align-items-center">
        {cards.map((card) => (
          <div className="col-sm-6 col-md-6 col-lg-4 " key={card.id}>
            <Card className="border border-0" style={{ width: "100%" }}>
              <CardImg
                top
                width="100%"
                src={card.image}
                alt={card.title}
                style={{
                  width: "30%",
                  marginLeft: " 35%",
                }}
                
              ></CardImg>

              <CardBody>
                <CardTitle tag="h5" style={{ width: "100%" }}>
                  {card.title}
                </CardTitle>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
