import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonThumbnail,
} from "@ionic/react";
import "./../styles.css";
import "./Layout.css";

const NewsItem = ({ date, title, content, imageUrl }) => (
  <IonItem className="px-0 py-4 news-ion-item">
    <IonThumbnail slot="start" className="w-40 h-48">
      <img alt="Thumbnail" src={imageUrl} className="w-full h-full" />
    </IonThumbnail>
    <IonLabel>
      <IonTitle className="py-2">{date}</IonTitle>
      <IonTitle className="font-bold text-amber-200">{title}</IonTitle>
      <IonLabel className="py-2 px-6">{content}</IonLabel>
    </IonLabel>
  </IonItem>
);

const NewsPage = ({ isDarkMode }) => (
  <>
    <IonContent>
      <IonCard className="py-16">
        <IonCardContent>
          <IonList>
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
            <NewsItem
              date="Senin, 04 Maret 2024"
              title="Lorem ipsum dolor sit amet"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
              imageUrl="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            />
          </IonList>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </>
);

export default NewsPage;
