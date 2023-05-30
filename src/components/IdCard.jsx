import "../App.css";

export default function IdCard(props) {
  return (
    <div className="idCard">
      <div className="profile-img">
        
        <img height={130} src={props.imgsrc} />
      </div>
      <div>
        <p><b>First name:</b> {props.firstName}</p>
        <p><b>Last name:</b> {props.lastName}</p>
        <p> <b>Gender:</b> {props.gender} </p>
        <p><b>Height:</b> {props.height} </p>
        <p><b>Birth:</b> {props.birth} </p>
      </div>
    </div>
  );
}
