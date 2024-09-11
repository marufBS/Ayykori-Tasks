# Task Solution of AyyKori

This React application consists of two separate tasks, each implemented on different pages:

## 1. Recursive Partitioning Layout Builder

The **Recursive Partitioning Layout Builder** allows users to split an initial screen into partitions, either vertically or horizontally. Each partition can be resized, and the following features are included:

* **Vertical (V) and Horizontal (H) Splitting**: Each partition can be split vertically or horizontally, with one partition retaining its original color and the new partition receiving a random color.

* **Recursive Splitting**: Any partition created can be further split using the same V and H buttons.

* **Removable Partitions**: Each partition can be removed using a "-" button.

* **Resizable Partitions**: All partitions are resizable by dragging their borders.

* **Optional Snap Ratios**: Partitions can snap to 1/4, 1/2, and 3/4 ratios during resizing for better control.


## 2. Alphabet Tile Interaction

The **Alphabet Tile Interaction** feature displays a grid of tiles, each representing a letter of the alphabet (A to Z). It includes the following functionalities:

* **Tile Rendering**: All letters are rendered in a grid layout.

* **Click Interaction**: Clicking a tile appends the corresponding letter to the outputString displayed below the grid.

* **Consecutive Letter Replacement**: If three consecutive letters in the outputString are identical, they are replaced with an underscore (_), and for more than three consecutive identical letters, the appropriate number of underscores is displayed.

***

### Technologies Used:
* React.js
* CSS Flexbox for layout
* Allotment.js for resizable partitions

### Running the Application:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.
