import { useEffect, useState } from "react";

function useScrollView(element, repeat) {

    const [visible, setVisible] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (repeat) {
                if (entry.isIntersecting) {
                    setVisible(true)
                } else {
                    setVisible(false)
                }
            } else {
                if (entry.intersectionRatio > 0) {
                    if (entry.isIntersecting) {
                        setVisible(true)
                    } else {
                        setVisible(false)
                    }
                }
            }
        })
        observer.observe(element)
    }, [element, repeat])


    return visible
}

export default useScrollView;