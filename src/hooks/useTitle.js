const { useEffect } = require("react")

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} - Web Store`
    },[title])
}

export default useTitle
