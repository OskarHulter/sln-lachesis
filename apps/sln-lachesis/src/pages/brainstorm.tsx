import styles from "./index.module.scss";
import { Whiteboard } from "@lachesis/ui";

export function Brainstorm() {
	return (
		<div className={styles.page}>
			<div className="wrapper">
				<div id="welcome">
					<h1>
						<span> Hello there, </span>
						Welcome sln-lachesis 👋
					</h1>
					<Whiteboard />
				</div>
			</div>
		</div>
	);
}

export default Brainstorm;
