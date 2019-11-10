# SEGMENT CSS

## Documentation
Documentation is deployed to github pages. Visit the link below

[Segment CSS docs](https://xjdesigns.github.io/Segment-CSS/#/)

## Getting started
This was created with the Create React App so reference those docs whenever you can.

I kept the sass process on gulp since its up and running and I also use only the css output for Segment CSS.

## CSS File
Final files can be found inside the "/Segment" directory under which version you need.
Folders and file names have the version name applied, as folders can contain beta builds
for testing.

## Running the app & output
Running the app and create an output are two different flavors. Documentation app is react and output is just pure CSS.
```bash
Run to just create react
yarn start
```

```bash
Run to create react and run gulp processing for sass
yarn start:dev
```

This command gives you the final output, which is minified and only the css.
```bash
npm run prod
or
yarn prod
```

Beta builds are un minified and allow you to run a build before creating the final output.
```bash
npm run prod:beta
or
yarn prod:beta
```
