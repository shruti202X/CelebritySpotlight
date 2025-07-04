import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function SignUp() {
  const router = useRouter();
  const {
    name,
    genre,
    country,
    socialmedia,
    followers,
    topwork,
    secondtopwork,
  } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    country: "",
    socialmedia: "",
    followers: "",
    topwork: "",
    secondtopwork: "",
  });

  useEffect(() => {
    // Initialize form data with query params when available
    setFormData({
      name: name || "",
      genre: genre || "",
      country: country || "",
      socialmedia: socialmedia || "",
      followers: followers || "",
      topwork: topwork || "",
      secondtopwork: secondtopwork || "",
    });
  }, [name, genre, country, socialmedia, followers, topwork, secondtopwork]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form data:", formData);
    // TODO: send formData to your backend or DB here
  };

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "600px", margin: "50px auto" }}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
            required
          />

          <label>Genre:</label>
          <input
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
            required
          />

          <label>Country:</label>
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
            required
          />

          <label>Social Media:</label>
          <input
            name="socialmedia"
            value={formData.socialmedia}
            onChange={handleChange}
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
          />

          <label>Followers:</label>
          <input
            name="followers"
            value={formData.followers}
            onChange={handleChange}
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
          />

          <label>Top Work:</label>
          <input
            name="topwork"
            value={formData.topwork}
            onChange={handleChange}
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
          />

          <label>Second Top Work:</label>
          <input
            name="secondtopwork"
            value={formData.secondtopwork}
            onChange={handleChange}
            style={{ display: "block", marginBottom: "10px", padding: "8px" }}
          />

          <button
            type="submit"
            style={{ padding: "10px 20px", marginTop: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
