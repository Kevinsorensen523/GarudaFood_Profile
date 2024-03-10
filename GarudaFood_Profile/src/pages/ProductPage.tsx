import React from "react";
import { IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import "./../styles.css";

const ProductPage = () => {
  // Sample data array of images
  const images = [
    { id: 1, src: "https://ionicframework.com/docs/img/demos/thumbnail.svg" },
    { id: 2, src: "https://ionicframework.com/docs/img/demos/thumbnail.svg" },
    { id: 3, src: "https://ionicframework.com/docs/img/demos/thumbnail.svg" },
    { id: 4, src: "https://ionicframework.com/docs/img/demos/thumbnail.svg" },
    { id: 5, src: "https://ionicframework.com/docs/img/demos/thumbnail.svg" },
    { id: 6, src: "https://ionicframework.com/docs/img/demos/thumbnail.svg" },
  ];

  return (
    <IonContent>
      <IonGrid className="mt-20">
        {/* Loop through the images array and create a 2x2 grid */}
        <IonRow>
          {images.slice(0, 2).map((image) => (
            <IonCol size="6" key={image.id}>
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-full h-auto object-cover px-5 py-5"
              />
            </IonCol>
          ))}
        </IonRow>
        <IonRow>
          {images.slice(2, 4).map((image) => (
            <IonCol size="6" key={image.id}>
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-full h-auto object-cover px-5 py-5"
              />
            </IonCol>
          ))}
        </IonRow>
        <IonRow>
          {images.slice(3, 10).map((image) => (
            <IonCol size="6" key={image.id}>
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-full h-auto object-cover px-5 py-5"
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default ProductPage;
