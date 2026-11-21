# JS_26

# 1. nvm-ის ინსტალაციის წყარო

# use https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script

# 2. შეამოწმეთ nvm-ის ვერსია
nvm version

# 3. ხელმისაწვდომი Node.js ვერსიების სია

nvm list

# 4. დააყენეთ საჭირო Node.js ვერსია
nvm install 22.12.0

# 5. გამოიყენეთ ვერსია
nvm use 22.12.0

# 6. შეამოწმეთ ნოუდის ვერსია

node -v

# 7. შეამოწმეთ npm-ის ვერსია

npm -v

# 8. Node.js პროექტის ინიციალიზაცია

npm init -y

# 9. ყველა პაკეტის დაყენება (თუ package.json-ში მითითებულია)

npm install

<!-- {
  "name": "my-js-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node main.js"
  },
} -->

# 10. Chalk პაკეტის დაყენება ფერებისთვის კონსოლში

npm install chalk

# 11. Prettier კოდის ფორმატერის დაყენება

npm install --save-dev prettier

# 12. კოდის ავტომატური ფორმატირების სკრიპტის დამატება package.json-ში

# "scripts": {

#  "format": "prettier --write \"**/*.js\""

# }

# 13. კოდის ფორმატირება

npm run format

# ან კონკრეტული ფაილისთვის:

npx prettier --write filename.js

# 14. პროექტის გაშვება

npm run start

# 15. Node modules-ის და package-lock.json-ის წაშლა (სუფთა გარემოსთვის)

rm -rf node_modules
rm -f package-lock.json

# 16. საჭიროების შემთხვევაში თავიდან ინსტალაცია

npm install
