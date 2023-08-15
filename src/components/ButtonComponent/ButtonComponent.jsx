import Button from "react-bootstrap/Button";
// import "./ButtonComponent.css"
// const ButtonComponent = (props) => {
const ButtonComponent = ({ label, bsButtonType, onClickFunction }) => {
	// console.log(props)

	// return <Button>{props.label}</Button>;
	// return <Button variant={bsButtonType} className="buttonStyles">{label}</Button>;
	return (
		<Button variant={bsButtonType} onClick={onClickFunction}>
			{label}
		</Button>
	);
};

export default ButtonComponent;
