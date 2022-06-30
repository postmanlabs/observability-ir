// source: method.proto
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

goog.provide('proto.api_spec.Primitive');
goog.provide('proto.api_spec.Primitive.ValueCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.api_spec.AkitaAnnotations');
goog.require('proto.api_spec.Bool');
goog.require('proto.api_spec.Bytes');
goog.require('proto.api_spec.Double');
goog.require('proto.api_spec.Float');
goog.require('proto.api_spec.Int32');
goog.require('proto.api_spec.Int64');
goog.require('proto.api_spec.String');
goog.require('proto.api_spec.Uint32');
goog.require('proto.api_spec.Uint64');

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
proto.api_spec.Primitive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api_spec.Primitive.oneofGroups_);
};
goog.inherits(proto.api_spec.Primitive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_spec.Primitive.displayName = 'proto.api_spec.Primitive';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api_spec.Primitive.oneofGroups_ = [[2,3,4,5,6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.api_spec.Primitive.ValueCase = {
  VALUE_NOT_SET: 0,
  BOOL_VALUE: 2,
  BYTES_VALUE: 3,
  STRING_VALUE: 4,
  INT32_VALUE: 5,
  INT64_VALUE: 6,
  UINT32_VALUE: 7,
  UINT64_VALUE: 8,
  DOUBLE_VALUE: 9,
  FLOAT_VALUE: 10
};

/**
 * @return {proto.api_spec.Primitive.ValueCase}
 */
proto.api_spec.Primitive.prototype.getValueCase = function() {
  return /** @type {proto.api_spec.Primitive.ValueCase} */(jspb.Message.computeOneofCase(this, proto.api_spec.Primitive.oneofGroups_[0]));
};



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
proto.api_spec.Primitive.prototype.toObject = function(opt_includeInstance) {
  return proto.api_spec.Primitive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_spec.Primitive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_spec.Primitive.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeHint: jspb.Message.getFieldWithDefault(msg, 1, ""),
    boolValue: (f = msg.getBoolValue()) && proto.api_spec.Bool.toObject(includeInstance, f),
    bytesValue: (f = msg.getBytesValue()) && proto.api_spec.Bytes.toObject(includeInstance, f),
    stringValue: (f = msg.getStringValue()) && proto.api_spec.String.toObject(includeInstance, f),
    int32Value: (f = msg.getInt32Value()) && proto.api_spec.Int32.toObject(includeInstance, f),
    int64Value: (f = msg.getInt64Value()) && proto.api_spec.Int64.toObject(includeInstance, f),
    uint32Value: (f = msg.getUint32Value()) && proto.api_spec.Uint32.toObject(includeInstance, f),
    uint64Value: (f = msg.getUint64Value()) && proto.api_spec.Uint64.toObject(includeInstance, f),
    doubleValue: (f = msg.getDoubleValue()) && proto.api_spec.Double.toObject(includeInstance, f),
    floatValue: (f = msg.getFloatValue()) && proto.api_spec.Float.toObject(includeInstance, f),
    akitaAnnotations: (f = msg.getAkitaAnnotations()) && proto.api_spec.AkitaAnnotations.toObject(includeInstance, f),
    containsRandomValue: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    formatsMap: (f = msg.getFormatsMap()) ? f.toObject(includeInstance, undefined) : [],
    formatKind: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.api_spec.Primitive}
 */
proto.api_spec.Primitive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_spec.Primitive;
  return proto.api_spec.Primitive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_spec.Primitive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_spec.Primitive}
 */
proto.api_spec.Primitive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeHint(value);
      break;
    case 2:
      var value = new proto.api_spec.Bool;
      reader.readMessage(value,proto.api_spec.Bool.deserializeBinaryFromReader);
      msg.setBoolValue(value);
      break;
    case 3:
      var value = new proto.api_spec.Bytes;
      reader.readMessage(value,proto.api_spec.Bytes.deserializeBinaryFromReader);
      msg.setBytesValue(value);
      break;
    case 4:
      var value = new proto.api_spec.String;
      reader.readMessage(value,proto.api_spec.String.deserializeBinaryFromReader);
      msg.setStringValue(value);
      break;
    case 5:
      var value = new proto.api_spec.Int32;
      reader.readMessage(value,proto.api_spec.Int32.deserializeBinaryFromReader);
      msg.setInt32Value(value);
      break;
    case 6:
      var value = new proto.api_spec.Int64;
      reader.readMessage(value,proto.api_spec.Int64.deserializeBinaryFromReader);
      msg.setInt64Value(value);
      break;
    case 7:
      var value = new proto.api_spec.Uint32;
      reader.readMessage(value,proto.api_spec.Uint32.deserializeBinaryFromReader);
      msg.setUint32Value(value);
      break;
    case 8:
      var value = new proto.api_spec.Uint64;
      reader.readMessage(value,proto.api_spec.Uint64.deserializeBinaryFromReader);
      msg.setUint64Value(value);
      break;
    case 9:
      var value = new proto.api_spec.Double;
      reader.readMessage(value,proto.api_spec.Double.deserializeBinaryFromReader);
      msg.setDoubleValue(value);
      break;
    case 10:
      var value = new proto.api_spec.Float;
      reader.readMessage(value,proto.api_spec.Float.deserializeBinaryFromReader);
      msg.setFloatValue(value);
      break;
    case 11:
      var value = new proto.api_spec.AkitaAnnotations;
      reader.readMessage(value,proto.api_spec.AkitaAnnotations.deserializeBinaryFromReader);
      msg.setAkitaAnnotations(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setContainsRandomValue(value);
      break;
    case 13:
      var value = msg.getFormatsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormatKind(value);
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
proto.api_spec.Primitive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_spec.Primitive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_spec.Primitive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_spec.Primitive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeHint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBoolValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api_spec.Bool.serializeBinaryToWriter
    );
  }
  f = message.getBytesValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api_spec.Bytes.serializeBinaryToWriter
    );
  }
  f = message.getStringValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api_spec.String.serializeBinaryToWriter
    );
  }
  f = message.getInt32Value();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api_spec.Int32.serializeBinaryToWriter
    );
  }
  f = message.getInt64Value();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api_spec.Int64.serializeBinaryToWriter
    );
  }
  f = message.getUint32Value();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api_spec.Uint32.serializeBinaryToWriter
    );
  }
  f = message.getUint64Value();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api_spec.Uint64.serializeBinaryToWriter
    );
  }
  f = message.getDoubleValue();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api_spec.Double.serializeBinaryToWriter
    );
  }
  f = message.getFloatValue();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api_spec.Float.serializeBinaryToWriter
    );
  }
  f = message.getAkitaAnnotations();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api_spec.AkitaAnnotations.serializeBinaryToWriter
    );
  }
  f = message.getContainsRandomValue();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getFormatsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
  f = message.getFormatKind();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string type_hint = 1;
 * @return {string}
 */
