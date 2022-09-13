import NavModalContainer from './NavModalContainer';
import NavModalBox from './NavModalBox';
import NavModalElement from './NavModalElement';
import NavModalLine from './NavLine';
import Button from '../common/Button';


const NavModal = () => {

    return(
        <NavModalContainer>
            <NavModalBox>
                <NavModalElement>Features</NavModalElement>
                <NavModalElement>Pricing</NavModalElement>
                <NavModalElement>Resources</NavModalElement>
                <NavModalElement className="nav-modal-line-box"><NavModalLine /></NavModalElement>
                <NavModalElement>Log in</NavModalElement>
                <NavModalElement className="nav-modal-btn-box">
                    <Button light={true} borderRadius="17px">
                        Sign up
                    </Button>
                </NavModalElement>
            </NavModalBox>
        </NavModalContainer>
    );
};

export default NavModal;
