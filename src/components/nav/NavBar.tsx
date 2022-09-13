import NavContaier from './NavContainer';
import NavBox from './NavBox';
import NavElement from './NavElement';
import NavImage from './NavImage';
import Button from '../common/Button';

import logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.png';


interface NavBarProps {
    onShowModal: () => void;
}

const NavBar = ({ onShowModal }: NavBarProps) => {

    return (
        <NavContaier>
            <NavBox>
                <NavBox className="nav-long-box-cont">
                    <NavElement className="nav-image-box">
                        <NavImage src={logo} alt="logo" />
                    </NavElement>
                    <NavBox className="nav-box-1">
                        <NavElement className="nav-long-box-el">Feature</NavElement>
                        <NavElement className="nav-long-box-el">Pricing</NavElement>
                        <NavElement className="nav-long-box-el">Resources</NavElement>
                    </NavBox>
                </NavBox>
                <NavBox className="nav-box-2">
                    <NavElement className="nav-long-box-el">Log in</NavElement>
                    <NavElement className="nav-short-box-btn-cont">
                        <Button light={true} borderRadius="17px">
                            Sign up
                        </Button>
                    </NavElement>
                </NavBox>
                <NavElement className="nav-sideBar-cont">
                    <NavImage
                        className="nav-side-img"
                        src={hamburger}
                        alt="side-drawer"
                        onClick={onShowModal}
                    />
                </NavElement>
            </NavBox>
        </NavContaier>
    )
};

export default NavBar;
