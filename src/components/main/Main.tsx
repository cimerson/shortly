import { useState } from "react";
import axios from "axios";

import MainContainer from "./MainContainer";
import NavBar from "../nav/NavBar";
import NavModal from "../nav/NavModal";
import Info from "../info/Info";
import SearchBar from "../search/SearchBar";
import LinksBar from "../links/LinksBar";
import Advanced from "../advanced/Advanced";

export type SType = {
    code: string;
    full_share_link: string; 
    full_short_link: string;
    full_short_link2: string;
    full_short_link3: string;
    original_link: string;
    share_link: string;
    short_link: string;
    short_link2: string;
    short_link3: string;
};


const Main = () => {

    const [showNavModal, setShowNavModal] = useState<boolean>(false);
    const [link, setLink] = useState<string>('');
    const [data, setData] = useState<SType[]>([]);
    const [error, setError] = useState<string>('');
    const [copyTag, setCopyTag] = useState<string[]>([])
    const [searchButton, setSearchButton] = useState<string>("Shorten it!");

    const onShowModal = () => {
        setShowNavModal(!showNavModal)
    };

    const onChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (error) {
            setError("")
        }
        setLink(e.target.value);
    };

    const onSearchLink = () => {
        if (link === '') {
            setError('Please add a link')
            return;
        }
        setSearchButton('Fetching..');
        axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then((res) => {
                setCopyTag(prev => ([...prev, 'Copy']))
                setData(prev => ([...prev, res.data.result]))
                setSearchButton('Shorten it!');
            })
            .catch((err) => {
                setSearchButton('Shorten it!');
                setError('Please add a link')
                console.log(err.response.data.error)
            })
    };

    const copyToClipboard = (i: number, text: string) => {
        navigator.clipboard.writeText(text)
          .then(()=>{
            const len=copyTag.length
            const newArr= new Array(len).fill("Copy")
            newArr[i]="Copied"
            setCopyTag(newArr)
          })
    }

    // console.log(data, copyTag)

    return (
        <MainContainer>
            <NavBar onShowModal={onShowModal} />
            {
                showNavModal ? <NavModal /> : null
            }
            <Info />
            <SearchBar
                error={error}
                onChangeLink={onChangeLink}
                value={link}
                onSearchLink={onSearchLink}
                button={searchButton}
            />
            {
                data && data.reverse().map((d: SType, i) => {
                    // console.log(d);
                    return (
                        <LinksBar data={d} key={i} copyToClipboard={(text) => copyToClipboard(i, text)} copyTag={copyTag[i]} />
                    )
                })
            }
            <Advanced />
        </MainContainer>
    )
}

export default Main;
