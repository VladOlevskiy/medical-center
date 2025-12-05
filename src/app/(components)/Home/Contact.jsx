"use client";

import React from "react";
import * as yup from "yup";
import Image from "next/image";
import styles from "../../(styles)/Home/Contact.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styleContainer from "../../(styles)/Container.module.scss";
import { ButtonWithArrow } from "../UI/ButtonWithArrow";
import { motion } from "framer-motion";

yup.addMethod(yup.string, "numeric", function () {
  return this.matches(/^\d+$/, "The field should have digits only");
});

const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
  surname: yup.string().min(3).max(20).required(),
  number: yup.string().numeric().min(10).max(20).required(),
  email: yup.string().email("Invalid email").max(40).required("Required"),
  message: yup.string().min(10).max(500).required(),
});

const Contact = () => {
  const handleSubmit = async (values, { resetForm }) => {
    resetForm();

    await fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({
        name: `${values.name}`,
        surname: `${values.surname}`,
        number: `${values.number}`,
        email: `${values.email}`,
        message: `${values.message}`,
      }),
    });
  };
  return (
    <section className={styles.contactSection} id="section-contact">
      <div className={`${styleContainer.container} ${styles.wrapperPosition}`}>
        <img
          className={`${styles.contactSection_bg} ${styles.contactSection_bg_mob}`}
          src="./media/backgrounds/bgHeroMob.png"
          alt=""
        />
        <img
          className={`${styles.contactSection_bg} ${styles.contactSection_bg_tablet}`}
          src="./media/backgrounds/bgHeroTab.png"
          alt=""
        />
        <img
          className={`${styles.contactSection_bg} ${styles.contactSection_bg_pc}`}
          src="./media/backgrounds/bgHeroPC.png"
          alt=""
        />
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.contactSection_title}
        >
          <span className={styles.contactSection_title_aa}>
            Обирайте нас{" "}
            <span className={styles.contactSection_title_spanOne}>
              {" "}
              і отримайте
            </span>
          </span>
          <span className={styles.contactSection_title_bb}>
            {/* <span style={{display:'inline-block'}}></span> */}
            <span className={styles.contactSection_title_spanTwo}>
              найкращі
            </span>{" "}
            <span className={styles.contactSection_title_spanThree_inner}>
              результати
            </span>{" "}
          </span>

          <span className={styles.contactSection_title_cc}>
            {" "}
            для{" "}
            <span className={styles.contactSection_title_spanFour}>
              вашої краси та{" "}
            </span>{" "}
          </span>

          <span className={styles.contactSection_title_spanFive}>
            самопочуття
          </span>
        </motion.h2>
        <div className={styles.contactSection_contactWrapper}>
          <motion.picture
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/media/pictures/contactImgPC.jpg"
              alt="woman and cosmetic procedure"
              width={390}
              height={368}
              className={styles.contactSection_imgPC}
            />
          </motion.picture>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Formik
              initialValues={{
                name: "",
                surname: "",
                number: "",
                email: "",
                message: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              <Form className={styles.form}>
                <div className={styles.form_imgWrapper}>
                  <motion.picture
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <source
                      srcSet="/media/pictures/contactImgMob.jpg"
                      width={182}
                      height={190}
                      media="(max-width: 833px)"
                    />
                    <source
                      srcSet="/media/pictures/contactImgTablet.jpg"
                      width={770}
                      height={348}
                      media="(max-width: 1439px)"
                    />
                    <Image
                      src="/media/pictures/contactImgPC.jpg"
                      alt="woman and cosmetic procedure"
                      width={390}
                      height={368}
                      className={styles.contactSection_img}
                    />
                  </motion.picture>
                  <div className={styles.form_inputNamesWrapper}>
                    <div
                      className={
                        styles.form_inputNamesWrapper_innerWrapperNames
                      }
                      // custom={3}
                      //   variants={TextAnimationContactFormSection}
                    >
                      <Field
                        type="text"
                        name="name"
                        required="required"
                        className={
                          styles.form_inputNamesWrapper_innerWrapperNames_nameInput
                        }
                      />

                      <span className={styles.placeHolder}>Ім'я</span>
                      <div className={styles.errorWrapper}>
                        <ErrorMessage
                          name="name"
                          render={(msg) =>
                            msg === "name must be at most 20 characters" ? (
                              <p className={styles.error}>
                                введіть коротше ім'я
                              </p>
                            ) : (
                              <></>
                            )
                          }
                        />
                        <ErrorMessage
                          name="name"
                          render={(msg) =>
                            msg === "name must be at least 3 characters" ? (
                              <p className={styles.error}>
                                введіть більше 3 літер
                              </p>
                            ) : (
                              <></>
                            )
                          }
                        />
                        <ErrorMessage
                          name="name"
                          render={(msg) =>
                            msg === "name is a required field" ? (
                              <p className={styles.error}>обовязкове поле</p>
                            ) : (
                              <></>
                            )
                          }
                        />
                      </div>
                    </div>

                    <div
                      className={
                        styles.form_inputNamesWrapper_innerWrapperNames
                      }
                    >
                      <Field
                        type="text"
                        name="surname"
                        required="required"
                        className={
                          styles.form_inputNamesWrapper_innerWrapperNames_nameInput
                        }
                      />
                      <span className={styles.placeHolder}>Прізвище</span>
                      <div className={styles.errorWrapper}>
                        <ErrorMessage
                          name="surname"
                          render={(msg) =>
                            msg === "surname must be at most 20 characters" ? (
                              <p className={styles.error}>
                                введіть коротше прізвище
                              </p>
                            ) : (
                              <></>
                            )
                          }
                        />
                        <ErrorMessage
                          name="surname"
                          render={(msg) =>
                            msg === "surname must be at least 3 characters" ? (
                              <p className={styles.error}>
                                введіть більше 3 літер
                              </p>
                            ) : (
                              <></>
                            )
                          }
                        />
                        <ErrorMessage
                          name="surname"
                          render={(msg) =>
                            msg === "surname is a required field" ? (
                              <p className={styles.error}>обовязкове поле</p>
                            ) : (
                              <></>
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.wrapperTelMail}>
                  <div className={styles.boxInputEmailPhone}>
                    <Field
                      type="tel"
                      name="number"
                      required="required"
                      className={styles.telField}
                    />

                    <span className={styles.placeHolder}>Номер телефону</span>
                    <div className={styles.errorWrapper}>
                      <ErrorMessage
                        name="number"
                        render={(msg) =>
                          msg === "number must be at most 20 characters" ? (
                            <p className={styles.error}>
                              введіть коротший номер
                            </p>
                          ) : (
                            <></>
                          )
                        }
                      />
                      <ErrorMessage
                        name="number"
                        render={(msg) =>
                          msg === "number must be at least 10 characters" ? (
                            <p className={styles.error}>
                              введіть хоча би 10 символів
                            </p>
                          ) : (
                            <></>
                          )
                        }
                      />
                      <ErrorMessage
                        name="number"
                        render={(msg) =>
                          msg === "number is a required field" ? (
                            <p className={styles.error}>обовязкове поле</p>
                          ) : (
                            <></>
                          )
                        }
                      />
                      <ErrorMessage
                        name="number"
                        render={(msg) =>
                          msg === "The field should have digits only" ? (
                            <p className={styles.error}>
                              номер має складатися тільки з цифр
                            </p>
                          ) : (
                            <></>
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className={styles.boxInputEmailPhone}>
                    <Field
                      type="text"
                      name="email"
                      required="required"
                      className={styles.emailField}
                    />
                    <span className={styles.placeHolder}>Електронна пошта</span>
                    <div className={styles.errorWrapper}>
                      <ErrorMessage
                        name="email"
                        render={(msg) =>
                          msg === "email must be at most 40 characters" ? (
                            <p className={styles.error}>
                              введіть коротшу пошту
                            </p>
                          ) : (
                            <></>
                          )
                        }
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) =>
                          msg === "Required" ? (
                            <p className={styles.error}>обовязкове поле</p>
                          ) : (
                            <></>
                          )
                        }
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) =>
                          msg === "Invalid email" ? (
                            <p className={styles.error}>
                              введіть валідну пошту
                            </p>
                          ) : (
                            <></>
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.boxInputMessage}>
                  <Field
                    type="text"
                    name="message"
                    as="textarea"
                    required="required"
                    style={{ resize: "none" }}
                    className={styles.messageField}
                  />
                  <span className={styles.placeHolder}>Коментар</span>
                  <div className={styles.errorWrapper}>
                    <ErrorMessage
                      name="message"
                      render={(msg) =>
                        msg === "message must be at most 500 characters" ? (
                          <p className={styles.error}>
                            введіть коротший коментар
                          </p>
                        ) : (
                          <></>
                        )
                      }
                    />
                    <ErrorMessage
                      name="message"
                      render={(msg) =>
                        msg === "message must be at least 10 characters" ? (
                          <p className={styles.error}>
                            введіть хоча би 10 символів
                          </p>
                        ) : (
                          <></>
                        )
                      }
                    />
                    <ErrorMessage
                      name="message"
                      render={(msg) =>
                        msg === "message is a required field" ? (
                          <p className={styles.error}>обовязкове поле</p>
                        ) : (
                          <></>
                        )
                      }
                    />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ButtonWithArrow
                    text={"Проконсультуватися"}
                    type="submit"
                    classNameBtn={`${styles.btn} ${styles.buttonContact}`}
                    classNameArrow={`${styles.arrow} ${styles.arrowContact}`}
                  />
                </motion.div>
              </Form>
            </Formik>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
