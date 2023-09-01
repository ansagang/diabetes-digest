import { useState } from "react"
import { Icons } from "@/config/icons"

export default function Select({ setActiveOption, activeOption, options, text, ...props }) {

    const [active, setActive] = useState(false)

    return (
        <div className="select" {...props}>
            <button onClick={() => setActive(!active)} className="select__button">{activeOption ? activeOption : text}<Icons.downArrow /></button>
            <div className={active ? "select__options active" : "select__options"}>
                {
                    options ?
                        (
                            options.length > 0 ?
                                (
                                    options.map((option) => (
                                        <div onClick={() => setActiveOption(option.code)} className="select__option">
                                            <div className="select__option-title">{option.title}</div>
                                        </div>
                                    ))
                                )
                                :
                                null
                        )
                        :
                        null
                }
            </div>
        </div>

    )
}