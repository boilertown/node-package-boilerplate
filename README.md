<h1 align="center">♨️ Node Package Boilerplate</h1>

<div align="center">
  <p>
    A boilerplate with opinionated setup to help you kickstart your own Node.js package.
  </p>
  <img src="https://img.shields.io/github/license/boilertowns/node-package-boilerplate?style=flat-square" alt="MIT license" >
</div>

## The Setup

- [TypeScript][typescript-url]
- Linting with [Eslint][eslint-url] and code formatting with [Prettier][prettier-url]
- Conventional commit messages with [Commitlint][commitlint-url]
- Build with [Rollup][rollup-url]
- [Vitest][vitest-url] for Unit test
- Automated release with [changesets][changesets-url]
- Build library for Node.js 14 or newer.
- Support both CJS & ESM.

## Get Started

- Use [Boilertowns](https://github.com/boilertowns/create-boilertowns) CLI.

  ```sh
  # npm
  npm create boilertowns@latest -- -b node-package-boilerplate

  # yarn
  yarn create boilertowns -b node-package-boilerplate

  # pnpm
  pnpm create boilertowns -b node-package-boilerplate

  # bun
  bun create boilertowns/node-package-boilerplate [package-name]
  ```

- Click the green "Use this template" button to generate a new repository with the same structure and files.

  <img src="https://docs.github.com/assets/cb-36544/images/help/repository/use-this-template-button.png" alt="Use this template button" width="500">

  [Ref: Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## Development

- Run the package in development mode:

  ```sh
  pnpm dev
  ```

- Build for production:

  ```sh
  pnpm build
  ```

- Create changeset:

  ```sh
  pnpm changeset
  ```

## Release & Publish

This boilerplate uses [changesets][changesets-url] to automatically generate `CHANGELOG`, create releases and publish to NPM registry via GitHub Actions. You can see action details at [release.yml](/.github/workflows//release.yml).

To automating publish your Node.js package, follow these steps:

- Create a `NPM_TOKEN`. [See this article for more details](https://docs.npmjs.com/creating-and-viewing-access-tokens). Make sure the type of access token is **Automation**.

- [Follow this instruction](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) to add the created token to your GitHub Actions secrets. Name of the secret is `NPM_TOKEN`.

- Install [changeset bot](https://github.com/apps/changeset-bot).

- [Adding changeset and commit](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md#i-am-in-a-single-package-repository).

**P/S**: Remember to check the `Allow GitHub Actions to create and approve pull requests` in your repo Settings > Actions > General & scroll to Workflow permissions.

## Contributing

**node-package-boilerplate** ❤️ your contributions. If you have any ideas, suggestions, fixes, feel free to contribute.

[boilertowns-url]: https://github.com/boilertowns
[typescript-url]: https://www.typescriptlang.org
[eslint-url]: https://eslint.org
[commitlint-url]: https://github.com/conventional-changelog/commitlint
[prettier-url]: https://prettier.io
[changesets-url]: https://github.com/changesets/changesets
[rollup-url]: https://rollupjs.org
[vitest-url]: https://vitest.dev/
