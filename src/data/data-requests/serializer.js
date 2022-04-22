import {serialize, deserialize, ObjectSchema} from "atomicassets"

// this schema is used for serialisation / deserialization
const schema = ObjectSchema([
    {"name": "attr1", "type": "int32"}, // int8, int16, int32, int64
    {"name": "attr2", "type": "uint32"}, // uint8, uint16, uint32, uint64
    {"name": "attr3", "type": "fixed32"}, // fixed8, fixed16, fixed32, fixed64
    
    {"name": "attr4", "type": "bool"},
    
    {"name": "attr5", "type": "bytes"}, // variable length raw bytes (UInt8Array)
    {"name": "attr6", "type": "string"}, // variable length string
    
    {"name": "attr7", "type": "ipfs"}, // ipfs hash
    {"name": "attr7", "type": "float"}, 
    {"name": "attr9", "type": "double"},
    
    {"name": "arr1", "type": "int32[]"}, // you can add [] to define a type array
]);

// the object which will be serialized does not need to have all attributes
// and only the ones who are set, are transferred
const rawObject = {
    "attr1": -5843
};

// serialize
const serializedData = serialize(rawObject, schema);
// deserialize
const deserializedData = deserialize(serializedData, schema);
// deserializedData === rawObject