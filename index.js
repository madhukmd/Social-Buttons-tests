const Button = (props) => {
  const { name, css } = props;
  return <button className={css}>{name}</button>;
};

const element = (
  <div className="Container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttonsContainer">
      <Button name="like" css="like" />
      <Button name="comment" css="comment" />
      <Button name="share" css="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
