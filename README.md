# convert-app

## Description

This app is a currency converter that allows the user to select two currencies and see the exchange rate between them. The app uses the latest exchange rate data from an external API to calculate the conversion rate between the two currencies.

The app has two input fields: one for the amount the user wants to convert, and one for the converted amount in the second currency. The user can enter an amount in either field, and the app will automatically calculate the equivalent amount in the other currency based on the current exchange rate.

The user can select the currencies they want to convert from and to using two dropdown selectors. The app will fetch the latest exchange rate data from the API whenever the user changes either currency selector, and will update the exchange rate and the converted amount fields accordingly.

The app also allows the user to switch the currencies they are converting from and to by clicking on an arrow between the input fields. This will swap the currencies in the selectors and update the exchange rate and converted amount fields based on the new selection.

The app is visually appealing and easy to use, with clear labels and input fields. If there are any errors in fetching the exchange rate data from the API, the app will display an appropriate error message to the user.

## Installation

N/A

## Usage

1. Open the app in a web browser.
2. The app will automatically fetch the latest exchange rate data from an external API and display the currency conversion options on the screen.
3. Use the first dropdown selector to choose the currency you want to convert from. You can select any currency from the list of options, including the base currency.
4. Use the second dropdown selector to choose the currency you want to convert to. Again, you can select any currency from the list of options, including the base currency.
5. Enter the amount you want to convert in the input field below the first dropdown selector. The converted amount will automatically appear in the input field below the second dropdown selector.
6. If you want to convert the amount from the second currency to the first, click the arrow between the input fields. This will swap the currencies in the selectors and update the exchange rate and converted amount fields based on the new selection.
7. If you want to convert a different amount, simply edit the value in one of the input fields. The converted amount will automatically update based on the current exchange rate.
8. If there are any errors in fetching the exchange rate data from the API, the app will display an appropriate error message to the user.

## User Story:

As a user, I want to be able to convert one currency to another using the latest exchange rates, so that I can easily see the value of my money in different currencies.

As a user, I want to be able to select the currency I want to convert from and the currency I want to convert to, so that I can choose the specific currencies I am interested in.

As a user, I want to see the exchange rate between the two currencies I have selected, so that I can understand how my money will be converted.

As a user, I want to be able to enter an amount in one currency and see the equivalent amount in the other currency, so that I can quickly and easily calculate the exchange rate.

As a user, I want the exchange rate to update automatically when I change the currencies I want to convert from and to, so that I can see the most up-to-date exchange rates.

As a user, I want to be able to switch the currencies I am converting from and to, so that I can quickly see the conversion in the opposite direction.

As a user, I want the app to be easy to use and visually appealing, so that I can enjoy using it and quickly understand how to convert currencies.

## Acceptance Criteria:

The app should load without any errors and display the heading "Convert app".

The app should display two currency selectors and two amount input fields.

The currency selectors should initially be set to the user's local currency and the first currency listed in the exchange rate API.

The app should fetch the latest exchange rates from the API when it loads and display the exchange rate between the two currencies selected by the user.

The exchange rate should update automatically whenever the user changes either currency selector.

The user should be able to enter an amount in either input field and see the equivalent amount in the other input field.

The app should correctly calculate the exchange rate based on the latest data from the API.
The user should be able to switch the currencies they are converting from and to by clicking on the arrow between the input fields.

The app should handle errors gracefully and display an appropriate message if the API is unavailable or the data cannot be retrieved.

The app should be visually appealing and easy to use, with clear labels and input fields.

## Screenshot

![Alt text](/public/images/Screenshot 2023-03-30 at 19.08.38.png)

## Deplyed page

https://anamaria9164.github.io/Code-Quiz/

## Credits

N/A

## License

MIT license

