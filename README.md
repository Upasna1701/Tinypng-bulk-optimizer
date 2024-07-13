# Tinypng-bulk-optimizer

# Image Optimizer

## Overview

This project is an image optimizer that uses TinyPNG to compress images. You can easily optimize around 500 images per day using a single API key from TinyPNG. The optimized images will retain their original names and folder structure, allowing you to directly replace your existing folder without any hassle.

## Features

- Optimize up to 500 images per day with a single API key.
- Retains the original names and folder structure of the images.
- Simple integration with your existing projects.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Gulp](https://gulpjs.com/)

## Installation

1. **Clone the repository:**

2. **Install Gulp:**

    If you haven't installed Gulp globally, you can install it by following the instructions [here](https://gulpjs.com/docs/en/getting-started/quick-start).

    To install Gulp globally, you can use:

    ```sh
    npm install --global gulp-cli
    ```

3. **Install project dependencies:**

    ```sh
    npm install
    ```

4. **Set up TinyPNG API:**

    - Login to your TinyPNG account and navigate to the API section.
    - Generate an API key.
    - Replace the API key in the `gulpfile.js` with your newly generated key:

    ```js
    key : 'YOUR_API_KEY_HERE';
    ```

## Usage

1. **Add Images:**

    Place the images you want to optimize in the `app/images` folder.

2. **Run the optimizer:**

    Open your terminal and navigate to the project directory. Run the following command:

    ```sh
    gulp
    ```

    The images will start getting optimized, and you can see the progress in the terminal.

3. **Retrieve Optimized Images:**

    The optimized images will be saved in the `assets/images` folder. You can directly replace your existing folder with this optimized folder without any need for further adjustments.

## Notes

- Ensure you have an active TinyPNG API key to optimize images.
- The optimized images will maintain their original file names and directory structure, making it easy to replace your original images.

## Conclusion

This image optimizer is a perfect solution for bulk image optimization, preserving the original names and structure of the images. It integrates seamlessly with your existing workflow, saving you time and effort.

For any issues or contributions, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/Upasna1701/Tinypng-bulk-optimizer).


