#!/bin/sh

# This sets up my blog.
#
# Idempotent.
#
# This can be run like
#
# $ cat setup.sh | ssh <hostname of EC2 machine> sh
#
# But first, create a user "david" by running
#
# ./create_role_account.sh rmc | ssh -i KEYFILE ubuntu@IP_ADDRESS sh
#


# Bail on any errors
set -e

CONFIG_DIR=$HOME/blog/aws_config

cd $HOME

sudo apt-get update

echo "Installing developer tools"
sudo apt-get install -y curl
sudo apt-get install -y python-pip
sudo apt-get install -y build-essential python-dev
sudo apt-get install -y git
sudo apt-get install -y unzip
sudo apt-get install -y ruby rubygems
sudo REALLY_GEM_UPDATE_SYSTEM=1 gem update --system

echo "Copying dotfiles"
git clone https://github.com/divad12/dotfiles.git || ( cd dotfiles && git pull )
( cd dotfiles && ./symlink.sh )

echo "Installing nginx"
sudo apt-get install -y nginx
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sfnv $CONFIG_DIR/etc/nginx/sites-available/blog \
  /etc/nginx/sites-available/blog
sudo ln -sfnv /etc/nginx/sites-available/blog /etc/nginx/sites-enabled/blog
sudo service nginx restart

echo "Deploying blog"
mkdir -p www/resume
./deploy.sh
