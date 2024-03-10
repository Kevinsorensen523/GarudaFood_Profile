import React from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";
import "./../styles.css";

const UnduhanPage = () => {
  const imageUrls = [
    "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  ];

  return (
    <IonContent>
      <IonGrid className="mt-20">
        <IonRow className="bg-blue-500 py-10">
          <IonTitle className="text-center text-7xl">DOWNLOADS</IonTitle>
        </IonRow>
        <IonRow>
          {imageUrls.map((imageUrl, index) => (
            <IonCol size="6" key={index}>
              <IonCard className="">
                <IonThumbnail className="mx-auto items-center w-auto h-96 my-4">
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="w-auto h-96 mx-auto"
                  />
                </IonThumbnail>
                <IonCardHeader className="text-center">
                  <IonCardTitle className="text-lg">
                    Title {index + 1}
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default UnduhanPage;