proto.api_spec.Primitive.prototype.getTypeHint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.setTypeHint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Bool bool_value = 2;
 * @return {?proto.api_spec.Bool}
 */
proto.api_spec.Primitive.prototype.getBoolValue = function() {
  return /** @type{?proto.api_spec.Bool} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.Bool, 2));
};


/**
 * @param {?proto.api_spec.Bool|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setBoolValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api_spec.Primitive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearBoolValue = function() {
  return this.setBoolValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Bytes bytes_value = 3;
 * @return {?proto.api_spec.Bytes}
 */
proto.api_spec.Primitive.prototype.getBytesValue = function() {
  return /** @type{?proto.api_spec.Bytes} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.Bytes, 3));
};


/**
 * @param {?proto.api_spec.Bytes|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setBytesValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api_spec.Primitive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearBytesValue = function() {
  return this.setBytesValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasBytesValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional String string_value = 4;
 * @return {?proto.api_spec.String}
 */
proto.api_spec.Primitive.prototype.getStringValue = function() {
  return /** @type{?proto.api_spec.String} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.String, 4));
};


/**
 * @param {?proto.api_spec.String|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api_spec.Primitive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearStringValue = function() {
  return this.setStringValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Int32 int32_value = 5;
 * @return {?proto.api_spec.Int32}
 */
proto.api_spec.Primitive.prototype.getInt32Value = function() {
  return /** @type{?proto.api_spec.Int32} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.Int32, 5));
};


/**
 * @param {?proto.api_spec.Int32|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setInt32Value = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.api_spec.Primitive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearInt32Value = function() {
  return this.setInt32Value(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasInt32Value = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Int64 int64_value = 6;
 * @return {?proto.api_spec.Int64}
 */
proto.api_spec.Primitive.prototype.getInt64Value = function() {
  return /** @type{?proto.api_spec.Int64} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.Int64, 6));
};


/**
 * @param {?proto.api_spec.Int64|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setInt64Value = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.api_spec.Primitive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearInt64Value = function() {
  return this.setInt64Value(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasInt64Value = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Uint32 uint32_value = 7;
 * @return {?proto.api_spec.Uint32}
 */
proto.api_spec.Primitive.prototype.getUint32Value = function() {
  return /** @type{?proto.api_spec.Uint32} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.Uint32, 7));
};


/**
 * @param {?proto.api_spec.Uint32|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setUint32Value = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.api_spec.Primitive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearUint32Value = function() {
  return this.setUint32Value(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasUint32Value = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Uint64 uint64_value = 8;
 * @return {?proto.api_spec.Uint64}
 */
proto.api_spec.Primitive.prototype.getUint64Value = function() {
  return /** @type{?proto.api_spec.Uint64} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.Uint64, 8));
};


/**
 * @param {?proto.api_spec.Uint64|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setUint64Value = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.api_spec.Primitive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearUint64Value = function() {
  return this.setUint64Value(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasUint64Value = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Double double_value = 9;
 * @return {?proto.api_spec.Double}
 */
proto.api_spec.Primitive.prototype.getDoubleValue = function() {
  return /** @type{?proto.api_spec.Double} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.Double, 9));
};


/**
 * @param {?proto.api_spec.Double|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setDoubleValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.api_spec.Primitive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearDoubleValue = function() {
  return this.setDoubleValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasDoubleValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Float float_value = 10;
 * @return {?proto.api_spec.Float}
 */
proto.api_spec.Primitive.prototype.getFloatValue = function() {
  return /** @type{?proto.api_spec.Float} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.Float, 10));
};


/**
 * @param {?proto.api_spec.Float|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setFloatValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.api_spec.Primitive.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearFloatValue = function() {
  return this.setFloatValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasFloatValue = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional AkitaAnnotations akita_annotations = 11;
 * @return {?proto.api_spec.AkitaAnnotations}
 */
proto.api_spec.Primitive.prototype.getAkitaAnnotations = function() {
  return /** @type{?proto.api_spec.AkitaAnnotations} */ (
    jspb.Message.getWrapperField(this, proto.api_spec.AkitaAnnotations, 11));
};


/**
 * @param {?proto.api_spec.AkitaAnnotations|undefined} value
 * @return {!proto.api_spec.Primitive} returns this
*/
proto.api_spec.Primitive.prototype.setAkitaAnnotations = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearAkitaAnnotations = function() {
  return this.setAkitaAnnotations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.hasAkitaAnnotations = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool contains_random_value = 12;
 * @return {boolean}
 */
proto.api_spec.Primitive.prototype.getContainsRandomValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.setContainsRandomValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * map<string, bool> formats = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.api_spec.Primitive.prototype.getFormatsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.clearFormatsMap = function() {
  this.getFormatsMap().clear();
  return this;};


/**
 * optional string format_kind = 14;
 * @return {string}
 */
proto.api_spec.Primitive.prototype.getFormatKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_spec.Primitive} returns this
 */
proto.api_spec.Primitive.prototype.setFormatKind = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


