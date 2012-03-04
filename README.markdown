# Gray Scale
Provides functions that convert an element and its children to gray scale. Useful when defining contrast between elements by luminosity. Note that the execution of this algorithm is irreversible, since its methods intrinsically lose information. To return the colors to normal, you must reload the page.

## Usage
    /* Converts the entire page to gray scale */
    GrayScale.elementToGrayScale(document.body);

    /* Converts only the #header div and its children to gray scale */
    GrayScale.elementToGraScale(document.getElementById("header"));

    /* Converts only the background-color of the header to gray scale */
    GrayScale.propertyToGrayScale(document.getElementById("header"), "background-color");

    /* Select the gray calculation method */
    GrayScale.method = "average";

    /* Check the available methods */
    GrayScale.METHODS;

![luminosity method](/gray-scale-before-after.png "Application of the luminosity method")

## Notes
Currently, it doesn't support alpha channel, and it searches for the following css properties:

*   color
*   background-color
*   background-image (looking for gradients)

Convertion methods found at <http://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/>.
There's no plans for image processing for now, so it won't gray-scale them.

## Contact
Any doubts or suggestions, talk to me at <mrodrigues.uff@gmail.com>! And don't be afraid to send me a pull request! :)

