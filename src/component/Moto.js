import React, { useState } from 'react';
import { GrPrevious, GrNext } from "react-icons/gr";
import yuvisir from "../assest/yuvisir.jpg";
import kavya from "../assest/kavss.jpg";
import deepshi from "../assest/deep.jpg";
import paras from "../assest/parass.jpg";
import ishank from "../assest/ishank.jpg";
import shikha from "../assest/shikhaa.jpg";


const Moto = () => {
  const [startMoto, setStartMoto] = useState(0);

  const nextMoto = () => {
    setStartMoto(startMoto + 3);
  };

  const prevMoto = () => {
    setStartMoto(startMoto - 3);
  };

  const moto = [
        
    {
      name: 'Mr. Yuvraj Joshi',
      country: 'Our Mentor',
     // comment: "Mentor",
      image: yuvisir,
    },
    {
            name: 'Mr. Paras Yadav',
            country: 'Team Leader',
            //comment: "Team Lead",
            image: paras,
          },
          {
            name: 'Ms. Deepshi Jindal',
            country: 'Team Member',
            //comment: "Team Member",
            image: deepshi,
          },
          {
            name: "Ms. Kavya Srivastva",
            country: "Team Member",
            //comment: "Team Member",
            image: kavya,
            
          },
          {
            name: "Mr. Ishank Gangwar",
            country: "Team Member",
            image: ishank,
            //comment: "Team Member"
          },
          {
            name: "Ms. Shikha Singh",
            country: "Team Member",
            image: shikha,
            //comment: "Team Member",
          },
         
  ];

  const displayMoto = moto.slice(startMoto, startMoto + 3);

  return (
    <div style={{ height: '520px', width: '100%', paddingTop: '1rem' }} className="customer-moto">
      <div className="section-wrap">
      <div className="customer-section-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <p style={{ color: '#2e2e3f', fontSize: '2.5rem', fontWeight: '600', fontFamily: 'Times New Roman, sans-serif' }}>Our Team</p>
</div>
<div className="ml-auto flex gap-4">
  <button
    onClick={prevMoto}
    className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
    disabled={startMoto === 0}
  >
    <GrPrevious />
  </button>
  <div className="flex-grow"></div> {/* This will push the next button to the right */}
  <button
    onClick={nextMoto}
    className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
    disabled={startMoto >= moto.length - 3}
  >
    <GrNext />
  </button>
</div>
        {/* <div className="ml-auto flex gap-4">
          <button
            onClick={prevReviews}
            className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            disabled={startReview === 0}
          >
            <GrPrevious />
          </button>
          <button
            onClick={nextReviews}
            className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            disabled={startReview >= reviews.length - 3}
          >
            <GrNext />
          </button>
        </div> */}

        <div className="moto-items owl-carousel" style={{ margin: '1rem 0.4rem 0 0.4rem', display: 'flex' }}>
          {displayMoto.map((moto, index) => (
            <div key={index} className="moto-content" style={{
              margin: '1rem',
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              textAlign:'center',
              marginBottom:'2rem',
              padding: '1rem',
              height: '320px',
              flex: '1 0 440px',
              boxSizing: 'border-box',
              border: '1px solid #ddd',
              borderRadius: '0.2rem',
              boxShadow: '0.4rem 0.4rem 0.8rem #eee'
            }}>
                    <div className="customer-info" style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="customer-image" style={{
                  height: '100px',
                  width: '100px',
                  borderRadius: '50%',
                  border: '1px solid #ddd'
                }}>
                  <img src={moto.image} alt={`Moto by ${moto.name}`} style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    border: '3px solid #fff',
                    borderRadius: '50%'
                  }} />
                </div>
                <div className="customer-details" style={{ marginLeft: '1rem' }}>
                  <h2 className="name" style={{ color: '#2e2e3f', fontSize: '1.6rem',fontWeight: '700', fontFamily: 'Ubuntu, sans-serif' }}>{moto.name}</h2>
                  <p className="country" style={{ color: '#2e2e3f', fontSize: '1rem', fontWeight: '100', textAlign:'justify',fontFamily: 'Poppins, sans-serif' }}>{moto.country}</p>
                </div>
              </div>

              <div className="moto-text" style={{ marginTop: '1rem', color: '#2e2e3f', fontSize: '1.1rem' }}>
                <p className="moto" style={{ fontSize: '1.2rem' }}>{moto.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Moto;
             