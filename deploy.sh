#!/usr/bin/env bash

# TODO: give --delete option to rsync
jekyll build && rsync -avz _site/ david:~/www
