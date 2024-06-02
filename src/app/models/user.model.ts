import { ISerializable } from "../interfaces/i-serializable.interface";
import { BaseModel } from "./base.model";

export class User extends BaseModel implements ISerializable{
    public username: string = '';
    public password: string = '';

    public override deserialize(input?: any) {
        this.username = input?.username;
        this.password = input?.password;
    }
}