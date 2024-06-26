import "./button.css";

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <button className="botao" onClick={handleClick}>&#9650;</button>;
}

export default ScrollToTopButton;
