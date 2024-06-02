import { ISerializable } from "../interfaces/i-serializable.interface";

export class GeoData implements ISerializable {
    public latitude: number = 0;
    public longitude: number = 0;
    public accuracy: number = 0;
    public timestamp: Date = new Date();

    public deserialize(input: any): GeoData {
        this.latitude = input?.latitude;
        this.longitude = input?.longitude;
        this.accuracy = input?.accuracy;
        this.timestamp = input?.timestamp;

        return this;
    }
}