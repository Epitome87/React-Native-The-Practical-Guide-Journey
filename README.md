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

### Adding Custom Fonts

To use custom fonts, ensure the resource files (such as a .ttf) are in your project folder, and then:
`import * as Font from 'expo-font';`

```js
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};
```

And finally, in the styling of our component, we set the _fontFamily_ attribute to the key we set up in the _Font.loadAsync_ method.

### Loading

To help give our Font time to load, we can make use of loading functionality that expo gives to us.

- We first install the neccessary module via: `expo install expo-app-loading`.
- We then import it with: `import AppLoading from 'expo-app-loading';`
- We now have access to the AppLoading component, which can be used like:

```js
if (!isDataLoaded) {
  return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setIsDataLoaded(true)}
      onError={console.warn}
    />
  );
}
```

### Synthetic Cascading Style Workaround

Note how we can't just set the _fontFamily_ at a top level div and have it pass down that font to its children. Unlike CSS, this is not how styling in Native works, as we aren't using CSS but rather JavaScript.

Two ways of handling this in an alternative way:

- 1. Create separate component, like BodyText, which will render its children with a style hard-coded to the fontFamily we want
  - We then replace any Text component with this BodyText component
- 2. Create a file (perhaps in a _constants_ folder directory) that holds some default styles:

```js
import { StyleSheet } from 'react-native';
export dfeault StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans',
  },
  titleText: {
    fontFamily: 'open-sans-bold',
  }
});

// In some Component:
import defaultStyles from './constants/default-styles';
<Text style={defaultStyles.title}>Start Game</Text>
```

**VERY IMPORTANT:** For Text components, other Text components nested inside of them actually _will_ inherit styles from its parent Text component! Another distinction is the Text component does _not_ use Flexbox; it uses its own positioning system where it automatically wraps itself to a new line if it doesn't fit onto one line. If you don't want the Text to wrap, you can set the _numberOfLines_ prop, perhaps combined with _elippsizeMode_ to truncate instead of wrap.

### Images

To render an image you have locally in your project:

```js
<Image
  style={styles.image}
  source={require('../assets/success.png')}
  resizeMode='cover'
/>
```

With a local Image, Native knows the width and height of the image, and keeps it by default

To render an image you retrieve from the web:

```js
<Image
  style={styles.image}
  source={{ uri: 'https://someimage.png' }}
  resizeMode='cover'
/>
```

For images from the web, Native is not able to determine the width and height of the image before it is loaded. So for network images, we _always_ have to set a width and a height.

**NOTE**: Perhaps this information is outdated, because on my project I did not see a local image render until I set its dimensions.

### Adding Icons

Pretty straightforward:

```js
import { Ionicons } from '@expo/vector-icons';
```

- There are different vector icon packages built into this expo package.
- Ionicons are one such package, as well as EvilIcons and MaterialIcons, and others

We then use the _name_ prop of the _Ionicon_ to specify which icon we want (which we can find reference to in the expo docs)

```js
<Ionicons name='md-remove' size={24} color='white' />
```

### Exploring UI Libraries

React Native requires _a lot_ of styling when using their base components. But they also have a very active community, where you can find 3rd-party component libraries. It may be worth exploring some of these options in details, and incorporating them into our projects!

### Styling List Items & Lists

- It's best to wrap a _ScrollView_ in another _View_, for styling purposes
- On Adroid, the ability to scroll may not occur. To remedy this, we add a style of _flex: 1_ to the surrounding _View_

### ScrollView & Flexbox

