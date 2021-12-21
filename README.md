# Monorepo for RPublishing

This is an official repository for RPublishing Cooperative.
It contains the following apps and packages:
- /apps/rpub-exe  (For standalone desktop applications, written in Node)
- /apps/rpub-web  (Homepage built with Astro framework)
- /apps/rpub-api  (APIs and dashboard using Keystone6)
- /apps/rpub-app  (app built with vue+svelte+ionic+capacitor)
- /packages/keystone-core  (for of Keystone6)
- /packages/rchain-did-resolver  (for resolving public did documents on RChain that start with did:rchain:...)
- /packages/rchain-token
- /packages/rchain-toolkit
- /packages/ui (the shared UI components)

## Installation and building

First you need to install NodeJS, we recommend that you use NVM (Node Version Manager). You can find instruction for [Linux](https://github.com/nvm-sh/nvm) as well as [Windows](https://github.com/coreybutler/nvm-windows)
Next you'll need to install Node v16 through nvm, we recommend v16.13.x .
Once you have confirmed that you have node installed (run node -v in your terminal), you can continue.
Now you want to install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

Now that you have all the prerequisites, go ahead and clone this repo and run "yarn" to install dependencies:
```bash
git clone "https://github.com/r-publishing/rpub.git"
cd rpub
yarn
```

### Development

```bash
yarn dev
```

For development all you have to do is to run "yarn dev" and it should start all the rpojects 
- localhost:3000/rpub-web is for the homepage.
- localhost:3030 is for the APIs as well as dashboard.
- localhost:5000 is for the app.

### Building

```bash
yarn build
```

Once you run "yarn build", which can take quite a bit of time at first, you'll see the following new artifacts:

- /apps/rchan-fuse/pkg/bin  containing executables for Linux, MacOS and (#soon) Windows.
- /apps/rpub-app/public containing the app bundle that can be run in the browser. To build mobile apps, go to #Capacitor
- /apps/rpub-web/dist containing the bundled homepage.

### Build for mobile

To build all apps for Android and (#soon) iOS, we recommend using AppFlow, but you can easily build for Android if you have Android SDK installed.
If you have Android SDK installed, you can run the following command:
```bash
npx cap sync android
```

Then open the Android Studio project located in "android" folder and build the project as you normally would.

## Todo

- Move artifacts to the root of the monorepo.
- Properly configure ESLint, Prettier and Jest for all projects
- Create unit tests for the rest of the projects

