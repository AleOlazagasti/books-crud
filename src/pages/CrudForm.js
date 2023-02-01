import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createBook, updateBook } from "../graphql/mutations";
import Swal from "sweetalert2";
import { ContainerForm } from "../styles/CrudFormStyles";
import { useParams } from "react-router-dom";

const defaultValues = {
  title: "",
  description: "",
  createdDate: "",
  fileUrl: "",
};

const CrudForm = ({
  handleCloseForm,
  updateInfo,
  setUpdateInfo,
  getAllBooks,
}) => {
  const { id } = useParams();
  const [book, setBook] = useState({
    id: id,
    title: "",
    description: "",
    createdDate: "",
    fileUrl: "",
  });

  const bookInfo = {
    id: book.id,
    title: book.title,
    description: book.description,
    createdDate: book.createdDate,
    fileUrl: book.fileUrl,
  };

  useEffect(() => {
    setBook(updateInfo || defaultValues);
  }, [updateInfo]);

  const submit = () => {
    if (updateInfo) {
      handleUpdated();
      showAlertUpdate();
    } else {
      handleSubmited();
      showAlertCreate();
    }
    getAllBooks();
    resetFunction();
  };
  const handleSubmited = async () => {
    const result = await API.graphql(
      graphqlOperation(createBook, { input: book })
    );
  };

  const handleUpdated = async () => {
    const result = await API.graphql(
      graphqlOperation(updateBook, { input: bookInfo })
    );
  };

  const resetFunction = () => {
    setBook(defaultValues);
    handleCloseForm();
    setUpdateInfo();
  };

  const showAlertUpdate = () => {
    Swal.fire({
      title: "Success",
      text: "Updated Book",
      icon: "success",
      iconColor: "black",
      confirmButtonColor: "black",
    });
  };
  const showAlertCreate = () => {
    Swal.fire({
      title: "Success",
      text: "Created Book",
      icon: "success",
      iconColor: "black",
      confirmButtonColor: "black",
    });
  };

  return (
    <ContainerForm onSubmit={submit}>
      <div className="form__close" onClick={resetFunction}>
        x
      </div>
      <h2 className="form__title">{updateInfo ? "Update" : "Create"}</h2>
      <div className="form__input">
        <label htmlFor="title" className="form__item">
          Book's Name:
        </label>
        <input
          name="title"
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          placeholder="Add name's book"
          required
          type="text"
          value={book.title}
        />
      </div>
      <div className="form__input">
        <label htmlFor="description" className="form__item">
          Description:
        </label>
        <input
          name="description"
          onChange={(e) => setBook({ ...book, description: e.target.value })}
          placeholder="Add description"
          required
          type="text"
          value={book.description}
        />
      </div>
      <div className="form__input">
        <label htmlFor="createdDate" className="form__item">
          Publication Date:
        </label>
        <input
          name="createdDate"
          onChange={(e) => setBook({ ...book, createdDate: e.target.value })}
          placeholder="Add publication date"
          required
          type="date"
        />
      </div>
      <div className="form__input">
        <label htmlFor="fileUrl" className="form__item">
          Upload Book:
        </label>
        <input
          name="fileUrl"
          onChange={(e) => setBook({ ...book, fileUrl: e.target.value })}
          required
          type="file"
        />
      </div>
      <div className="form__btn">
        <button className="add-user">{updateInfo ? "Update" : "Create"}</button>
      </div>
    </ContainerForm>
  );
};

export default CrudForm;
