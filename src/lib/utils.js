import { languages } from "@/config/languages"

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

export function languageDecode(lang) {
    for (let item of languages) {
        if (lang === item.title) {
            return item.code
        } else if (lang === item.code) {
            return item.title
        }
    }
}

export function timestampDecode({ timestamp, language }) {

    const time = new Date(timestamp)

    function getDay() {
        switch (time.getDay()) {
            case 1:
                return language.app.global.days.monday
            case 2:
                return language.app.global.days.tuesday
            case 3:
                return language.app.global.days.wednesday
            case 4:
                return language.app.global.days.thursday
            case 5:
                return language.app.global.days.friday
            case 6:
                return language.app.global.days.saturday
            case 7:
                return language.app.global.days.sunday
            default:
                return null
        }
    }

    const day = getDay()
    const date = time.getDate()
    const month = time.getMonth()
    const year = time.getFullYear()
    const hours = time.getHours()

    console.log(day);

    return {
        date,
        month,
        year,
        hours,
        day
    }
}
