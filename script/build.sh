#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# prepare
mkdir -p $DIR/../tmp
mkdir -p $DIR/../dist

# clone
cd $DIR/../tmp
git clone --depth=1 git@github.com:wkillerud/vscode-scss.git vscode-scss

# pull
cd $DIR/../tmp/vscode-scss
git clean -fd
git checkout .
git pull --rebase

# npm install & build
cd $DIR/../tmp/vscode-scss
npm ci

cd $DIR/../tmp/vscode-scss/server
npm ci
npm run test:compile

# copy to dist
cd $DIR/..

mkdir -p ./dist/sass-language-server
cp -r ./tmp/vscode-scss/server/out/* ./dist/

echo "Done"
