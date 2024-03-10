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
} from "@ionic/react";
import "./../styles.css";

const ProductPage = () => {
  const imageUrls = [
    "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  ];

  return (
    <IonContent>
      <IonGrid className="mt-20">
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
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default ProductPage;
