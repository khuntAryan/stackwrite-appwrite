import env from "@/env";
import { Client, Account, Storage, Avatars, Databases } from "appwrite";

const client = new Client()
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId); // Your project ID

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export {account, databases, avatars, storage};

