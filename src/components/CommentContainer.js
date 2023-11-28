import React from "react";
import { USER_IMG } from "../utils/constants";

const commentData = [
  {
    name: "bhaskar singh",
    text: "lorem ipsum note idel ipol",
    replies: [
      {
        name: "bhaskar singh",
        text: "lorem ipsum note idel ipol",
        replies: [
          {
            name: "bhaskar singh",
            text: "lorem ipsum note idel ipol",
            replies: [
              {
                name: "bhaskar singh",
                text: "lorem ipsum note idel ipol",
                replies: [
                  {
                    name: "bhaskar singh",
                    text: "lorem ipsum note idel ipol",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "bhaskar singh",
    text: "lorem ipsum note idel ipol",
    replies: [
      {
        name: "bhaskar singh",
        text: "lorem ipsum note idel ipol",
        replies: [
          {
            name: "bhaskar singh",
            text: "lorem ipsum note idel ipol",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "bhaskar singh",
    text: "lorem ipsum note idel ipol",
    replies: [],
  },
  {
    name: "bhaskar singh",
    text: "lorem ipsum note idel ipol",
    replies: [
      {
        name: "bhaskar singh",
        text: "lorem ipsum note idel ipol",
        replies: [
          {
            name: "bhaskar singh",
            text: "lorem ipsum note idel ipol",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return(
  <div className="flex bg-gray-100 p-2 rounded-lg ms-28 my-2">
    <img
    className="w-12 h-12"
      alt="user"
      src= {USER_IMG}
    />
    <div className="px-3">
      <p className="font-bold">{name}</p>
      <p>{text}</p>
    </div>
  </div>
  )
};

const CommentsList = ({comments}) => {
  return  comments && comments.length >0 ? comments.map ((comment, index) => 
  <div>
    <Comment key={index} data={comment}/>
    <div className="ml-10">
    <CommentsList comments={comment.replies}/>
    </div>
  </div>
  ) : null
}
const CommentContainer = () => {
  return (
    <div>
      <p className="font-bold text-2xl ms-28 my-2">Comments:</p>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentContainer;

