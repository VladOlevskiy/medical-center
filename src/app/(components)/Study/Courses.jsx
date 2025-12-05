import { all } from "axios";
import containerStyle from "../../(styles)/Container.module.scss";
import styles from "../../(styles)/Study/Courses.module.scss";
import Image from "next/image";

const Courses = ({ allCourses }) => {
  return (
    <section className={styles.courses}>
      <div className={containerStyle.container}>
        <h2 className={styles.courses_title}>
          <span className={styles.courses_title_spanFirst}>
            Навчальний центр {""}
          </span>
          <span className={styles.courses_title_spanSecond}>
            краси{" "}
            <span className={styles.courses_title_spanThird}>& здоров’я</span>
          </span>
        </h2>
        <div className={styles.courses_listImgWrapper}>
          <picture>
            <source
              srcSet="/media/pictures/coursesImgMob.jpg"
              width={380}
              height={248}
              media="(max-width: 833px)"
            />
            <source
              srcSet="/media/pictures/coursesImgTablet.jpg"
              width={770}
              height={348}
              media="(max-width: 1439px)"
            />
            <Image
              src="/media/pictures/coursesImgPC.jpg"
              alt="woman and cosmetic procedure"
              width={315}
              height={408}
              className={styles.courses_img}
            />
          </picture>
          <ul className={styles.courses_list} id="section-courses">
            {allCourses &&
              allCourses.map((course) => {
                return (
                  <li key={course.id} className={styles.courses_list_item}>
                    <div className={styles.courses_list_item_wrapperTitle}>
                      <h3 className={styles.courses_list_item_title}>
                        {course.title}
                      </h3>
                    </div>
                    <div>
                      <div className={styles.courses_list_item_textWrapper}>
                        <h4
                          className={styles.courses_list_item_textWrapper_title}
                        >
                          Тривалість:
                        </h4>
                        <p
                          className={styles.courses_list_item_textWrapper_text}
                        >
                          {course.duration}
                        </p>
                      </div>
                      <div className={styles.courses_list_item_textWrapper}>
                        <h4
                          className={styles.courses_list_item_textWrapper_title}
                        >
                          Форма навчання:
                        </h4>
                        <p
                          className={styles.courses_list_item_textWrapper_text}
                        >
                          {course.form}
                        </p>
                      </div>
                      <div className={styles.courses_list_item_textWrapper}>
                        <h4
                          className={styles.courses_list_item_textWrapper_title}
                        >
                          Графік:
                        </h4>
                        <p
                          className={styles.courses_list_item_textWrapper_text}
                        >
                          {course.schedule}
                        </p>
                      </div>
                      <div className={styles.courses_list_item_textWrapper}>
                        <h4
                          className={styles.courses_list_item_textWrapper_title}
                        >
                          Група:
                        </h4>
                        <p
                          className={styles.courses_list_item_textWrapper_text}
                        >
                          {course.group}
                        </p>
                      </div>
                      <div className={styles.courses_list_item_textWrapper}>
                        <h4
                          className={styles.courses_list_item_textWrapper_title}
                        >
                          Вартість:
                        </h4>
                        <p
                          className={styles.courses_list_item_textWrapper_text}
                        >
                          {course.cost}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Courses;
