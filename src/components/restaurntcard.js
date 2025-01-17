const RestrauntCard = ({ id,name, cloudinaryImageId, rating }) => {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
  
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h4>{name}</h4>
      <h5>{rating}</h5>
      <h6>{id}</h6>
    </div>
  );
};

export default RestrauntCard;
