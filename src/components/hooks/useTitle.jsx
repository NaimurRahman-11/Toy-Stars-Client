import { useEffect } from "react";


const useTitle = title => {

    useEffect(() => {
        document.title = `${title} - Toy Stars`;
    }, [title])
};

export default useTitle;