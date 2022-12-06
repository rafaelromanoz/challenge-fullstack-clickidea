#!/bin/sh

echo "Starting get ready!!!"
npx sequelize-cli db:migrate
npm start