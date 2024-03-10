import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import "./../styles.css";

const NewsPage = () => (
  <>
    <IonContent>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
        className="flex"
      >
        News Contenct
      </div>
    </IonContent>
  </>
);

export default NewsPage;
