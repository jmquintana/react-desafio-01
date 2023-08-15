import NavBar from "./components/NavBar/NavBar.jsx";
import styles from "./App.module.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
	// const inputName = useRef(null);
	// const inputAge = useRef(null);

	// const handleOnSubmit = (e) => {
	// 	e.preventDefault();
	// 	const name = inputName.current.value;
	// 	const age = inputAge.current.value;
	// 	console.log(name, age);
	// };

	return (
		<div className={styles.appContainer}>
			<nav className={styles.navContainer}>
				<NavBar />
			</nav>
			<main className={styles.mainContainer}>
				<ItemListContainer greeting="Bienvenidos a mi tienda..." />
			</main>
			<ItemListContainer greeting="Bienvenido a mi tienda..."></ItemListContainer>
			<footer className={styles.footerContainer}>Footer</footer>
		</div>
	);
}

export default App;
