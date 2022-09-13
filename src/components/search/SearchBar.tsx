import SearchContainer from './SearchContainer';
import SearchBox from './SearchBox';
import SearchInput from './SearchInput';
import ErrorMessage from './ErrorMessage';
import Button from '../common/Button';

import background from '../../assets/bg-shorten-desktop.svg';

interface SearchBarProps {
    error: string;
    onChangeLink: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    onSearchLink: () => void;
    button: string;
}

const SearchBar = ({
    error,
    onChangeLink,
    value,
    onSearchLink,
    button
}: SearchBarProps) => {

    return(
        <SearchContainer >
            <SearchBox width="92%" height="200px" ml="120px" className="sb-box-1">
                <SearchBox style={{backgroundColor: "hsl(257, 27%, 26%)"}} width="90%" height="168px" background={background} className="sb-box-2">
                    <SearchBox width="70%" height="100%" className="sb-box-3">
                        <SearchBox width="90%" height={error? "74%" : "60%"} pd={error? "23px" : "0"} pl="15px"  className="sb-in-cont sb-box-4">
                            <SearchInput
                                placeholder="Shorten a link here..." 
                                error={error}
                                onChange={onChangeLink} 
                                value={value}>
                            </SearchInput>
                            {
                                error? <ErrorMessage>{error}</ErrorMessage> : null
                            }
                        </SearchBox>
                    </SearchBox>
                    <SearchBox width="30%" height={window.innerWidth>375? "100%" : (error? "74px" : "120px")} className="sb-box-5">
                        <SearchBox width="80%" height="40%" className="sb-box-6">
                            <Button light={true} borderRadius="8px" onClick={onSearchLink} disabled={button === "Fetching.."}>
                                {button}
                            </Button>
                        </SearchBox>
                    </SearchBox>
                </SearchBox>
            </SearchBox>
        </SearchContainer >
    )
};

export default SearchBar;
