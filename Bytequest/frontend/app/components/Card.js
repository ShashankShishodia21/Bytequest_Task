import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
const Card = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="card-main">
          <div className="card-img">
            <div className="spec-icon">
              <FaRegBookmark color="black"/>
            </div>
            <img src={post.image} alt={post.title}  />
          </div>
          <div className="card-data p-4">
            <div className="heading">
              <h2>{post.title}</h2>
            </div>
            <div className="pricing">
              <div className="pricing-p">
                <p><FaRupeeSign /> {post.price}</p>
                <h2>{post.price * 2}</h2>
                <h1 className="text-green-400">(50% Off)</h1>
              </div>
              <div className="half">
                <TbShoppingBagPlus />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
