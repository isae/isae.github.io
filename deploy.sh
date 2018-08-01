#!/usr/bin/env bash
rm -rf ./dist/*
ng build --prod
mv ./dist/me/* ./dist/
rm -rf ./dist/me/
ngh --branch master --name isae
