import React, { useState } from 'react';
import { GrPrevious, GrNext } from "react-icons/gr";
import '../component/Review.css'

const Reviews = () => {
  const [startReview, setStartReview] = useState(0);

  const nextReviews = () => {
    setStartReview(startReview + 3);
  };

  const prevReviews = () => {
    setStartReview(startReview - 3);
  };

  const reviews = [
    {
      name: 'Mr. Gautam Bhatt',
      country: 'India',
      comment: "I stumbled upon this vegetable and fruits website while searching for a reliable source of organic produce, and boy, am I impressed!",
    },
    {
      name: 'Mr. Prince Narula',
      country: 'India',
      comment: "As an adventurous cook, I am always on the lookout for unique and exotic fruits and vegetables.",
    },
    {
      name: 'Mr. Damon Salvator',
      country: 'India',
      comment: "This vegetable and fruits website has revolutionized the way I shop for groceries. The convenience of ordering fresh produce online and having it delivered to my doorstep is a game-changer.",
    },
    {
      name: "Mr. Robert Pattinson",
      country: "India",
      comment: "This vegetable and fruits website has become my go-to place for all things fresh and healthy. The website offers a delightful array of fresh fruits and vegetables from local farms, making it a dream come true for health-conscious individuals like myself.",
    },
    {
      name: "Mr. Klaus Micheal",
      country: "India",
      comment: "I stumbled upon this little-known vegetable and fruits website while looking for budget-friendly grocery options, and I'm so glad I did!"
    },
    {
      name: "Ms. Dian Welsey",
      country: "India",
      comment: "This vegetable and fruits website emphasizes the importance of supporting local farmers, and I appreciate their dedication to promoting sustainable agriculture.",
    },
  ];

  const displayReviews = reviews.slice(startReview, startReview + 3);

  return (
    <div style={{ height: '520px', width: '100%', paddingTop: '1rem' }} className="customer-review">
      <div className="section-wrap">
      <div className="customer-section-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <p style={{ color: '#2e2e3f', fontSize: '2.3rem', fontWeight: '600' }}>Customer Reviews</p>
</div>
<div className="ml-auto flex gap-4">
  <button
    onClick={prevReviews}
    className="bg-black-300 hover:bg-green-400 text-lg p-1 rounded"
    disabled={startReview === 0}
  >
    <GrPrevious />
  </button>
  <div className="flex-grow"></div> {/* This will push the next button to the right */}
  <button
    onClick={nextReviews}
    className="bg-black-300 hover:bg-green-400 text-lg p-1 rounded"
    disabled={startReview >= reviews.length - 3}
  >
    <GrNext />
  </button>
</div>
        {/* <div className="ml-auto flex gap-4">
          <button
            onClick={prevReviews}
            className="bg-slate-300 hover.bg-slate-400 text-lg p-1 rounded"
            disabled={startReview === 0}
          >
            <GrPrevious />
          </button>
          <button
            onClick={nextReviews}
            className="bg-slate-300 hover.bg-slate-400 text-lg p-1 rounded"
            disabled={startReview >= reviews.length - 3}
          >
            <GrNext />
          </button>
        </div> */}

        <div className="review-items owl-carousel" style={{ margin: '1rem 0.4rem 0 0.4rem', display: 'flex' }}>
          {displayReviews.map((review, index) => (
            <div key={index} className="review-content" style={{
              
              margin: '1rem 0',
              padding: '1rem',
              height: '320px',
              flex: '1 0 440px',
              boxSizing: 'border-box',
              border: '6px solid #ddd',
              borderColor:'black',
              borderRadius: '2rem',
              boxShadow: '0.4rem 0.4rem 0.8rem #eee'
              // transition: background-color 0.3s ease;
            }}>
              <div className="customer-info" style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="customer-details" style={{ marginLeft: '1rem' }}>
                  <h2 className="name" style={{ color: '#2e2e3f', fontSize: '1.6rem', fontFamily: 'Ubuntu, sans-serif' }}>{review.name}</h2>
                  <p className="country" style={{ color: '#2e2e3f', fontSize: '1rem', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>{review.country}</p>
                </div>
              </div>

              <div className="review-text" style={{ marginTop: '1rem', color: '#2e2e3f', fontSize: '1.1rem' }}>
                <p className="review" style={{ fontSize: '1.2rem' }}>{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;