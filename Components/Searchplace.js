import React from 'react'
import data from '../stays'

function Searchplace() {
    const [stay, setStay] = React.useState(data);
    const [seacrh, setSearch] = React.useState("");

    return(
        <>
        {e => {
            const site = data.filter(sites => {
                return sites.toLowerCase().includes(e.target.value.toLowerCase())
            });
            
        }}
        </>
    )
}

export default Searchplace