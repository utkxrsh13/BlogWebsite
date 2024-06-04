import conf from "../config/config";
import { Client,ID, Databases, Storage, Query} from "appwrite"

export class Service{
  client = new Client();
  databases;
  bucket;

  constructor(){
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  
}

const service = new Service()
export default service;