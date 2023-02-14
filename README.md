## Google Autocomplete lcnz
Google Autocomplete lcnz is a Mendix widget that utilizes Google Autocomplete Api to provide autocomplete to the user as well as provide place and business information to the database.

## Features
+ Autocomplete
+ Place Data: street number, street name, suburb, city, country, and postal code
+ Businesss Data: name, phone number, and website

## Usage
1. Input Api key (necessary)
2. Input country name (only one at this stage, necessary)
3. Input attributes (leave an attribute empty if not needed)

## Issues, suggestions and feature requests
+ Currently autocomplete only handles searching in one country.

## Development and contribution
1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
+ When building make sure you set the correct projectPath in package.json.

Contact nick at nick.hunt@lowcode.co.nz
