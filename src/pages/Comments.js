import moment from "moment";
import React, { useState } from "react";
import { Col, Container, Row, Form, ListGroup, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Header from "../partials/content/Header";

const CommentSchema = Yup.object().shape({
  name: Yup.string().required("Please provide a valid name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please provide a valid email"),
  comment: Yup.string().required("Please provide a valid comment"),
});

const createRandomDate = () =>
  moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000)));

const findLargestNumber = (data) =>
  Math.max.apply(
    null,
    data.map((entity) => entity.id)
  );

const dummyComments = [
  {
    id: 1,
    name: "ETESY",
    email: "etesy@gmail.com",
    comment: "Great work, but, toasting interface not smooth.",
    date: createRandomDate(),
  },
  {
    id: 2,
    name: "Anton Matusevych",
    email: "anton_matusevych@gmail.com",
    comment: "Nice shot, please check my portfolio",
    date: createRandomDate(),
  },
  {
    id: 3,
    name: "Marta Skowron",
    email: "marta_skowron@gmail.com",
    comment: `Oh my...Everything has been pointed out perfectly on comments below 🙏
What bothers me the most is the direction that Dribble is heading. I feel that what we, designers, love the most about your site is it's
✨simplicity ✨
You can just play with some simple ideas, don't have to do a perfect, 10 slides presentation, you can quickly share some crazy designs. With bigger shots it's going more into presentation-like site, that we already have plenty of.
Hope we won't lose Dribbble that we all liked so much 🏀💕`,
    date: createRandomDate(),
  },
];

const Comments = () => {
  const [comments, setComments] = useState(dummyComments);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema: CommentSchema,
    onSubmit: (values) => {
      addComment(values);
    },
  });

  /**
   * Add new comment
   */
  const addComment = (values) =>
    setComments((prevState) => [
      ...prevState,
      {
        id: findLargestNumber(prevState) + 1,
        name: values.name,
        email: values.email,
        comment: values.comment,
        date: moment(new Date()),
      },
    ]);

  /**
   * Delete an exist comment
   */
  const deleteComment = (id) =>
    setComments((prevState) => prevState.filter((entity) => entity.id !== id));

  return (
    <>
      <Header />
      <div className="section">
        <div className="section-title">Share Your Thoughts</div>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col sm={6} md={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="text-light">Name</Form.Label>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        className={
                          formik.errors.name &&
                          formik.touched.name &&
                          "is-invalid"
                        }
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />

                      {formik.errors.name && formik.touched.name ? (
                        <div className="invalid-feedback d-block">
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="text-light">
                        Email address
                      </Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        className={
                          formik.errors.email &&
                          formik.touched.email &&
                          "is-invalid"
                        }
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.errors.name && formik.touched.name ? (
                        <div className="invalid-feedback d-block">
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="exampleForm.ControlInput1" className="">
                  <Form.Label className="text-light ">Comment</Form.Label>
                  <Form.Control
                    name="comment"
                    as="textarea"
                    rows={3}
                    className={
                      formik.errors.comment &&
                      formik.touched.comment &&
                      "is-invalid"
                    }
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="invalid-feedback d-block">
                      {formik.errors.name}
                    </div>
                  ) : null}
                  <Button type="submit" className="mt-7 px-10 bg-orange">
                    Share
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup variant="flush" className="mt-10">
                {comments
                  .sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date);
                  })
                  .map((entity, index) => (
                    <ListGroup.Item
                      key={index}
                      as="div"
                      className="comment bg-light d-flex"
                    >
                      <img
                        src={`https://picsum.photos/1024/768?random=${index}`}
                        className="comment-img"
                        alt=""
                      />
                      <div className="text-dark">
                        <div className="font-weight-bold mb-3">
                          {entity.name}
                        </div>
                        <div className="mb-3">{entity.comment}</div>
                        <div className="d-flex text-sm text-secondary">
                          <div className="d-flex align-items-center">
                            <div className="">
                              {moment(entity.date).fromNow()}
                            </div>
                            <Button
                              variant="link"
                              className="p-0"
                              onClick={() => deleteComment(entity.id)}
                            >
                              <DeleteForeverIcon className="" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Comments;