For ScrollView and FlatList, we have a _contentContainerStyle_ proper, used for additional styling (since you can't style _everything_ on these components with just the _style_ prop)

- Try to use _flexGrow_ for scrollable lists rather than _flex_ -- gets rid of unintended behavior like some of the list items being hidden
  - Put this attribute as a style on the actual ScrollView itself

### `Section Completed: 1/17/2022`

## Section 5 - Responsive & Adaptive User Interfaces and Apps

In this module, we will learn:

- How to detect the device dimensions & orientation
- Adjusting layouts based on size & orientation
- How to detect the device platform (iOS or Android)
- Adjusting code / UI based on the platform

## Section 6 - Navigation with React Navigation (The Meals App)

### `Section Started: 1/20/2022`

In this module, we will learn:

- Navigation & multiple screens
- Tabs, drawers, back & forth

While exploring these concepts, we will be creating a meals app -- one where we can view, favorite, and filter recipes. It will include a header with a menu, tabs on the bottom (all meals / favorites). The main view will consist of food categories, which can be tapped to navigate to a new screen where recipes belonging to that category will be presented.

### Navigation in Native vs Web

In React web, we navigate based on the current URL. But in a mobile app, there is no URL -- so how do we handle navigation?

- Using things such as Tabs or Stacks
- But how do we accomplish this, on a technical level?
- It's easy using a 3rd-party library: `react-navigation`

### Navigation with StackNavigator

Pages / Screens are basically managed on a _stack_ of pages. Whenever you go to a new screen, it will be pushed on top of the stack. When you press the back button, that screen is popped off, taking you back to the screen below it.

We begin by installing: `npm install @react-navigation/native`

We also need two dependencies used by most navigators: `expo install react-native-screens react-native-safe-area-context`
These libraries form the building blocks and sdhared foundations for navigators. But each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install: `npm install @react-navigation/native-stack`

We can now develop some basic navigation!

```js
// In App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define some screren, e.g HomeScreen
function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
        <Stack.Screen name='Contact' options={{ title: 'Contact Us' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

Note we create an object using `createNativeStackNavigator()` and inside our NavigationContainer we put `Stack.Navigator` component, inside of which we have `Stack.Screen` component(s). These Screen components receive the name we wish to call that route / screen, as well as a component that handles the rendering when that route is targetted. In an alternative form of the `Stack.Screen` component, we can pass it an `options` prop, where we can for instance give it a custom title that is different than the name we wish the route to be.

### Passing Addition Props to Screens

We can pass additional props to a screen in one of two ways:

- Use React Context and wrap the navigator with a context provider to pass data to the screens (recommended)
- Use a render callback for the screen instead of specifying a component prop:

```js
<Stack.Screen name='Home'>
  {(props) => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>
```

### Navigating Between Screens

Every screen component in the native stack navigator will automatically receive a prop called navigation. We use this to navigate between different screens:

```js
<Button
  title='Go to Details'
  onPress={() => props.navigation.navigate('routeName')}
/>;
// Or:
props.navigation.navigate({ routeName: 'routeName' });
```

We can also call `props.navigation.replace("routeName");`, where we are no longer pushing a new screen onto the stack, but rather replacing it with the new route. Consequently, no back button is provided for us, and no navigation animation plays during the transition to the new route.

### Navigate to a Route Multiple Times

If we, for example, click a Button that navigates us to a route that we're already on, nothing happens. This makes sense; we are already on this route, so why should we be taken off it. But there may be some instances where we _want_ to add another of the screen we are currently on. To do so, we change `navigate` to `push`. This allows us to express the intent to add another route regardless of the existing navigation history.

```js
<Button
  title='Go to Details... again'
  onPress={() => navigation.push('Details')}
/>
```

Now each time we call `push` we add a new route to the navigation stack. When you call `navigate` it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack.

### Manually Navigating Back

To programmatically go back, rather than relying on the user pressing the back button on their phone (Android) or the back arrow in the header (Android, iOS), we can simply call:

```js
navigation.goBack();
```

With a `StackNavigator` type of navigation, we can also go back with:

```js
navigation.pop();
```

If we want to go back multiple screens, we can either call `navigation.navigate` and specify the route we wish to return to, or call `navigation.popToTop()`, which goes back to the first screen in the stack.
