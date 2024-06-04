import conf from "../config/config";
import { Client, Account, ID} from "appwrite"

export class AuthService {
  client = new Client();
  account;

  constructor(){
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({email, password, name}){
    try{
      const userAccount = await this.account.create(ID.unique(),email, password, name);
      if(userAccount){
        //calls another method
        return this.logIn({email, password});
      }else{
        return userAccount;
      }
    }catch(error){
      throw error;
    }
  }

  async logIn({email, password}){
    try {
      return await this.account.createEmaailSession(email, password)
    } catch (error) {
      throw error;
      
    }
  }

  async getCurrentUser(){
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser:: error", error);
    }

    return null;
  }

  async logOut(){
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logOut:: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;