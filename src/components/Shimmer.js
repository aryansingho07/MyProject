const Shimmer=()=>{
  return (
    <>
      <div className="restrauntcard">
        {
          Array(15).fill("").map((e, index) => ( // Added index as a second parameter
            <div key={index} className="shimmer-card"></div>
          ))
        }
      </div>
    </>
  );
  
}
export default Shimmer;