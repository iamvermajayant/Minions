

const cardData = [
  {
    id: "1",
    title: "Free and Easy to use",
    image: "https://cdn-icons-png.flaticon.com/512/5632/5632321.png",
  },
  {
    id: "2",
    title: "Secure and Reliable",
    image: "https://cdn-icons-png.flaticon.com/512/1600/1600130.png",
  },
  {
    id: "3",
    title: "HTTPS Support Enabled",
    image: "https://cdn-icons-png.flaticon.com/512/2333/2333536.png",
  },
  {
    id: "4",
    title: "Number of clicks ",
    image: "https://cdn-icons-png.flaticon.com/512/1536/1536578.png",
  },
];

const Cardscomponent = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {cardData.map((item) => (
        <div key={item.id} className="card rounded m-4" style={{ maxWidth: "300px", backgroundColor: '#1F2937', width : "260px" }}>
          <img className="card-img-top" src={item.image} width={50} height={240} alt="Card image cap" />
          <div className="card-body text-center">
            <h5 className="card-title text-wrap text-white">{item.title}</h5>
            <a href="#" className="btn btn-primary rounded-pill">
              Check
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardscomponent;
