import { theme } from '../../theme';

import LinksContainer from './LinksContainer';
import LinksBox from './LinksBox';
import Link from './Link';
import Button from '../common/Button';

import { SType } from '../main/Main';

interface LinksBarProps {
    data: SType;
    copyTag: string;
    copyToClipboard: (link: string) => void;
}


const LinksBar = ({ data, copyTag, copyToClipboard }: LinksBarProps) => {
    
    return(
        <LinksContainer>
            <LinksBox width="92%" height="80px" ml="120px" className="lb-box-1">
                <LinksBox width="90%" height="80px" className="lb-box-2">
                    <LinksBox width="85%" className="lb-box-3">
                        <LinksBox width="50%" className="lb-link-box-1">
                            <Link>
                            {data["original_link"].slice(0,window.innerWidth/7.3)}
                            </Link>
                        </LinksBox>
                        <LinksBox width="35%" className="lb-link-box-2">
                            <Link color={theme.colors.primary.cyan}>
                            {data["full_short_link2"].slice(0,window.innerWidth/7.3)}
                            </Link>
                        </LinksBox>
                    </LinksBox>
                    <LinksBox width="15%" height="80px" className="lb-box-4">
                        <LinksBox width="60%" height="40%" className="lb-box-5">
                            {
                            copyTag==="Copy"?
                                <Button light borderRadius="3px" onClick={()=>copyToClipboard(data["full_short_link2"])}>{copyTag}</Button>
                                :
                                <Button dark borderRadius="3px" onClick={()=>copyToClipboard(data["full_short_link2"])}>{copyTag}</Button>
                            }
                        </LinksBox>
                    </LinksBox>
                </LinksBox>
            </LinksBox>
        </LinksContainer>
    )
}

export default LinksBar;
