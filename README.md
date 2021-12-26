# Monorepo for RPublishing

This is an official repository for RPublishing Cooperative.
It contains the following apps and packages:
- /apps/rpub-exe  (For standalone desktop applications, written in Node)
- /apps/rpub-web  (Homepage built with Astro framework)
- /apps/rpub-api  (APIs and dashboard using Keystone6)
- /apps/rpub-app  (app built with vue+svelte+ionic+capacitor)
- /deps/pika-plugin-pkg-node  (Used by rpub-exe to bundle nodejs applications to standalone executables)
- /packages/keystone-core  (for of Keystone6)
- /packages/rchain-did-resolver  (for resolving public did documents on RChain that start with did:rchain:...)
- /packages/rchain-token
- /packages/rchain-toolkit
- /packages/ui (the shared UI components)

## Installation and building

* First you need to install NodeJS, we recommend that you use NVM (Node Version Manager). You can find instruction for [Linux](https://github.com/nvm-sh/nvm) as well as [Windows](https://github.com/coreybutler/nvm-windows).
Now follow the instructions to install nvm for Linux here: https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/ (or for windows it's https://github.com/coreybutler/nvm-windows )

***Note:*** If you're developing on Windows, we recommend using WSL2 instead with Ubuntu 20.04.

* Next you'll need to install Node v16 through nvm, we recommend v16.13.x .

```bash
nvm install v16.13.1
nvm use v16.13.1
```

* Once you have confirmed that you have node installed (run "node -v" in your terminal and make sure it's v16), you can continue.
* Now you want to install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

```bash
npm install --global yarn
```

* Make sure to download patched nodejs binaries for the version you're targetting (in our case v16) and copy them to ~/.pkg-cache/v2.6 like so:

```bash
mkdir ~/.pkg-cache
mkdir ~/.pkg-cache/v2.6

wget https://github.com/vercel/pkg-fetch/releases/download/v3.2/node-v16.13.0-linux-x64 -O fetched-v16.13.0-linux-x64
sudo mv fetched-v16.13.0-linux-x64 ~/.pkg-cache/v2.6

wget https://github.com/vercel/pkg-fetch/releases/download/v3.2/node-v16.13.0-macos-x64 -O fetched-v16.13.0-macos-x64
sudo mv fetched-v16.13.0-macos-x64 ~/.pkg-cache/v2.6

wget https://github.com/vercel/pkg-fetch/releases/download/v3.2/node-v16.13.0-win-x64 -O fetched-v16.13.0-win-x64
sudo mv fetched-v16.13.0-win-x64 ~/.pkg-cache/v2.6
```

* Also you'll need libfuse-dev package installed, you can do so by running:

```bash
sudo apt-get install libfuse-dev
```

***Note:*** Make sure to only target even versions of nodejs, as the patching process is not compatible with odd versions.


* Now that you have all the prerequisites, go ahead and clone this repo and run "yarn" to install dependencies:
```bash
git clone --recurse-submodules https://github.com/r-publishing/rpub-mono.git
cd rpub-mono
yarn
```

Alternatively you can clone using SSH if you have already setup public key authentication on Github:

```bash
git clone --recurse-submodules -j4 git@github.com:/r-publishing/rpub-mono.git
cd rpub-mono
yarn
```


### Building

```bash
yarn build
```

Once you run "yarn build", which can take quite a bit of time at first, you'll see the following new artifacts:

- /apps/rchan-fuse/pkg/bin  containing executables for Linux, MacOS and (#soon) Windows.
- /apps/rpub-app/public containing the app bundle that can be run in the browser. To build mobile apps, go to #Capacitor
- /apps/rpub-web/dist containing the bundled homepage.

***Note:*** You might see a few errors and warnings, at least at this early stage of development, but shouldn't impact the releases from being built.

### Build for mobile (coming soon)

To build all apps for Android and (#soon) iOS, we recommend using AppFlow, but you can easily build for Android if you have Android SDK installed.
If you have Android SDK installed, you can run the following command:
```bash
npx cap sync android
```

Then open the Android Studio project located in "android" folder and build the project as you normally would.



### Development

```bash
yarn dev
```

For development all you have to do is to run "yarn dev" and it should start all the rpojects
- localhost:3000/rpub-web is for the homepage.
- localhost:3030 is for the APIs as well as dashboard.
- localhost:5000 is for the app.

## Todo

- Move artifacts to the root of the monorepo.
- Properly configure ESLint, Prettier and Jest for all projects
- Create unit tests for the rest of the projects
