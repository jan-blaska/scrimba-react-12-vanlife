import reviewsGraph from "/reviews-graph.png"
import { FaStar } from 'react-icons/fa'

export default function Reviews() {
    
    const reviewsArray = [
        {
            id: 1,
            rank: 5,
            name: "Elliot",
            date: "September 20, 2023",
            text: "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
        },
        {
            id: 2,
            rank: 5,
            name: "Sandy",
            date: "August 29, 2023",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
        }
    ]

    const reviewElements = reviewsArray.map(review => {
        const stars = []
        for (let i = 0; i < review.rank; i++) {
            stars.push(<FaStar className="star"/>)
        }
       
        return (
            <div className="reviews-review" key={review.id}>
                {stars}
                <p className="paragraph-bold">{review.name} <span className="grey">{review.date}</span></p>
                <p className="paragraph">{review.text}</p>
            </div>
        )
    })
    
    return (
        <div className="reviews">
            <div className="reviews-header">
                <h2 className="header-36">Your reviews</h2>
                <p className="paragraph grey">Last <span className="bold">30 days</span></p>
            </div>
            <img src={reviewsGraph} alt="reviews graph" />
            <h4 className="header-20">Reviews ({reviewsArray.length})</h4>
            <div>
                {reviewElements}
            </div>
        </div>
    )
}