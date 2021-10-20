#!/bin/bash

set -euo pipefail

SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# Using namely/protoc:1.39_0 to output go code using
# golang protobuf APIv2.
# Previously used 1:26_1 to use golang api v1.
PROTOC_VERSION=namely/protoc:1.39_0

pushd ${SCRIPTPATH} > /dev/null

for d in proto/*; do
  pkg=$(basename ${d})
  mkdir -p go/${pkg}
  mkdir -p py/${pkg}

  # Use absolute path because docker volume likes that.
  proto_dir=$(cd ${d}; pwd)
  go_out=$(cd go/${pkg}; pwd)
  py_out=$(cd py/${pkg}; pwd)

  docker run --rm \
    -u $(id -u ${USER}):$(id -g ${USER}) \
    -v ${proto_dir}:/defs \
    -v ${go_out}:/go_out \
    --entrypoint /bin/sh \
    ${PROTOC_VERSION} \
    -c '/usr/local/bin/protoc -I /opt/include -I /defs --go_out paths=source_relative:/go_out /defs/*.proto'

  docker run --rm \
    -u $(id -u ${USER}):$(id -g ${USER}) \
    -v ${proto_dir}:/defs \
    -v ${py_out}:/py_out \
    --entrypoint /bin/sh \
    ${PROTOC_VERSION} \
    -c '/usr/local/bin/protoc -I /opt/include -I /defs --python_out /py_out /defs/*.proto'
done

popd > /dev/null
