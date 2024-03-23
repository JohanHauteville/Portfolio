import "./styles.scss";
import image from "../../assets/img/404.svg";

function Error() {
  return (
    <main className={"error-page"}>
      <img className="error-image" src={image} alt="404" />
      <p>Erreur 404</p>
    </main>
  );
}

export default Error;
