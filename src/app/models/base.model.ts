import { ISerializable } from "../interfaces/i-serializable.interface";

export class BaseModel implements ISerializable {
    public id: string = '';

    public deserialize(input?: any) {
        this.id = input?.id;
    }
}