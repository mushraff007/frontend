import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
    const [likes, setLikes] = useState(0); // State for likes
    const [comment, setComment] = useState(""); // State for new comment input
    const [comments, setComments] = useState([]); // State for list of comments
    const [showComments, setShowComments] = useState(false); // State to toggle comments visibility
    const [showCommentBox, setShowCommentBox] = useState(false); // State to toggle comment box visibility

    const navigate = useNavigate();

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment("");
            setShowCommentBox(false); // Hide comment box after submitting
        }
    };

    const toggleCommentsVisibility = () => {
        setShowComments(!showComments);
    };

    const toggleCommentBoxVisibility = () => {
        setShowCommentBox(!showCommentBox);
    };

    const handleDetailsClick = () => {
        navigate(`/event-details/${item.id}`);
    };

    const cardStyle = {
        width: '300px',
        height: '450px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const imageContainerStyle = {
        height: '200px',
        width: '100%',
        overflow: 'hidden',
    };

    const imageStyle = {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    };

    return (
        <div className="mt-4 my-3 p-3">
            <div className="card bg-white shadow-xl hover:scale-105 duration-200" style={cardStyle}>
                <figure style={imageContainerStyle}>
                    <img src={item.image} alt={item.name} style={imageStyle} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-gray-900">
                        {item.name}
                        <div className="badge badge-secondary"></div>
                    </h2>
                    <p className="text-gray-800">{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline"></div>
                        <div className="flex space-x-2">
                            <button 
                                onClick={handleDetailsClick}
                                className="cursor-pointer px-2 py-1 rounded-full border-[2px] border-gray-300 hover:bg-pink-500 hover:text-white duration-200 text-gray-900"
                            >
                                <i className="fas fa-info-circle"></i> Details
                            </button>
                            <button 
                                onClick={handleLike} 
                                className="cursor-pointer px-2 py-1 rounded-full border-[2px] border-gray-300 hover:bg-red-500 hover:text-white duration-200 text-gray-900"
                            >
                                <i className="fas fa-heart"></i> {likes}
                            </button>
                            <button 
                                onClick={toggleCommentBoxVisibility} 
                                className="cursor-pointer px-2 py-1 rounded-full border-[2px] border-gray-300 hover:bg-blue-500 hover:text-white duration-200 text-gray-900"
                            >
                                <i className="fas fa-comment"></i>
                            </button>
                        </div>
                    </div>
                    {showCommentBox && (
                        <div className="mt-4">
                            <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-2">
                                <textarea
                                    value={comment}
                                    onChange={handleCommentChange}
                                    placeholder="Write a comment..."
                                    className="p-2 border rounded text-gray-900"
                                />
                                <button type="submit" className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 duration-200">
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                    <div className="mt-4">
                        <span 
                            onClick={toggleCommentsVisibility} 
                            className="cursor-pointer text-blue-500 underline"
                        >
                            {showComments ? 'Hide Comments' : 'Show Previous Comments'}
                        </span>
                        {showComments && comments.map((comment, index) => (
                            <div key={index} className="border-b py-2 text-gray-900">
                                {comment}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;