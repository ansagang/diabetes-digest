import { useEffect, useState } from "react";

function useScrollView(element, repeat) {

    const [visible, setVisible] = useState()

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
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
            });
        };

        const observer = new IntersectionObserver(observerCallback);
        if (element) {
            observer.observe(element);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0]
    //         if (repeat) {
    //             if (entry.isIntersecting) {
    //                 setVisible(true)
    //             } else {
    //                 setVisible(false)
    //             }
    //         } else {
    //             if (entry.intersectionRatio > 0) {
    //                 if (entry.isIntersecting) {
    //                     setVisible(true)
    //                 } else {
    //                     setVisible(false)
    //                 }
    //             }
    //         }
    //     })
    //     if (element) {
    //         observer.observe(element)
    //     }

    //     return () => {
    //         observer.disconnect();
    //     };

    // }, [element, repeat])


    return visible
}

export default useScrollView;