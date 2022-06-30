// source: spec.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.api_spec.APISpec');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.api_spec.Method');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_spec.APISpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api_spec.APISpec.repeatedFields_, null);
};
goog.inherits(proto.api_spec.APISpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_spec.APISpec.displayName = 'proto.api_spec.APISpec';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api_spec.APISpec.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_spec.APISpec.prototype.toObject = function(opt_includeInstance) {
  return proto.api_spec.APISpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_spec.APISpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_spec.APISpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodsList: jspb.Message.toObjectList(msg.getMethodsList(),
    proto.api_spec.Method.toObject, includeInstance),
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_spec.APISpec}
 */
proto.api_spec.APISpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_spec.APISpec;
  return proto.api_spec.APISpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_spec.APISpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_spec.APISpec}
 */
proto.api_spec.APISpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_spec.Method;
      reader.readMessage(value,proto.api_spec.Method.deserializeBinaryFromReader);
      msg.addMethods(value);
      break;
    case 2:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_spec.APISpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_spec.APISpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_spec.APISpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_spec.APISpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api_spec.Method.serializeBinaryToWriter
    );
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * repeated Method methods = 1;
 * @return {!Array<!proto.api_spec.Method>}
 */
proto.api_spec.APISpec.prototype.getMethodsList = function() {
  return /** @type{!Array<!proto.api_spec.Method>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api_spec.Method, 1));
};


/**
 * @param {!Array<!proto.api_spec.Method>} value
 * @return {!proto.api_spec.APISpec} returns this
*/
proto.api_spec.APISpec.prototype.setMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api_spec.Method=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api_spec.Method}
 */
proto.api_spec.APISpec.prototype.addMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api_spec.Method, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_spec.APISpec} returns this
 */
proto.api_spec.APISpec.prototype.clearMethodsList = function() {
  return this.setMethodsList([]);
};


/**
 * map<string, string> tags = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api_spec.APISpec.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_spec.APISpec} returns this
 */
proto.api_spec.APISpec.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
  return this;};


