import { React, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Button, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./Navv.css";

const Navv = ({
  movies,
  setMovies,
  inputSearch,
  setInputSearch,
  stars,
  setStars,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    img: "",
    description: "",
    title: "",
    rating: 1,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    console.log(newMovie);
  };
  const handleSave = () => {
    setMovies([...movies, newMovie]);
    setShow(false);
  };

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
    console.log(inputSearch);
  };
  const handleStars = (new_rating) => {
    setStars(new_rating);
    console.log(new_rating);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <input
            type="text"
            placeholder="enter movie title"
            onChange={handleSearch}
          />
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            isHalf={false}
            edit={true}
            onChange={handleStars}
            // value={stars}
          />
        </Container>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body id="interface">
          <label>Movie Title</label>
          <input type="text" onChange={handleChange} name="title" />
          <label>Movie Image</label>
          <input type="text" onChange={handleChange} name="img" />
          <label> Movie Description</label>
          <input type="text" onChange={handleChange} name="description" />
          <label>Movie Rating</label>
          <input type="number" onChange={handleChange} name="rating" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navv;
