export function slugify(str) {
    return str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
}

export function unslugify(str) {
    return str.replace(/-/g, " ")
}

export function isDev() {
    return process.env && process.env.NODE_ENV === "development"
}