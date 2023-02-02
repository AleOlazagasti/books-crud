import React, { useEffect, useState } from 'react'
import { ContainerBooks } from '../styles/BookListStyles'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CrudForm from './CrudForm';
import Loader from '../screens/Loader';
import Book from '../screens/Book'
import { API, graphqlOperation } from 'aws-amplify';
import { listBooks } from '../graphql/queries';
import WeatherApp from '../screens/WeatherApp';

const BooksList = () => {
  const [updateInfo, setUpdateInfo] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [books, setBooks] = useState([])

  const getAllBooks = async () => {
    const result = await API.graphql(graphqlOperation(listBooks))
    setBooks(result.data.listBooks.items)
  }

  useEffect(() => {
    setIsLoading(true)
    getAllBooks()
    setIsLoading(false)
  }, [])

  const handleOpenForm = () => setIsFormOpen(true)
  const handleCloseForm = () => setIsFormOpen(false)

  const NavBar = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: {opacity: 0, y: -100},
    visible: {opacity: 1, y: 0}
  }
  return (
    <ContainerBooks>

    <motion.div initial='hidden' animate='visible' variants={NavBar}>
      <header>
        <div className='nav-container'>
          <nav className='cards__nav'>
            <motion.div className='cards__nav-item' variants={item}>
              <Link to='/' className='cards__nav-btn'>
                Back to start
              </Link>
            </motion.div>
            <div className='cards__nav-item'>
              <h1 className='title'>BooksList</h1>
            </div>
            <motion.div className='cards__nav-item' variants={item}>
              <button onClick={handleOpenForm} className='cards__nav-btn'>Create Book</button>
            </motion.div>
          </nav>
        </div>
      </header>
      <WeatherApp/>
      <div className={isFormOpen ? 'form-container' : 'form-none'}>
        <CrudForm 
          setUpdateInfo={setUpdateInfo}
          updateInfo={updateInfo}
          handleCloseForm={handleCloseForm}
          getAllBooks={getAllBooks}
        />
      </div>
      {
        isLoading && <Loader/>
      }
      <motion.div className='users-container' variants={item}>
        {
          books?.map(_book => (
            <Book
              key={_book.id} 
              book={_book}
              handleOpenForm={handleOpenForm}
              setUpdateInfo={setUpdateInfo}
              getAllBooks={getAllBooks}
            />            
          ))
        }
      </motion.div>

      <motion.div variants={item}>
        <footer className='principal-container__footer'>©️ by Alejandra Olazagasti</footer>
      </motion.div>
    </motion.div> 
    </ContainerBooks>
  )
}

export default BooksList