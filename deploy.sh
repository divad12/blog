#!/bin/sh

# Updates my blog on my server.
# Can be run either directly on the machine, or by running
#
# $ cat deploy.sh | ssh david sh
#

set -e  # Bail on errors

cd $HOME/blog

git pull

echo "Running Jekyll"
jekyll
