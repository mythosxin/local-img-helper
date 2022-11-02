A tool to help you view local pictures.

## Usage

```
yarn add local-img-helper --dev
```

you can use `yarn local-img-helper --path=src` in your terminal or add a command in `scripts` of file "package.json".

```
{
  "scripts": {
    "img": "yarn local-img-helper --path=src"
  }
}
```

## Params

-   path: string

your files path, `--path` is required.


## Note

Folders with `. or node_modules or dist` in the name are automatically skipped.


## [GitHub](https://github.com/mythosxin/local-img-helper/edit/master/README.md)
