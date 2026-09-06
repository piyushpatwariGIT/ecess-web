import CircularGallery from "../CircularGallery/CircularGallery";
import "./Collaborators.css";

export default function Collaborators() {
  return (
    <section className="collaborators">

      <div className="collaborators-heading">
        <h2>
          Featured <span className="highlight">Events</span>
        </h2>
      </div>

      <div className="collaborators-gallery">
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
  );
}