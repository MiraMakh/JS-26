# JS_26

# TypeScript პროექტის ინსტალაცია

ეს პროექტი იყენებს TypeScript-ს ტიპების უსაფრთხოების, უკეთესი ინსტრუმენტების მხარდაჭერის და მასშტაბური კოდის უზრუნველსაყოფად.

## ინსტალაციის ნაბიჯები

შეასრულე შემდეგი ნაბიჯები TypeScript-ის დაყენებისთვის პროექტში.

## 1. npm პროექტის ინიციალიზაცია

npm init -y

## 2. TypeScript-ის ინსტალაცია

npm install typescript --save-dev

## 3. TypeScript კონფიგურაციის ფაილის (tsconfig.json) გენერაცია

npx tsc --init

{
// TypeScript კომპილატორის პარამეტრების მთავარი ბლოკი
"compilerOptions": {
// განსაზღვრავს, რა ECMAScript (JavaScript) ვერსიაში დაკომპილირდეს კოდი (აქ: ES2020)
"target": "ES2020",

    // განსაზღვრავს მოდულების სისტემას; "NodeNext" კარგია, როცა package.json-ში "type": "module" გაქვს მითითებული
    "module": "NodeNext",

    // მიუთითებს საწყის საქაღალდეს, საიდანაც TypeScript-ის (.ts) ფაილები უნდა წაიკითხოს
    "rootDir": "./src",

    // მიუთითებს გამომავალ საქაღალდეს, სადაც დაკომპილირებული JavaScript-ის (.js) ფაილები ჩაიწერება
    "outDir": "./dist",

    // ააქტიურებს ტიპების შემოწმების ყველა მკაცრ რეჟიმს (მაგ. noImplicitAny, strictNullChecks და სხვ.)
    "strict": true,

    // უზრუნველყოფს ES მოდულების და CommonJS მოდულების უფრო მარტივ და თავსებად იმპორტს
    "esModuleInterop": true,

    // აიძულებს ფაილების სახელებში დიდი/პატარა ასოების (case) თანმიმდევრულობას სხვადასხვა ოპერაციულ სისტემაზე პრობლემების ასარიდებლად
    "forceConsistentCasingInFileNames": true,

    // გამოტოვებს ტიპების შემოწმებას `.d.ts` ბიბლიოთეკის ფაილებში, რაც კომპილაციას აჩქარებს
    "skipLibCheck": true,

    // განსაზღვრავს, როგორ მოძებნოს კომპილატორმა იმპორტირებული მოდულები ("NodeNext" შეესაბამება თანამედროვე Node.js-ის მოდულების რეზოლუციას)
    "moduleResolution": "NodeNext"

},

// მიუთითებს, რომელი ფაილები ან საქაღალდეები მოხვდეს კომპილაციაში (აქ: მხოლოდ `src` საქაღალდე)
"include": ["src"]
}

## 4. პროექტის სტრუქტურის შექმნა

<!-- ქმნის ახალ საქაღალდეს სახელწოდებით src (source — საწყისი კოდი) მიმდინარე დირექტორიაში. (mkdir ნიშნავს Make Directory) -->
mkdir src

<!-- ახლად შექმნილ src საქაღალდეში ქმნის ცარიელ TypeScript ფაილს სახელწოდებით index.ts.
-Path src\index.ts — უთითებს ფაილის მისამართს და სახელს.
-ItemType File — აკონკრეტებს, რომ იქმნება ფაილი (და არა საქაღალდე).
მოკლედ, ამ ორი ბრძანებით ქმნი src/index.ts ფაილს, სადაც შენს მთავარ TypeScript კოდს ჩაწერ. -->
New-Item -Path src\index.ts -ItemType File

## 5. package.json-ს სკრიპტების განახლება

"scripts": {
"start": "node dist/index.js",
"build": "tsc",
"format": "prettier --write \"**/*.ts\""
}

## 5. TypeScript-ის კომპილაცია JavaScript-ში

npm run build

## 6. JS გაშვება Node.js-ით:

npm start

### 7. გარდა ამისა, შეგიძლია გაშვება პირდაპირ watch mode-ში:

npx tsc --watch
