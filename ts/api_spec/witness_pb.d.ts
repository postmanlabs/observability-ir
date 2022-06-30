// package: api_spec
// file: witness.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as method_pb from "./method_pb";

export class Witness extends jspb.Message { 

    hasMethod(): boolean;
    clearMethod(): void;
    getMethod(): method_pb.Method | undefined;
    setMethod(value?: method_pb.Method): Witness;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Witness.AsObject;
    static toObject(includeInstance: boolean, msg: Witness): Witness.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Witness, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Witness;
    static deserializeBinaryFromReader(message: Witness, reader: jspb.BinaryReader): Witness;
}

export namespace Witness {
    export type AsObject = {
        method?: method_pb.Method.AsObject,
    }
}
