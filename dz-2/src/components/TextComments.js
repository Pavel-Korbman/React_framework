
import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const delComment = (id) => {
        setComments(array => array.filter(element => element.id !== id));
    }

    return comments.map((comment) =>    
        <>  
            <div className="comment">
                <p >
                    <span>{comment.id} </span>
                    {comment.text}</p>
                <button onClick={() => delComment(comment.id)} >Удалить</button>
            </div >
        </>
    );
}

export default CommentsList;