export const api = {
    getAllUsers: (props) => getAllUsers(props),
    getTip: (props) => getTip(props),
    getTips: (props) => getTips(props),
    getTeam: (props) => getTeam(props),
    getImage: (props) => getImage(props),
    getEvent: (props) => getEvent(props),
    getEvents: (props) => getEvents(props)
}

export async function getAllUsers({language, revalidate}) {
    const res = await fetch(`${process.env.URL}/api/users?lang=${language.lang}`, {
        method: 'GET',
        headers: {
            'x-api-key': process.env.API_KEY
        },
        next: {
            revalidate: revalidate
        }
    })
    const data = await res.json()

    return data
}

export async function getTips({language, revalidate}) {
    const res = await fetch(`${process.env.URL}/api/tips?lang=${language.lang}`, {
        method: 'GET',
        headers: {
            'x-api-key': process.env.API_KEY
        },
        next: {
            revalidate: revalidate
        }
    })
    const data = await res.json()

    return data
}

export async function getTip({language, revalidate, id}) {
    const res = await fetch(`${process.env.URL}/api/tips/${id ? id : 'random'}?lang=${language.lang}`, {
        method: 'GET',
        headers: {
            'x-api-key': process.env.API_KEY
        },
        next: {
            revalidate: revalidate
        }
    })
    const data = await res.json()

    return data
}

export async function getTeam({language, revalidate}) {
    const res = await fetch(`${process.env.URL}/api/team?lang=${language.lang}`, {
        method: 'GET',
        headers: {
            'x-api-key': process.env.API_KEY
        },
        next: {
            revalidate: revalidate
        }
    })
    const data = await res.json()

    return data
}

export async function getImage({language, revalidate, width, height, path, bucket}) {
    const res = await fetch(`${process.env.URL}/api/images/${path}?width=${width}&height=${height}&lang=${language.lang}&bucket=${bucket}`, {
        method: 'GET',
        headers: {
            'x-api-key': process.env.API_KEY
        },
        next: {
            revalidate: revalidate
        }
    })
    const data = await res.json()

    return data
}

export async function getEvents({language, sort, searchTerm, revalidate}) {
    const res = await fetch(`${process.env.URL}/api/events?sort=${sort}&searchTerm=${searchTerm}&lang=${language.lang}`, {
        method: 'GET',
        headers: {
            'x-api-key': process.env.API_KEY
        },
        next: {
            revalidate: revalidate
        }
    })

    const data = await res.json()

    return data
}

export async function getEvent({language, id, revalidate}) {
    const res = await fetch(`${process.env.URL}/api/events/${id}?lang=${language.lang}`, {
        method: 'GET',
        headers: {
            'x-api-key': process.env.API_KEY
        },
        next: {
            revalidate: revalidate
        }
    })

    const data = await res.json()

    return data
}