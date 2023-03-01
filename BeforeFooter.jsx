// import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import backgroundImage from "../img/lake.png";
export default function BeforeFooter() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height: "80vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    backgroundAttachment: "fixed",
    //     alignItems: "top",
    padding: "0px",
  };

  //   const cards = [
  //     {
  //       id: 1,
  //       No: "15",
  //       title: "YEARS",
  //       description: "EXPERIENCE",
  //     },
  //     {
  //       id: 2,
  //       No: "33",
  //       title: "CURRENT",
  //       description: "INVESTIMENT",
  //     },
  //     {
  //       id: 3,
  //       No: "6",
  //       title: "SPECIALIST",
  //       description: "INDUSTRIES",
  //     },
  //     {
  //       id: 1,
  //       No: "4",
  //       title: "EXPRIENCED",
  //       description: "PARTNERS",
  //     },
  //   ];

  return (
    <div
      className="row  d-flex justify-content-center align-items-center pb-5 container-fluid "
      style={styles}
    >
      <div className="container-fuid d-flex bg-success">
        <ul>
          <li className="nav-item">15</li>
          <li>YEARS</li>
          <li>EXPERIENCE</li>
        </ul>

        <ul>
          <li>33</li>
          <li>CURRENT</li>
          <li>INVISTMENT</li>
        </ul>

        <ul>
          <li>6</li>
          <li>SPECIALIST</li>
          <li>INDUSTRIES</li>
        </ul>
        <ul>
          <li>4</li>
          <li>EXPERIENUCE</li>
          <li>PARTNERS</li>
        </ul>
      </div>
    </div>
  );
}

// {
/* {cards.map((card) => (
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
      ))} */
// }
