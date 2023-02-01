import { API, graphqlOperation } from 'aws-amplify'
import Swal from 'sweetalert2'
import { deleteBook} from '../graphql/mutations'
import { ContainerBook } from '../styles/BookStyle'

const Book = ({book, handleOpenForm, setUpdateInfo, getAllBooks}) => {
	const bookId = {
		id: book.id,
	};

	const deletedBook = async () => {
		showDeleteSuccess()
		const result = await API.graphql(graphqlOperation(deleteBook, {input: bookId}))
		console.log(result)
		getAllBooks()
	}
	
	const getInfoUpdate = () => {
    setUpdateInfo(book)
    handleOpenForm()
  }

  const showDeleteSuccess = () => {
    Swal.fire({
      title: 'Success',
      text: 'Deleted Book',
      icon: 'success',
      iconColor: 'black',
      confirmButtonColor: 'black'
    })
  }
  return (
		
    <ContainerBook>
				<ul className="align">
					<li>
						<figure className='book'>

							{/* Front  */}

							<ul className='hardcover_front'>
								<li>
									<div className="coverDesign blue">
										<h1>{book.title}</h1>
									</div>
								</li>
								<li></li>
							</ul>

							{/* Pages  */}

							<ul className='page'>
								<li></li>
								<li>
									<a className="btn" href="#">Download</a>
								</li>
								<li></li>
								<li></li>
								<li></li>
							</ul>

							{/* Back  */}

							<ul className='hardcover_back'>
								<li></li>
								<li></li>
							</ul>
							<ul className='book_spine'>
								<li></li>
								<li></li>
							</ul>
							<figcaption>
								<h1>Title: {book.title}</h1>
								<span>Description: {book.description}</span>
								<p>Created Date: {book.createdDate}</p>
								<div className='card__buttons'>
									<button 
										className='card__buttons__book' 
										onClick={() => deletedBook()}
									>Delete</button>
									<button 
										className='card__buttons__book' 
										onClick={() => getInfoUpdate()}
									>Update Info</button>
								</div>
							</figcaption>
						</figure>
					</li>
				</ul>
			</ContainerBook>
  )
}

export default Book