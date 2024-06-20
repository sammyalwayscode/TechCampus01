import { useEffect, useState } from "react";

const MoreItemsPost = () => {
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [myNumber, setMyNumber] = useState("");
  const [avatar, setAvatar] = useState(null);

  const [storeData, setStoreData] = useState(() => {
    const saveValue = localStorage.getItem("storeData");
    return saveValue ? JSON.parse(saveValue) : [];
  });

  const postData = () => {
    const avatarURL = URL.createObjectURL(avatar);
    setStoreData([
      ...storeData,
      { myName, email, myNumber, avatar: avatarURL },
    ]);
  };

  const clearData = () => {
    localStorage.removeItem("storeData");
    setStoreData([]);
  };

  useEffect(() => {
    localStorage.setItem("storeData", JSON.stringify(storeData));
  }, [storeData]);

  const handleImage = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <div>
      <h1>More</h1>
      <input
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        value={myNumber}
        onChange={(e) => setMyNumber(e.target.value)}
      />
      <input type="file" onChange={handleImage} accept="image/*" />
      <button onClick={postData}>Post</button>

      <section>
        {storeData.map((data, i) => (
          <div key={i}>
            <h3> {data.myName} </h3>
            <h4> {data.email} </h4>
            <h5> {data.myNumber} </h5>
            {data.avatar && (
              <img
                src={data.avatar}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        ))}
      </section>
      <button onClick={clearData}>Clear Items</button>
    </div>
  );
};

export default MoreItemsPost;
