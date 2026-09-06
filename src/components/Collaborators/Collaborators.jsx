import CircularGallery from "../CircularGallery/CircularGallery";
import "./Collaborators.css";

export default function Collaborators() {
  return (
    <>
    <div className="collaborators-heading">
        <h2>
          Featured <span className="highlight">Events</span>
        </h2>
      </div>
    <section className="collaborators">

      

      <div style={{ height: "500px", position: "relative" }}>
        <CircularGallery
          items={[
            { image: "/logos/collab1.png", text: "Collaborator 1" },
            { image: "/logos/collab2.png", text: "Collaborator 2" },
          ]}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
        />
      </div>

    </section>
    </>
  );
}