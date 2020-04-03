import React from "react";
import { Row } from "../../components/ui/Common";
import ImagesRow from "./components/ImagesRow";

const Author = props => {
  return (
    <div>
      <Row align="center" justify="around">
        <h2>Dylan Irlbeck &nbsp; &middot; &nbsp;</h2>
        <h2>Intern &nbsp;</h2>
        <h2>@ &nbsp;</h2>
        <a
          href="https://draftbit.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://avatars1.githubusercontent.com/u/25959307?s=400&v=4"
            style={{
              height: 100,
              width: 100,
              marginTop: 14,
            }}
          />
        </a>
      </Row>
      <ImagesRow
        style={{ opacity: 0.7 }}
        images={[
          "https://avatars0.githubusercontent.com/u/20414525?s=280&v=4",
          "https://camo.githubusercontent.com/66f95b0b524b2fbf9f20b4e3233f9a762f5b293d/687474703a2f2f692e696d6775722e636f6d2f663641576776792e706e67",
          "https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png",
          "https://cdn.auth0.com/blog/react-js/react.png",
        ]}
      />
      <ImagesRow
        style={{ marginTop: 64, opacity: 0.8 }}
        images={[
          "https://yt3.ggpht.com/a-/AAuE7mD8_NfciZ4tmKYDvEAjifelUjvG_wAEP5OwHw=s900-mo-c-c0xffffffff-rj-k-no",
          "https://www.softwareadvice.com/imglib/products/logos-hd/logo_41343_hd.png?v=9c332ab5f78a166f47eafdb48d4b4f12",
          "https://chicagoinnovation.com/wp-content/uploads/2017/05/Xaptum.png",
          "https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/004/005/original/Flexport_logo_1200x627.jpg?1553192591",
        ]}
      />
    </div>
  );
};

export default Author;
