# Example Context Api app for react-native
This project ask 10 question to you and then save your scores to local.



### Installation

```sh
$git clone https://github.com/ilkerkesici/context-example.git

$cd context-example

$yarn install

$cd ios && pod install && cd .. #for ios

yarn ios # start project on IPhone 8 similator

```

### Folder Structure


```sh
/src
 |
 |--- App.tsx
 |--- styles.tsx
 |--- components/ # My app components
 |
 |--- modules
 |      |
 |      |--- components # App generic components
 |      |       
 |      |--- context
 |      |     |
 |      |     |--- index.ts
 |      |     |--- abstractions.ts
 |      |     |--- context.tsx
 |      |     |--- interfaces.ts
 |      |     |--- provider.tsx # App provider
 |      |     |--- reducer.ts # App reducer for store
 |      |     |--- types.ts # App dispatch types
 

```
