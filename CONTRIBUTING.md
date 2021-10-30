# Contributing

## Code of Conduct

All interactions on GitHub must follow the standard Code of Conduct.

-   Be respectful
-   Data published to carbon can be removed, changed, or not credited.
-   We're always here for you
-   Slurs, rude, insulting, or cruel language will not be tolerated.

## Reporting Bugs

We request that you first search to see if the bug already exists, and if it is a unique problem submit the issue via one of our issue templates. Duplicate issues may be closed without a response.

## Development

1. Close this repository

```
$ git clone git@github.com:Dollor-Lua/Carbon.git Carbon
```

2. Navigate into the project & install dependencies

```
$ cd ./Carbon && yarn
or
$ cd ./Carbon && npm install
```

3. Write code and/or add new tests
4. Run tests and ensure they pass
5. Open a Pull Request, and if it gets accepted become the newest contributor for `Carbon`!

# What _not_ to contribute

## Dependencies

We will not accept third party dependencies to be installed via our cli. We pull our dependencies
from the official NPM site where you can store your dependencies too. All built in dependencies are
managed by our core team.

## Tools/Automation

We request that you do not edit any of the top level files that help with overall automation or are
a tool to use to make development easier. (ex: `.gitignore`, `package.json`, etc.)
