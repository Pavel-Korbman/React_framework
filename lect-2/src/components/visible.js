import { useState } from "react";

function Show() {
    const [block, setBlock] = useState(true);
    const visibleMode = ()=>{        
        setBlock(item => !item);
    }
    return ( 
        <div>
            <button onClick={visibleMode}>Показать/Скрыть</button>
            <p style={{display: block ? 'block' : 'none'  }}>Любой текст внутри параграфа</p>
        </div>
     );
}

export default Show;