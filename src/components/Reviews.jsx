import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from '../services/api';




function Reviews() {
    const [reviews, setReviews] = useState([]);
    const {id} = useParams();

    useEffect(() => { 
        const abortConroller = new AbortController();
        API.getMovieReviews(id, abortConroller).then(setReviews);

        return () => {
            abortConroller.abort();
        };
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

export default Reviews;