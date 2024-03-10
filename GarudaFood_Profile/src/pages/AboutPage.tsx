import React from "react";
import {
  IonContent,
  IonGrid,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonList,
  IonCol,
  IonRow,
  IonButton,
  IonLabel,
} from "@ionic/react";
import "./../styles.css";

const AboutPage = () => {
  return (
    <>
      <IonContent>
        <IonGrid className="mt-32">
          <IonTitle className="text-5xl text-center text-amber-200">
            GARUDAFOODS'S HISTORY
          </IonTitle>
          <IonRow className="px-20">
            <IonLabel className="text-xl mt-10">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </IonLabel>
            <IonCol>
              <img
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                alt="Foto"
                className="py-20 mx-auto"
              />
              <IonRow>
                <img
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                  alt="Foto"
                  className="py-10 mx-auto"
                />
                <img
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                  alt="Foto"
                  className="py-10 mx-auto"
                />
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default AboutPage;
