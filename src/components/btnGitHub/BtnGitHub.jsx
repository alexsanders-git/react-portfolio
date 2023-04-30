import gitHubIcon from '../../img/icons/gitHub-black.svg';
import './style.css';

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} className="btn-outline" target="_blank" rel="noreferrer">
			<img src={gitHubIcon} alt="Git Hub" />
			GitHub repo
		</a>
	);
}

export default BtnGitHub;