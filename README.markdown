# Gray Scale
Provides functions that transform an element and its children to gray scale. Useful when defining contrast between elements by luminosity.

## Usage
    /* Transforms the entire page to gray scale */
    elementToGrayScale(document.body);

    /* Transforms only the #header div to gray scale */
    elementToGraScale(document.getElementById("header"));

    /* Transforms only the background-color of the header to gray scale */
    toGrayScale(document.getElementById("header"), "background-color");

## Notes
Currently, it supports the following css properties:
*   color
*   background-color
*   background-image

## Contact
Any doubts or suggestions, talk to me at <mrodrigues.uff@gmail.com>! And don't be afraid to send me a pull request! :)

