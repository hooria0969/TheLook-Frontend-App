import React, { useState } from "react";
import axios from "axios";

function BidForm({bidObj}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    price: "",
    paintingid: bidObj.paingtingid,
    bidid: bidObj.bidid
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors
    try {
      const res = await axios.post("https://the-look-backend-app2.vercel.app/bids", formData);
      setResponse(res.data);
    } catch (err) {
      console.error("Error submitting bid:", err);
      setError("Failed to submit bid. Please try again.");
    }
  };

  return (
    <div className="bid-form">
      <h2>Submit Your Bid</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="inputs">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="inputs">
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        </div>

        {/* <div className="inputs">
          <input type="text" name="bidid"  placeholder="Bid Id" value={formData.bidid} onChange={handleChange} required  />
        </div> */}

        <button type="submit">Submit Bid</button>
      </form>

      {response && (
        <div>
          <h2 style={{ color: "green" }}>Bid Submitted Successfully By: {response.name}</h2>

        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default BidForm;
