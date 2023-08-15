import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
	return (
		<div classList="ItemListContainer">
			<h1>{greeting}</h1>
		</div>
	);
};

export default ItemListContainer;
