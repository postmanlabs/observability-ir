# akita-ir

Intermediate Representation for APIs

## Contents

This repo contains protobuf definitions and generator scripts for Go.

We check the generated code into source control so we can use native language
tooling without having to worry about invoking the protoc compiler.

## Updating Protobuf Definition

- Make the change under `proto/`
- Run `make build`

## Directory Structure

```
proto/  # protobuf definitions
  foo/  # protobuf package
  ...

go/     # Generated go code
  foo/

py/     # Generated python code
  foo/
```
