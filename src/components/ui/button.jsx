export default function Button({type, children, ...props}) {
    return (
        <button className={type} {...props}>{children}</button>
    )
}