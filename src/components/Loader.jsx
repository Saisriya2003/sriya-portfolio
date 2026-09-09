export default function Loader({ fading }) {
  return (
    <div className={`loader ${fading ? "is-fading" : ""}`} aria-hidden="true">
      <div className="loader__mark">
        <span className="loader__s">S</span>
        <span className="loader__s loader__s--delay">S</span>
      </div>
      <p className="loader__label">Sai Sriya</p>
    </div>
  );
}
