# React Native - The Practical Guide: My Journey!

In this repository I will be storing all my code, projects, and notes as I complete the "React Native - The Practical Guide" Udemy course, by Maximillian.

## Section 1 - Getting Started

### `Originally Started: 1/13/2022`

Basically just setting up our environment to work with React Native! This includes setting up an Android emulator, as well as an iOS emulator (if on a Mac).

## Section 2 - Basics

### `Originally Started: 1/14/2022`

(I will be coding along under the Section 1 project, to save time for creating another React Native app)

### Styling

- There is no CSS!
- Inline Styles
- StyleSheet Objects (preferred over inline)
- Written in JS
- Based on CSS Syntax, but only a _subset of properties_ and features is supported

### Planning the App

We will be writing a simple introductory app where we enter our goals for the course. Can add a goal via a modal and delete it via button on the goal.

### Core Components

Basic Components

Most apps will end up using at least one of these basic components

- View: Fundamental component for building a UI. A container component. Mainly there to apply styles and layout the content between it
- Text: A component for dispolaying text
  - Note that unlike in a React web app, we cannot render plain text (not wrapped in a `<Text>`, for instance).
- Image: A component for displaying images
- TextInput: Component for inputting text into the app via a keyboard
- ScrollView: Provides a scrolling container that can host multiple components and views
- StyleSheet: Provides an abstraction layer similar to CSS stylesheets

User Interface

Render common user interface controls on any platform using the following components

- Button: Basic button component for handling touches that should render nicely on any platform
- Picker: Renders the native picker component on iOS and Android
- Slider: A component used to select a single value from a range of values
- Switch: Renders a boolean input

List Views

- FlatList: A component for rendering performant scrollable lists
- SectionList: Like FlatList, but for sectioned lists

As well as many platform-specific components.

### Styling List Items

- Text components in React Native have less styling options than View components, so it's common to wrap them in a View
- To apply vertical margin, we can use a Native-specific styling: `marginVertical: `

### Making List Scrollable with ScrollView

- Unlike the web, by default Native apps do not have scrolling
- We introduce scrolling with the `ScrollView` component
  - Important for any content where you can't guarantee it fits on a single screen

### A Better List - FlatList

- ScrollView renders all elements at once, even if those elements are not on the screen yet and need to be scrolled to
- For longer lists, `FlatList` is a better component option
- `FlatList` takes in two very important props:
  - `data`: The data (typically a list)
  - `renderItem`: The JSX content you wish to be rendered. For a list, this is what would typically be found _within_ the list.map function
    - So note that it is how an _individual_ item should be rendered
    - No `key` required with a `FlatList` **BUT** only if your data is of a certain shape! This shape is an object with a `key` or `id` property.
    - You can also use the `keyExtractor` prop and map a key to each item, like: `keyExtractor={(item, index) => item.someIdentifier}`. This is useful if you have data without an ID or key property and you don't wish to transform it just to be rendered in a FlatList.
  - Note to access the the data being passed to `data`, we have to use `data.item`

### Touchable Components

For our custom components, we can't just provide them an `onPress` prop and have it be treated like an event handler that detects presses. For this, we have to wrap our component in a `Touchable` component.

- This is different from web React, which allows us to use `onClick` on all our components
- There are many `Touchable` component types, such as `TouchableOpacity` which will show feedback of a touch by changing the opacity of the pressed item
- The base `Touchable` component is not actually to be used as wrapper for our components -- use a specific type

### Modal Styling

**NOTE** that a component such as a Button cannot utilize the `width` property for styling. So we first wrap the `<Button>` inside of a `<View>`

## Section 3 - Debugging React Native Apps

`Originally Started: 1/15/2022`

- Ctrl + M on Windows inside the Android emulator to open up debug / performance options (disable when done, as it does slow PC down)
  - This lets you click `Debug JS Remotely` to open a browser and allow you to `Ctrl + Shift + I` to open the Chrome (or etc) developer tools
- Set breakpoints in your code by visiting the developer tools' _Sources_ tab, and then the _Users_ folder with your source conde in it

  - Hover over code to see current values of variables / objects
  - Step in and out of functions, etc

- Can install React Native Developer Tools and view your app in a manner similar to React DevTools (component trees)

## Section 4 - Components, Styling, Layouts

`Originally Started: 1/15/2022`

We will learn about:

- Components
  - Built-in (View, Text, Image, ...)
  - Custom Components
- Styles & Layout
  - Component styles (borders, colors, shadows, custom fonts, ...)
  - Layout with Flexbox
- Native API Modules
  - Maps, Camera, User Location, etc

We will be learning these concepts while developing a simple game where you pick a number, the computer guesses, and you tell the computer whether the number is higher or lower.

### Shadows in iOS and Android

- Defined differently than we would do in CSS, using properties such as:
  - `shadowOffset` - Takes in an object with the width and height for the offset
  - `shadowRadius` - Takes a number
  - `shadowOpacity` - Takes a number from 0 to 1
  - `elevation` - For Android, as the others are not available. Takes a number

### Passing Style as a Prop

It seems that, unlike React, building a wrapper-type component that takes in custom style from outside of it is done with:
`style={[styles.ourBaseComponent, props.style]}`

In React for the web, we would have used the spread syntax for styles and the props.style object to create one new object with both of their properties spread into it. React Native seems to require an array of objects, though!

### Button Colors

- In React Native, a Button component can receive a _color_ prop
  - On Android, this is the color of the background of the button
  - On iOS, this is the color of the button's font

### Styling with Constants

Just create an object of, for instance, colors, where each key is a color and each value is its hex value. Then import in the file you need that color, and call _colors.primary_, for example.

### User Input

In a TextInput component, iOS does not allow for closing the on-screen keyboard when you press outside of it. To implement this ourselves, we need to import a component such as _TouchableWithoutFeedback_ and wrap our entire component with it, giving it an _onPress_ event. In this _onPress_ event, we make use of an object we import from react-native called _Keyboard_. With this, we can call _Keyboard.dismiss()_ to remove the on-screen keyboard upon the outer-most _TouchableWithoutFeedback_ component's _onPress_ event being called.

### Showing an Alert

To show an Alert, we import _Alert_ from 'react-native' and then use it by calling:

```js
Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
  {
    text: 'OK',
    style: 'destructive',
    onPress: handleReset,
  },
]);
```

