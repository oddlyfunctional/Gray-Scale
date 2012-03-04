# Gray Scale
Provides functions that convert an element and its children to gray scale. Useful when defining contrast between elements by luminosity.

## Usage
    /* Converts the entire page to gray scale */
    elementToGrayScale(document.body);

    /* Converts only the #header div and its children to gray scale */
    elementToGraScale(document.getElementById("header"));

    /* Converts only the background-color of the header to gray scale */
    toGrayScale(document.getElementById("header"), "background-color");

## Notes
Currently, it searches for the following css properties:
*   color
*   background-color
*   background-image (looking for gradients)

Convertion algorithm found at <http://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/>.
There's no plans for processing images.

## Contact
Any doubts or suggestions, talk to me at <mrodrigues.uff@gmail.com>! And don't be afraid to send me a pull request! :)

