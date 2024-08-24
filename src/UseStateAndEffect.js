import { useState } from "react";
import { useEffect } from "react";

function UseStateAndEffect() {
    const [counter, setValue] = useState(0);
    const [keyword, setkeyword] = useState();
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setkeyword(event.target.value);

    useEffect(() => {
        console.log("Keyword is: ", keyword);
    }, [keyword]);

    return <div>
        <span>{keyword}</span>
        <input type="search" placeholder="type here" onChange={onChange}/>
        <div onClick={onClick}>
            <span>"State: "</span>{counter}
        </div>
    </div>
}

export default UseStateAndEffect;