import React, { useState } from 'react';
import styles from './HowToReachSection.module.css';
import { FaPlane, FaTrain, FaChevronDown, FaChevronUp,FaMap } from 'react-icons/fa';
import { FaMapLocation, FaMapLocationDot } from 'react-icons/fa6';

const HowToReachSection: React.FC = () => {
  const [isJaipurExpanded, setIsJaipurExpanded] = useState(false);
  const [isUdaipurExpanded, setUdaipurExpanded] = useState(false);
  const [isPushkarExpanded, setPushkarExpanded] = useState(false);


  const toggleJaipur = () => {
    setIsJaipurExpanded(!isJaipurExpanded);
  };

  const toggleUdaipur = () => {
    setUdaipurExpanded(!isUdaipurExpanded);
  }

  const tooglePushkar = () => {
    setPushkarExpanded(!isPushkarExpanded);
  }

  return (
    <section className={styles.container} aria-labelledby="how-to-reach-title">
      <h2
        id="how-to-reach-title"
        className="text-4xl font-bold text-center text-red-600 mb-12"
      >
        How to Reach Bijainagar
      </h2>
      <div className={styles.timelineGroup}>
        <div className={styles.timelineContent}>
          <div className={styles.travelOption}>
            <h3 className={styles.heading}>
              <FaPlane aria-hidden="true" /> Nearest Airport:
            </h3>
            <ul className={styles.list}>
              <li>Jaipur: 182 KM (3 hrs 15 mins)</li>
              <li>Udaipur: 223 KM (3 hrs 45 mins)</li>
            </ul>
          </div>
          <div className={styles.travelOption}>
            <h3 className={styles.heading}>
              <FaTrain aria-hidden="true" /> Nearest Railway Station:
            </h3>
            <ul className={styles.list}>
              <li>Ajmer: 68 KM (1 hr)</li>
              <li>Bijainagar: 5.4 KM (12 mins)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* New Section: Things to do around Bijainagar */}
      <h3 className="text-3xl font-bold text-center text-red-600 mb-8">
        Things to do around Bijainagar
      </h3>
      {/* Things to do around Jaipur */}
      <div className={styles.thingsToDoContent}>
        <div className={styles.expandableItem} onClick={toggleJaipur}>
          Jaipur
          {isJaipurExpanded ? (
            <FaChevronUp className={styles.icon} />
          ) : (
            <FaChevronDown className={styles.icon} />
          )}
        </div>
        {isJaipurExpanded && (
          <ol className={styles.list}>
            <li>
              Amber Fort and Palace
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/bZrqEk6AJo77ojZL6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Hawa Mahal (Palace of Winds)
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/CF7DbT7SZup4dkYx5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              City Palace
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/sqVJFgAFLUBAKzsr9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Jantar Mantar
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/sqVJFgAFLUBAKzsr9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Jaigarh Fort
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/AwYKhV2LDELUQ31HA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Nahargarh Fort
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/CnduGcyYSUUzJ1RL9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Jal Mahal (Water Palace)
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/b5AMq2fQpEVxrDnE6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Albert Hall Museum
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/yZf3L41RiPnmPXop9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Birla Mandir (Laxmi Narayan Temple)
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/UyfFpgfzdKa9SdJt5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Galtaji Temple (Monkey Temple)
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/4JLyRAQSyHryVrnQA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
          </ol>
        )}
      </div>
      {/* Things to do around Udaipur */}
      <div className={styles.thingsToDoContent}>
        <div className={styles.expandableItem} onClick={toggleUdaipur}>
          Udaipur
          {isUdaipurExpanded ? (
            <FaChevronUp className={styles.icon} />
          ) : (
            <FaChevronDown className={styles.icon} />
          )}
        </div>
        {isUdaipurExpanded && (
          <ol className={styles.list}>
            <li>
              Sajjangarh Palace (Monsoon Palace)
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/yv5GtGk5oKSUDqbY6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              City Palace
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/1jRPaWdTngGfa2s26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Lake Pichola (Ambrai Ghat/Ghanghor Ghat)
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/Ysr7sYZt9dYDHBQ57"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Jag Mandir (Inside Lake Pichola)
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/96hyg9R64qxPVYdRA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Fateh Sagar Lake
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/2hj6U7JH15WFXXfP8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              {" "}
              Bahubali Hills/ Badi Lake
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/8bK3htkVxZaTArE48"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              {" "}
              Neemach Mata Mandir
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/WuZEjv9yHVYV1Gay9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              {" "}
              Karni Mata Temple
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/uVFGAhrtfJHU9nbL7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Saheliyon Ki Bari
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/Vt9j4GuWE952BGWKA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
          </ol>
        )}
      </div>
      {/* Things to do around Pushkar/Ajmer */}
      <div className={styles.thingsToDoContent}>
        <div className={styles.expandableItem} onClick={tooglePushkar}>
          Pushar/Ajmer
          {isPushkarExpanded ? (
            <FaChevronUp className={styles.icon} />
          ) : (
            <FaChevronDown className={styles.icon} />
          )}
        </div>
        {isPushkarExpanded && (
          <ol className={styles.list}>
            <li>
              Brahma Temple
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/rRJnzqm7MwstKx376"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Pushkar Lake
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/vyn28zBYB8ChqQKX6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Savitri Temple
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/HTgtdodzLnXJvyJD8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
            <li>
              Ajmer Dargah Sharif
              <a
                className={styles.mapLink}
                href="https://maps.app.goo.gl/fxtzEyHvh42iyoiA7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapLocationDot aria-hidden="true" />
              </a>
            </li>
          </ol>
        )}
      </div>
      <div className={styles.thingsToDoContent}>
      <p>
        Chittorgarh Fort
        <a
          className={styles.mapLink}
          href="https://maps.app.goo.gl/RCpredPswZiNi5kn6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapLocationDot aria-hidden="true" />
        </a>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Chittorgarh_fort.JPG/2880px-Chittorgarh_fort.JPG'/>
      </p>
      <p>
        Kumbhalgarh Fort
        <a
          className={styles.mapLink}
          href="https://maps.app.goo.gl/kyTmco1mfdWb2d367"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapLocationDot aria-hidden="true" />
        </a>
        <img src='https://upload.wikimedia.org/wikipedia/commons/1/13/Kumbhalgarh_055.jpg'/>
      </p>
      </div>
    </section>
  );
};

export default HowToReachSection;
