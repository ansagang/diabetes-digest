export const Icons = {
    info: (props) => (
        <svg fill="#1D5BDB" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>

    ),
    error: (props) => (
        <svg fill="#FF4848" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
    ),
    success: (props) => (
        <svg fill="#00d153" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
    ),
    warning: (props) => (
        <svg fill="#FDCC0C" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
    ),
    account: (props) => (
        <svg viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.345 10.083a9.855 9.855 0 0 1 6.358 9.214 1 1 0 0 1-1 1H1a1 1 0 0 1-1-1 9.856 9.856 0 0 1 6.359-9.214 5.647 5.647 0 1 1 6.987 0zm.153-4.437a3.647 3.647 0 1 0-7.293 0 3.647 3.647 0 0 0 7.293 0zM2.063 18.297h15.578a7.853 7.853 0 0 0-15.578 0z" fill-rule="nonzero"/></svg>
    ),
    heart: (props) => (
        <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
            <path d="M8 14.3611C20.957 7.21501 12.8701 -0.965478 8 4.04274C3.12995 -0.965534 -4.957 7.21495 8 14.3611Z">
            </path>
        </svg>
    ),
    eyes: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    ),
    eyesClosed: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>
    ),
    logo: (props) => (
        <svg width="274" height="274" viewBox="0 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="137" cy="137" r="137" fill="white" {...props} />
            <path d="M177.622 226.974C186.27 218.149 191.622 211.308 197.115 202.271C200.128 197.273 203.672 190.468 204.948 187.207C209.343 176.078 209.946 174.413 211.08 170.124C211.363 168.99 211.86 167.147 212.179 166.013C214.199 158.782 215.546 150.949 215.617 145.917C215.723 140.529 214.801 137.729 212.037 134.929C209.591 132.448 208.067 131.669 205.125 131.35C200.908 130.924 201.12 130.57 200.837 137.658C200.731 141.025 200.447 144.818 200.234 146.094C199.277 152.154 198.356 156.868 197.541 160.094C196.69 163.567 193.571 173.207 192.65 175.334C188.964 183.769 188.042 185.612 184.002 192.701C180.103 199.471 173.652 207.729 166.457 215.101C163.303 218.291 160.716 221.055 160.645 221.232C160.397 221.906 170.675 232.929 171.526 232.929C171.703 232.929 174.432 230.27 177.622 226.974Z" fill="#FF4848" />
            <path d="M160.264 211.692C168.965 203.206 176.067 193.511 181.856 182.184C186.082 173.839 188.426 167.661 190.663 158.854C192.261 152.569 192.58 150.758 193.397 143.869C194.285 136.483 194.321 131.69 193.539 131.37C193.22 131.264 189.739 131.157 185.762 131.157C180.364 131.157 178.447 131.264 178.233 131.619C178.091 131.832 177.843 134.282 177.701 137.016C176.6 159.991 166.656 182.326 150.001 199.228L147.125 202.105L148.865 204.803C151.422 208.674 156.109 215.314 156.322 215.314C156.429 215.314 158.204 213.681 160.264 211.692Z" fill="#FFA6A6" />
            <path d="M145.026 191.349C155.4 180.107 162.443 167.143 166.051 152.774C167.751 146.029 168.653 139.705 168.653 134.821V131.519L167.161 131.308C164.802 130.957 153.804 131.273 153.388 131.695C153.179 131.905 152.867 133.978 152.694 136.262C152.312 141.356 151.757 144.342 150.126 150.209C147.594 159.238 143.847 166.792 137.567 175.434L135.381 178.421L136.422 181.231C137.81 184.92 141.557 192.965 142.286 193.773C142.424 193.914 143.673 192.825 145.026 191.349Z" fill="#FF4848" />
            <path d="M134.34 164.657C140.136 155.546 143.92 143.967 144.787 132.461C145.03 129.448 144.996 129.303 144.232 128.904C143.295 128.359 139.303 128.577 136.943 129.303C135.103 129.847 132.708 131.481 131.285 133.187C129.966 134.675 128.3 137.579 128.3 138.341C128.3 138.631 128.057 139.357 127.779 139.938C126.46 142.551 127.953 153.041 131.632 166.943C131.771 167.379 131.979 167.742 132.118 167.742C132.257 167.742 133.263 166.363 134.34 164.657Z" fill="#FFA6A6" />
            <path d="M94.7599 47.0544C86.1118 55.8796 80.76 62.7201 75.2664 71.758C72.2537 76.7554 68.7094 83.5604 67.4335 86.8212C63.0386 97.9502 62.4361 99.616 61.3019 103.905C61.0184 105.039 60.5222 106.882 60.2032 108.016C58.1829 115.246 56.8361 123.079 56.7652 128.112C56.6589 133.499 57.5804 136.299 60.3449 139.099C62.7905 141.58 64.3145 142.36 67.2563 142.679C71.474 143.104 71.2613 143.459 71.5449 136.37C71.6512 133.003 71.9347 129.211 72.1474 127.935C73.1043 121.874 74.0258 117.16 74.841 113.935C75.6917 110.461 78.8106 100.821 79.7321 98.6945C83.4182 90.2591 84.3397 88.4161 88.3802 81.3275C92.2789 74.558 98.7295 66.2998 105.924 58.9277C109.079 55.7379 111.666 52.9733 111.737 52.7961C111.985 52.1227 101.707 41.1 100.856 41.1C100.679 41.1 97.9497 43.7582 94.7599 47.0544Z" fill="#FF4848" />
            <path d="M112.118 62.3363C103.417 70.823 96.3146 80.5171 90.526 91.8445C86.3 100.189 83.9562 106.368 81.7189 115.174C80.1209 121.459 79.8013 123.27 78.9845 130.159C78.0967 137.545 78.0611 142.339 78.8424 142.658C79.162 142.765 82.6423 142.871 86.6196 142.871C92.0175 142.871 93.9352 142.765 94.1483 142.41C94.2903 142.197 94.5389 139.747 94.681 137.012C95.7819 114.038 105.725 91.7025 122.381 74.8001L125.257 71.9238L123.517 69.2251C120.96 65.3546 116.273 58.7143 116.059 58.7143C115.953 58.7143 114.177 60.3478 112.118 62.3363Z" fill="#FFA6A6" />
            <path d="M127.355 82.6792C116.981 93.9216 109.939 106.885 106.33 121.254C104.63 128 103.728 134.324 103.728 139.207L103.728 142.51L105.22 142.72C107.579 143.072 118.577 142.755 118.994 142.334C119.202 142.123 119.514 140.05 119.688 137.767C120.069 132.672 120.624 129.686 122.255 123.819C124.788 114.79 128.534 107.237 134.814 98.5942L137 95.6079L135.959 92.7973C134.571 89.1084 130.824 81.0632 130.096 80.2551C129.957 80.1146 128.708 81.2037 127.355 82.6792Z" fill="#FF4848" />
            <path d="M137.828 108.617C132.014 117.272 128.219 128.272 127.348 139.203C127.105 142.065 127.14 142.203 127.906 142.582C128.846 143.1 132.849 142.893 135.217 142.203C137.062 141.686 139.465 140.134 140.892 138.513C142.215 137.1 143.886 134.341 143.886 133.617C143.886 133.341 144.13 132.651 144.408 132.1C145.602 129.91 144.234 119.651 140.544 106.444C140.405 106.031 140.196 105.686 140.056 105.686C139.917 105.686 138.907 106.996 137.828 108.617Z" fill="#FFA6A6" />
        </svg>
    ),
    google: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
    ),
    downArrow: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" {...props}><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
    )
}