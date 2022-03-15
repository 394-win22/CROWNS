# CROWNS

**Development has been suspended on this project** since March 2022. This guide offers background on the CROWNS webapp and instructions for initializing the project as it was left. 

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
  - [Firebase](#firebase)
  - [Data](#data)
- [Next Steps](#next-steps)
- [Known Bugs and Issues](#bugs-and-issues)
- [Contributors](#contributors)
  - [Developers](#developers)
  - [Clients](#clients)


## Background

CROWNS is a web app designed to help women of color learn what their hair type is and learn more about how to care for their hair. Users can fill out a questionairre to learn what their hair type is, with the available hair types being 1A through 4C. Additionally, users can read a short description of what their assigned hair type means, view products that can help them treat their hair, and choose goals they want to focus on with their hair as well as challenges they currently face.

In the future, users should be able to make posts to a community board (currently the community board is static) and view and comment on posts other users made. They should also be able to filter posts to view those by others who share their hair type. Also, users will be able to view stylists near their location and see services offered by those stylists.

This project was started in February 2022 as part of the MPD2 program at Northwestern University, and the original developers were students enrolled in CS 394 also at Northwestern University. The project originally concluded on March 11, 2022.

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

The only global dependency you may need is firebase-tools which can be installed like so:

```sh
$ npm install -g firebase-tools
```

The remainder of the dependencies can be installed with:

```sh
$ npm i
```

## Usage

After installing the necessary dependencies, run the app locally with the following:

```sh
$ npm start
# Starts the app locally on localhost:3000
```

In order to test the app using jest, run the following in a new console after starting the app:

```sh
$ npm run test
```

In order to test the app using cypress, run the following in a new console after starting the app:

```sh
$ npm run cy:open
```

In order to deploy the app to firebase, make a pull request to develop or main on github and the deployment will automatically occur as long as firebase is set up. If not, read the next section.

### Firebase

If firebase is not already set up, you should create a new project on [firebase](https://console.firebase.google.com/u/0/). Once the new project is created, find project settings and find the block of code called firebaseConfig (make sure npm is checked). You can paste this information into [firebase.js](src/utilities/firebase.js). Additionally, the files [.firebaserc](.firebaserc), [firebase-hosting-merge.yml](firebase-hosting-merge.yml), and [firebase-hosting-pull-request.yml](firebase-hosting-pull-request.yml) will need updated values for "projectId".

Once this is set up, pull requests to the main and develop branches should cause the production and developer sites to build automatically.

### Data

All of the data for [hair types](src/data/Hairtypes.js), [products](src/data/Products.js), [quiz questions](src/data/Questions.js), and [community posts](src/data/Post.js) can be found in the [data](src/data/) folder.
Each file has a example schema at the top of the file for how data should be structured. The questions data is currently set up such that questions 1-4 are used in dropdowns from the answers of question 0. The `PlainQuizQuestion` components does not use dropdowns or have subquestions, while the `DropdownQuizQuestion` does both.


User data is stored on firebase in the firestore. The structure for user data can be viewed in [firebase.js](src/utilities/firebase.js).

## Next Steps

- Allow users to post and comment on the community page.
- Add in information for hairstyles of all types.
- List stylists in the area for all hair types, including a map where users can see a stylist's location. 
- Make a more comprehensive quiz so that absolute beginners are able to determine their hairtype.
- For each product, shows detail information on a new page, including prices and description
- Allow transactions of products to be made through the app, including a shopping cart functionality and allowing users to sort through products depending on price.
- Add in more comprehensive resources for users' individual hair types and goals for hair.
- Allow users to log their hair journey in a diary that populates a calendar on their account so they can see the progress they've made.
- Selected goals should appear on the user's Profile page.

## Known Bugs And Issues

- Unable to perform emulator CI on Github actions, failed to start emulator
- Log in on Profile page might not upload previous survey result to firebase

## Contributors

This project was created by Team Blue.

### Developers

The developer team members were students in CS 394 Agile Software Development.

- [Ben Fisk](https://github.com/bfiskers)
- [Bradley Pawlow](https://github.com/BrianGleason)
- [Brian Gleason](https://github.com/bpawlow)
- [James White](https://github.com/jimmy-white)
- [Jeff Lee](https://github.com/jeffjwl)
- [Qiuyang Xu](https://github.com/Timxuv587)
- [Seth May](https://github.com/sethdmay)

The developers also developed [EcoExchange](https://github.com/394-win22/EcoExchange) (*warning - partially incomplete and buggy*) as part of the same class.

### Clients

The client team members were students in the MPD^2 program.

- Hunter Loveland
- John Stokvis
- Ogechi Anyanwu
- Sean Kim
- Taryn Sack
