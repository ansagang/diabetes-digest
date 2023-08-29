"use client"

export default function Button({ type, children, className, ...props }) {
    return (
        <button type="button" className={type + ' ' + className} {...props}>{children}</button>
    )
}