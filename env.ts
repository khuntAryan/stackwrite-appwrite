const env = {
    appwrite:{
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
        projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        key: String(process.env.APPWRITE_API_KEY)
    }
}
export default env