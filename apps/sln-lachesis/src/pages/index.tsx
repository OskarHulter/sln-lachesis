import styles from "./index.module.scss";

export function Index() {
	/*
	 * Replace the elements below with your own.
	 *
	 * Note: The corresponding styles are in the ./index.scss file.
	 */
	return (
		<div className={styles.page}>
			<div className="wrapper">
				<div id="welcome">
					<h1>
						<span> Hello there, </span>
						Welcome sln-lachesis 👋
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Index;
