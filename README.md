# akita-ir

Intermediate Representation for APIs

## Contents

This repo contains protobuf definitions and generator scripts for Go, Python and Javascript.

We check the generated code into source control so we can use native language
tooling without having to worry about invoking the protoc compiler.

## Updating Protobuf Definition

- Make the change under `proto/`
- Run `make build`
- Update `akita-libs` with the new version of the Go package
- In `akita-libs/spec_utils/ir_hash`, update `gen.go` with any new message
  types, or new inner structs from oneof types. Then run `make` in that
  directory to generate a new set of hash functions. (If you add a new
  file, add that file to the list in `gen.go` so that it will be checked
  for version mismatch.)

## Directory Structure

```
proto/  # protobuf definitions
  foo/  # protobuf package
  ...

go/     # Generated go code
  foo/

py/     # Generated python code
  foo/

js/     # Generated javascript code
  foo/
```
