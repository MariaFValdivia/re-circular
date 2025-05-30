import React from 'react';
import './TeamMemberCard.css'; 

const TeamMemberCard = ({ name, role, bio, image }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "840px", margin: "auto" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}<br /><small>{role}</small></h5>
            <p className="card-text">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;