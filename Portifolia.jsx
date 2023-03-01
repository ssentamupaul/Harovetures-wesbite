import { Card, CardImg } from "reactstrap";
import React from "react";
import imageaa from "../img/aa.png";
import imagebb from "../img/bb.png";
import imagecc from "../img/cc.png";
import imagedd from "../img/dd.png";
import imageee from "../img/ee.png";
import imageff from "../img/ff.png";
import imagegg from "../img/gg.png";
import imagehh from "../img/hh.png";
import imageii from "../img/ii.png";
import imagejj from "../img/jj.png";
import imagekk from "../img/kk.png";
import imagell from "../img/ll.png";
import imagemm from "../img/mm.png";
import imagenn from "../img/nn.png";
import imageoo from "../img/oo.png";
import imagepp from "../img/pp.png";
import imageqq from "../img/qq.png";
import imagerr from "../img/rr.png";
import imagess from "../img/ss.png";
import imagett from "../img/tt.png";
import imageuu from "../img/uu.png";
import imagevv from "../img/vv.png";
import imageww from "../img/ww.png";
import imagexx from "../img/xx.png";
// import imageyy from "../img/yy.png"

export default function Portifolia() {
  const images = [
    {
      id: 1,
      image: imageaa,
    },

    {
      id: 2,
      image: imagebb,
    },
    {
      id: 3,
      image: imagecc,
    },
    {
      id: 4,
      image: imagedd,
    },
    {
      id: 5,
      image: imageee,
    },
    {
      id: 6,
      image: imageff,
    },
    {
      id: 7,
      image: imagegg,
    },
    {
      id: 8,
      image: imagehh,
    },
    {
      id: 9,
      image: imageii,
    },
    {
      id: 10,
      image: imagejj,
    },
    {
      id: 11,
      image: imagekk,
    },
    {
      id: 12,
      image: imagell,
    },
    {
      id: 13,
      image: imagemm,
    },
    {
      id: 14,
      image: imagenn,
    },
    {
      id: 15,
      image: imageoo,
    },
    {
      id: 16,
      image: imagepp,
    },
    {
      id: 17,
      image: imageqq,
    },
    {
      id: 18,
      image: imagerr,
    },
    {
      id: 19,
      image: imagess,
    },
    {
      id: 20,
      image: imagett,
    },
    {
      id: 21,
      image: imageuu,
    },
    {
      id: 22,
      image: imagevv,
    },
    {
      id: 23,
      image: imageww,
    },
    {
      id: 24,
      image: imagexx,
    },
  ];
  return (
    <div className="container">
      <p
        className="text-dark text-center pt-5  "
        style={{
          fontSize: "60px",
        }}
      >
        PORTFOLIO
      </p>
      <p className="text-dark text-center" style={{ fontSize: "20px" }}>
        Examples of companies we've founded or made investments in:
      </p>
      <div className=" row  d-flex justify-content-center align-items-center cards-container">
        {images.map((card) => (
          <div className="col-sm-12 col-md-6 col-lg-4 " key={card.id}>
            <Card
              className="border border-0  justify-content-center align-items-center"
              style={{
                width: "100%",
                height: "100px",
                // marginLeft: "20%",
                columnGap: "5px",
              }}
            >
              <CardImg
                className="card-image "
                style={{ width: "80%" }}
                top
                src={card.image}
                alt={card.title}
              ></CardImg>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
