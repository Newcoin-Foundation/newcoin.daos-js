# newcoin.daos-js

JS Library to read data from newcoin.daos.

## Usage

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm i @newcoin-foundation/newcoin.daos-js
```

### Initialize

Web library can be found in the [dist] folder

```javascript
// standard import
const {ChainApi} = require("newcoindaos");
// ES6 import
import {ChainApi} from "newcoindaos"

## Documentation

* **RpcAPI**: uses only native nodeos calls

#### RpcActionGenerator

The RPC API has an `action` attribute which contains a helper class to construct contract actions 
which can be pushed on chain with eosjs. 

Detailed information about each action can be found [here](https://github.com/pinknetworkx/atomicassets-contract/wiki/Actions) 
 
#### Types

These classes represent table rows of the contract and consist of getter methods
which return the deserialized data.
The method `toObject` returns a JavaScript object representation of the class.