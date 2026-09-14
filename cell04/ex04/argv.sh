#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    args=("$@")
    for arg in "${args[@]:0:3}"; do
        echo "$arg"
    done
fi