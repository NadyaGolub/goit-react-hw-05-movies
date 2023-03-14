import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/api";




export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const {id} = useParams();

    useEffect(() => { 
        getMovieReviews(id).then(setReviews);
    }, [id]);

    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews.map(review => (<li key={review.id}>
                  <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </li>))}
            </ul>
        </div>
    );
}