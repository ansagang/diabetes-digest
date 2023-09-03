export const routes = [
    {
        access: 'user',
        routes: [
            '/account'
        ]
    },
    {
        access: 'mod',
        routes: [
            '/account/blog'
        ]
    },
    {
        access: 'admin',
        routes: [
            '/dashboard'
        ]
    },
    {
        routes: [
            '/login',
            '/register'
        ]
    }
]