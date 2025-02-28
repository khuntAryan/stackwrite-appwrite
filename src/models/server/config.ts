import env from '../../../env';
import { Avatars, Client, Databases, Storage, Users } from 'node-appwrite'

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.key)

const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client);
export { databases, avatars, users, storage, client };