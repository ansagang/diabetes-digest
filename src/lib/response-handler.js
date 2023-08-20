"use client"

import { NotificationGet } from "@/context/notification-provider"

export default function responseHandler({ language }) {
    const dispatch = NotificationGet()

    function getTitle(type) {
        switch (type) {
            case "success":
                return language.res.success
            case "info":
                return language.res.info
            case "warning":
                return language.res.warning
            case "error":
                return language.res.error
            default:
                return null
        }
    }

    function notification({ message, type }) {
        const title = getTitle(type)
        if (Array.isArray(message)) {
            message.forEach(message => {
                dispatch({
                    type: type,
                    message: message,
                    title: title
                })
            })
        } else {
            dispatch({
                type: type,
                message: message,
            })
        }
    }

    return notification
}