import {
  Dropdown,
  Meta,
  ProgressBar,
  ProgressRing,
  RatingEmoji,
  RatingStar,
  Toggle,
} from "@components";
import styles from "@styles/Home.module.scss";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [progressBar, setProgressBar] = useState(2);
  const [progressRing, setProgressRing] = useState(100);
  const [ratingEmoji, setRatingEmoji] = useState(3);
  const [ratingStar, setRatingStar] = useState(3);
  const [toggle, setToggle] = useState(true);

  return (
    <div className={styles.root}>
      <Meta
        title="Component Library"
        description="A small collection of simple React components."
      />
      <div className={styles.container}>
        <div>
          <Dropdown list={["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]} />
        </div>
        <div>
          <ProgressBar
            progress={progressBar}
            steps={["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]}
          />
          <input
            type="number"
            min={0}
            max={5}
            name="progress-bar"
            id="progress-bar"
            value={progressBar}
            onChange={(event) => setProgressBar(parseInt(event.target.value))}
          />
        </div>
        <div>
          <ProgressRing
            color="dodgerblue"
            progress={progressRing}
            radius={16}
            stroke={4}
          />
          <input
            type="number"
            min={0}
            max={100}
            name="progress-ring"
            id="progress-ring"
            value={progressRing}
            onChange={(event) => setProgressRing(parseInt(event.target.value))}
          />
        </div>
        <div>
          <RatingEmoji
            onRating={(rating) => setRatingEmoji(rating)}
            rating={ratingEmoji}
          />
          <input
            type="number"
            min={1}
            max={5}
            name="rating-emoji"
            id="rating-emoji"
            value={ratingEmoji}
            onChange={(event) => setRatingEmoji(parseInt(event.target.value))}
          />
        </div>
        <div>
          <RatingStar
            onRating={(rating) => setRatingStar(rating)}
            rating={ratingStar}
          />
          <input
            type="number"
            min={1}
            max={5}
            name="rating-star"
            id="rating-star"
            value={ratingStar}
            onChange={(event) => setRatingStar(parseInt(event.target.value))}
          />
        </div>
        <div>
          <Toggle boolean={toggle} onToggle={(boolean) => setToggle(boolean)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
